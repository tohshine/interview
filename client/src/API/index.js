
 import axios from 'axios'



/* creating instance */
const instance = axios.create({
    baseURL: 'http://localhost:5000'
})

instance.interceptors.request.use(
    async (config) => {
         config.headers.Authorization = 'mysecrettoken'
         return config;
   
     
    }
   
)

export default instance