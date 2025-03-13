## ENGO 651 - Lab Assignment 3

# Building Permits in Calgary - Geoweb Application

## Overview
This web mapping application allows users to visualize and filter building permits in Calgary. The application fetches data from the City of Calgary’s Open Data Portal and displays building permits on an interactive Leaflet.js map.

## Features
- **Interactive Map**: Displays a Leaflet.js map centered on Calgary.
- **Date Range Filtering**: Users can filter building permits by issued date using a date range picker.
- **Marker Popups**: Clicking on a marker reveals details about the building permit, including:
  - Issued Date
  - Work Class Group
  - Contractor Name
  - Community Name
  - Original Address
- **Overlapping Marker Handling**: Uses OverlappingMarkerSpiderfier to manage markers at the same location.
- **Marker Clustering**: Uses Leaflet.markercluster to improve visualization when markers are densely packed.
- **Dynamic Updates**: The map refreshes when a new date range is selected, displaying only the relevant results.

## Technologies Used
- **HTML, CSS, JavaScript**: Frontend technologies used to build the web application.
- **Leaflet.js**: JavaScript library for interactive maps.
- **Open Calgary API**: Provides GeoJSON data for building permits.
- **OverlappingMarkerSpiderfier**: Handles overlapping markers.
- **Leaflet.markercluster**: Improves marker visibility and clustering.
- **Flatpickr.js**: Date range picker for user input.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone <repository_url>
   ```
2. Navigate to the project folder:
   ```sh
   cd <project_folder>
   ```
3. Open `index.html` in a web browser.

## Usage
1. Open the web application in a browser.
2. Select a date range using the date picker.
3. View building permits displayed as markers on the map.
4. Click on a marker to see detailed information.
5. Adjust zoom levels for better marker visibility.

## API Endpoint Used
- **Building Permits Data (GeoJSON)**: 
  ```
  https://data.calgary.ca/resource/c2es-76ed.geojson
  ```
- **Date Range Query Example**:
  ```
  https://data.calgary.ca/resource/c2es-76ed.geojson?$where=issueddate > 'YYYY-MM-DD' and issueddate < 'YYYY-MM-DD'
  ```

## Dependencies
- [Leaflet.js](https://leafletjs.com/)
- [Flatpickr.js](https://flatpickr.js.org/)
- [OverlappingMarkerSpiderfier](https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet)
- [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)

## Author
Sri RAji Abeywickrama