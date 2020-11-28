// /* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';



// Virkar ekki að setja inn layout="fill".
// Ekki spyrja mig
const layoutfill = {
  layout: "fill"
}

export const Carousel: React.FC<{ images: string[] }> = ({ images }) => {

  return (
    <AliceCarousel animationType="fadeout" autoPlay infinite autoPlayInterval={3000}>
    {
      images.map((v,i) => 
        <img src={v}  key={i} height="100%" width="100%" {...layoutfill} className="sliderimg"/>)
    }
</AliceCarousel>
);
}

