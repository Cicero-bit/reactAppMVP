import React, { useEffect } from 'react';

import * as actions from '../../../store/modules/allsecurity/indexslice';
import Card from './styled';
import defaultAvatar from '../../../assets/iconfallback.png';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonCard from '../../../components/Skeletons/index/index';

export default function Index() {
  const isLoading = useSelector((state) => {
    return state.securitys.isLoading;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.GET_SECURITYS_REQUEST());
  }, [dispatch]);

  const securitys = useSelector((state) => state.securitys.securitys);
  return (
    <>
      <div className="flex justify-center m-8">
        <div className="w-full flex flex-wrap justify-center gap-4">
          {isLoading
            ? Array.from({ length: 12 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : securitys.map((security) => (
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
