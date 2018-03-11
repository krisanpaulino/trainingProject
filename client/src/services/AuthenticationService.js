import api from './api'

export default {
  register (credential) {
    return api().post('register.json', credential)
  }
}
