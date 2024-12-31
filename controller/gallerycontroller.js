const { API_BASE_URL } = require('../config/config');
const { getWebsiteID, fetchData } = require('../utils/helper');


exports.getgallery = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/gallery/get-all-galleries/${websiteID}`);
    
     return data || null
};
