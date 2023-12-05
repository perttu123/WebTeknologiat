'use client';
import React from "react";
import { useEffect, useState } from 'react';
import moment from 'moment';
import HaettuTunti from './haettuTunti';


export default function SearchComponent({importData}) { //importData on ApiData 

    const [showAlert, setShowAlert] = useState(false); //kun  showalert on true niin alertti näkyy.
    const [input, setInput] = useState("");
    const [searchData, setSearchData] = useState([]);
    const hours = importData.map(item => moment(item.startDate).format('HH'));

    const handleChange=(e)=>{
        setInput(e.target.value)    
    }

    function Submit(){

        if(!hours.includes(input)){
            console.log(input);
            setInput("");
            setShowAlert(true);
        }
        else{
            setShowAlert(false);
            setInput("");
            
            const filteredData = importData.filter(item => {
                const StartDate = moment(item.startDate).format('HH'); // Get date from the item
                return StartDate === input;
              });
              setSearchData(filteredData);
        }       
    }

    function AlertComponent() {
        if(showAlert){
            return (
                <div className=" m-4 p-4 bg-red-100 text-red-900 border border-red-300 rounded-md z-50">
                  <p className="font-semibold">insert in this format (01 or 16)</p>
                </div>
            );
        }   
      }

    return (<>
        <div className="flex items-center">
            <div className="flex border border-purple-200 rounded">
                <input
                    value = {input}
                    onChange={handleChange}
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Anna tunti muodossa.. 14"
                />
                <button onClick={()=>Submit()}className="px-4 text-white bg-purple-600 border-l rounded ">
                    Search
                </button>
            </div>
        </div>
        <HaettuTunti hakuData={searchData}/> 
        <AlertComponent/>
        </>
    );
}
