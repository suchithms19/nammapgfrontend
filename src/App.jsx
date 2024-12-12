import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landing';
import TenantFormPage from './components/TenantFormPage';
import OwnerFormPage from './components/OwnerFormPage';
import ThankYouPage from './components/ThankYouPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tenantapply" element={<TenantFormPage />} />
        <Route path="/ownerapply" element={<OwnerFormPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App; 