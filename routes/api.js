const express = require('express');

//used to mount route handlers onto the variable 'router'
const router = express.Router();


//instead of saying route.get to respond to GET requests
router.get