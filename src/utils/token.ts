import jwtDecode, { JwtDecodeOptions } from 'jwt-decode'
import { Consts } from '@/utils/consts'
import router from '@/router'
import utils from '.'

function exist (): boolean {
  const token = get()
  if (!token) return false
  return true
}

function get (): string | null {
  const token = localStorage.getItem(Consts.Application.ACCESS_TOKEN_NAME)
  if (!token) return null
  return token
}

function set (token: string): boolean {
  if (!token) return false
  localStorage.setItem(Consts.Application.ACCESS_TOKEN_NAME, token)
  return true
}

function remove (): boolean {
  localStorage.removeItem(Consts.Application.ACCESS_TOKEN_NAME)
  return true
}

function expired (): boolean {
  const token: string | null = get()
  if (!token) return true

  const decoded: any = jwtDecode(token)
  if (!decoded) return true

  const expiresAt = decoded.exp
  if (!expiresAt) return true
  return Date.now() >= expiresAt * 1000
}

function validRouting (reRoute = true): boolean {
  const isExpired = expired()
  if (isExpired && reRoute) {
    router.replace({ name: 'Login' })
  }
  return !isExpired
}

function valid (): boolean {
  const isExpired = expired()
  return !isExpired
}

function checkToken (): void {
  const validToken = utils.Token.valid()
  if (validToken) {
    router.replace({ name: 'Home' })
    return
  }
  router.replace({ name: 'Login' })
}

export default {
  get,
  set,
  remove,
  exist,
  expired,
  validRouting,
  valid,
  checkToken
}
