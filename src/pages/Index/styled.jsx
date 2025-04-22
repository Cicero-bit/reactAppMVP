import styled from 'styled-components';
import { useState } from 'react';

const Card = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  max-width: 20rem;
  text-align: center;
`;

const ProfilePic = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
`;

const Specialty = styled.p`
  color: #6b7280;
`;

export default function SecurityCard({ name, specialty, image }) {
  const [haserror, setHasError] = useState(false);
  if (haserror) {
    console.log('security image error');
  }
  return (
    <Card>
      <ProfilePic
        src={image}
        alt={`${name} profile`}
        onError={() => setHasError(true)}
      />
      <Name>{name}</Name>
      <Specialty>{specialty}</Specialty>
    </Card>
  );
}
