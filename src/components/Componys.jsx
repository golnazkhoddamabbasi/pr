import Compony from "./Compony"
const Componys =({data})=>{
    return(
        <>
        <section className="container">
            <div className="grid">
                <div className="row">
                    <div className="col  text-secondary">
                        <p className="h3">
                            <button className="btn mx-2  text-secondary">
                                  لیست شرکت ها 
                            </button>

                        </p>
                    </div>
                </div>
            </div>
        
        <div className="container">
            <div className="row">

                {
                data.map((list) =>
                <Compony key={list._id} compony={list} />    
                )
                }
               

            </div>

        </div>

        </section>

        
        
        </>
    )
}
export default Componys