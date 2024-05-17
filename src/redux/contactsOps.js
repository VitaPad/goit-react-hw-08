import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66446f726c6a6565870a6496.mockapi.io/";

export const fetchContacts = createAsyncThunk("fetchAllContacts", async () => {
  const response = await axios.get("/contacts");
  return response.data;
});
