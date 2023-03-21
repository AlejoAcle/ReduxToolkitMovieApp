import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Header } from './components/Header/Header';
import {Home} from './components/Home/Home';
import  { MovieDetails } from './components/MovieDetails/MovieDetails';
import {PageNotFound} from './components/PageNotFound/PageNotFound'
import { Footer } from './components/Footer/Footer';


 




function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="/" element={<PageNotFound />} />
        </Routes>
      </div>
        <Footer />
    </Router>
  );
}

export default App;



// https://nabendu82.medium.com/react-redux-toolkit-with-project-626cfc77aec