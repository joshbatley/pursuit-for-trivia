import { useState } from 'react';

function useMap(initialMap: any) {
  let [map, setMap] = useState(initialMap);

  return [map, setMap];
}

export default useMap;
