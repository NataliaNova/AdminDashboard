import { FiHome, FiUsers, FiBox, FiSettings, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button onClick={toggleSidebar} className="md:hidden p-4">
        <FiMenu size={24} />
      </button>

      <aside
        className={`fixed top-0 left-0  w-64 bg-gray-800 text-white p-6 z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:relative md:translate-x-0`}
      >
  
        <div className="flex justify-between items-center mb-10 md:hidden">
          <h2 className="text-2xl font-bold">AdminPro</h2>
          <button onClick={closeSidebar}>
            <FiX size={24} />
          </button>
        </div>

        <nav className="space-y-4">
          <NavItem icon={<FiHome />} label="Dashboard" path="/dashboard" onClick={closeSidebar} />
          <NavItem icon={<FiUsers />} label="Usuarios" path="/usuarios" onClick={closeSidebar} />
          <NavItem icon={<FiBox />} label="Productos" path="/productos" onClick={closeSidebar} />
          <NavItem icon={<FiSettings />} label="Configuración" path="/configuracion" onClick={closeSidebar} />
        </nav>
      </aside>

      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"
        />
      )}
    </>
  );
}

function NavItem({ icon, label, path, onClick }) {
  return (
    <Link
      to={path}
      onClick={onClick}
      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition-colors"
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}

export default Sidebar;
