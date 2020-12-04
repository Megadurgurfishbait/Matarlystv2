import { SiteURL } from './src/Routes';

export default {
  title: 'Kaffi Matarlyst',
  description:
    'Veitingastaður, bar, kaffihús á Selfossi. Danskt hygge í bland við spænska gleði í matargerð.',
  canonical: `${SiteURL}`,
  openGraph: {
    title: 'Kaffi Matarlyst',
    locale: 'is_IS',
    url: `${SiteURL}`,
    site_name: 'Kaffi Matarlyst',
    type: 'Website',
    images: [
      {
        url: `${SiteURL}/static/logo.png`,
        width: 200,
        height: 200,
        alt: 'Kaffi Matarlyst Logo',
      },
    ],
  },
  additionalMetaTags: {
    lang: 'is',
  },
};
