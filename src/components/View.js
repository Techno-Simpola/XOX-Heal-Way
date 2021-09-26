import React, {useState,useEffect} from 'react'
import fireDb from '../firebase'
import {useParams, Link} from "react-router-dom";
import swal from 'sweetalert';
import './css/View.css';

const View = () => {

    const [data, setData] = useState({});
  
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
    }, [id]);

    const onSend = (id) => {
        if(window.confirm("Are you sure to send your health data to the Hospital ?"))
        {
            swal("Thank you for sharing the data! You will get your prescription if needed. Saty Healthy");
        }
    };

  return (
    <div className="container mt-5">
        {Object.keys(data).map((userId) => {
            if(userId === id){
                return (
                    <div className="card">
                        <div className="card-header lead"> User Health Data
                        </div>
                        <div className="card-body">
                            <p className="card-text">Blood Pressure: {data[id].bloodPressure}</p>
                            <p className="card-text">Skin Temperature: {data[id].skinTemp}</p>
                            <p className="card-text">Oximeter Reading: {data[id].oxiMeter}</p>
                            <p className="card-text">Sugar Level: {data[id].sugarLevel}</p>
                            <p className="card-text">Hear Rate: {data[id].heartRate}</p>
                            <Link to="/">
                                <a className="btn btn-info">Go back</a>
                            </Link>

                                <a className="btn btn-info" onClick={() => onSend(id)}>Send</a>

                        </div>
                    </div>
                )
            }
        })}
      
    </div>
  )
}

export default View
