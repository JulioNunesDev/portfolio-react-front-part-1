import Axios from 'axios'


export const Api = Axios.create({
    baseURL: "https://portfolio-react-nodejs-back.herokuapp.com/"
})