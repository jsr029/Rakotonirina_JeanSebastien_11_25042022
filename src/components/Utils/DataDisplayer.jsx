import React, { useEffect, useState } from 'react';

export default function DataDisplayer(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:3000/json/logements.json`);
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, [data]);

  if (data) {
    return <div>{data.title}</div>;
  } else {
    return null;
  }
}

