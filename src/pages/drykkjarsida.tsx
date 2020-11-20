import React from 'react';
import { MenuTab } from '@/components';
import * as FakeData from '@/db.json';
import { Layout } from '@/Layouts';

const Drykkjarsedill: React.FC<{}> = () => (
  <Layout
    TextContainer={<MenuTab MapType="Drykkir" Map={FakeData.drykkir} />}
  />
);
export default Drykkjarsedill;
