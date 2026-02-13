import './App.css'
import { lazy, Suspense } from 'react'

// Delay time (2 seconds)
const timeout = 6000;

// Add delay to lazy import
const DashBoard = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./components/Dashboard'));
    }, timeout);
  })
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashBoard />
    </Suspense>
  );
}

export default App;
