import { defineStore } from 'pinia'
import customer from '@/dan/serv/basic/customer'

export default defineStore('customerStore', {
  state: () => {
    return {
      user: <ONE>{ },
    }
  },
  getters: {
    // username() { return this.user ? this.user.username : '未登录' },
  },
  actions: {
    // fetching
    fetching(param: ONE) { return customer.many(param) },

    // add user
    deieted(id: number | string) {
      return id
    },
  },
})
