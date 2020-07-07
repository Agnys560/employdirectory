import axios from "axios";

//people generator

export default{ 
    getUsers:function(){    
        
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};
