import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Fonction qui permet de revenir en haut de la page à chaque changement de route
 * @returns {null} null
 * @constructor ScrollToTop
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
export default ScrollToTop;

