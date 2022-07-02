const express = require('express');
require('dotenv').config()
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express()

// midleware
app.use(cors())
app.use(express.json())