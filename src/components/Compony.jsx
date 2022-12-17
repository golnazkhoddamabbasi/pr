import { Link } from "react-router-dom"

const Compony =({compony})=>{

    return(
    <div className="col-md-6 mt-3">
    <div class="card">
      <div class="card-header">
        {compony.title}
      </div>
      <ul class="list-group list-group-flush ">
        <li class="list-group-item ">{compony.description}</li>
        <li class="list-group-item">{compony.admin.name} {" "} {compony.admin.phone}</li>
        <li class="list-group-item">{compony.textSms}</li>
        <li class="list-group-item">{compony.products}</li>
        <li class="list-group-item">{compony.id}</li>
        <li class="list-group-item">
          
            <Link to ={`/componys/${compony._id}`} key={compony._id} className="btn m-1 bg-warning ">
              
          <i className="fa fa-eye"/></Link>



            <button className="btn m-1 bg-danger "><i className="fa fa-trash"/></button>


            <Link to={`componyss/edit/${compony._id}`}
            

            className="btn m-1 bg-info "><i className="fa fa-pen"/></Link>
        </li>
      </ul>
    </div>
    </div>
    
        )
    
    }
    export default Compony