import './App.css'
import FormSearch from './componentes/FormSearch'
import MainPage from './componentes/MainPage';
import Movies from './componentes/Movies'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SingleMovie from './componentes/SingleMovie';


//https://www.omdbapi.com/?apikey=e9b30f2c&s=troya

//https://www.omdbapi.com/?apikey=e9b30f2c&i=tt11796304

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<MainPage/> }/>
            <Route path = '/movies/:id' element = {<SingleMovie/>}/>
          </Routes> 
        </BrowserRouter>
      </div>
  )
}

export default App
