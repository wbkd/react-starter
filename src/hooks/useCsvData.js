import { useState, useEffect } from 'react';
import { dsvFormat } from 'd3-dsv';
import { fetchCsv } from 'utils/data-utils';

const defaultOptions = { delimiter: ',', onEachRow: (d) => d };

export default function useCsvData(url, options = defaultOptions) {
  const [data, setData] = useState(null);
  const mergedOptions = { ...defaultOptions, ...options };
  const { delimiter, onEachRow } = mergedOptions;
  const csvParser = dsvFormat(delimiter);

  useEffect(() => {
    const loadData = async () => {
      const csv = await fetchCsv(url);
      const result = csvParser.parse(csv, onEachRow);
      setData(result);
    };

    loadData();
  }, [url]);

  return {
    data,
    isLoading: !data,
  };
}
