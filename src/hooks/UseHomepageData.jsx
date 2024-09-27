// src/hooks/useHomepageData.js
import { useState, useEffect } from 'react';
import { fetchGraphQLData } from '../services/GraphqlService';
import { GET_HOMEPAGE_DATA } from '../queries/HomepageQuery';

const UseHomepageData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchGraphQLData(GET_HOMEPAGE_DATA);
        setData(result.data.pages.nodes[0].homepage); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return { data, loading, error };
};

export default UseHomepageData;
