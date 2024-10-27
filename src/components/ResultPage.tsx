// src/components/ResultPage.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

type Params = {
  type: string;
  number: string;
};

const ResultPage: React.FC = () => {
  const { type, number } = useParams<Params>();
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://numbersapi.com/${number}/${type}`);
        setData(response.data);
      } catch (err) {
        setError("Произошла ошибка при получении данных.");
      }
    };
    fetchData();
  }, [type, number]);

  return (
    <div className="container">
      <h2>Информация о числе</h2>
      {error && <p className="error">{error}</p>}
      {data ? <p>{data}</p> : <p>Загрузка...</p>}
    </div>
  );
};

export default ResultPage;
