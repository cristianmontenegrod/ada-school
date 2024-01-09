import React from 'react';
import { Dog } from './Dog';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function App() {
  const { data, error } = useSWR('https://api.thedogapi.com/v1/images/search', fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  const imageUrl = data[0].url;

  return (
    <div>
      <h1>Welcome to React Dog Viewer</h1>
      <Dog imageUrl={imageUrl} />
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
}
