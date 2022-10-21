import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BookslistAdmin from './BookslistAdmin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addbooks from './Addbooks';
import Readbook from './Readbook';
import Editbook from './Editbook';
import Viewers from './Viewers';
import Viewersread from './Viewersread';
import Firstpage from './Firstpage'

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Firstpage/>}></Route>
      <Route path='/BookListAdmin' element={<BookslistAdmin/>}></Route>
    <Route path='/Addbooks' element={<Addbooks/>}></Route>
    <Route path='/readbook/:id' element={<Readbook/>}></Route>
    <Route path='/Editbook/:id' element={<Editbook/>}></Route>
    <Route path='/Viewers' element={<Viewers/>}></Route>
    <Route path='/Viewersread/:id' element={<Viewersread/>}></Route>
  </Routes>
  </BrowserRouter>
    
  );
}

export default App;
