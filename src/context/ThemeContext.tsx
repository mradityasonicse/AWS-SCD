import React, { createContext, useContext, useState, useEffect } from 'react';

import {
  type SecondaryColorKey,
  type BgModeKey,
  type SecondaryColorConfig,
  SECONDARY_COLORS,
} from './themeTokens';

export type { SecondaryColorKey, BgModeKey, SecondaryColorConfig };
export { SECONDARY_COLORS };

interface ThemeContextType {
  secondaryColor: SecondaryColorKey;
  setSecondaryColor: (color: SecondaryColorKey) => void;
  bgMode: BgModeKey;
  setBgMode: (mode: BgModeKey) => void;
  currentColorConfig: SecondaryColorConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY_COLOR = 'aws_scd_theme_color';
const THEME_STORAGE_KEY_BG = 'aws_scd_theme_bg';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to saved theme color, or AWS Student Builder Group Electric Purple (#AD5CFF) as authentic primary theme
  const [secondaryColor, setSecondaryColorState] = useState<SecondaryColorKey>(() => {
    if (typeof window === 'undefined') return 'purple';
    const saved = localStorage.getItem(THEME_STORAGE_KEY_COLOR) as SecondaryColorKey;
    if (saved === 'orange' || !saved || !SECONDARY_COLORS[saved]) {
      localStorage.setItem(THEME_STORAGE_KEY_COLOR, 'purple');
      return 'purple';
    }
    return saved;
  });

  // Default to dark as featured in the AWS Builder Group reference image
  const [bgMode, setBgModeState] = useState<BgModeKey>(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem(THEME_STORAGE_KEY_BG) as BgModeKey;
    return saved === 'light' ? 'light' : 'dark';
  });

  const currentColorConfig = SECONDARY_COLORS[secondaryColor];

  const setSecondaryColor = (color: SecondaryColorKey) => {
    setSecondaryColorState(color);
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY_COLOR, color);
    }
  };

  const setBgMode = (mode: BgModeKey) => {
    setBgModeState(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY_BG, mode);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    const config = SECONDARY_COLORS[secondaryColor];

    // Apply primary & accent variables
    root.style.setProperty('--primary', config.hex);
    root.style.setProperty('--primary-hover', config.hoverHex);
    root.style.setProperty('--primary-rgb', config.rgb);
    root.style.setProperty('--primary-glow', config.glow);
    root.style.setProperty('--theme-accent', config.hex);
    root.style.setProperty('--theme-accent-hover', config.hoverHex);
    root.style.setProperty('--theme-accent-rgb', config.rgb);
    root.style.setProperty('--theme-accent-glow', config.glow);

    // Apply background & surface variables
    if (bgMode === 'dark') {
      root.style.setProperty('--theme-bg', '#0A0D14');
      root.style.setProperty('--theme-surface', 'rgba(255, 255, 255, 0.04)');
      root.style.setProperty('--theme-surface-card', 'rgba(255, 255, 255, 0.04)');
      root.style.setProperty('--theme-surface-elevated', 'rgba(255, 255, 255, 0.08)');
      root.style.setProperty('--theme-border', 'rgba(255, 255, 255, 0.08)');
      root.style.setProperty('--theme-border-strong', 'rgba(255, 255, 255, 0.16)');
      root.style.setProperty('--theme-grid', 'rgba(255, 255, 255, 0.03)');
      root.style.setProperty('--theme-text', '#F8FAFC');
      root.style.setProperty('--theme-text-muted', '#94A3B8');
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.style.setProperty('--theme-bg', '#F8FAFC');
      root.style.setProperty('--theme-surface', '#FFFFFF');
      root.style.setProperty('--theme-surface-card', '#FFFFFF');
      root.style.setProperty('--theme-surface-elevated', '#F1F5F9');
      root.style.setProperty('--theme-border', '#E2E8F0');
      root.style.setProperty('--theme-border-strong', '#CBD5E1');
      root.style.setProperty('--theme-grid', 'rgba(15, 23, 42, 0.08)');
      root.style.setProperty('--theme-text', '#0F172A');
      root.style.setProperty('--theme-text-muted', '#64748B');
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [secondaryColor, bgMode]);

  return (
    <ThemeContext.Provider
      value={{
        secondaryColor,
        setSecondaryColor,
        bgMode,
        setBgMode,
        currentColorConfig,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
