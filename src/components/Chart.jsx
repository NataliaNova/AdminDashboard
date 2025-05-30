import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';
  
  const data = [
    { name: 'Ene', ventas: 400 },
    { name: 'Feb', ventas: 300 },
    { name: 'Mar', ventas: 500 },
    { name: 'Abr', ventas: 200 },
    { name: 'May', ventas: 350 },
    { name: 'Jun', ventas: 600 },
  ];
  
  function Chart() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Ventas mensuales</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="ventas" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default Chart;
  