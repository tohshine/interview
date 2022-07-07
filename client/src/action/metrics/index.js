import AxiosInstance from '../../API'
import {GETMATRICS} from '../type'
import axios from 'axios'


export const GetMetrics = () => async (dispatch) => {
    console.log('metrics enabled');
    try {
      const { data } = await AxiosInstance.get("/metrics");
    
      dispatch({
        type:GETMATRICS,
        payload:data
      })
    
    } catch (error) {
     console.log('error fething request',error.message);
    }
  
  };