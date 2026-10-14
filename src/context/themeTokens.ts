export type SecondaryColorKey = 'blue' | 'pink' | 'green' | 'orange' | 'purple';
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
  blue: {
    key: 'blue',
    label: 'Cloud Blue',
    hex: '#42B4FF',
    hoverHex: '#5EC2FF',
    rgb: '66, 180, 255',
    glow: 'rgba(66, 180, 255, 0.35)',
  },
  pink: {
    key: 'pink',
    label: 'Neon Pink',
    hex: '#FF57EA',
    hoverHex: '#FF75ED',
    rgb: '255, 87, 234',
    glow: 'rgba(255, 87, 234, 0.35)',
  },
  green: {
    key: 'green',
    label: 'Cyber Green',
    hex: '#00E582',
    hoverHex: '#24EDA0',
    rgb: '0, 229, 130',
    glow: 'rgba(0, 229, 130, 0.35)',
  },
  orange: {
    key: 'orange',
    label: 'Builder Orange',
    hex: '#FF9900',
    hoverHex: '#FFAC33',
    rgb: '255, 153, 0',
    glow: 'rgba(255, 153, 0, 0.35)',
  },
  purple: {
    key: 'purple',
    label: 'Electric Purple',
    hex: '#AD5CFF',
    hoverHex: '#BC73FF',
    rgb: '173, 92, 255',
    glow: 'rgba(173, 92, 255, 0.35)',
  },
};
