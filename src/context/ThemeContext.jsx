import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // 1. LocalStorage 확인
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    
    // 2. LocalStorage 없으면 시스템 설정 확인 (선택 사항, 여기서는 기본 다크모드)
    return true; 
  });

  useEffect(() => {
    const root = window.document.documentElement;
    console.log('Theme changed to:', isDark ? 'dark' : 'light'); // 디버깅용 로그
    
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
