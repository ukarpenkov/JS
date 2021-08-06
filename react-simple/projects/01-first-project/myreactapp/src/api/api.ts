import axios, { AxiosResponse } from 'axios'
import { ProfileType, UserType } from '../types/types'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'c9f812bd-d052-4fc1-80d3-bddb0deb0439',
  },
})

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10,
}

export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}
