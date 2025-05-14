import React from 'react';

const ModeratorDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Moderator Dashboard</h1>
      
      <div className="bg-white shadow-md rounded p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Pending Submissions</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Content</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">001</td>
              <td className="p-2 border">Lorem ipsum content here</td>
              <td className="p-2 border">Pending</td>
              <td className="p-2 border space-x-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded">Approve</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
              </td>
            </tr>
            {/* More rows dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModeratorDashboard;