import express from 'express';
import { setPool, getPool } from './database/poolManager.js';

const app = express();
// Middleware
app.use(express.json());

(async () => {  
    try {
      // Initialize the default pool
      await setPool();
      console.log('Default database pool initialized successfully.');
    } catch (error) {
      console.error('Failed to initialize database pool:', error);
      process.exit(1); // Exit the process if the pool cannot be initialized
    }
})();

// Routes
app.get('/', (req, res) => {
	res.send('Master Data System API is running!');
});

export default app;
