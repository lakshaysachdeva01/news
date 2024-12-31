require('dotenv').config();  // Load environment variables from .env file
const { API_BASE_URL , WEBSITE_ID_KEY} = require('./config/config');
const { getWebsiteID } = require('./utils/helper');
const { getHomeDesktopBanner } = require('./controller/homecontroller');
const { getHomepopupBanner } = require('./controller/homecontroller');
const { getBlog , getBlogfull , getlatestblogs} = require('./controller/blogController');
const { getgallery } = require('./controller/gallerycontroller');
const { gettestimonial } = require('./controller/homecontroller');
const { verifyRecaptcha } = require('./controller/captchacontroller');
const { getcategories , getallproduct , getproductdetails, getCategoryProducts , getrelatedproducts } = require('./controller/productcontroller');

const { CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS , DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS ,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS ,PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS ,CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS} = require('./config/config');



const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Define the views directory

// Serve static files (like CSS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID(); 
    const banners = await getHomeDesktopBanner();
    const popupbanners = await getHomepopupBanner();
    const gallery = await getgallery();
    const testimonial = await gettestimonial();
    const blogs = await getBlog();
    const categorylist = await getcategories();

    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    }
    res.render('index', {body: "",baseUrl, banners,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY,popupbanners,gallery,testimonial,blogs,categorylist, seoDetails, pathPart: ""});
});


app.get('/about', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 
   
    res.render('about', {body: "",baseUrl,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY, seoDetails,categorylist, pathPart: ""});
});


app.get('/products', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID();
    const products = await getallproduct();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 
   
    res.render('products', {body: "",baseUrl, seoDetails,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY, categorylist,products, pathPart: ""});
});

app.get('/services', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 
   
    res.render('services', {body: "",baseUrl, seoDetails,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY, categorylist, pathPart: ""});
});

app.get('/service-enquire/:servicetype', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const { servicetype } = req.params;
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID(); 
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 
    res.render('service-enquire', {body: "",baseUrl, seoDetails,servicetype,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS,categorylist,SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY, pathPart: ""});
});

app.get('/dealership', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID(); 
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 
   
    res.render('dealership', {body: "",baseUrl, seoDetails,categorylist,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS,DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY, pathPart: ""});
});

app.get('/gallery', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID();
    const gallery = await getgallery();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 
   
    res.render('gallery', {body: "",baseUrl, seoDetails,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY, gallery,categorylist, pathPart: ""});
});

app.get('/fullgallery', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 
   
    res.render('fullgallery', {body: "",baseUrl, seoDetails,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY, categorylist, pathPart: ""});
});

app.get('/videogallery', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 
   
    res.render('videogallery', {body: "",baseUrl, seoDetails,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY, categorylist, pathPart: ""});
});


app.get('/colour-palette', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 
   
    res.render('colour-palette', {body: "",baseUrl, seoDetails,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY, categorylist, pathPart: ""});
});


app.get('/contact', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID(); 
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 
   
    res.render('contact', {body: "", seoDetails,baseUrl,CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY,categorylist,verifyRecaptcha, pathPart: ""});
});


app.get('/career', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID(); 
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 
   
    res.render('career', {body: "",seoDetails,categorylist,baseUrl,CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS,websiteID,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, API_BASE_URL,WEBSITE_ID_KEY, pathPart: ""});
});


app.get('/blog', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID();
    const blogs = await getBlog();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 
   
    res.render('blog', {body: "", seoDetails,blogs,categorylist,baseUrl,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY,  pathPart: ""});
});

app.get('/blogfull/:slug', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const { slug } = req.params; // Extract slug from params
    const blogfull = await getBlogfull(slug);
    const blogs = await getBlog();
    const categorylist = await getcategories();
    const latestblog = await getlatestblogs(slug);
    const websiteID = await getWebsiteID();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    };
    res.render('blogfull', {body: "", baseUrl, blogfull,baseUrl, seoDetails, blogs, latestblog, POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL, WEBSITE_ID_KEY, categorylist, pathPart: ""});
});


app.get('/product-details/:slug', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const { slug } = req.params;
    const websiteID = await getWebsiteID();
    const categorylist = await getcategories();
    const productdetails = await getproductdetails(slug);
    const relatedproducts = await getrelatedproducts(productdetails?.category?._id);
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    }  
    
    res.render('product-details', {body: "",categorylist,baseUrl,productdetails,relatedproducts,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY,  seoDetails, pathPart: ""});
});


app.get('/category-items/:category', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const { category } = req.params; // Get category from URL parameter
    const websiteID = await getWebsiteID();
    const categorylist = await getcategories();
    const categoryproducts = await getCategoryProducts(category);
    
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    };
  
    res.render('category-items', {body: "", seoDetails  ,baseUrl, categorylist ,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY,  categoryproducts , pathPart: ""});
});


app.get('/product-enquire/:slug', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const categorylist = await getcategories();
    const websiteID = await getWebsiteID(); 
    const { slug } = req.params;
    const productdetails = await getproductdetails(slug);
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "Quality Paint Productions And Services In Kolkata",
        metaImage: "assets1/images/META.jpg",
    } 

    res.render('product-enquire', {body: "",baseUrl,slug, seoDetails,productdetails,PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS,POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS, websiteID, API_BASE_URL,WEBSITE_ID_KEY,categorylist, pathPart: ""});
});




app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });