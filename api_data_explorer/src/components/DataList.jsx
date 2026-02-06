const DataList = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h3 className="highlight">{user.name}</h3>

          <p><b>Username:</b> {user.username}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Website:</b> {user.website}</p>

          <p>
            <b>Address:</b>{" "}
            {user.address.street}, {user.address.suite},{" "}
            {user.address.city} - {user.address.zipcode}
          </p>

          <p>
            <b>Company:</b> {user.company.name}
          </p>
        </div>
      ))}
    </>
  );
};

export default DataList;
