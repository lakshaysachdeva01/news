const { API_BASE_URL } = require('../config/config');
const { getWebsiteID, fetchData } = require('../utils/helper');

exports.getHomeDesktopBanner = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/banner/get-all-banners/${websiteID}?type=HOME_BANNER`);
     return data || null
     
};
exports.getHomepopupBanner = async () => {
    try {
        const websiteID = await getWebsiteID();
        const data = await fetchData(`${API_BASE_URL}/website/banner/get-all-banners/${websiteID}?type=POPUP_BANNER`);
        console.log('Fetched Data:', data);

        if (data && Array.isArray(data) && data.length > 0) {
            return data; // Return banners
        } else {
            return []; // Return empty array if no banners
        }
    } catch (error) {
        
        return []; // Return empty array on error
    }
};



exports.gettestimonial = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/testimonial/get-all-testimonials/${websiteID}`);
     return data || null
};


