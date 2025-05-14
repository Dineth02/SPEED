import React from 'react';

const AnalystDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Analyst Dashboard</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-2xl mt-2">2345</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Reports Reviewed</h2>
          <p className="text-2xl mt-2">139</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Activity Log</h2>
        <ul className="list-disc pl-5">
          <li>User A submitted a report</li>
          <li>Moderator X approved a post</li>
          <li>User B was flagged for review</li>
          {/* More logs... */}
        </ul>
      </div>
    </div>
  );
};

export default AnalystDashboard;