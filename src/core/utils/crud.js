const baseUrl = "http://latino-api.herokuapp.com/api";
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
        ...(!!token && { Authorization: token }),
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
        ...(!!token && { Authorization: token }),
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
    fetch(baseUrl + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        ...(!!token && { Authorization: token }),
      },

      body: JSON.stringify(body),
    })
      .then((response) => response.blob())
      .then((blob) => {
        var file = new Blob([blob], { type: "application/pdf" });
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL, "_blank");
      });
    return { data: null, error: "" };
  } catch (error) {
    return { data: null, error: error };
  }
}

async function PUT(url, body) {
  try {
    const response = await fetch(baseUrl + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(!!token && { Authorization: token }),
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

export { GET, POST, PUT, DELETE, GETLogin, POSTFILE };
