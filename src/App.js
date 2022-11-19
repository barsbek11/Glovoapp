
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss'
import { Header } from './components/header';
import { Home } from './pages/home';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
