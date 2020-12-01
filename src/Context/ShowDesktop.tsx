import React from 'react';
import { useMediaQuery } from 'react-responsive';

const ConditionalRender = {
  isDesktop: false,
  isIpad: false,
  isPhone: false,
};

export const ShowDesktopContext = React.createContext(ConditionalRender);

const ShowDesktopContextProvider = ({ children }): JSX.Element => {
  const [whatToRender, setWhatToRender] = React.useState(ConditionalRender);

  const ipadSize = useMediaQuery({
    query: `(max-device-width: 1025px)`,
  });

  const phoneSize = useMediaQuery({
    query: `(max-device-width: 800px)`,
  });

  const desktopSize = useMediaQuery({
    query: `(min-device-width: 1026px)`,
  });

  React.useEffect(() => {
    if (phoneSize) {
      setWhatToRender({ isDesktop: false, isIpad: false, isPhone: true });
    } else if (ipadSize) {
      setWhatToRender({ isDesktop: false, isPhone: false, isIpad: true });
    } else if (desktopSize) {
      setWhatToRender({ isPhone: false, isIpad: false, isDesktop: true });
    }
  }, [ipadSize, phoneSize, desktopSize]);

  return (
    <ShowDesktopContext.Provider value={{ ...whatToRender }}>
      {children}
    </ShowDesktopContext.Provider>
  );
};

export default ShowDesktopContextProvider;
