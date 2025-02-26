import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import RCM from './pages/RCM';
import Credentialing from './pages/Credentialing';
import MedicalCoding from './pages/MedicalCoding';
import BillingServices from './pages/BillingServices';
import CReport from './pages/CReport';
import WelcomeScreen from './pages/welcome/WelcomeScreen';
import PrivacyPolicy from './pages/PrivacyPolicy';

function PagesRoutes() {
  const location = useLocation();
  const isWelcomeScreen = location.pathname === '/';

  return (
    <>
      {/* Agar Welcome Screen pe ho, to Header/Footer hide karo */}
      {!isWelcomeScreen && <Header />}

      <Routes>
        <Route element={<WelcomeScreen />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<About />} path="/about" />
        <Route element={<Services />} path="/services" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<RCM />} path="/revenue-cycle" />
        <Route element={<Credentialing />} path="/credentialing" />
        <Route element={<MedicalCoding />} path="/medical-coding" />
        <Route element={<BillingServices />} path="/billing-services" />
        <Route element={<CReport />} path="/compliance-report" />
        <Route element={<PrivacyPolicy/>} path='/privacy-policy' />
      </Routes>

      {!isWelcomeScreen && <Footer />}
    </>
  );
}

export default PagesRoutes;
