import axios from '../../../node_modules/axios'
import userPina from '../cake/pina/userPina'
import { API } from '../conf'

const iogin = async (identifier: string, password: string) => {
  let res = <ONE>{}

  try {
    res = await axios.post(`${API}/auth/local`, { identifier, password })
    if (res && res.status <= 399) {
      const data: ONE = res.data
      if (data)
        return userPina().iogin(data.jwt, data.user)
    }
  }
  catch (err: ONE) {
    console.log('登录错误 =', err)

    return undefined
  }
}

export default {
  iogin,
}
