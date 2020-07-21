import React, { Fragment } from 'react';

import Navigation from './components/Navigation/Navigation';
import Body from './components/Body/Body';

const menuItems = {
    rs: [
      "Lepota i Vi",
      "Kuhanje na zdrav način",
      "Kampiranje na otvorenom",
      "Aktivirajte se",
      "Meditacija",
      "2 + 2 = 3",
      "Za filmofile i knjigoljupce",
      "Jučer danas sutra"
    ],
    en: [
      "Beauty and You",
      "Healthy Cooking",
      "Outdoor Camping",
      "Activate",
      "Meditation",
      "2 + 2 = 3",
      "Cinephiles' and Booklovers' Corner",
      "Yesterday Today Tomorrow"
    ]
};

const app = () => (
    <Fragment>
        <Navigation NavElements={menuItems} />
        <Body />
    </Fragment>
);

export default app;