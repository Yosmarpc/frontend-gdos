import axios from 'axios'

export const sourceAxios = axios.CancelToken.source()

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'text/json'
  }
})

const urlApi = process.env.REACT_APP_URL_API

export const webApiService = {
  createAccountService: async (dataBody: any) => {
    const url = `${urlApi}account/create-account`
    return await axiosInstance
      .request({ method: 'POST', url, data: dataBody })
      .then((res: any) => res.data)
  },
  getValidateNickname: async (nickname: string) => {
    const url = `${urlApi}account/validate-nickname/${nickname}`
    return await axiosInstance
      .request({ method: 'GET', url })
      .then((res: any) => res.data)
  },
  getValidateEmail: async (email: string) => {
    const url = `${urlApi}account/validate-email/${email}`
    return await axiosInstance
      .request({ method: 'GET', url })
      .then((res: any) => res.data)
  },
  getLogin: async (dataBody: any) => {
    const url = `${urlApi}/login/session`
    return await axiosInstance
      .request({ method: 'POST', url, data: dataBody })
      .then((res: any) => res.data)
  }
}
