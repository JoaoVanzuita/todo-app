import { Environment } from '../../../environment'
import { User } from '../../../types/User'
import { Api } from '../axios-config'
import { ResponseError } from '../errors'

type TRegisterData = {
  name: string
  password: string
}

export const register = async (userData: TRegisterData): Promise<User | ResponseError> => {
  try {

    const { data } = await Api.post('/users', userData)

    return data

  } catch (error) {

    if (error instanceof ResponseError) {
      return error
    }

    return new ResponseError(`${Environment.SERVER_ERROR}`, 500)
  }
}