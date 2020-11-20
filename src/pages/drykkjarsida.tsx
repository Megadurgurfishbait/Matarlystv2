import React from 'react';
import { Carousel, MenuTab } from '@/components';
import * as FakeData from '@/db.json';
import { Layout } from '@/Layouts';
import { images } from '@/FakeData';

const Drykkjarsedill: React.FC<{}> = () => (
  <Layout
    PhotoContainer={<Carousel seconds={8} images={images} />}
    TextContainer={<MenuTab MapType="Drykkir" Map={FakeData.drykkir} />}
  />
);
export default Drykkjarsedill;
