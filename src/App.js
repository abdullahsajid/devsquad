import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './components/Main';
import Form from './components/form/Form';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Main/>}/>
    {/* <Route path='/contactus' element={<Form/>}/> */}
   </Routes>
   </BrowserRouter>
  );
}

export default App;
