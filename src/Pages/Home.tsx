import React, { useState, useEffect } from 'pages/node_modules/react';
import api from 'api';

const Home = () => {
  const [data, setData] = useState(null as QuestionRes);
  useEffect(() => {
    if (data === null) {
      api().then((v) => {
        setData(v);
      });
    }
  }, [data, setData]);
  return (
    <>
      {data && data.map((q, v) => (
        <h1 key={v}>{q.question.replace(/(&quot;)/g, '"').replace(/(&#039;)/g, '\'')}</h1>
      ))}
    </>
  );
};

export default Home;
