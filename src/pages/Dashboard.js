import React from 'react';
import Table from '../ui/Table/Table'; // Import from ui folder

const Dashboard = () => {
  const data = [
    { Name: 'Alice', Role: 'Admin', Status: 'Active' },
    { Name: 'Bob', Role: 'User', Status: 'Inactive' },
  ];
  const headers = ['Name', 'Role', 'Status'];

  return (
    <div>
      <h1>Dashboard</h1>
      <Table headers={headers} data={data} />
    </div>
  );
};

export default Dashboard;
