import { useState, useEffect } from 'react';
import { feature } from 'topojson-client';
import { fetchJson } from 'utils/data-utils';

export default function useTopoData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const topo = await fetchJson(url);
      const topoKey = Object.keys(topo.objects)[0];
      const topoData = feature(topo, topo.objects[topoKey]);
      setData(topoData);
    };

    loadData();
  }, [url]);

  return {
    data,
    isLoading: !data,
  };
}
