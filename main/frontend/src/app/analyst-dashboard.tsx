import React, { useEffect, useState } from 'react';

interface Article {
  _id: string;
  title: string;
  description: string;
  submittedBy: string;
  status: string;
}

const AnalystDashboard: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Example data
    const exampleArticles: Article[] = [
      {
        _id: '1',
        title: 'Test 1 title',
        description: 'Test 1 description',
        submittedBy: 'Submitter 1',
        status: 'Waiting',
      },
      {
        _id: '2',
        title: 'Test 2 title',
        description: 'Test 2 description',
        submittedBy: 'Submitter 2',
        status: 'Waiting',
      },
      {
        _id: '3',
        title: 'Test 3 title',
        description: 'Test 3 description',
        submittedBy: 'Submitter 3',
        status: 'Waiting',
      },
      
    ];

    setArticles(exampleArticles);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Analyst Dashboard</h1>

      <div className="bg-white shadow-md rounded p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Submitted Articles</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Submitted By</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {articles.map(article => (
              <tr key={article._id}>
                <td className="p-2 border">{article._id}</td>
                <td className="p-2 border">{article.title}</td>
                <td className="p-2 border">{article.description}</td>
                <td className="p-2 border">{article.submittedBy}</td>
                <td className="p-2 border">{article.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalystDashboard;
