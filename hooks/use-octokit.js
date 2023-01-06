import { useState } from "react";
import { Octokit } from "octokit";

const useOctokit = (request, options) => {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_AUTH_TOKEN,
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setLoading(true);

    try {
      const response = await octokit.request(request, options);
      setData(response.data);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return { data, loading, error, sendRequest };
};

export default useOctokit;
