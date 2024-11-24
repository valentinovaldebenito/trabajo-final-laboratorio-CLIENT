import { Routes, Route } from 'react-router-dom';
import Products from '../views/Products';
import Welcome from '../views/Welcome';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
}

export default AppRoutes;
