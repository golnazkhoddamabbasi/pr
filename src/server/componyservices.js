import axios from "axios";



export const getAllComponys = () => {
    const url ="http://94.101.184.60:1001/api/Expo/Web";
    return axios.get(url);
  };


  export const createCompony = () => {
    const url = "http://94.101.184.60:1001/api/Expo/Web";
    return axios.post(url);
  };


  export const getCompony = (companyId) => {
    const up = "http://94.101.184.60:1001/api/Expo/Web";
    const url = `${up}/${companyId}`;
    return axios.get(url);
   };
 

 
    export const updateCompony = (compony , companyId) => {
    const up = "http://94.101.184.60:1001/api/Expo/Web/UpdateCompany";
    const url =`${up}${companyId}`
    return axios.put(url , compony );
  };
  

  // export const getAllAgent = () => {
  //   const url ="http://94.101.184.60:1001/api/Expo/Web/Agent";
  //   return axios.get(url);
  // };

  // export const getAllVisitor = () => {
  //   const url ="http://94.101.184.60:1001/api/Expo/Web/Visitor";
  //   return axios.get(url);
  // };
  

