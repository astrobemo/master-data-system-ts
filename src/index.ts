import app from './app.js'; // Import the application logic
import dotenv from 'dotenv'; // Load environment variables

dotenv.config(); // Initialize dotenv

const PORT = process.env.PORT || 3000; // Corrected 'proses' to 'process'

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
