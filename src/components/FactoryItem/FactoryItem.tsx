import React, { useState } from "react";
import useSWR from "swr";
import { ApiResponse, FactoryProps } from "../../types";
import styles from "./styles.module.css";


const Factory: React.FC<FactoryProps > = ({ endpoint, config, title,cardStyles,children }) => {
  const [data, setData] = useState<ApiResponse | undefined | null>(null);
  const [error, setError] = useState<any>(null);

  useSWR(endpoint, {
    revalidateOnFocus: false,
    refreshInterval:15000,
    onError: (error) => {
      setError(error);
      setData(null);
    },
    onSuccess: (data: ApiResponse) => {
      setData(data);
      setError(null);
    },
    ...config,
  });

  if (error) {
    return (
      <div className={styles.card} style={cardStyles}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.statusDanger}>Error</div>
        <p className={styles.hostname}>OUTAGE</p>
        <p className={styles.hostname}>{error.code}</p>
        <p className={styles.hostname}>{error.message}</p>
      </div>
    );
  }
  if (data) {
    return (
      <div className={styles.card} style={cardStyles}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.statusOk}>{data.message}</div>
        <p className={styles.hostname}>{data.hostname}</p>
        <p className={styles.hostname}>
          {new Date(data.time).getHours()}:{new Date(data.time).getMinutes()}:
          {new Date(data.time).getSeconds()}
        </p>
        {children}
      </div>
    );
  }
  return <>loading</>;
};

export default Factory;
