import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const showInfo = createAsyncThunk(
    'user/showInfo',
    async (number) =>{
        const res =await axios.get('https://randomuser.me/api/?page='+number+'&results=10')
        return res.data
    }
)