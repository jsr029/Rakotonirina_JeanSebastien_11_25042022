import React, { useEffect, useState } from 'react';

export default function DataDisplayer(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:3000/fiche-logement/${props.id}/${props.title}`);
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, [props.id, props.title]);
    console.log(props.id)
  if (data) {
    return (
        <>
        <div>{data.id}</div>
        <div>{data.title}</div>
        </>
    )
  } else {
    return null;
  }
}
