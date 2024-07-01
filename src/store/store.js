import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";

import systemReducer from "./systemSlice";
import catReducer from "../features/categories/catSlice";

export default configureStore({
  reducer: {
    userInfo: userReducer,
    system: systemReducer,
    catInfo: catReducer,
  },
});
