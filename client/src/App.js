import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoutes from './Routes/Routes';
import Theme from './Components/Theme/Theme';



function App() {
  return (
    <div>
      <Theme />
      <Router>
        <Routes>
          <Route path='*' element={<UserRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
