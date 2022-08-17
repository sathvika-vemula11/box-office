const api = 'https://api.tvmaze.com';

export async function apiGet(query) {
  const response = await fetch(`${api}${query}`).then(r => r.json());
  return response;
}
