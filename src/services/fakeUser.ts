import service from '@/services/base.service'

const throwMessageError = (message: string) => {
  throw new Error(message)
}

const get = async (endpoint: string) => {
  const message = 'Must have endpoint args at get request'
  if (!endpoint) throwMessageError(message)

  return await service.noAuth.get(endpoint)
}

type userCredentions = { user: string; password: string }
const login = async (endpoint: string, credentions: userCredentions) => {
  const message = 'Must have endpoint and credentions args at login request'
  if (!endpoint) throwMessageError(message)

  return await service.noAuth.post(endpoint, credentions)
}
export { get, login }
