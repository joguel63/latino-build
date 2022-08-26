const baseUrl = process.env.REACT_APP_BASE_URL;
const token = JSON.parse(localStorage.getItem("user"))?.token;

async function GETLogin(url) {
  try {
    const response = await fetch(baseUrl + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        ...(!!token && { Authorization: token }),
      },
    });
    const json = await response.json();
    if (response.status <= 299) return { data: json, error: null };
    return { data: null, error: json };
  } catch (error) {
    return { data: null, error: error };
  }
}

async function GET(url) {
  try {
    const response = await fetch(baseUrl + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(!!token && { Authorization: `Bearer ${token}` }),
        Accept: "*/*",
      },
    });
    const json = await response.json();
    if (response.status <= 299) return { data: json, error: null };
    return { data: null, error: json };
  } catch (error) {
    return { data: null, error: error };
  }
}

async function POST(url, body) {
  try {
    const response = await fetch(baseUrl + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        ...(!!token && { Authorization: `Bearer ${token}` }),
      },

      body: JSON.stringify(body),
    });
    const json = await response.json();
    if (response.status <= 299) return { data: json, error: null };
    return { data: null, error: json };
  } catch (error) {
    return { data: null, error: error };
  }
}

async function POSTFILE(url, body) {
  try {
    const response = fetch(baseUrl + url, {
      method: "POST",
      headers: {
        ...(!!token && { Authorization: `Bearer ${token}` }),
      },

      body: body,
    });

    const json = (await response).json();
    if (response.status <= 299) return { data: json, error: null };
    return { data: null, error: json };
  } catch (error) {
    return { data: null, error: error };
  }
}

async function PUT(url, body) {
  try {
    const response = await fetch(baseUrl + url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...(!!token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    if (response.status <= 299) return { data: json, error: null };
    return { data: null, error: json };
  } catch (error) {
    return { data: null, error: body };
  }
}

async function DELETE(url) {
  try {
    const response = await fetch(baseUrl + url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        ...(!!token && { Authorization: `Bearer ${token}` }),
      },
    });
    const json = await response.json();
    if (response.status <= 299) return { data: json, error: null };
    return { data: null, error: json };
  } catch (error) {
    return { data: null, error: error };
  }
}

export { GET, POST, PUT, DELETE, GETLogin, POSTFILE };
