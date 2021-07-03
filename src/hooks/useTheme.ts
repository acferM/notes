import { useContext } from 'react';
import { themeContext } from '../contexts/theme';

export function useTheme() {
  return useContext(themeContext);
}
