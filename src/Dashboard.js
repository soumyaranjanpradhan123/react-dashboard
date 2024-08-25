import React, { useState } from 'react';

// Dummy Data
const data = [
  { id: 1, name: 'John Doe', age: 28, role: 'Developer' },
  { id: 2, name: 'Jane Smith', age: 34, role: 'Designer' },
  { id: 3, name: 'Sam Green', age: 22, role: 'Intern' },
  { id: 4, name: 'Lisa Brown', age: 45, role: 'Manager' },
  { id: 5, name: 'Tom White', age: 30, role: 'Developer' },
];

const Dashboard = () => {
  // State for filters
  const [filterRole, setFilterRole] = useState('');
  const [filterAge, setFilterAge] = useState('');

  // Filtered Data
  const filteredData = data.filter(item => {
    return (
      (!filterRole || item.role === filterRole) &&
      (!filterAge || item.age >= parseInt(filterAge))
    );
  });

  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Filters */}
      <div style={{ marginBottom: '20px' }}>
        <label>
          Role: 
          <select onChange={(e) => setFilterRole(e.target.value)} value={filterRole}>
            <option value="">All</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Intern">Intern</option>
            <option value="Manager">Manager</option>
          </select>
        </label>

        <label style={{ marginLeft: '20px' }}>
          Age Greater Than: 
          <input 
            type="number" 
            onChange={(e) => setFilterAge(e.target.value)} 
            value={filterAge} 
            placeholder="Enter Age" 
          />
        </label>
      </div>

      {/* Data Table */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
