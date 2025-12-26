import React, { useState } from 'react'
import data from './data'
import './style.css'
// singal selection
export default function Accordian(){
   
    const [selected,setSelected] = useState(null); 
    const [multiSelection, setMultiSelection] = useState(false); 
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
      setSelected(getCurrentId  === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId){
       let cpyMultiple = [...multiple]; 
       const findIndexOfCurrId = cpyMultiple.indexOf(getCurrentId); 
       console.log(findIndexOfCurrId);

       if(findIndexOfCurrId === -1) {
        cpyMultiple.push(getCurrentId)
       }
       else{
        cpyMultiple.splice(findIndexOfCurrId,1)
       }
       setMultiple(cpyMultiple); 
       console.log(selected,cpyMultiple)

    }

   return<div className='wrapper'>
    <button onClick={() => setMultiSelection(!multiSelection)}>Enable Multi Selection</button>

     <div className='accordian'>
        {
            data && data.length > 0 ? 
            data.map(dataItem => 
            <div className='item'>
                <div 
                onClick={ 
                    multiSelection 
                    ? ()=>handleMultiSelection(dataItem.id) 
                    : ()=>handleSingleSelection(dataItem.id)
                    } className='title'>
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                </div>
                {
                    multiSelection ? multiple.indexOf(dataItem.id) !== -1 && <div className='content'>
                        {dataItem.answer}
                    </div> :  selected === dataItem.id &&  <div className='content'>
                        {dataItem.answer}
                    </div>
                }
                
            </div>) : <div>No Data !</div>
        }
     </div> 
   </div>
}