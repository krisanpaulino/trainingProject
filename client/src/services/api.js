import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://trainingproject-39229.firebaseio.com/`
  })
}
