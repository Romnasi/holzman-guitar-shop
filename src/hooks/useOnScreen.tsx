import { Dispatch, useEffect, useState } from 'react';
import { intersectionObserverOptions } from '../const/review';

type UseOnScreen = [boolean, Dispatch<React.SetStateAction<boolean>>];

function useOnScreen(ref: React.RefObject<HTMLButtonElement>): UseOnScreen {
  const [isVisible, setIsVisible] = useState(false);

  const cb = (entries: IntersectionObserverEntry[]) => {
    const [ entry ] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cb, intersectionObserverOptions);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return [isVisible, setIsVisible];
}

export default useOnScreen;
