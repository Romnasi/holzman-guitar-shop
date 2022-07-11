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
    let observerRefValue: HTMLButtonElement | null = null;
    const observer = new IntersectionObserver(cb, intersectionObserverOptions);
    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }
    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [ref]);

  return [isVisible, setIsVisible];
}

export default useOnScreen;
