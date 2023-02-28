import './App.css'; 
import HomePage from './components/ArrangeHomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateNewInternships from './components/createNewInternships/createNewInternships';



function App() {
 
  return (
    <>
    <Router>
     <Routes>
     <Route path='/' element={<HomePage />} />
     <Route path='/create-new-internship?' element={<CreateNewInternships />} />
     </Routes>
      </Router>

    </>
  );
}

export default App;
