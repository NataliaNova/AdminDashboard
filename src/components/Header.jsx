import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white border-b px-4 sm:px-6 py-4 shadow-sm flex flex-wrap justify-between items-center">
      <h1 className="text-base sm:text-xl font-semibold text-gray-800">
        Panel de administración
      </h1>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
        <span className="text-sm text-gray-600"> Nat | Admin</span>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-100 transition"
        >
          <span>Salir</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
