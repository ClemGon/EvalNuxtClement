import axios from 'axios'

export class ApiService {
  baseUrl = ''

  constructor(url) {
    this.baseUrl = url
  }

  getPostById(id) {
    return axios.get(this.baseUrl + 'posts/' + id)
  }

  getAllPost() {
    return axios.get(this.baseUrl + 'posts/')
  }

}
