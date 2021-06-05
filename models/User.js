//Mongoose Modules.
const { model, Schema } = require('mongoose');

//User Schema Object.
const userSchema = new Schema({
    //Basic Info - Required For Signup.
    organization_name: String,
    category: String,
    organization_type: String,
    email: String,
    phone_number: String,
    registration_number: String,
    password: String,
    
    //Required In Software - Check If All Values Are Complete Otherwise Have A Notifcation On Profile Section.

    //Representatives Information.
    representative: [
        { 
            rep_name: String,
            rep_email: String,
            rep_number: String,
            org_website: String
        }
    ],

    //Organizations Information.
    org_documents: [
        //Important Company Documents.
        {
            press_kit: String,
            bbe_cert: String,
            reg_cert: String,
            sec_18a_cert: String,
            annual_report: String,
            founding_docs: String
        }
    ],
    createdAt: String
});

module.exports = model('User', userSchema);