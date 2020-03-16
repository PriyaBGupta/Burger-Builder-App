import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://react-my-burger-d6f2d.firebaseio.com/'
})
export default instance;