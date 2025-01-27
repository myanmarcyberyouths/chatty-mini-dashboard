import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'stickers', title: 'Stickers', href: paths.dashboard.stickers, icon: 'Photo' },
] satisfies NavItemConfig[];
