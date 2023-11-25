import axios from '../Api/Api'

export const RestaurantUploadApi = (data, { headers }) => {
    return axios.post('/restaurants', data, { headers })
}

export const RestaurantListingApi = () => {
    return axios.get('/restaurants')
}

export const RestaurantDeleteApi = ({id}) => {
    return axios.delete(`/restaurants/${id}`)
}
export const RestaurantUpdateApi = (id, data) => {
    return axios.put(`/restaurants/${id}`,data);
};