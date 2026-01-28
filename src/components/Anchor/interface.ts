import type React from 'react';

export interface IAnchor extends React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> {
  text: string;
  $variant?: 'secondary' | 'tertiary' | 'quaternary';
}
