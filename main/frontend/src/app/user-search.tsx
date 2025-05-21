import React, { useState } from 'react';

interface Article {
  _id: string;
  title: string;
  description: string;
}

const UserSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);

  // Mock data for demonstration
  const allArticles: Article[] = [
    {
      _id: '1',
      title: 'The Future of Artificial Intelligence',
      description: 'A look into the advancement of AI technologies.',
    },
    {
      _id: '2',
      title: 'Climate Change and Its Effects',
      description: 'Exploring the impact of climate change globally.',
    },
    {
      _id: '3',
      title: 'Mental Health Awareness in 2025',
      description: 'Raising awareness and support strategies for mental health.',
    },
    {
      _id: '4',
      title: 'The Role of Renewable Energy',
      description: 'How solar and wind power are transforming our future.',
    },
  ];

  const handleSearch = () => {
    const filtered = allArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Search Articles</h1>

      <div className="mb-6 flex space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by keyword..."
          className="border rounded p-2 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {results.length > 0 ? (
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-semibold mb-3">Search Results</h2>
          <ul className="divide-y divide-gray-200">
            {results.map((article) => (
              <li key={article._id} className="py-2">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-gray-600">{article.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        query && (
          <p className="text-gray-500 mt-4">No articles found for "{query}".</p>
        )
      )}
    </div>
  );
};

export default UserSearch;
