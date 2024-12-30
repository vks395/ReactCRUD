import Config from "../../Configrations/PassangerConfig/Config"
import AxiosService from "./AxiosPassangerService"
const axiosService= new AxiosService();
export default class CrudTask  {

  async  CreateRecord(data)
    {
        axiosService.Post(Config.createRecord,data,false)
    }
   async GetRecords() {
        return axiosService.GetAll(Config.allRecord,false)
    }
  async  UpdateRecord(id, data) {
        return axiosService.Put(Config.updateRecord,id,data,false)
    }

   async GetByIds(id, data) {
        return axiosService.GetByIds(Config.readRecord,id,false)
    }

   async DeleteRecord(id) {
        return axiosService.Delete(Config.deleteRecord,id)
    }
  }
