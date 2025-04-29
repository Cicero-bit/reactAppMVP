import React, { useEffect, useState } from 'react';

import * as actions from '../../../store/modules/allsecurity/indexslice';
import Card from './styled';
import defaultAvatar from '../../../assets/iconfallback.png';
import Header from '../../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonCard from '../../../components/Skeletons/index/index';
import Footer from '../../../components/Footer';

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
      <Header></Header>
      <div className="flex justify-center m-8">
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-4">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
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
      <Footer />
    </>
  );
}
