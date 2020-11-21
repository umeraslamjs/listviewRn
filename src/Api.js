import axios from 'axios';


export default class Api {
    static myInstance = null;
    
    client;

    constructor() {
        this.client = axios.create({});

    }

    /**
   * @returns {Api}
   */
  static instance() {
    if (Api.myInstance == null) {
      Api.myInstance = new Api();
    }
    return this.myInstance;
  }


  
  async getUsers() {

    let response = await this.client.get('https://jsonplaceholder.typicode.com/users');
    let data = response.data;
    if (data.error) throw data.error.message;
    return data;
  }

  
 
}