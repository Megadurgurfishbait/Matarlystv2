import React, { useEffect } from 'react';
import { LoadingImage, solidIcon } from '@/FakeData';
import * as L from './Loading.styled';

export const Loading: React.FC = () => {
  const [show, setShow] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <L.Container show={show}>
      <L.BlackBg />
      <L.ImageFloat>
        <L.ImageRotate alt="Logo Matarlyst" src={LoadingImage} zIndex={2} />
        <L.Image alt="Logo Matarlyst" src={solidIcon} zIndex={1} />
      </L.ImageFloat>
    </L.Container>
  );
};
