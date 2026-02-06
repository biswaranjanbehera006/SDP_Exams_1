export default function Pagination({ page, setPage }) {
  return (
    <div className="flex items-center gap-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
      >
        Previous
      </button>

      <span className="text-gray-700 font-medium">
        Page {page}
      </span>

      <button
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
}
