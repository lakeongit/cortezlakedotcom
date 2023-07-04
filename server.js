// server.js
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const { body, validationResult } = require('express-validator');
const app = express();
const port = process.env.PORT || 3000;

app.use(helmet()); // for security
app.use(compression()); // for performance
app.use(express.json()); // for parsing JSON in request bodies
app.use(express.urlencoded({ extended: true })); // for parsing URL-encoded data in request bodies
app.use(express.static('public'));

app.post('/submit-form', 
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // handle form submission
  }
);

app.use((err, req, res, next) => { // error handling middleware
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
