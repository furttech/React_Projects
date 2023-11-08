import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './app.css';
import Car2 from './Car2.js';
import Donut from './Donut';
import Boat from './Boat';
import Logic from './Logic';
import Mapping from './Mapping';
import Keymaps from './Keymaps';
import Inputform from './Inputform';
import Textarea from './Textarea';
import Selectionbox from './Selectionbox';
import Memo from './Memo';
import ContextHooks from './ContextHooks';
import CustomHooks from './CustomHooks';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import UpdateStateArrays from './UpdateStateArrays';
import UseRefHooks from './UseRefHooks';
import UseRefPreviousState from './UseRefPreviousState';
import UseReducerHooks from './UseReducerHooks';
import UseCallBackHooks from './UseCallBackHook';
import UseMemo from './UseMemo';

var t = new Donut(0,1);

const element1 = (
  
  <div id="d1">

    <div className='f-container-0'>
      <div>
        <div>Languages:</div>
      </div>
      <div>
        <div>{result}</div>
      </div>
      <div>
        <div>C/C++</div>
      </div>
      <div>
        <div>Cobalt</div>
      </div>
      <div>
        <div>Java</div>
      </div>
      <div>
        <div>Basic</div>
      </div>
      <div>
        <div>Assembly [Intel/x86]</div>
      </div>
    </div>
    <div className='f-container-1'>
      <div>
        <div>Computers:</div>
      </div>
      <div>
        <div>Laptop</div>
      </div>
      <div>
        <div>Raspberry Pi</div>
      </div>
      <div>
        <div>Desktop</div>
      </div>
      <div>
        <div>All-in-One</div>
      </div>
      <div>
        <div>Odroid</div>
      </div>
    </div>
    
    <div className='f-container-2'>
      <div className='flex-child-1'>
         <p>{t.topping}</p>
      </div>
      <div className='flex-child-2'>
        <p>{t.cake}</p>
      </div>
      <div className='flex-child-3'>
        <p>"sub element 3"</p>
      </div>
    </div>
  
  <Car2 />
  <Boat />
  <Logic opp={['add','subtract','divide','multiply']} />
  <Mapping maplist={['item1','item2','item3','item4']} />
  <Keymaps keylist={[{id:'0',phrase:'key_item_1'},{id:'1',phrase:'key_item_2'},{id:'2',phrase:'key_item_3'}]} />
  <p> </p>
  <Inputform />
  <p> </p>
  <Textarea />
  <p></p>
  <Selectionbox />
  <p></p>
  <p>
   The {t.cake} cake is a lie!
   </p>
   <Rapp />
   <hr />
   <Memo />
   <hr />
   <UpdateStateArrays />
   <hr />
   <p>

   </p>
   <ContextHooks />
   <hr />
   <UseRefHooks />
   <hr />
   <UseRefPreviousState />
   <hr />
   <UseReducerHooks />
   <hr />
   <UseCallBackHooks />
   <p></p>
   <UseMemo />
   <p></p>
   <CustomHooks />
  </div>

);

export default function Rapp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( element1 );


