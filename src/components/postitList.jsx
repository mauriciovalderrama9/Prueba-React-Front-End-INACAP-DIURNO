import React, { useState } from 'react';
import { PostitItem } from './postitItem';
import { Fragment,useRef } from 'react';
import {v4 as uuid} from "uuid";

export function PostitList() {

  const [postIts, setpostIts] = useState([])

  const nombreTareaRef=useRef()
  const descripcionTareaRef=useRef()

  const agregarPostIt = () =>{
    console.log("se agrega postit")
    const nombreTarea= nombreTareaRef.current.value;
    const descripcionTarea= descripcionTareaRef.current.value;
    const id = uuid();
    console.log("nombretarea:" + nombreTarea + id)
    
    if (nombreTarea === '') return;
    if (descripcionTarea === '') return;

    setpostIts((prevPostIts) => {
      const newPostIt ={
        id: uuid(),
        nombreTarea: nombreTarea,
        descripcionTarea: descripcionTarea
      }
      return [...prevPostIts,newPostIt]
    })
    nombreTareaRef.current.value = null;
    descripcionTareaRef.current.value= null;
    
  }

  return (
    <Fragment>
    <div className='row'>
      <div className='col-8 col-sm-8 ml-4 mt-4'>
        <li className='input-group'>
          <input ref={nombreTareaRef} id="nombretarea" type="text" className="form-control" placeholder="Nombre Tarea" aria-label="Username" aria-describedby="basic-addon1"></input>
          <input ref={descripcionTareaRef}id="descripcion" type="text" className="form-control" placeholder="Descripcion tarea" aria-label="Username" aria-describedby="basic-addon1"></input>
        </li>

      </div>
      <div className='col-4 col-sm-4 ml-2 mt-4'>
        <button type="button" className="btn btn-warning" onClick={agregarPostIt}>Agregar</button>
        
      </div>
    </div>
   
        <div className='row'>
          {postIts.map((postIt) =>(
            <PostitItem postIt={postIt} key={postIt.id}></PostitItem>
          ))}
        </div>
      </Fragment >
    
  );
}