import { useEffect, useState } from "react"
import { list } from "./BikeDetailsvalue";
import { Register } from "./BikeServiceForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Reading } from "./BikeReadPage";


export const Homepage01=()=>
{

    const[temparray,setTemparry]=useState([]);
    const[createview,setCreateview]=useState(false)
    const[readview,setReadview]=useState(false)
    const[pos,setPos]=useState(0)
    const result=()=>
    {
        setTemparry(list)
    }
    useEffect(()=>{
        result()
    })
    return(
        <>
        <div className="container mt-5">
            {
                (createview)?
                <>
                <Register/>
                <button className="btn btn-outline-secondary" onClick={
                    ()=>
                    {
                        setCreateview(false)
                    }
                }>Back</button>
                </>
                :
                (readview)?
                <>
                    <Reading who={pos}/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>
                        {
                            setReadview(false)
                        }
                    }>
                        Back
                    </button>
                </>
                :
                <>
                <button className="btn btn-outline-success" onClick={
                    ()=>
                    {
                        setCreateview(true)
                    }
                }>
                    Create new BIke Details
                </button>
                <div className="row justify-content-center">
                    <div className="table-responsive-md">
                        <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-4">
                            <thead>
                                <tr>
                                    <th>CustomerId</th>
                                    <th>CustomerName</th>
                                    <th>CustomerEmail</th>
                                    <th>CustomerContact</th>
                                    <th>customerDate</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    temparray.map((ele,ind)=>
                                    (
                                       <tr>
                                        <td>{ele.cusId}</td>
                                        <td>{ele.cusName}</td>
                                        <td>{ele.cusEmail}</td>
                                        <td>{ele.cusContact}</td>
                                        <td>{ele.cusDate}</td>
                                        <td>
                                            <button className="btn btn-outline-primary" onClick={
                                                ()=>
                                                {
                                                    setReadview(true);
                                                    setPos(ind)
                                                }
                                            }>
                                                Read
                                            </button>
                                        </td>
                                       </tr> 
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                </>
            }
        </div>
        </>
    )
}