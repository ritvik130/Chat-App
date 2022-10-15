const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type:String, required: true},
        password: {type: String, required: true},
        pic: {
            type: String, 
            required: false, 
            default: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Feuheritage-platform.eu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fsocial_medium%2Fpublic%2Fdefault-profile-picture.png%3Fitok%3DdrQ9K8ED&imgrefurl=http%3A%2F%2Fwww.euheritage-platform.eu%2Fuser%2F1%2Fhome&tbnid=05iyuOEp3HJdeM&vet=12ahUKEwiz_aHNjuH6AhXSn3IEHQWMAM4QMyhbegUIARCbAQ..i&docid=V5dVkoWwedX_YM&w=400&h=400&q=whatsapp%20anonymous%20pic%20avatar&client=safari&ved=2ahUKEwiz_aHNjuH6AhXSn3IEHQWMAM4QMyhbegUIARCbAQ'
        },
    },
    {
        timestamp: true,
    },
);

const User = mongoose.model('USer', userSchema);
module.exports = User;