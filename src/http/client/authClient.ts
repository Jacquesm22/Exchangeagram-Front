import LoginFormInterface from '@/classes/interface/loginFormInterface'
import { Consts } from '@/utils/consts'
import config from '../config'
import utils from '@/utils'
import { ElMessage } from 'element-plus'
import AuthResponseInterfaceDTO from '@/classes/interface/dto/authResponseInterface.dto'

export default {
  async userCredentialLogin (data: LoginFormInterface): Promise<boolean> {
    return await config.axiosInstance.post(Consts.Api.Auth.Login(), data)
      .then((response: any) => {
        if (!response) return false
        if (!response.data) return false

        const responseData = response.data as AuthResponseInterfaceDTO
        if (!responseData.authenticated || !responseData.accessToken) return false

        utils.Token.set(responseData.accessToken.value)
        return true
      })
      .catch(() => {
        utils.Token.remove()
        ElMessage.error('Oops. Bad Credentials. Please try again.')
        return false
      })
  }
}
