import React, { useEffect, useState } from 'react';

import axios from '../../services/axios';
import Card from './styled';
import defaultAvatar from '../../assets/iconfallback.png';
import Header from '../../components/Header';

export default function Index() {
  const [securitys, setSecuritys] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/security');
        setSecuritys(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Header></Header>
      <div className="flex justify-center">
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-4">
          {securitys.map((security) => (
            <Card
              key={security.id}
              name={String(security.name)}
              specialty={'Segurança'}
              image={
                security?.ProfilePics?.length > 0 &&
                security.ProfilePics[0]?.url
                  ? security.ProfilePics[0].url
                  : defaultAvatar
              }
              location="Vitória, ES"
            />
          ))}
        </div>
      </div>
    </>
  );
}
