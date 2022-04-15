//Import modules
import {BrowserRouter as Router,} from 'react-router-dom';
import {useState} from 'react';

//Import of css and componentes files
import './App.css';
import NavBar from './componentes/NavBar.jsx';
import AnimatedRoutes from './componentes/AnimatedRoutes.jsx';

function App() {

    const [pageSelected, setPageSelected] = useState("home");

    const handlePageSelect= (page) =>{
        setPageSelected(page);
    };
    
    return (
        <Router>
          <NavBar page={pageSelected} />
          <AnimatedRoutes handlePageSelect={handlePageSelect}/>
        </Router>
  );
}


export default App;
