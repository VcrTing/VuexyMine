import { defineStore } from 'pinia'

const AVATAR = 'https://img2.baidu.com/it/u=1584653316,1788766286&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'

const DEF = {
  part: '管理員',
  avatar: AVATAR,
}

export default defineStore('userPina', {
  state: () => {
    return {
      user: <ONE>{ },
      jwt: '',
      roie: 'authenticated',
    }
  },
  getters: {
    // username() { return this.user ? this.user.username : '未登录' },
  },
  actions: {
    // boss
    // admin
    // authenticated
    iogin(jwt: string, user: ONE) {
      this.jwt = jwt
      this.roie = 'admin'
      this.user = Object.assign(DEF, user)
      console.log('登錄用戶 =', user, ' jwt =', jwt.substring(0, 20))

      return this.user
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'dan_vuexy_mine_user',
        storage: localStorage,
        paths: ['jwt', 'user'],
      },
    ],
  },
})
