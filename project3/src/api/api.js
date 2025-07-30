export const apiClient = {

  async get(url, req) {
    const response = await fetch(`http://localhost:8080${url}`, {
      method: 'GET'
    });
    const data = await response.json();
    return data;
  },

  async post(url, req) {
    const response = await fetch(`http://localhost:8080${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req)
    });
    const data = await response.json();
    return data;
  },
};