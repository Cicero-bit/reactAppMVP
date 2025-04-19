import { React } from 'react';
import { useParams, useSearchParams } from 'react-router';
import Main from './styled';

export default function Securitys() {
  const params = useParams();
  const { id } = params;
  const [QS] = useSearchParams();
  return (
    <Main>
      SECURITY PROFILE {`Param: ${id} QueryString: ${QS.get('page')}`}
    </Main>
  );
}
