import {createSlice} from "@reduxjs/toolkit";
import {showInfo} from "../../service/userService";

const initialState = {
    infoProfile: {}
}
const userSlice = createSlice({
        name: 'user',
        initialState,
        extraReducers: builder => {
            builder.addCase(showInfo.fulfilled,(state,action)=>{
                state.infoProfile = {...action.payload}
            })
        }
    }
)
export default userSlice.reducer
