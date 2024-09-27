// src/services/graphqlService.js
import axios from 'axios';

const GRAPHQL_API_URL = 'https://astralpaints.kwebmakerdigitalagency.com/graphql';

// Function to make GraphQL requests using axios
export const fetchGraphQLData = async (query, variables = {}) => {
  try {
    const response = await axios.post(GRAPHQL_API_URL, {
      query,
      variables, // Optional: Use if your queries need variables
    });
    
    return response.data; // Return only the data
  } catch (error) {
    console.error('GraphQL Request Error:', error);
    throw error;
  }
};
