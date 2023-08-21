import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AllRouter } from './Route';

const Index = () => {
  return (
    <Routes>
      {AllRouter.map((route, i) => {
        <Route 
          path={route.path}
          element={route.component}
          key={i}
        />
      })}
    </Routes>
  )
}

export default Index;