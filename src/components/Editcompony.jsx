import { useEffect , useState } from "react"
import { Link , useNavigate , useParams } from "react-router-dom"
import {getCompony , updateCompony } from "../server/componyservices"



const Editcompony =()=>{
const {companyId}=  useParams();
const params = useParams();
 console.log(params);
const Navigate= useNavigate()
const [state , setState]= useState({
compony :{
    title:" ",
    description:"",
    admin: {
    name:"" ,
    phone:" "
 
   },
   products:[ ],
   textSms:"",
   id:" "

}


})

// // useEffect(()=>{
// //     const Data = async()=>{
// //         try{
// //            const { data : ComponyData}= await getCompony(companyId ) 
// //         }catch (err){
// //              console.log(err)
// //   }
// //     }
// //     Data()
// // }, [])


// // const setComponyInfo=(event)=>{
// // setState({...state,[event.target.name]: event.target.value})  

// // }
// // const sumbit = async(event) =>{
// //     event.preventDefault()
// //     try{
// //     const {data}= await updateCompony(companyId)
// //     if(data){
// //         Navigate("/componys")
// //     }
// //     }catch{
// //         console.log(err)
// //     }
// // }

// // const { compony }= state 

// //     return(
//         <>
//      {/* <div className="container">
//     <div className="row">
//         <div className="col">
//             <p className="h4 fw-bold text-center">
//                 ویرایش شرکت 
//             </p>

//         </div>

//     </div>
// <hr/>
// <div className="row mt-5 ">
// <div className="col-md-6">
// <form onSubmit={sumbit}>
// <div className="mb-2">

// <input 
// name="title"
// type="text"
// value={compony.title}
// onChange={setComponyInfo}
// className="form-control"
// required={true}
// placeholder="  نام شرکت "
// />

// <input 
// name="description"
// type="text"
// value={compony.description}
// onChange={setComponyInfo}
// className="form-control"
// required={true}
// placeholder=" توضیح شرکت "
// />

// <input 
// name="admin"
// type="text"
// value={compony.admin.name} 
// onChange={setComponyInfo}
// className="form-control"
// required={true}
// placeholder="  نام ادمین "
// />

// <input 
// name="admin"
// type="text"
// value={compony.admin.phone} 
// onChange={setComponyInfo}
// className="form-control"
// required={true}
// placeholder="  شماره ادمین"
// />



// <input 
// name="products "
// type="text"
// value={compony.products}
// onChange={setComponyInfo}
// className="form-control"
//  required={true}
// placeholder="محصولات "
// />

// <input 
// name="textSms"
// type="text"
// value={compony.textSms}
// onChange={setComponyInfo}
// className="form-control"
// required={true}
// placeholder="   لینک سایت "
// />

// <input 
// name="textSms"
// type="text"
// value={compony.id}
// onChange={setComponyInfo}
// className="form-control"
// required={true}
// placeholder="    کد شرکت  "
// />


// <input 
// type="submit"
// className="btn bg-success"
// value="ویرایش  "
// />
// <Link
// to={"/componys"}
// className="btn mx-2 bg-danger"
// >
// انصراف
// </Link>
// </div>

// </form>
// </div>
// </div>
// </div> */}
// {/* </>    */}





//     )
}

export default Editcompony