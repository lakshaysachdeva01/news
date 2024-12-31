const { FETCH_METHODS } = require('../config/config');

/**
 * Attach click event to elements to fetch category ID and execute a callback.
 * @param {string} selector - CSS selector to identify clickable elements.
 * @param {Function} callback - Function to execute when an element is clicked. Receives category ID as a parameter.
 */
exports.attachCategoryClickListener = (selector, callback) => {
    document.addEventListener('click', (event) => {
        const target = event.target;

        // Ensure the click was on the desired element
        if (target.matches(selector)) {
            const categoryID = target.getAttribute('data-category-id'); // Retrieve category ID from a data attribute
            if (categoryID) {
                callback(categoryID); // Pass category ID to the callback
            } else {
                console.error('Category ID not found on clicked element.');
            }
        }
    });
};

/**
 * Fetch data from an endpoint.
 * @param {string} endpoint - API endpoint to fetch data from.
 * @returns {Promise<Object>} - Resolved data from the API.
 */
exports.fetchData = async (endpoint) => {
    try {
        const response = await fetch(endpoint, {
            method: FETCH_METHODS.GET,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.data) {
            throw new Error('Invalid data received from the API.');
        }

        return data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
