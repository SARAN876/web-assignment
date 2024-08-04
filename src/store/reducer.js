import { combineReducers } from "@reduxjs/toolkit";
import expslice from "./expSlice";

const reducers = combineReducers({
    exp:expslice
})
export default reducers
