

const express = require('express');
const db = require('./db/database');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');


// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// USE API ROUTES
app.use('/api', apiRoutes);

//DEFAULT RESPONSE FOR ANY OTHER REQUEST (NOT FOUND)
app.use((req, res) => {
    res.status(404).end();
});

// START SERVER AFTER DB CONNECTION
db.on('open', () => {
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
});
