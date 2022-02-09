import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import PhonesList from './pages/PhonesList/PhonesList';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<PhonesList />}/>
      </Routes>
    </Router>
  );
}

export default App;
