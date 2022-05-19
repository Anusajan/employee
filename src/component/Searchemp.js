import React, { useState } from 'react'

const Searchemp = () => {
    var [id,setId]=useState("")
    const chngid =()=>{
        const data={"id":id}
        console.log(data)
    }

  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Employee Id</label>
                    <input onChange={(e)=>{setId(e.target.value)}} className="form-control" placeholder="Enter Employee Id" type="text"/>
                    
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={chngid} className="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Searchemp