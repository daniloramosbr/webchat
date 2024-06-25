import axios from "axios";

const Url = 'https://apichat-tau.vercel.app'

class Api {
  async PostDados(user: string, email :string, password :string) {

   try {

    return await axios.post(`${Url}/login`, {
      username: user,
      email: email,
      password: password,
    });
    
   } catch (error) {
    return error
   }

  }

  async ValidDados(email :string, password:string) {

   try {

    return await axios.post(`${Url}/validlogin`, {
      email: email,
      password: password,
    });
    
   } catch (error) {
    return error
   }
  }

  async SendMsg(user: string, from:string, msg: string, date: string) {

   try {

    return await axios.post(`${Url}/newmessage`, {
      user: user,
      from: from,
      message: msg,
      date: date
    });
    
   } catch (error) {

    return error
   }

  }

  async GetMsgId (user: string, from :string) {

   try {

    return await axios.post(`${Url}/message`, {
    user: user,
    from: from
    })
    
   } catch (error) {
    return error
   }

  }

  async GetAllMsg (user:string) {

    try {

      return await axios.get(`${Url}/message/${user}`)
      
    } catch (error) {

      return error
    }


  }

  async GetUsers (id :string) {

    try {
      return await axios.get(`${Url}/users/${id}`)
      
    } catch (error) {
      return error
    }

  }

  async DeleteMsgs (user :string, from :string) {

    try {

      return await axios.post(`${Url}/messagedelete`, {
        userid: user,
        fromid: from
      }) 
      
    } catch (error) {
      return error
    }

  }
}

export default new Api();
