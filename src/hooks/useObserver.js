import { useEffect, useRef, useState } from "react";

export const useObserver = (options) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const handleObserver = (observedEntries) => setEntries(observedEntries);
  const observer = useRef(new IntersectionObserver(handleObserver, options));

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (elements.length > 0)
      elements.forEach((element) => currentObserver.observe(element));

    return () => {
      if (currentObserver) currentObserver.disconnect();
    };
  }, [elements]);

  return [observer.current, setElements, entries];
};
