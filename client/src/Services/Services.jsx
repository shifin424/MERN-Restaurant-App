import axios from '../Api/Api'

export const uploadDataApi = (data, { headers }) => {
    console.log(data,headers,"in service")
    return axios.post('/restaurant', data, { headers })
}