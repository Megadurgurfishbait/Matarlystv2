/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Matsedill, Matsedill2, Matsedill3 } from '@/FakeData';
import { FoodList } from '../FoodList';
import * as MFP from './MenuForPhones.styled';

enum Rettir {
  Smabraud,
  donsk,
  spaensk,
  adal,
}

const ShowMenu = ({ WhatToShow }): JSX.Element => {
  switch (WhatToShow) {
    case Rettir.Smabraud:
      return (
        <>
          <h1>Smáréttir</h1>
          <FoodList List={Matsedill} />
        </>
      );
    case Rettir.donsk:
      return (
        <>
          <h1>Dönsk Rúgbrauð</h1>
          <FoodList List={Matsedill2} />
        </>
      );
    case Rettir.spaensk:
      return (
        <>
          <h1>Spænsk Súrdeigsbrauð</h1>
          <FoodList List={Matsedill3} />
        </>
      );
    default:
      return <div>Hleður</div>;
  }
};

export function MenuForPhones() {
  const [show, setShow] = React.useState<boolean>();
  const [whatToShow, setWhatToShow] = React.useState<Rettir | undefined>(
    undefined,
  );

  const handleOnClick = (type: Rettir): void => {
    setWhatToShow(type);
    setShow(true);
  };

  return (
    <MFP.StyledBox fill>
      <MFP.List>
        <MFP.StyledButton
          label="Smáréttir"
          onClick={() => handleOnClick(Rettir.Smabraud)}
        />
        <MFP.StyledButton
          label="Dönsk Rúgbrauð"
          onClick={() => handleOnClick(Rettir.donsk)}
        />
        <MFP.StyledButton
          label="Spænsk Súrdeigsbrauð"
          onClick={() => handleOnClick(Rettir.spaensk)}
        />
      </MFP.List>

      {show && (
        <MFP.StyledLayer
          onEsc={() => setShow(false)}
          animation="fadeIn"
          onClickOutside={() => setShow(false)}
        >
          <ShowMenu WhatToShow={whatToShow} />
          <MFP.StyledButton label="Tilbaka" onClick={() => setShow(false)} />
        </MFP.StyledLayer>
      )}
    </MFP.StyledBox>
  );
}
