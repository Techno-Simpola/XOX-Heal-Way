import fireDb from '../firebase';
import React, { useState, useEffect } from 'react';
import './css/AddEdit.css'
import {isEmpty} from "lodash";
import {useHistory,useParams} from "react-router-dom"


const AddEdit = () => {

    const values = {
        name: "",
        mobile: "",
        email: "",
        address: "",
        bloodPressure: "",
        sugarLevel: "",
        heartRate: "",
        skinTemp: "",
        oxiMeter: "",
    };

    const [data, setData] = useState({});
    const [initialState ,setState] = useState(values);
    const {name, mobile, email, address, bloodPressure, sugarLevel, heartRate, skinTemp, oxiMeter} = initialState;
  
    const history = useHistory();

    let currentId = useParams();
    const { id } = currentId;
     
    useEffect(() => {
        fireDb.child("contacts").on("value", (snapshot) => {
            
         if(snapshot.val() !== null) {
                setData({
                    ...snapshot.val(),
                });
            }
            else{
                snapshot({});
            }
        });
    },[id]);


    useEffect(()=>{
        if(isEmpty(id)){
            setState({...values});
        }
        else{
            setState({...data[id]});
        }
    },[id,data]);



    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({
            ...initialState,
            [name]: value,
        });
    };

        
    const handleSubmit = (e) => {
        e.preventDefault(); //prevent from reloading the browser
        
        if(isEmpty(id)){
            fireDb.child("contacts").push(initialState, (err) => {
            if(err)
            {console.log(err);}
        });
        }
        else{
        fireDb.child(`/contacts/${id}`).set(initialState, (err) => {
            if(err)
            {console.log(err);}
        });  
        }
        history.push("/");     
    };

    return (
    <div className="container adding-form mt-5">
        
             <div className="col-md-6 form-upper" style={{width:"400px", backgroundColor:"white", borderRadius:"20px", padding: "30px"}}>
                 <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <label className="bmd-label-floating">Name</label>
                        <input
                         type="text"
                         className="form-control"
                         value={name}
                         name="name"
                         placeholder="James Carden"
                         onChange={handleInputChange}
                         />
                     </div> 

                     <div className="form-group">
                        <label className="bmd-label-floating">Mobile</label>
                        <input
                         type="number"
                         className="form-control"
                         value={mobile}
                         name="mobile"
                         placeholder="92837XXXXX"
                         onChange={handleInputChange}
                         />
                     </div> 

                     <div className="form-group">
                        <label className="bmd-label-floating">Email</label>
                        <input
                         type="email"
                         className="form-control"
                         value={email}
                         name="email"
                         placeholder="yourname@gmail.com"
                         onChange={handleInputChange}
                         />
                     </div> 

                     <div className="form-group">
                        <label className="bmd-label-floating">Address</label>
                        <input
                         type="text"
                         className="form-control"
                         value={address}
                         name="address"
                         placeholder="#OP street flatNo: 58"
                         onChange={handleInputChange}
                         />
                     </div> 
                </form>
                
             </div>


             <div className="col-md-6 form-upper" style={{width:"400px", backgroundColor:"white", borderRadius:"20px", padding: "30px"}}>
                 <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <label className="bmd-label-floating">Blood Pressure</label>
                        <input
                         type="text"
                         className="form-control"
                         value={bloodPressure}
                         name="bloodPressure"
                         placeholder="in mmHg (XXX/XX)"
                         onChange={handleInputChange}
                         />
                     </div> 

                     <div className="form-group">
                        <label className="bmd-label-floating">Skin Temp</label>
                        <input
                         type="number"
                         className="form-control"
                         value={skinTemp}
                         name="skinTemp"
                         placeholder="in fahrenheit (XX)"
                         onChange={handleInputChange}
                         />
                     </div> 

                     <div className="form-group">
                        <label className="bmd-label-floating">Oximeter Reading</label>
                        <input
                         type="number"
                         className="form-control"
                         value={oxiMeter}
                         name="oxiMeter"
                         placeholder="in SPO2%"
                         onChange={handleInputChange}
                         />
                     </div> 

                     <div className="form-group">
                        <label className="bmd-label-floating">Sugar Level</label>
                        <input
                         type="number"
                         className="form-control"
                         value={sugarLevel}
                         name="sugarLevel"
                         placeholder="in mmol/l"
                         onChange={handleInputChange}
                         />
                     </div> 
                     
                     <div className="form-group">
                        <label className="bmd-label-floating">Heart Rate</label>
                        <input
                         type="number"
                         className="form-control"
                         value={heartRate}
                         name="heartRate"
                         placeholder="in bpm"
                         onChange={handleInputChange}
                         />
                     </div> 

                    <button className="btn btn-danger">Cancel</button>
                    <button type="submit" className="btn btn-success btn-rainsed">Submit</button> 
                </form>
                
             </div>
        

    </div>
  )
}

export default AddEdit
