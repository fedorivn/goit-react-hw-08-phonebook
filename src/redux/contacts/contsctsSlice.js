import { createSlice } from '@reduxjs/toolkit';
import { addNewContact, deleteContact, fetchContacts } from './operations';





const contactSlice =createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
    contacts: [],
    error: null,
    isLoading: false,
  },

  reducers: {
    getFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addNewContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.unshift(action.payload);
      })
      .addCase(addNewContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          el => el.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
      state.error = action.payload;
      });
  },
});
export default contactSlice.reducer;
export const contactsReducer = contactSlice.reducer;
export const { getFilter } = contactSlice.actions;



// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     filter: '',
//     contacts: [],
//     error: null,
//     isLoading: false,
//   },

//   reducers: {
//     getFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },

//   extraReducers: {
//     [fetchContacts.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts = action.payload;
//     },
//     [fetchContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

//     [addNewContact.pending](state) {
//       state.isLoading = true;
//     },
//     [addNewContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts.unshift(action.payload);
//     },
//     [addNewContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

//     [deleteContact.pending](state) {
//       state.isLoading = true;
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts = state.contacts.filter(el => el.id !== action.payload.id);
//     },
//     [deleteContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });