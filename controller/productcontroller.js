const { API_BASE_URL } = require('../config/config');
const { getWebsiteID, fetchData } = require('../utils/helper');


exports.getcategories = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/category/get-all-categories/${websiteID}`);
     return data || null
     
};


exports.getallproduct = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/product-management/get-all-products/${websiteID}`);
     
     return data || null
     
};





exports.getproductdetails = async(slug) => {  
    const websiteID = await getWebsiteID(); 
 
    

     const data = await fetchData(`${API_BASE_URL}/website/product-management/get-product-by-slug/${websiteID}?slug=${slug}`);
     return data || null
     
};



exports.getCategoryProducts = async (category) => {
    const websiteID = await getWebsiteID();
    const data = await fetchData(`${API_BASE_URL}/website/product-management/get-all-products/${websiteID}`);
    
    if (!data || data?.length===0) {
        return []; // Return null if no data or no products are found
    }

    // Filter products that match the provided category ID
    const filteredProducts = data?.filter(product => product.category._id === category);

    return filteredProducts;


};

exports.getrelatedproducts = async (categoryid) => {
    const websiteID = await getWebsiteID();
    const data = await fetchData(`${API_BASE_URL}/website/product-management/get-all-products/${websiteID}`);
    
    if (!data || data?.length===0 || !categoryid) {
        return []; // Return null if no data or no products are found
    }

    // Filter products that match the provided category ID
    const filteredProducts = data?.filter(product => product.category._id === categoryid);

    return filteredProducts;


};
