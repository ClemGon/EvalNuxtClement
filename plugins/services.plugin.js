import { ApiService } from '../services/api.services'

export default ({ app }, inject) => {
  const posts = new ApiService(process.env.BASE_URL)


  // inject the service, making it available in the context, component, store, etc.
  inject('posts', posts)
}
