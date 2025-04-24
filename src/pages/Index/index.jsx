import React, { useEffect, useState } from 'react';

import axios from '../../services/axios';
import Card from './styled';
import defaultAvatar from '../../assets/iconfallback.png';

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
  return securitys.map((security) => (
    <Card
      key={security.id}
      name={String(security.name)}
      specialty={'Segurança'}
      image={
        security?.ProfilePics?.length > 0 && security.ProfilePics[0]?.url
          ? security.ProfilePics[0].url
          : defaultAvatar
      }
    />
  ));
}
