import { createSlice } from "@reduxjs/toolkit";
import { addContacts, fetchContacts } from "./contactsOps";

/* const contactInitial = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
}; */

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error - false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error - true;
        state.loading = false;
      })
      .addCase(addContacts.pending, (state) => {
        state.error - false;
        state.loading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContacts.rejected, (state) => {
        state.error - true;
        state.loading = false;
      }),
});

/* const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitial,
  reducers: {
    addContact(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
}); */

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
