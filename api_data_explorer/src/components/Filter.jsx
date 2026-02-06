export default function Filter({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
