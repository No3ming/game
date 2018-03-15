import { observable } from 'mobx'

class Store {
  @observable test = '12312'
  onTest () {
    this.test = 'aaaaaaa'
  }
}

const store = new Store()
export default store