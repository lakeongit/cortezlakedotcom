// server.js
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const app = express();
const port = process.env.PORT || 3000;

app.use(helmet()); // for security
app.use(compression()); // for performance
app.use(express.static('public'));

app.use((err, req, res, next) => { // error handling middleware
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
