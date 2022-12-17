import './App.css';
import Navbar from './components/Navbar';
import { useState  , useEffect} from 'react';
import Componys from './components/Componys';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Addcompony from "./components/Addcompony"
import Editcompony from "./components/Editcompony"
// import Viewcompony from "./components/Viewcompony"

import Visitor from "./components/Visitor"
import {getAllComponys , createCompony } from "./server/componyservices"
// import Compony from './components/Compony';


const App = () => {

 const[forceRender , setForcerender]=useState(false)
 const [getComponys , setComponys ]=useState([])

 const [getCompony , setCompony ]=useState({
   title:" ",
   description:"",
   admin: {
   name:"" ,
   phone:" "

  },
  products:[ ],
  textSms:"",
  contactUs:"",
})

 const Navigate = useNavigate();



  



useEffect(()=>{
 const getData = async () =>{
    try{
      const{ data }= await getAllComponys()
      setComponys(data.result) 
    }catch(err){
      console.log(err.message)
    }
      }
   getData()


},[forceRender])






const createComponyForm =async event =>{
event.preventDefault();
try{
  const {status} = await createCompony(getCompony);
  if (status === 201 ){
  setCompony({ })
  setForcerender(!forceRender)
  Navigate("/componys ")
  }
}catch(err){
  console.log(err.message)
 }
}


  const setComponyInfo=(event)=>{
    setCompony({...getCompony,[event.target.name]: event.target.value})  
  }


  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Navigate to="/componys" />} />
      <Route path='/componys' element={<Componys data={getComponys}/>}/>
      <Route path='/componys/add' element={<Addcompony
       setComponyInfo={setComponyInfo} 
       compony={getCompony }
       createComponyForm={createComponyForm}
      />}/>
      <Route path='/componys/edit/:componyId' element={<Editcompony/>}/>
      <Route path='/componys/:componyId' element={<Visitor  />} />
      {/* <Route path='/componys/visitor' element={<Visitor />} />  */}
      </Routes>
    </div>
  );
}

export default App;
