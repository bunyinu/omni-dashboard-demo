// Type definitions for Lucide React icons
declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    stroke?: string | number;
    strokeWidth?: string | number;
  }

  // Define base type for all icon components
  export type LucideIcon = FC<IconProps>;

  // Export common icons used in the dashboard
  export const Sun: LucideIcon;
  export const Moon: LucideIcon;
  export const Bell: LucideIcon;
  export const Download: LucideIcon;
  export const Settings: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const Calendar: LucideIcon;
  export const User: LucideIcon;
  export const Home: LucideIcon;
  export const BarChart: LucideIcon;
  export const PieChart: LucideIcon;
  export const Activity: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const FileText: LucideIcon;
  export const Upload: LucideIcon;
  export const X: LucideIcon;
  export const ArrowUpDown: LucideIcon;
  export const Filter: LucideIcon;
  export const Eye: LucideIcon;
  export const EyeOff: LucideIcon;
  export const Maximize: LucideIcon;
  export const Minimize: LucideIcon;
}