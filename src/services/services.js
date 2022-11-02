import axios from 'axios'

const BASE_URL = 'http://localhost:8089';


export const getBoletos = async folio => {
    try {
      const res = await axios.get(`${BASE_URL}/api/boleto-movimientos/${folio}`);
  
      const todos = res.data;
  
      console.log(`GET: Here's the list of todos`, todos);
  
      return todos;
    } catch (e) {
      console.error("Hubo un problema al buscar los datos");
      console.error(e);
      return [];
    }
  };

