import React from 'react';
import { useRouter } from 'next/router';
import * as FakeData from '@/db.json';

import { Type } from '@/Models';
import * as MFP from './MenuForPhones.styled';

const Rettir = {
  Smarettir: `Smáréttir`,
  donsk: `Dönsk rúgbrauð`,
  spaensk: `Spænsk súdeigsbrauð`,
  adal: `Aðalréttir`,
  tortilla: `Mjúk Tortilla`,
  salot: `Salöt`,
  barna: `Barnamatseðill`,
};

const Drykkir = {
  kaffi: `Kaffi og Te`,
  oafengt: `Óáfengir drykkir`,
  bjor: `Bjór`,
  freydi: `Freyðandi Drykkir`,
  hvitvin: `Hvítvín`,
  rosa: `Rósavín`,
  raudvin: `Rauðvín`,
};

function getDrinkOrFood() {
  const { drykkir, matsedill } = FakeData;
  return useRouter().pathname === `/drykkjarsida` ? drykkir : matsedill;
}

export const MenuForPhones: React.FC<{}> = () => {
  const [show, setShow] = React.useState<boolean>();
  const [whatToShow, setWhatToShow] = React.useState<string | undefined>(
    undefined,
  );

  const handleOnClick = (type: string): void => {
    setWhatToShow(type);
    setShow(true);
  };

  const createButtons = (type): JSX.Element => (
    <MFP.StyledButton label={`${type}`} onClick={() => handleOnClick(type)} />
  );

  const Menu = ({ type }: { type: string }): JSX.Element => (
    <>
      <h1> {type} </h1>
      {(getDrinkOrFood()[type] as []).map((v: Type) => (
        <MFP.List>
          <li>{v.title}</li>
          <li>{v.price}</li>
        </MFP.List>
      ))}
    </>
  );

  return (
    <MFP.StyledBox fill>
      {useRouter().pathname === `/drykkjarsida` ? (
        <MFP.List>{Object.values(Drykkir).map(v => createButtons(v))}</MFP.List>
      ) : (
        <MFP.List>{Object.values(Rettir).map(v => createButtons(v))}</MFP.List>
      )}

      {show && (
        <MFP.StyledLayer>
          <Menu type={whatToShow} />
          <MFP.StyledButton label="Tilbaka" onClick={() => setShow(false)} />
        </MFP.StyledLayer>
      )}
    </MFP.StyledBox>
  );
};
