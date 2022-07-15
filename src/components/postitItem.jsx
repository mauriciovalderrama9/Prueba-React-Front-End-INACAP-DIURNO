import React from 'react';
import "./postitItem.css";

export function PostitItem({postIt}) {
    const {id,nombreTarea,descripcionTarea} = postIt;

  return (
    
    <div className='col-8 col-sm-3 ml-4 mt-4'>
        <li className='input-group' key={id}>
        
            <textarea readOnly="readonly" className="" defaultValue={nombreTarea} id="titulo" rows="1">
            
            </textarea>
            <textarea readOnly="readonly" className="" defaultValue={descripcionTarea} id="exampleFormControlTextarea1" rows="4"></textarea>
        </li>
    </div>
  );
}


