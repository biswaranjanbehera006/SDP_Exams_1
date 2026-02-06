export default function DataList({ users }) {
  if (users.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">
        No users found
      </p>
    );
  }

  return (
    <div className="grid gap-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="border rounded-lg p-4 shadow-sm bg-gray-50"
        >
          {/* Basic Info */}
          <h3 className="text-lg font-semibold text-gray-800">
            {user.name}
          </h3>
          <p className="text-sm text-gray-600">
            Username: {user.username}
          </p>

          {/* Contact */}
          <div className="mt-2 text-sm text-gray-700">
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>

          {/* Address */}
          <div className="mt-2 text-sm text-gray-700">
            <p className="font-medium">Address:</p>
            <p>
              {user.address.street}, {user.address.suite},
              {user.address.city} – {user.address.zipcode}
            </p>
          </div>

          {/* Company */}
          <div className="mt-2 text-sm text-gray-700">
            <p className="font-medium">Company:</p>
            <p>{user.company.name}</p>
            <p className="italic text-gray-500">
              “{user.company.catchPhrase}”
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
