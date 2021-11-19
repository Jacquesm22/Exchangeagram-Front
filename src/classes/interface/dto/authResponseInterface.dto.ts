import AuthTokenInterface from '../authTokenInterface'

export default interface AuthResponseInterfaceDTO {
  accessToken: AuthTokenInterface,
  authenticated: boolean
}
