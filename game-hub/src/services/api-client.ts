import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '68349254e56f49918616233eab81061b'
    }
})