import { Routes, Route } from 'react-router-dom';
import Products from '../views/Products';
import User from '../views/User'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default AppRoutes;
