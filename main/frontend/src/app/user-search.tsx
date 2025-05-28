import React, { useState } from 'react';

interface Article {
  _id: string;
  title: string;
  description: string;
  evidence: 'for' | 'against';
  typeOfEvidence: 'strong' | 'weak';
  date: string; // ISO string format
  author: string;
  rating: number; // 1 to 5
}

const UserSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);

  // Updated mock data
  const allArticles: Article[] = [
    {
      _id: '1',
      title: 'Testing One',
      description: 'Testing One Description.',
      evidence: 'for',
      typeOfEvidence: 'strong evidence',
      date: '2024-11-15',
      author: 'Dr. Alice Brown',
      rating: 5,
    },
    {
      _id: '2',
      title: 'Testing Two',
      description: 'Testing Two Description.',
      evidence: 'against',
      typeOfEvidence: 'weak evidence',
      date: '2023-09-20',
      author: 'Prof. John Smith',
      rating: 3,
    },
    {
      _id: '3',
      title: 'Testing Three',
      description: 'Testing Three Description.',
      evidence: 'for',
      typeOfEvidence: 'weak evidence',
      date: '2025-01-10',
      author: 'Dr. Clara Johnson',
      rating: 4,
    },
    {
      _id: '4',
      title: 'Testing Four',
      description: 'Testing Four Description.',
      evidence: 'against',
      typeOfEvidence: 'strong evidence',
      date: '2024-05-01',
      author: 'Dr. Emily Davis',
      rating: 2,
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

  const formatDate = (isoDate: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString(undefined, options);
  };

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
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
              <li key={article._id} className="py-4">
                <h3 className="text-lg font-bold">{article.title}</h3>
                <p className="text-gray-700 mb-1">{article.description}</p>
                <p className="text-sm text-gray-600">
                  <strong>Author:</strong> {article.author}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Date:</strong> {formatDate(article.date)}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Evidence:</strong> {article.evidence} ({article.typeOfEvidence})
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Rating:</strong> <span className="text-yellow-500">{renderStars(article.rating)}</span>
                </p>
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
