import axios from 'axios'

const apiData = axios.create({
  baseURL: 'https://corebiz-test.herokuapp.com/api/v1'
})

export default apiData