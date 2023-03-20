import { createSlice } from '@reduxjs/toolkit'
import { clearLocalStorage, persistLocalStorage } from '../../core/helpers/LocalStore/localStorage'
import { DataUser } from '../../core/helpers/Dummy/dum-user/DataUser'

// import axios from 'axios'

/* export const EmptyUserState = {
  id: 0,
  email: '',
  active: 0,
  nickname: '',
  firstName: '',
  lastName: '',
  biografia: '',
  token: '',
  logged: false
} */

export const UserKey = 'user'

const userSlice = createSlice({
  name: 'auth',
  initialState: localStorage.getItem(UserKey)
    ? JSON.parse(localStorage.getItem(UserKey) as string)
    : DataUser,
  reducers: {
    loginUserStore: (state, action) => {
      console.log('action', action.payload)
      persistLocalStorage<any>(UserKey, action.payload)
      return action.payload
    },
    updateloginUserStore: (state, action) => {
      const result = { ...state, ...action.payload }
      persistLocalStorage<any>(UserKey, result)
      return result
    },
    resetUser: () => {
      clearLocalStorage(UserKey)
      // return DataUser
      window.location.reload()
    }
  }
})

export const {
  loginUserStore,
  updateloginUserStore,
  resetUser
} = userSlice.actions

export default userSlice.reducer
