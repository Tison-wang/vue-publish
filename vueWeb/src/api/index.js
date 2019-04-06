import { post,get } from 'axios'


let uploadBase = ''

if(process.env.NODE_ENV === 'production'){
  uploadBase = 'https://cloud.inschos.com'
}

export default {
  get: (data) => { return get('/springboot/test?params=' + data, data) },
  post: (data) => { return post('/springboot/hello', data) }
}

