import app from './app.js'; // Import the application logic
import dotenv from 'dotenv'; // Load environment variables
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

dotenv.config(); // Initialize dotenv
const PORT = process.env.PORT || 3000; // Corrected 'proses' to 'process'

const server = new ApolloServer({
  typeDefs: `#graphql
	  type Query {
	    hello: String
	  }
	`,
  resolvers: {
    Query: {
      hello: () => 'Hello world!',
    },
  },
});

await server.start();

app.use('/graphql', expressMiddleware(server));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
