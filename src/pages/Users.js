import React from 'react';
import Form from '../ui/Form/Form'; // Import from ui folder

const Users = () => {
  const fields = [
    { label: 'Name', type: 'text', name: 'name', required: true },
    { label: 'Email', type: 'email', name: 'email', required: true },
  ];

  const handleSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <div>
      <h1>Users</h1>
      <Form fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};

export default Users;
