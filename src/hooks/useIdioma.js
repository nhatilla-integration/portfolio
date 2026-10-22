import { useContext } from 'react';
import { IdiomaContext } from '../i18n/idiomaContext';

export function useIdioma() {
  return useContext(IdiomaContext);
}
