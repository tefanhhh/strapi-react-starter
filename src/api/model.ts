import instance from '@/api/instance'
import { NavigationBar } from '@/models/navigation-bar.model'
import { User } from '@/models/user.model'

export class API<T> {
  constructor(public resource: string) {}

  async fetchAll() {
    return await instance.get(`/${this.resource}`)
  }

  async fetchOne(id: string) {
    return await instance.get(`/${this.resource}/${id}`)
  }

  async create(data: T  ) {
    return await instance.post(`/${this.resource}`, data)
  }

  async update(id: string, data: T) {
    return await instance.put(`/${this.resource}/${id}`, data)
  }

  async delete(id: string) {
    return await instance.delete(`/${this.resource}/${id}`)
  }
}

export class Users extends API<User> {
  constructor() {
    super('users')
  }
}

export class NavigationBars extends API<NavigationBar> {
  constructor() {
    super('navigation-bars')
  }
}