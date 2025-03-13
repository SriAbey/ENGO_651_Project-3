// Initialize the map
const map = L.map("map").setView([51.0447, -114.0719], 12); // Calgary coordinates

// Add a tile layer (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Initialize marker clustering and spiderfier
const markers = L.markerClusterGroup();
const oms = new OverlappingMarkerSpiderfier(map);

// Initialize Flatpickr (date range picker)
flatpickr("#startDate", {
    enableTime: false,
    dateFormat: "Y-m-d",
});

flatpickr("#endDate", {
    enableTime: false,
    dateFormat: "Y-m-d",
});

// Function to fetch building permits data
async function fetchBuildingPermits(startDate, endDate) {
    const url = `https://data.calgary.ca/resource/c2es-76ed.geojson?$where=issueddate >= '${startDate}'`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Function to display markers on the map
function displayMarkers(data) {
    markers.clearLayers(); // Clear existing markers

    data.features.forEach(feature => {
        const marker = L.marker([
            feature.geometry.coordinates[1],
            feature.geometry.coordinates[0]
        ]);

        // Add a popup with building permit details
        marker.bindPopup(`
            <b>Issued Date:</b> ${feature.properties.issueddate}<br>
            <b>Work Class Group:</b> ${feature.properties.workclassgroup}<br>
            <b>Contractor Name:</b> ${feature.properties.contractorname}<br>
            <b>Community Name:</b> ${feature.properties.communityname}<br>
            <b>Original Address:</b> ${feature.properties.originaladdress}
        `);

        markers.addLayer(marker); // Add marker to the cluster group
        oms.addMarker(marker); // Add marker to the spiderfier
    });

    map.addLayer(markers); // Add cluster group to the map
}

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', async () => {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (!startDate || !endDate) {
        return;
    }

    // Add functionality for handling search based on date range here
});

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', async () => {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (!startDate || !endDate) {
        alert('Please select both start and end dates.');
        return;
    }

    const data = await fetchBuildingPermits(startDate, endDate);
    displayMarkers(data);
});