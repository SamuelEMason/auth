const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');

const authRouter = require('./routes/auth');
const connectDB = require('./config/db.js');

/* CONFIGURATION */
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_KEY));
app.use(cors());
app.use(morgan('common'));

/* ROUTES */
app.use('/auth', authRouter);

(async () => {
	try {
		await connectDB();
	} catch (error) {
		console.error(error.message);
	}
	app.listen(PORT, () => {
		console.log(`Server running on PORT:${PORT}`.italic.blue);
	});
})();
	
