const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers(page, limit) {
  const response = await fetch(
    `${BASE_URL}?_page=${page}&_limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
