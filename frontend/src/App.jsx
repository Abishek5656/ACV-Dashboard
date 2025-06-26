
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { CircularProgress } from '@mui/material';

// Lazy load the page components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const TeamDashboard = lazy(() => import('./pages/TeamDashboard'));
const ACVDashboard = lazy(() => import('./pages/acvDashboad'));
const AccountDashboard = lazy(() => import('./pages/AccountDashboard'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<TeamDashboard />} />
          <Route path="/acv" element={<ACVDashboard />} />
          <Route path="/account" element={<AccountDashboard />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
