import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function Dog() {
  const { data, error } = useSWR('https://api.thedogapi.com/v1/images/search', fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  const imageUrl = data[0].url;

  return (
    <div>
      <img src={imageUrl} alt="Dog" style={{ maxWidth: '100%' }} />
    </div>
  );
}
