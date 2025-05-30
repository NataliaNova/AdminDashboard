/* import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserTable from './components/UserTable';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';



function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="usuarios" element={<UserTable />} />
      </Route>
    </Routes>
  );
}

export default App;
 */
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserTable from './components/UserTable';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import ComingSoon from '././components/ComingSoon'; // 👈 Agrega esta línea

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Rutas protegidas bajo Layout */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="usuarios" element={<UserTable />} />
        <Route path="productos" element={<ComingSoon />} />       {/* 🔧 Nueva */}
        <Route path="configuracion" element={<ComingSoon />} />   {/* 🔧 Nueva */}
      </Route>
    </Routes>
  );
}

export default App;
