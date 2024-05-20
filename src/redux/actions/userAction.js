import * as UserApi from "../../apis/userRequest";

export const getDataUser = () => async (dispatch) => {
  dispatch({ type: "USER_START" }); //load api 1' true
  try {
    const response = await UserApi.getUser();
    dispatch({ type: "USER_SUCCESS", payload: response }); //loading: false
  } catch (error) {
    dispatch({ type: "USER_FAIL" });
  }
};
