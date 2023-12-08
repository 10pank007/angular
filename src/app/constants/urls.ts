const baseURL = 'https://jsonplaceholder.typicode.com';

const users = `${baseURL}/users`;
const posts = '/posts';
const comments = '/comments';

const urls = {
  users: {
    base: users,
    byId: (id: number): string => `${users}/${id}`
  },
  post: {
    postsByUserId: (userId: number): string => `${users}/${userId}${posts}`,
    postById: (id: number): string => `${baseURL}${posts}/${id}`
  },
  comments: {
    commentsByPostId: (postId: number): string => `${baseURL}${posts}/${postId}${comments}`
  }
}

export {urls}
