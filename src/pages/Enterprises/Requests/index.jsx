import React from 'react';
import { PersonStanding } from 'lucide-react';
import RequestCard from '@components/RequestCard';

const competences = [
  "Armado", "Arma", "Tiro", "Vagabundo morto", "Dinheiro no bolso" 
]

export default function Requests() {

  return (
    <RequestCard competences={competences}/>
  )
}
