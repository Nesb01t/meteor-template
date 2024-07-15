import type { JSX } from 'solid-js/jsx-runtime';

export type PropType = JSX.IntrinsicAttributes &
  JSX.HTMLAttributes<HTMLDivElement>;

export type CSSType = import('csstype').Properties;
