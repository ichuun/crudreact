import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produklist from './components/Produklist';
import About from './components/About';
import Contact from './components/Contact';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Produklist />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
