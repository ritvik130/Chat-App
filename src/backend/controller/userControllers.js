const asyncHandler = require('express-async-handler');
const res = require('express/lib/response');
const User = require('../NoSQL/userModel');
const generateToken = require('../config/generateToken');

const resgisterUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
    if(!name || !email || !password) {
        res.status(400);
        throw new Error('Please enter all Fields');
    }
    const userExists = await User.findOne({ email })
    if(userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User.create({
        name, 
        email, 
        password, 
        pic,
    });
    if (user) {
        res.status(201).json({
            _id: user.id, 
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id), 
        });
    }else {
        res.status(400);
        throw new Error('Failed to create the User');
    }
});

const authUser = asyncHandler(async (req, res) => {
   const {email, password} = req.body;
   if (!email || !password) {
       res.status(400);
       throw new Error('Please enter all fields');
   } 
   const user = await User.findOne({ email });
   if (!user) {
       res.status(400);
       throw new Error('User does not exist, Please Sign Up');
   }
   if (user && (await user.matchPassword(password))) {
       res.json({
        _id: user.id, 
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
       });
   } else {
       res.status(401);
       throw new Error('Invalid Email or Password');
   } 
});

module.exports = { resgisterUser, authUser };