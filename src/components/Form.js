import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import "./Form.css";
const Form = () => {
    const [userData, setUserData] = useState({
        Salutation: "",
        FirstName: "",
        LastName: "",
        Company: "",
        LeadSource: "",
        Status: "",
        ProductInterest__c: ""
    });

    const params = useLocation().search;

    useEffect(()=>{
        const code = new URLSearchParams(params).get('code');
        console.log(code);
        
        /* const header = {
            //"host": "dentsuworldservices-8b-dev-ed.lightning.force.com",
            "Access-Control-Allow-Origin" : "*",
            'Content-Type': 'application/x-www-form-urlencoded'
        }
 */
        const body = {
            grant_type: "authorization_code",
            code: code,
            client_id: "3MVG9wt4IL4O5wvJidVoZyfx_jUvv0N3NT.Ln0NsG_S8TgSMmTtSsJ1nDQthfOIJLxIgEfE28B_N42dlU88cH",
            client_secret: "7A5CC4A6E2D76D470933BC7ABD8D7A6F596BC7CDD92F5352469AC58065DA6AB7",
            redirect_uri: "https://web-to-lead-app-dentsu.herokuapp.com/form"
            }
        axios.post("https://login.salesforce.com/services/oauth2/token", {body:body}, {headers:{
            "Access-Control-Allow-Origin" : "*",
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
            'Content-Type': 'application/x-www-form-urlencoded'
        }})
        .then((resp) => {
          console.log(resp.data)
        })

    },[params])

    const [data, setData] = useState([])

    const handleInput = (e) => {
        const alldata = e.target.name;
        const value = e.target.value;
        console.log(alldata, value);

        setUserData({ ...userData, [alldata]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...userData }
        setData([...data, newData]);
        console.log(userData);
        axios.post("https://dentsuworldservices-8b-dev-ed.lightning.force.com/services/data/v54.0/sobjects/Lead",userData)
        .then((resp) => {
          console.log(resp.data)
        })
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} >
                    <ul className="form-style-1">
                        <h1 className="form-heading">Form in React js</h1>
                        <li>
                            <label htmlFor="Salutation">Salutation</label>
                            <select name="Salutation" value={userData.Salutation} className="field-select" onChange={handleInput}>
                             <option>Select</option>
                                <option>Mr.</option>
                                <option>Ms.</option>
                                <option>Mrs.</option>
                                <option>Dr.</option>
                                <option>Prof..</option>
                            </select>
                        </li>

                        <li>
                            <label htmlFor="FirstName">First Name <span className="required">*</span></label>
                            <input type="text" name="FirstName" value={userData.FirstName} className="field-long" onChange={handleInput} />
                        </li>

                        <li>
                            <label htmlFor="LastName">Last Name <span className="required">*</span></label>
                            <input type="text" name="LastName" value={userData.LastName} className="field-long" onChange={handleInput} />
                        </li>

                        <li>
                            <label htmlFor="Company">Company Name<span className="required">*</span></label>
                            <input type="text" name="Company" value={userData.Company} className="field-long" onChange={handleInput} />
                        </li>

                        <li>
                            <label htmlFor="LeadSource"> Lead Source</label>
                            <input
                                type="text"
                                name="LeadSource"
                                value={userData.LeadSource="Web-to-lead"}
                                className="field-long restrict-btn"
                                
                                onChange={handleInput}

                            />
                        </li>
                        <li>
                            <label htmlFor="Status"> Lead Status <span className="required">*</span></label>
                            <select name="Status" value={userData.Status} className="field-select" onChange={handleInput}>
                                <option>--None--</option>
                                <option>Open - Not Connected</option>
                                <option>Working - Contacted</option>
                                <option>Closed - Converted</option>
                                <option>Closed - Not Converted</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="ProductInterest__c">Product in Test<span className="required">*</span></label>
                            <select name="ProductInterest__c" value={userData.ProductInterest__c} className="field-select" onChange={handleInput}>
                                <option>None</option>
                                <option>Commerce</option>
                              
                            </select>
                        </li>
                        <li>
                            <input type="submit" value="Submit" />
                        </li>
                    </ul>
                </form>
            </div>
        </>
    );
};

export default Form;


