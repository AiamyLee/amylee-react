import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import rootRouter from './router/index';
// import '@/style';

// const Dashboard = lazy(()=>import ("../"))
function App() {
  const AppRoutes = () => useRoutes(rootRouter);

  return (
    <>
      <AppRoutes></AppRoutes>
    </>
  );
}

export default App;
