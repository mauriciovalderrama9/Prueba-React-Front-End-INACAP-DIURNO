import {React,Fragment} from 'react';
import './App.css';

import { PostitList } from './components/postitList';

export function App() {

  

  return (
    <Fragment>
      
      <div className='container'>
        <PostitList/>
      </div>
    </Fragment>
  ); 
}
