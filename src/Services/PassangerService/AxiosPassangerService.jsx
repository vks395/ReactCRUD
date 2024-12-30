import axios from "axios"

export default class AxiosService {
    Post(url, data, header) {
        return axios.post(url, data, header)
    }
    GetById(url, id, header) {
        console.log(url+"/id="+id);
        return axios.get(url+"/id="+id)
    }
    Put(url,id, data, header) {
        return axios.put(url+id, data)
    }
    GetAll(url, data, header) {
        return axios.get(url)
    }
    Delete(url, id) {
        console.log(url+id);
        return axios.delete(url +id)
    }
   
}
