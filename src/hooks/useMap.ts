import { useState } from 'react';

function useMap(initialMap: Record<string, Question[]>[]) {
  let [map, setMap] = useState(initialMap);

  return [map, setMap];
}

export default useMap;
