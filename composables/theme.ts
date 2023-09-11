export function useTheme() {
  return useState<'light' | 'dark'>('app-theme', () => 'light')
}