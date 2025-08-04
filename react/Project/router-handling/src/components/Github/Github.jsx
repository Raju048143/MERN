import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
    // useEffect(()=>{
    // fetch('https:api.github.com/users/raju048143')
    // .then(response => response.json())
    // .then(data=>{
    //     console.log(data)
    //    setData(data)
    // })
    // },[])
  return (
    
    <div className="text-center p-3 m-4 bg-gray-600 text-white">
      <img
        src={data.avatar_url}
        alt="Git picture"
        className="rounded-full w-24 h-24 mx-auto"
      />
      <p className="mt-2">{data.name}</p>
      <p className="mt-2">{data.bio}</p>
      <p className="mt-2">{data.company}</p>

    </div>
  );
}

export default Github;

export const githubInfoForLoader = async () => {
  const response = await fetch('https://api.github.com/users/raju048143');
const data = await response.json();
  console.log(data); 
  return data;
};
