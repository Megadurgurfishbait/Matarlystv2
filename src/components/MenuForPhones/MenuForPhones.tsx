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
    <MFP.StyledButton
      onClick={() => handleOnClick(type)}
    >{`${type}`}</MFP.StyledButton>
  );

  const Menu = ({ type }: { type: string }): JSX.Element => (
    <MFP.StyledContainer>
      <MFP.StyledTitle> {type} </MFP.StyledTitle>
      {(getDrinkOrFood()[type] as []).map((v: Type) => (
        <>
          <MFP.StyledRow>
            <MFP.StyledColumn>
              {v.numero ? (
                <MFP.StyledItemTitle>{`${`${v.numero}. ${v.title}`}`}</MFP.StyledItemTitle>
              ) : (
                <MFP.StyledItemTitle>{v.title}</MFP.StyledItemTitle>
              )}
              <MFP.StyledItemIngred>{v.Ingred}</MFP.StyledItemIngred>
            </MFP.StyledColumn>
            <MFP.StyledColumn>
              <MFP.StyledItemTitle>{v.price}</MFP.StyledItemTitle>
            </MFP.StyledColumn>
          </MFP.StyledRow>
        </>
      ))}
    </MFP.StyledContainer>
  );

  return (
    <MFP.StyledBox>
      {useRouter().pathname === `/drykkjarsida` ? (
        <MFP.List>{Object.values(Drykkir).map(v => createButtons(v))}</MFP.List>
      ) : (
        <MFP.List>{Object.values(Rettir).map(v => createButtons(v))}</MFP.List>
      )}

      {show && (
        <MFP.StyledLayer style={{ backgroundColor: `#231F1E` }}>
          <Menu type={whatToShow} />
          <MFP.StyledButton onClick={() => setShow(false)}>
            Tilbaka
          </MFP.StyledButton>
        </MFP.StyledLayer>
      )}
    </MFP.StyledBox>
  );
};
