function login() {
  const pemilik = document.getElementById("pemilik").value;
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (pemilik && user && pass) {
    localStorage.setItem("login", "true");
    localStorage.setItem("pemilik", pemilik);
    window.location.href = "map.html";
  } else {
    alert("Semua data wajib diisi");
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

if (window.location.pathname.includes("map.html")) {
  if (!localStorage.getItem("login")) {
    window.location.href = "index.html";
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      document.getElementById("namaPemilik").innerText =
        localStorage.getItem("pemilik");
    });
  }
}

function initMap() {
  const center = { lat: -7.6959088, lng: 111.9424649 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: center,
    mapTypeId: "satellite",
  });

  const tanah = [
    { lat: -7.6952, lng: 111.9418 },
    { lat: -7.6951, lng: 111.9432 },
    { lat: -7.6966, lng: 111.9430 },
    { lat: -7.6967, lng: 111.9419 },
  ];

  new google.maps.Polygon({
    paths: tanah,
    strokeColor: "#fff",
    strokeWeight: 2,
    fillColor: "#b0005a",
    fillOpacity: 0.6,
    map: map
  });

  new google.maps.Marker({
    position: center,
    map: map,
    title: "Lokasi Tanah",
  });
}
