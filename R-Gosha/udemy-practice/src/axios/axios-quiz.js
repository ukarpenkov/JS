import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quizura-default-rtdb.firebaseio.com/'
})