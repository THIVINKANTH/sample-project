import {useState} from 'react'
import './Image.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export let Register=()=>
{

    const[Process,setProcess]=useState({
        "cusId":"",
        "cusName":"",
        "cusContact":0,
        "cusEmail":"",
        "cusDate":""
    })
    const track=(data)=>
    {
        const{name,value}=data.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }
    const register=()=>
    {
        alert('Welcome to Zealous Servise Center'+JSON.stringify(Process))
    }
    const reset=()=>
    {
        alert('Rejected.....!')
    }
    return(
        <>
        <div className="container bg-dark">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3" id="center">
                    <h3 className="text-center mt-5 mb-5" id="center2"><img src="./Mechanics.png" id="center1"/>Bike Details Form</h3>
                    <div className="row justify-content-center">
                        <div className="row">
                            <div className="col">
                                    <label className="form-label">RegisterNumber</label>
                                    <input type="text" 
                                    name="cusId"
                                    onChange={track}
                                    value={Process.cusId}
                                    className="form-control" />
                            </div>
                            <div className="col">
                                <label className="form-label">CustomerName</label>
                                <input type="text"
                                name="cusName"
                                onChange={track}
                                value={Process.cusName}
                                className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">CustomerContact</label>
                        <input type="tel"
                        name="cusContact"
                        onChange={track}
                        value={Process.cusContact}
                        className="form-control" />
                    </div>
                    <div className="mt-3">
                        <label className="form-label">CustomerEmail</label>
                        <input type="email"
                        name="cusEmail"
                        onChange={track}
                        value={Process.cusEmail}
                        className="form-control" />
                    </div>
                    <div className="mt-3">
                        <label className="form-label">DateofPurchase</label>
                        <input type="date"
                        name="cusDate"
                        onChange={track}
                        value={Process.cusDate}
                        className="form-control" />
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3" onClick={register}>Register</button>
                        <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset">Reset</button>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}