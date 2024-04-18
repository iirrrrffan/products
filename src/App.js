import './App.css';
import All from './compo/all/All';
import Category1 from './compo/category/category1/Category1';
import Category2 from './compo/category/category2/Category2';
import Create from './compo/create/Create';
import Edit from './compo/edit/Edit';
import Home from './compo/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='all' element={<All/>}/>
      <Route path='1' element={<Category1/>}/>
      <Route path='2' element={<Category2/>}/>
      <Route path='edit' element={<Edit/>}/>
      <Route path='create' element={<Create/>}/>

     </Routes>
    </div>
  );
}

export default App;
