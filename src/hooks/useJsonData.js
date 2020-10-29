import { useState, useEffect } from 'react';
import { fetchJson } from 'utils/data-utils';

export default function useJsonData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchJson(url);
      setData(result);
    };

    loadData();
  }, [url]);

  return {
    data,
    isLoading: !data,
  };
}
