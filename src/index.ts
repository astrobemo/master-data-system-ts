import app from './app.js'; // Import the application logic
import dotenv from 'dotenv'; // Load environment variables
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './modules/index.js'; // Import merged type definitions and resolvers
import { BaseContext } from '@apollo/server';

dotenv.config(); // Initialize dotenv
const PORT = process.env.PORT || 3000; // Corrected 'proses' to 'process'

// Initialize Apollo Server
const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});

await server.start();

app.use(
  '/graphql',
  expressMiddleware(server, {
    context: async ({ req, res }) => ({ req, res }), // Pass request and response to context
  }),
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
