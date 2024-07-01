import axios from "axios"

const instance = axios.create({
    baseURL:'http://localhost:8080',
    withCredentials: true
})

instance.interceptors.request.use(request=>{

    return request
})

instance.interceptors.response.use(response=>{
    console.log(response.data);
    return response.data

},err=>{
    if(err.response){
        switch (err.response.status){
            case 404:
                // TODO NotFound
                console.log(err.response.data);
                break
            case 401:
                // TODO UnAuthroised 
                console.log(err.response.data);
                break
            case 403:
                // TODO Forbbien 
                console.log("No authorities");

                break
            case 500:
                // TODO Internal server error
                console.log(err.response.data);

                break
            default:
                // TODO 
                console.log(err.response.data);

        }
        return err.response.data
    }
})

export default instance