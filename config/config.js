const API_BASE_URL = process.env.API_BASE_URL; 
const WEBSITE_UID = process.env.WEBSITE_UID;
const S3_BASE_URL = process.env.S3_BASE_URL;
const WEBSITE_ID_KEY = "websiteProjectId";

const BANNER_TYPES = {
    HOME_BANNER: "HOME_BANNER",
    POPUP_BANNER: "POPUP_BANNER",
    AD_BANNER: "AD_BANNER",
  };

  const FETCH_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  };


  const CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS={
   name : "strings.stringOne",
   phone : "strings.stringTwo",
   email: "email",
   address:"strings.stringThree",
   remarks: "remarks",
  };


  const DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS={
   name: "strings.stringOne",
   phone: "strings.stringTwo",
  firmname:"strings.stringThree",
  email:"email",
  address:"strings.stringFour",
  remarks:"remarks",
   };

   const SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS={
    enquiryType: "serviceType",
    name: "strings.stringOne",
    phone: "strings.stringTwo",
   firmname:"strings.stringThree",
   email:"email",
   address:"strings.stringFour",
   remarks:"remarks",
    };

  
    const PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS={
      enquiryType: "product",
      name: "strings.stringOne",
      phone: "strings.stringTwo",
     firmname:"strings.stringThree",
     email:"email",
     address:"strings.stringFour",
     remarks:"remarks",
      };
  

      const CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS={
        name : "strings.stringOne",
        phone : "strings.stringTwo",
        email: "email",
        designation: "strings.stringThree",
        resume: "files.fileOne",
       };
     
       const POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS={
        name : "strings.stringOne",
        phone : "strings.stringTwo",
        email: "email",
        designation: "strings.stringThree",
        remarks:"remarks",
       };


module.exports={
  API_BASE_URL,
    WEBSITE_UID,
    S3_BASE_URL,
    BANNER_TYPES,
    FETCH_METHODS,
    CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    PRODUCT_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    POPUP_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    WEBSITE_ID_KEY,
};
