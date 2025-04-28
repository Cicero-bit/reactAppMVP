import styled from 'styled-components';
import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  padding: 2rem 1.5rem;
  max-width: 22rem;
  min-width: 20rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProfilePic = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 3px solid #5c6ac4;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const Specialty = styled.span`
  background-color: #5c6ac4;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: inline-block;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #6b7280;
  gap: 0.5rem;
`;

export default function SecurityCard({
  name,
  specialty,
  image,
  location = 'Vitória, ES',
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    console.warn('Erro ao carregar imagem do segurança');
  }

  return (
    <Card>
      <ProfilePic
        src={image}
        alt={`${name} profile`}
        onError={() => setHasError(true)}
      />
      <Name>
        {String(name).charAt(0).toUpperCase() + String(name).slice(1)}
      </Name>
      <Specialty>{specialty}</Specialty>
      <Location>
        <FaMapMarkerAlt size={16} />
        {location}
      </Location>
    </Card>
  );
}
