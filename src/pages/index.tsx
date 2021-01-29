import React from 'react';
// Components
import { Loading } from '@/Layouts';
import { ShowDesktopContext } from '@/Context/ShowDesktop';

import { Horizontal } from '../Styles';
import { Carousel } from '../components/Carousel/Carousel';
import { HomeImages, HomeImageMidSize, HomeImagePhoneSize } from '../ImageData';
// eslint-disable-next-line import/no-extraneous-dependencies

const Home: React.FC<{}> = () => {
  const { isDesktop, isIpad } = React.useContext(ShowDesktopContext);

  const imageSizes = (): string[] => {
    if (isDesktop) return HomeImages;
    if (isIpad) return HomeImageMidSize;
    return HomeImagePhoneSize;
  };

  return (
    <Horizontal>
      {/* {isDesktop && <Loading />} */}
      {console.log(imageSizes())}
      <Carousel homePage images={imageSizes()} />
    </Horizontal>
  );
};

export default Home;
