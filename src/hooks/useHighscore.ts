import LS from 'utils/storage';
import config from 'config';

function useHighscore(): [string | number, (newscore: string | number) => void] {
  let ls = new LS(config.lsKeys.save);

  function save(newscore: string | number) {
    return ls.set(newscore);
  }

  return [ls.get() as string | number, save];
}

export default useHighscore;
