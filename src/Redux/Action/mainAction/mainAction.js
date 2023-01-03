import { toast } from "react-toastify";
import Service from "../../../Services/service";

export function mainAction() {
  return (dispatch) => {
    Service.getData()
      .then((res) => {
        dispatch({type:"SUCCESS_CAPMAIGN_DATA", payload:res.data.data.data})
      })
      .catch((error) => {
        toast.error(error)
        console.log(error);
      });
  };
}

export function addData(data){
  return (dispatch) => {
    dispatch({type:"ADD_DATA", payload:data})
  }
}
