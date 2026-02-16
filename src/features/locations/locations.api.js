/**
 * Locations API Service
 * Handles all API calls related to locations
 */

const API_URL = 'https://dash-backend-five.vercel.app/api/locations/saafai_locations';
const COMPANY_ID = 26; // Static company ID as per requirement

/**
 * Get all locations for a specific company
 * @param {number} companyId - The company ID (defaults to 26 if not provided)
 * @returns {Promise<Object>} - The response data
 */
export const getAllLocations = async (companyId = COMPANY_ID) => {
  try {
    const url = `${API_URL}?companyId=${companyId}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store' // Prevent caching to get fresh data
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check the actual structure of the response
    const locationsArray = data.data || data;

    // Transform the data to match the expected format
    const transformedData = Array.isArray(locationsArray) ? locationsArray.map(location => ({
      id: location.id || Math.random().toString(36).substr(2, 9),
      name: location.name || 'Unnamed Location',
      latitude: parseFloat(location.latitude) || 0,
      longitude: parseFloat(location.longitude) || 0,
      status: location.status || 'UNKNOWN',
      type: location.type || 'WASHROOM',
      ...location
    })) : [];

    return {
      success: true,
      data: transformedData
    };
  } catch (error) {
    console.error('Error fetching locations:', error);
    return {
      success: false,
      error: error.message || 'Failed to fetch locations',
      data: [] // Return empty array on error
    };
  }
};

/**
 * Get a single location by ID
 * @param {string} locationId - The ID of the location
 * @returns {Promise<Object>} - The location data
 */
export const getLocationById = async (locationId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/locations/${locationId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      success: true,
      data: data.data
    };
  } catch (error) {
    console.error(`Error fetching location ${locationId}:`, error);
    return {
      success: false,
      error: error.message || 'Failed to fetch location'
    };
  }
};

/**
 * Update a location
 * @param {string} locationId - The ID of the location to update
 * @param {Object} updates - The updates to apply
 * @returns {Promise<Object>} - The updated location data
 */
export const updateLocation = async (locationId, updates) => {
  try {
    const response = await fetch(`${API_BASE_URL}/locations/${locationId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      success: true,
      data: data.data
    };
  } catch (error) {
    console.error(`Error updating location ${locationId}:`, error);
    return {
      success: false,
      error: error.message || 'Failed to update location'
    };
  }
};

/**
 * Delete a location
 * @param {string} locationId - The ID of the location to delete
 * @returns {Promise<Object>} - The result of the operation
 */
export const deleteLocation = async (locationId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/locations/${locationId}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      success: true
    };
  } catch (error) {
    console.error(`Error deleting location ${locationId}:`, error);
    return {
      success: false,
      error: error.message || 'Failed to delete location'
    };
  }
};

export default {
  getAllLocations,
  getLocationById,
  updateLocation,
  deleteLocation
};
