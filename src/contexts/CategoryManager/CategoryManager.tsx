import React, {
  useState, createContext, useContext, useEffect,
} from 'react';
import LS from 'utils/storage';
import config from 'config';
import { fetchCategories } from 'api';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

interface CategoryManager {
  categories: CategoriesArray | null | undefined;
  selected: number | null;
  setCategory: React.Dispatch<number>;
}

let ls = new LS(config.lsKeys.categories);
let isInStorage = ls.get();

export const CategoryManagerCtx = createContext<CategoryManager | void>(undefined);

export function useCategoryManager(): CategoryManager {
  let context = useContext(CategoryManagerCtx);
  if (context === undefined) {
    throw new Error('useCategoryManager must be used within a CategoryManagerProvider');
  }

  return context;
}

export const CategoryManagerProvider: React.FC<Props> = ({ children }: Props) => {
  let [categories, setCategories] = useState<CategoriesArray | null | undefined>(undefined);
  let [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    async function loadCategories() {
      if (isInStorage !== null) {
        setCategories(isInStorage as CategoriesArray);
      } else {
        try {
          let data = await fetchCategories();
          setCategories(data?.trivia_categories);
          ls.set(data?.trivia_categories);
        } catch {
          // PROPER ERRO
          setCategories(null);
        }
      }
    }
    if (categories === undefined) {
      loadCategories();
    }
  }, [categories]);

  let values = {
    categories,
    selected,
    setCategory: setSelected,
  };

  return (
    <CategoryManagerCtx.Provider value={values}>
      {children}
    </CategoryManagerCtx.Provider>
  );
};
