import Chart from './Chart';
import UserTable from './UserTable';

function Card({ title, value, color }) {
  return (
    <div className={`p-4 sm:p-6 rounded-lg shadow-lg text-white ${color}`}>
      <h3 className="text-base sm:text-lg">{title}</h3>
      <p className="text-2xl sm:text-3xl font-bold">{value}</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Resumen general</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <Card title="Productos" value="120" color="bg-blue-500" />
        <Card title="Usuarios" value="54" color="bg-green-500" />
        <Card title="Ventas" value="€2,340" color="bg-yellow-500" />
      </div>

      <div className="mb-6">
        <Chart />
      </div>
      <div className="mb-6">
        <UserTable />       
    </div>
      
    </div>
  );
}

export default Dashboard;
