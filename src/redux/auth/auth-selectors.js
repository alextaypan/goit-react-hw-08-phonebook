const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsRefreshingData = state => state.auth.isRefreshingUserData;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshingData,
};
export default authSelectors;
