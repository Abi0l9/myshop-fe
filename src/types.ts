export type ObjProp = {
  name: string
  value: string
}

export interface IProduct {
  id?: string
  name: string
  description: string
  image: string
  user: string
}

export interface IUser {
  id?: string
  username: string
  email: string
  products?: IProduct[]
}

export interface ISignUpForm {
  username: string
  email: string
  password: string
}

export interface ISignInForm {
  input: string
  password: string
}

export interface IResponse {
  message: string
  success: boolean
}
