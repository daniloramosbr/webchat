import axios from "axios";

class Api {
  async PostDados(user, email, password) {

   try {

    return await axios.post("https://apichat-ws96.onrender.com/login", {
      username: user,
      email: email,
      password: password,
    });
    
   } catch (error) {
    return error.message
   }

  }

  async ValidDados(email, password) {

   try {

    return await axios.post("https://apichat-ws96.onrender.com/validlogin", {
      email: email,
      password: password,
    });
    
   } catch (error) {
    return error.message
   }
  }

  async SendMsg(user, from, msg, date) {

   try {

    return await axios.post("https://apichat-ws96.onrender.com/newmessage", {

      user: user,
      from: from,
      message: msg,
      date: date

    });
    
   } catch (error) {

    return error.message
   }

  }

  async GetMsgId (user, from) {

   try {

    return await axios.post("https://apichat-ws96.onrender.com/message", {

    user: user,
    from: from
    
    })
    
   } catch (error) {
    return error.message
   }

  }

  async GetAllMsg (user) {

    try {

      return await axios.get(`https://apichat-ws96.onrender.com/message/${user}`)
      
    } catch (error) {

      return error.message
    }


  }

  async GetUsers (id) {

    try {
      return await axios.get(`https://apichat-ws96.onrender.com/users/${id}`)
      
    } catch (error) {
      return error.message
    }

  }

  async DeleteMsgs (user, from) {

    try {

      return await axios.post("https://apichat-ws96.onrender.com/messagedelete", {
        userid: user,
        fromid: from
      }) 
      
    } catch (error) {
      return error.message
    }

  }
}

export default new Api();
