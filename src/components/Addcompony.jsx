import { Link } from "react-router-dom";


const Addcompony =({setComponyInfo , compony , createComponyForm})=>{
    return(
<>
<div className="container">
    <div className="row">
        <div className="col">
            <p className="h4 fw-bold text-center">
                ساخت شرکت جدید
            </p>

        </div>

    </div>
<hr/>
<div className="row mt-5 ">
<div className="col-md-6">
<form onSubmit={createComponyForm}>
<div className="mb-2">

<input 
name="title"
type="text"
value={compony.title}
onChange={setComponyInfo}
className="form-control"
required={true}
placeholder="  نام شرکت "
/>

<input 
name="description"
type="text"
value={compony.description}
onChange={setComponyInfo}
className="form-control"
required={true}
placeholder=" توضیح شرکت "
/>

<input 
name="admin"
type="text"
value={compony.admin.name} 
onChange={setComponyInfo}
className="form-control"
required={true}
placeholder="  نام ادمین "
/>

<input 
name="admin"
type="text"
value={compony.admin.phone} 
onChange={setComponyInfo}
className="form-control"
required={true}
placeholder="  شماره ادمین"
/>



<input 
name="products "
type="text"
value={compony.products}
onChange={setComponyInfo}
className="form-control"
 required={true}
placeholder="محصولات "
/>

<input 
name="textSms"
type="text"
value={compony.textSms}
onChange={setComponyInfo}
className="form-control"
required={true}
placeholder="   لینک سایت "
/>
<input 
name="contactUs"
type="text"
value={compony.id}
onChange={setComponyInfo}
className="form-control"
required={true}
placeholder="   راه ارتباطی   "
/>


<input 
type="submit"
className="btn bg-success"
value="ایجاد "
/>
<Link
to={"/componys"}
className="btn mx-2 bg-danger"
>
انصراف
</Link>
</div>

</form>
</div>
</div>
</div>
</>
    )
}
export default Addcompony; 