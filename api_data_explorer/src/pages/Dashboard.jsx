import { useEffect, useState } from "react";
import { fetchUsers } from "../api/api";
import DataList from "../components/DataList";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const limit = 3;

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchUsers(page, limit);
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [page]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <Error message={error} onRetry={loadData} />;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            User Directory
          </h2>
          <p className="text-sm text-gray-500">
            Browse users fetched from public API
          </p>
        </div>

        {/* Filter */}
        <Filter onSearch={setSearch} />

        {/* Data */}
        <div className="mt-4">
          <DataList users={filteredUsers} />
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <Pagination page={page} setPage={setPage} />
        </div>

      </div>
    </div>
  );
}
