
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss'
import { Header } from './components/header';
import { Home } from './pages/home';
import { Restorany } from './pages/restorany';
import React from 'react';

export const SearchContext = React.createContext()

function App() {
  const [searchValue, setSearchValue] = React.useState('')
   return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/restorany' element={<Restorany/>}/>
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  )
}
export default App;
