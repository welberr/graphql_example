import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

async function start({ typeDefs, resolvers }) {
  try {
    await mongoose.connect('mongodb://localhost:27017/graphql');
    console.log('Connected to MongoDB');

    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => console.log(`Server started at ${url}`));
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

export default start;
