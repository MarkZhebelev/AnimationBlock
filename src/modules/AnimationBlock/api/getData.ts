import axios from 'axios';
export const getData = async () => {
  try {
      const response = await axios.get('http://localhost:3002/data');
      if(response.status === 200) {
          return response.data;
      }
  } catch(error: any){
      console.log(error);
      throw error;
  }

}
