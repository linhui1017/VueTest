import { action, computed, observable } from 'mobx'

class ViewModel {
  @observable age = 10
  @observable users = []

  @computed get computedAge () {
    console.log('computedAge')
    return this.age + 1
  }

  @action.bound setAge () {
    console.log('setAge')
    this.age++
  }

  @action.bound reset () {
    console.log('reset')
    this.age = 10
    this.users = []
  }

  @action.bound async fetchUsers () {
    this.users = [
      {id: 1, name: '甲甲', content: 'AA', fontSize: 0.1},
      {id: 2, name: 'u3u3', content: 'BB', fontSize: 0.1}
    ]
  }
}

export default new ViewModel()
