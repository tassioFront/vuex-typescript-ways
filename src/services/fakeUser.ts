import service from '@/services/base.service'

const throwMessageError = (message: string) => {
  throw new Error(message)
}

const get = async (endpoint: string) => {
  const message = 'Must have endpoint and data args at sendFile request'
  if (!endpoint) throwMessageError(message)

  return await service.noAuth.get(endpoint)
}

export { get }
