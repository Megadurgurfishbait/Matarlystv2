import { Food } from '@/Models';

const Matsedill: Food[] = [
  {
    title: `Hvítlauks chili risa rækjur`,
    foodDescription: `Hvítlaukschili risa rækjur, kirsuberjatómatar, steinselja`,
    price: `1.490 ISK`,
  },
  {
    title: `Huevos Rotos`,
    foodDescription: `Franskar, spælt egg, hráskinka`,
    price: `1.490 ISK`,
  },
  {
    title: `Djúpsteiktar rækjur`,
    foodDescription: `Hrísgrjón, salat, súrsæt sósa`,
    price: `1.590 ISK`,
  },
  {
    title: `Franksar með chili mæjó eða kokteil`,
    foodDescription: ``,
    price: `990 ISK`,
  }
];

const Matsedill2: Food[] = [
  {
    title: `Kæfa`,
    foodDescription: `Heit kæfa, beikon, sveppir, pikklað rauðkál, rifsberjahlaup, piparsósa`,
    price: `1.590 ISK`,
  },
  {
    title: `Roast Beef`,
    foodDescription: `Nautakjöt, stökkur laukur, súrsaðar gúrskur, matarlystar remó`,
    price: `1.590 ISK`,
  },
  {
    title: `Purusteik`,
    foodDescription: `Purusteik, súrsaðar gúrkur, pikklað rauðkál, piparrótasósa`,
    price: `1.590 ISK`,
  },
  {
    title: `Rauðspretta`,
    foodDescription: `Rauðsprett, rækjur, sítrónu mæjó, sökkur laukur, dill`,
    price: `1.590 ISK`,
  }
];

const images = [`/20200910_202807.jpg`, `/20200910_202940.jpg`];
const HomeImages = [`/kaefa.jpg`, `land-pic1.jpg`];

export { Matsedill, images, HomeImages, Matsedill2 };
