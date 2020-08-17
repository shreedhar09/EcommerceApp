export let LoggedInReqHeader = () => {
  let LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
  console.log(LoggedInUser);
  console.log(LoggedInUser.data.Token);

  if (LoggedInUser && LoggedInUser.data.Token) {
    return { "secure-token": LoggedInUser.data.Token };
  } else {
    return {};
  }
};
