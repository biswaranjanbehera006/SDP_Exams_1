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
      setError(err.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [page]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <Error message={error} onRetry={loadData} />;

  return (
    <div className="app-container">
      {/* Header */}
      <h1>API Data Explorer</h1>
      <p className="subtitle">Browse users fetched from public API</p>

      {/* Search Filter */}
      <Filter onSearch={setSearch} />

      {/* Data List */}
      <DataList users={filteredUsers} />

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
}
