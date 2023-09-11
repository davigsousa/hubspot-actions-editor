export function useTheme() {
  return useState('app-theme', () => 'light')
}