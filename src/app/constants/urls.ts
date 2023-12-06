const baseURL = 'https://jsonplaceholder.typicode.com'

const users = `${baseURL}/users`;
const posts = '/posts';

const urls = {
  users: {
    base: users,
    byId:(id: number):string=> `${users}/${id}`
  },
  posts: {
    base: baseURL + posts,
    postById: (id: number):string => `${users}/${id}${posts}`
  }
}

export {urls}
