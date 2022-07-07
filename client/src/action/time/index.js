import AxiosInstance from '../../API'
import {GETTIME} from '../type'
export const GetTime = () => async (dispatch) => {

    try {
      const { data } = await AxiosInstance.get("/time");
    
      dispatch({
        type:GETTIME,
        payload:data
      })
    
    } catch (error) {
     
     console.log('error fething request');
    }
  
  };