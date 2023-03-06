export const selectContacts = state => state.contacts.contacts;
export const selectIsLoadingContacts = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.contacts.filter;

export const selectUserName = state => state.auth.name;
export const selectUserEmail = state => state.auth.email;
export const selectToken = state => state.auth.token;
export const selectIsAuth = state => state.auth.isAuth;
export const selectIsLoadingAuth = state => state.auth.isLoading;