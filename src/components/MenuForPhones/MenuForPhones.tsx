import React from 'react';
import * as FakeData from '@/db.json';
import { FoodList } from '../FoodList';
import * as MFP from './MenuForPhones.styled';

enum Rettir {
  Smabraud,
  donsk,
  spaensk,
  adal,
  tortilla,
  salot,
  barna,
}

const ShowMenu = ({ WhatToShow }): JSX.Element => {
  const { matsedill } = FakeData;
  switch (WhatToShow) {
    case Rettir.Smabraud:
      return (
        <>
          <h1>Smáréttir</h1>
          <FoodList List={matsedill[`Smáréttir`]} />
        </>
      );
    case Rettir.donsk:
      return (
        <>
          <h1>Dönsk Rúgbrauð</h1>
          <FoodList List={matsedill[`Dönsk rúgbrauð`]} />
        </>
      );
    case Rettir.spaensk:
      return (
        <>
          <h1>Spænsk Súrdeigsbrauð</h1>
          <FoodList List={matsedill[`Spænsk súdeigsbrauð`]} />
        </>
      );
    case Rettir.salot:
      return (
        <>
          <h1>Salöt</h1>
          <FoodList List={matsedill[`Salöt`]} />
        </>
      );
    case Rettir.adal:
      return (
        <>
          <h1>Aðalréttir</h1>
          <FoodList List={matsedill[`Aðalréttir`]} />
        </>
      );
    case Rettir.tortilla:
      return (
        <>
          <h1>Mjúk Tortilla</h1>
          <FoodList List={matsedill[`Mjúk Tortilla`]} />
        </>
      );
    case Rettir.barna:
      return (
        <>
          <h1>Barna matseðill</h1>
          <FoodList List={matsedill[`Barnamatseðill`]} />
        </>
      );
    default:
      return <div>Hleður</div>;
  }
};

export function MenuForPhones(): JSX.Element {
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
        <MFP.StyledButton
          label="Aðalréttir"
          onClick={() => handleOnClick(Rettir.adal)}
        />
        <MFP.StyledButton
          label="Barnamatseðill"
          onClick={() => handleOnClick(Rettir.barna)}
        />
        <MFP.StyledButton
          label="Salöt"
          onClick={() => handleOnClick(Rettir.salot)}
        />
        <MFP.StyledButton
          label="Mjúk Tortilla"
          onClick={() => handleOnClick(Rettir.tortilla)}
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
