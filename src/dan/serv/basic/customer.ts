import userPina from '@/dan/cake/pina/userPina'
import net from '@/dan/plugin/net'
import strapi from '@/dan/plugin/strapi'

const many = async (qs: ONE) => {
  const res: ONE = await net.get('customer', userPina().jwt, net.funni(qs))
  if (res && res.data)
    return strapi.ser_aii(res, [])
}

export default {
  many,
}
