import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
    <nav className="navbar navbar-dark navbar-expand-sm  ">
    <div className="container">
        <div className="row w-100">
            <div className="col h3 d-flex  ">
    <p className=" align-items-start font-weight-bold text-secondary">
    وب اپلیکیشن
    </p>
    
    
            </div>
            <div className="col ">
              <p className="h3  ">
                <Link to={"/componys/add"} className="btn mx-2 text-white bg-secondary   ">
                          ساخت شرکت جدید 
                <i className="fa fa-plus-circle mx-2"/>
                </Link>
    
              </p>
    
            </div>
        </div>
    
    </div>
    
    </nav>
    )
    }
    export default Navbar ;