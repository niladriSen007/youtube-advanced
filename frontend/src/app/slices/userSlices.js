/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  username: "",
  userid: "",
  refreshToken: "",
  useravatar: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser: function (state, action) {
      const { type, payload } = action
      console.log(payload?.data?.user?._id, "Payload")
      const { user, refreshToken } = payload?.data
      return {
        ...state,
        username: user?.username,
        userid: user?._id,
        refreshToken: refreshToken,
        useravatar: user?.avatar,
      }
    },
  },
})

export const { currentUser } = userSlice.actions

export default userSlice.reducer
