import { useState } from 'react';

function useMap(initialMap: any) {
  const [map, setMap] = useState(initialMap);

  return [map, setMap];
}

export default useMap;
