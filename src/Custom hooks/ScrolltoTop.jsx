import { useCallback } from 'react';

const useScrollToTop = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return scrollToTop;
};

export default useScrollToTop;
