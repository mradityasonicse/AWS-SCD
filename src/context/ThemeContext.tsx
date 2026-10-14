import React, { createContext, useContext, useState, useEffect } from 'react';

export type SecondaryColorKey = 'purple' | 'blue' | 'pink' | 'green' | 'orange';
export type BgModeKey = 'dark' | 'light';

export interface SecondaryColorConfig {
  key: SecondaryColorKey;
  label: string;
  hex: string;
  hoverHex: string;
  rgb: string;
  glow: string;
}

export const SECONDARY_COLORS: Record<SecondaryColorKey, SecondaryColorConfig> = {
  purple: {
    key: 'purple',
    label: 'Electric Violet',
    hex: '#AD5CFF',
    hoverHex: '#BC73FF',
    rgb: '173, 92, 255',
    glow: 'rgba(173, 92, 255, 0.25)',
  },
  blue: {
    key: 'blue',
    label: 'Cloud Cyan',
    hex: '#38BDF8',
    hoverHex: '#5BCBFA',
    rgb: '56, 189, 248',
    glow: 'rgba(56, 189, 248, 0.25)',
  },
  pink: {
    key: 'pink',
    label: 'Neon Magenta',
    hex: '#EC4899',
    hoverHex: '#F45FA6',
    rgb: '236, 72, 153',
    glow: 'rgba(236, 72, 153, 0.25)',
  },
  green: {
    key: 'green',
    label: 'Emerald Green',
    hex: '#10B981',
    hoverHex: '#34D399',
    rgb: '16, 185, 129',
    glow: 'rgba(16, 185, 129, 0.25)',
  },
  orange: {
    key: 'orange',
    label: 'Smile Orange',
    hex: '#FF9900',
    hoverHex: '#FFAC33',
    rgb: '255, 153, 0',
    glow: 'rgba(255, 153, 0, 0.25)',
  },
};

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
  // Default to purple (#AD5CFF) as requested
  const [secondaryColor, setSecondaryColorState] = useState<SecondaryColorKey>('purple');

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

    // Apply secondary accent variables
    root.style.setProperty('--theme-accent', config.hex);
    root.style.setProperty('--theme-accent-hover', config.hoverHex);
    root.style.setProperty('--theme-accent-rgb', config.rgb);
    root.style.setProperty('--theme-accent-glow', config.glow);

    // Apply background & surface variables
    if (bgMode === 'dark') {
      root.style.setProperty('--theme-bg', '#111622');
      root.style.setProperty('--theme-surface', '#161B26');
      root.style.setProperty('--theme-surface-card', '#131822');
      root.style.setProperty('--theme-surface-elevated', '#1C2333');
      root.style.setProperty('--theme-border', '#232F3E');
      root.style.setProperty('--theme-border-strong', '#37475A');
      root.style.setProperty('--theme-grid', 'rgba(255, 255, 255, 0.08)');
      root.style.setProperty('--theme-text', '#FFFFFF');
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
