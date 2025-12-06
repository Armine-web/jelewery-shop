import { type ReactNode } from "react";

export type AppDrawerProps = {
  side?: 'left' | 'right';
  title?: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};