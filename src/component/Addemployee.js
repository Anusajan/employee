import React, { useState } from 'react'

const Addemployee = () => {
    var [id,setId]=useState("")
    var [name,setName]=useState("")
    var [dsg,setDsg]=useState("")
    var [salary,setSalary]=useState("")
    var [cname,setCname]=useState("")
    var [dob,setDob]=useState("")
    var [email,setEmail]=useState("")
    const subData=()=>{
        const data={"id":id,"name":name,"dsg":dsg,"salary":salary,"cname":cname,"dob":dob,"email":email}
        console.log(data)
    }

  return (
    <div>
 <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Employee Id</label>
                    <input onChange={(e)=>{setId(e.target.value)}} className="form-control" placeholder="Enter Employee Id" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Employee Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} className="form-control" placeholder="Enter Employee Name" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Designation</label>
                    <input onChange={(e)=>{setDsg(e.target.value)}} className="form-control" placeholder="Enter Designation" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Salary</label>
                    <input onChange={(e)=>{setSalary(e.target.value)}} className="form-control" placeholder="Enter Salary" type="text"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Company Name</label>
                    <input onChange={(e)=>{setCname(e.target.value)}} className="form-control" placeholder="Enter Company Name " type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">DOB</label>
                    <input onChange={(e)=>{setDob(e.target.value)}} className="form-control" placeholder="Enter DOB" type="date"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Enter Email" type="email"/>
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button   className="btn btn-primary">Clear</button>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData}  className="btn btn-primary">Register</button>
                </div>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Addemployee