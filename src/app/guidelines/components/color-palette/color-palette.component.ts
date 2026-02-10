import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

interface ColorSwatch {
  name: string;
  value: string;
  variableName?: string;
  contrast?: string;
}

interface ColorPalette {
  name: string;
  colors: {
    primary: ColorSwatch[];
    accent: ColorSwatch[];
    warn: ColorSwatch[];
    gray: ColorSwatch[];
  };
}

/** For 2-column display: group name + list of swatches (name, value, variableName). */
interface ColorGroup {
  colorName: string;
  colors: { name: string; value: string; variableName: string }[];
}

/** Theme class name on body -> display name */
const THEME_CLASS_TO_NAME: Record<string, string> = {
  'theme-indigo': 'Indigo',
  'theme-black': 'Black',
  'theme-greenwave': 'Greenwave',
};

/** All vw color palettes from @enttribe/themes-gx-theme variables.scss (from line ~1535). */
const VW_PALETTES_FROM_VARIABLES_SCSS: { family: string; colors: { name: string; value: string; variableName: string }[] }[] = [
  { family: 'Pure', colors: [
    { name: 'white', value: '#ffffff', variableName: '--vw-color-white' },
    { name: 'black', value: '#000000', variableName: '--vw-color-black' },
  ]},
  { family: 'Gray', colors: [
    { name: '10', value: '#ffffff', variableName: '--vw-color-gray-10' },
    { name: '50', value: '#f9fafb', variableName: '--vw-color-gray-50' },
    { name: '100', value: '#f3f4f6', variableName: '--vw-color-gray-100' },
    { name: '200', value: '#e5e7eb', variableName: '--vw-color-gray-200' },
    { name: '300', value: '#d1d5db', variableName: '--vw-color-gray-300' },
    { name: '400', value: '#9ca3af', variableName: '--vw-color-gray-400' },
    { name: '500', value: '#6b7280', variableName: '--vw-color-gray-500' },
    { name: '600', value: '#4b5563', variableName: '--vw-color-gray-600' },
    { name: '700', value: '#374151', variableName: '--vw-color-gray-700' },
    { name: '800', value: '#1f2937', variableName: '--vw-color-gray-800' },
    { name: '900', value: '#111827', variableName: '--vw-color-gray-900' },
    { name: '950', value: '#030712', variableName: '--vw-color-gray-950' },
    { name: '1000', value: '#000000', variableName: '--vw-color-gray-1000' },
  ]},
  { family: 'Blue', colors: [
    { name: '25', value: '#f8fcff', variableName: '--vw-color-blue-25' },
    { name: '50', value: '#eff6ff', variableName: '--vw-color-blue-50' },
    { name: '100', value: '#dbeafe', variableName: '--vw-color-blue-100' },
    { name: '200', value: '#bfdbfe', variableName: '--vw-color-blue-200' },
    { name: '300', value: '#93c5fd', variableName: '--vw-color-blue-300' },
    { name: '400', value: '#60a5fa', variableName: '--vw-color-blue-400' },
    { name: '500', value: '#3b82f6', variableName: '--vw-color-blue-500' },
    { name: '600', value: '#2563eb', variableName: '--vw-color-blue-600' },
    { name: '700', value: '#1d4ed8', variableName: '--vw-color-blue-700' },
    { name: '800', value: '#1e40af', variableName: '--vw-color-blue-800' },
    { name: '900', value: '#1e3a8a', variableName: '--vw-color-blue-900' },
    { name: '950', value: '#172554', variableName: '--vw-color-blue-950' },
  ]},
  { family: 'Teal', colors: [
    { name: '25', value: '#f7fffe', variableName: '--vw-color-teal-25' },
    { name: '50', value: '#f0fdfa', variableName: '--vw-color-teal-50' },
    { name: '100', value: '#ccfbf1', variableName: '--vw-color-teal-100' },
    { name: '200', value: '#99f6e4', variableName: '--vw-color-teal-200' },
    { name: '300', value: '#5eead4', variableName: '--vw-color-teal-300' },
    { name: '400', value: '#2dd4bf', variableName: '--vw-color-teal-400' },
    { name: '500', value: '#14b8a6', variableName: '--vw-color-teal-500' },
    { name: '600', value: '#0d9488', variableName: '--vw-color-teal-600' },
    { name: '700', value: '#0f766e', variableName: '--vw-color-teal-700' },
    { name: '800', value: '#115e59', variableName: '--vw-color-teal-800' },
    { name: '900', value: '#134e4a', variableName: '--vw-color-teal-900' },
    { name: '950', value: '#042f2e', variableName: '--vw-color-teal-950' },
  ]},
  { family: 'Green', colors: [
    { name: '25', value: '#f7fff9', variableName: '--vw-color-green-25' },
    { name: '50', value: '#f0fdf4', variableName: '--vw-color-green-50' },
    { name: '100', value: '#dcfce7', variableName: '--vw-color-green-100' },
    { name: '200', value: '#bbf7d0', variableName: '--vw-color-green-200' },
    { name: '300', value: '#86efac', variableName: '--vw-color-green-300' },
    { name: '400', value: '#4ade80', variableName: '--vw-color-green-400' },
    { name: '500', value: '#22c55e', variableName: '--vw-color-green-500' },
    { name: '600', value: '#16a34a', variableName: '--vw-color-green-600' },
    { name: '700', value: '#15803d', variableName: '--vw-color-green-700' },
    { name: '800', value: '#166534', variableName: '--vw-color-green-800' },
    { name: '900', value: '#14532d', variableName: '--vw-color-green-900' },
    { name: '950', value: '#052e16', variableName: '--vw-color-green-950' },
  ]},
  { family: 'Amber', colors: [
    { name: '25', value: '#fffef7', variableName: '--vw-color-amber-25' },
    { name: '50', value: '#fffbeb', variableName: '--vw-color-amber-50' },
    { name: '100', value: '#fef3c7', variableName: '--vw-color-amber-100' },
    { name: '200', value: '#fde68a', variableName: '--vw-color-amber-200' },
    { name: '300', value: '#fcd34d', variableName: '--vw-color-amber-300' },
    { name: '400', value: '#fbbf24', variableName: '--vw-color-amber-400' },
    { name: '500', value: '#f59e0b', variableName: '--vw-color-amber-500' },
    { name: '600', value: '#d97706', variableName: '--vw-color-amber-600' },
    { name: '700', value: '#b45309', variableName: '--vw-color-amber-700' },
    { name: '800', value: '#92400e', variableName: '--vw-color-amber-800' },
    { name: '900', value: '#78350f', variableName: '--vw-color-amber-900' },
    { name: '950', value: '#451a03', variableName: '--vw-color-amber-950' },
  ]},
  { family: 'Red', colors: [
    { name: '25', value: '#fffcfc', variableName: '--vw-color-red-25' },
    { name: '50', value: '#fef2f2', variableName: '--vw-color-red-50' },
    { name: '100', value: '#fee2e2', variableName: '--vw-color-red-100' },
    { name: '200', value: '#fecaca', variableName: '--vw-color-red-200' },
    { name: '300', value: '#fca5a5', variableName: '--vw-color-red-300' },
    { name: '400', value: '#f87171', variableName: '--vw-color-red-400' },
    { name: '500', value: '#ef4444', variableName: '--vw-color-red-500' },
    { name: '600', value: '#dc2626', variableName: '--vw-color-red-600' },
    { name: '700', value: '#b91c1c', variableName: '--vw-color-red-700' },
    { name: '800', value: '#991b1b', variableName: '--vw-color-red-800' },
    { name: '900', value: '#7f1d1d', variableName: '--vw-color-red-900' },
    { name: '950', value: '#450a0a', variableName: '--vw-color-red-950' },
  ]},
  { family: 'Indigo', colors: [
    { name: '25', value: '#F6F6FF', variableName: '--vw-color-indigo-25' },
    { name: '50', value: '#eef2ff', variableName: '--vw-color-indigo-50' },
    { name: '100', value: '#e0e7ff', variableName: '--vw-color-indigo-100' },
    { name: '200', value: '#c7d2fe', variableName: '--vw-color-indigo-200' },
    { name: '300', value: '#a5b4fc', variableName: '--vw-color-indigo-300' },
    { name: '400', value: '#818cf8', variableName: '--vw-color-indigo-400' },
    { name: '500', value: '#6366f1', variableName: '--vw-color-indigo-500' },
    { name: '600', value: '#4f46e5', variableName: '--vw-color-indigo-600' },
    { name: '700', value: '#4338ca', variableName: '--vw-color-indigo-700' },
    { name: '800', value: '#3730a3', variableName: '--vw-color-indigo-800' },
    { name: '900', value: '#312e81', variableName: '--vw-color-indigo-900' },
    { name: '950', value: '#1e1b4b', variableName: '--vw-color-indigo-950' },
  ]},
  { family: 'Orange', colors: [
    { name: '25', value: '#FFF8EE', variableName: '--vw-color-orange-25' },
    { name: '50', value: '#fff7ed', variableName: '--vw-color-orange-50' },
    { name: '100', value: '#ffedd5', variableName: '--vw-color-orange-100' },
    { name: '200', value: '#fed7aa', variableName: '--vw-color-orange-200' },
    { name: '300', value: '#fdba74', variableName: '--vw-color-orange-300' },
    { name: '400', value: '#fb923c', variableName: '--vw-color-orange-400' },
    { name: '500', value: '#f97316', variableName: '--vw-color-orange-500' },
    { name: '600', value: '#ea580c', variableName: '--vw-color-orange-600' },
    { name: '700', value: '#c2410c', variableName: '--vw-color-orange-700' },
    { name: '800', value: '#9a3412', variableName: '--vw-color-orange-800' },
    { name: '900', value: '#7c2d12', variableName: '--vw-color-orange-900' },
    { name: '950', value: '#431407', variableName: '--vw-color-orange-950' },
  ]},
  { family: 'Stone', colors: [
    { name: '25', value: '#fcfcfb', variableName: '--vw-color-stone-25' },
    { name: '50', value: '#fafaf9', variableName: '--vw-color-stone-50' },
    { name: '100', value: '#f5f5f4', variableName: '--vw-color-stone-100' },
    { name: '200', value: '#e7e5e4', variableName: '--vw-color-stone-200' },
    { name: '300', value: '#d6d3d1', variableName: '--vw-color-stone-300' },
    { name: '400', value: '#a8a29e', variableName: '--vw-color-stone-400' },
    { name: '500', value: '#78716c', variableName: '--vw-color-stone-500' },
    { name: '600', value: '#57534e', variableName: '--vw-color-stone-600' },
    { name: '700', value: '#44403c', variableName: '--vw-color-stone-700' },
    { name: '800', value: '#292524', variableName: '--vw-color-stone-800' },
    { name: '900', value: '#1c1917', variableName: '--vw-color-stone-900' },
    { name: '950', value: '#0c0a09', variableName: '--vw-color-stone-950' },
  ]},
  { family: 'Neutral', colors: [
    { name: '25', value: '#fcfcfc', variableName: '--vw-color-neutral-25' },
    { name: '50', value: '#fafafa', variableName: '--vw-color-neutral-50' },
    { name: '100', value: '#f5f5f5', variableName: '--vw-color-neutral-100' },
    { name: '200', value: '#e5e5e5', variableName: '--vw-color-neutral-200' },
    { name: '300', value: '#d4d4d4', variableName: '--vw-color-neutral-300' },
    { name: '400', value: '#a3a3a3', variableName: '--vw-color-neutral-400' },
    { name: '500', value: '#737373', variableName: '--vw-color-neutral-500' },
    { name: '600', value: '#525252', variableName: '--vw-color-neutral-600' },
    { name: '700', value: '#404040', variableName: '--vw-color-neutral-700' },
    { name: '800', value: '#262626', variableName: '--vw-color-neutral-800' },
    { name: '900', value: '#171717', variableName: '--vw-color-neutral-900' },
    { name: '950', value: '#0a0a0a', variableName: '--vw-color-neutral-950' },
  ]},
  { family: 'Zinc', colors: [
    { name: '25', value: '#fcfcfc', variableName: '--vw-color-zinc-25' },
    { name: '50', value: '#fafafa', variableName: '--vw-color-zinc-50' },
    { name: '100', value: '#f4f4f5', variableName: '--vw-color-zinc-100' },
    { name: '200', value: '#e4e4e7', variableName: '--vw-color-zinc-200' },
    { name: '300', value: '#d4d4d8', variableName: '--vw-color-zinc-300' },
    { name: '400', value: '#a1a1aa', variableName: '--vw-color-zinc-400' },
    { name: '500', value: '#71717a', variableName: '--vw-color-zinc-500' },
    { name: '600', value: '#52525b', variableName: '--vw-color-zinc-600' },
    { name: '700', value: '#3f3f46', variableName: '--vw-color-zinc-700' },
    { name: '800', value: '#27272a', variableName: '--vw-color-zinc-800' },
    { name: '900', value: '#18181b', variableName: '--vw-color-zinc-900' },
    { name: '950', value: '#09090b', variableName: '--vw-color-zinc-950' },
  ]},
  { family: 'Slate', colors: [
    { name: '25', value: '#fbfcfe', variableName: '--vw-color-slate-25' },
    { name: '50', value: '#f8fafc', variableName: '--vw-color-slate-50' },
    { name: '100', value: '#f1f5f9', variableName: '--vw-color-slate-100' },
    { name: '200', value: '#e2e8f0', variableName: '--vw-color-slate-200' },
    { name: '300', value: '#cbd5e1', variableName: '--vw-color-slate-300' },
    { name: '400', value: '#94a3b8', variableName: '--vw-color-slate-400' },
    { name: '500', value: '#64748b', variableName: '--vw-color-slate-500' },
    { name: '600', value: '#475569', variableName: '--vw-color-slate-600' },
    { name: '700', value: '#334155', variableName: '--vw-color-slate-700' },
    { name: '800', value: '#1e293b', variableName: '--vw-color-slate-800' },
    { name: '900', value: '#0f172a', variableName: '--vw-color-slate-900' },
    { name: '950', value: '#020617', variableName: '--vw-color-slate-950' },
  ]},
  { family: 'Rose', colors: [
    { name: '25', value: '#fff8f9', variableName: '--vw-color-rose-25' },
    { name: '50', value: '#fff1f2', variableName: '--vw-color-rose-50' },
    { name: '100', value: '#ffe4e6', variableName: '--vw-color-rose-100' },
    { name: '200', value: '#fecdd3', variableName: '--vw-color-rose-200' },
    { name: '300', value: '#fda4af', variableName: '--vw-color-rose-300' },
    { name: '400', value: '#fb7185', variableName: '--vw-color-rose-400' },
    { name: '500', value: '#f43f5e', variableName: '--vw-color-rose-500' },
    { name: '600', value: '#e11d48', variableName: '--vw-color-rose-600' },
    { name: '700', value: '#be123c', variableName: '--vw-color-rose-700' },
    { name: '800', value: '#9f1239', variableName: '--vw-color-rose-800' },
    { name: '900', value: '#881337', variableName: '--vw-color-rose-900' },
    { name: '950', value: '#4c0519', variableName: '--vw-color-rose-950' },
  ]},
  { family: 'Pink', colors: [
    { name: '25', value: '#fef7fb', variableName: '--vw-color-pink-25' },
    { name: '50', value: '#fdf2f8', variableName: '--vw-color-pink-50' },
    { name: '100', value: '#fce7f3', variableName: '--vw-color-pink-100' },
    { name: '200', value: '#fbcfe8', variableName: '--vw-color-pink-200' },
    { name: '300', value: '#f9a8d4', variableName: '--vw-color-pink-300' },
    { name: '400', value: '#f472b6', variableName: '--vw-color-pink-400' },
    { name: '500', value: '#ec4899', variableName: '--vw-color-pink-500' },
    { name: '600', value: '#db2777', variableName: '--vw-color-pink-600' },
    { name: '700', value: '#be185d', variableName: '--vw-color-pink-700' },
    { name: '800', value: '#9d174d', variableName: '--vw-color-pink-800' },
    { name: '900', value: '#831843', variableName: '--vw-color-pink-900' },
    { name: '950', value: '#500724', variableName: '--vw-color-pink-950' },
  ]},
  { family: 'Fuchsia', colors: [
    { name: '25', value: '#fef9ff', variableName: '--vw-color-fuchsia-25' },
    { name: '50', value: '#fdf4ff', variableName: '--vw-color-fuchsia-50' },
    { name: '100', value: '#fae8ff', variableName: '--vw-color-fuchsia-100' },
    { name: '200', value: '#f5d0fe', variableName: '--vw-color-fuchsia-200' },
    { name: '300', value: '#f0abfc', variableName: '--vw-color-fuchsia-300' },
    { name: '400', value: '#e879f9', variableName: '--vw-color-fuchsia-400' },
    { name: '500', value: '#d946ef', variableName: '--vw-color-fuchsia-500' },
    { name: '600', value: '#c026d3', variableName: '--vw-color-fuchsia-600' },
    { name: '700', value: '#a21caf', variableName: '--vw-color-fuchsia-700' },
    { name: '800', value: '#86198f', variableName: '--vw-color-fuchsia-800' },
    { name: '900', value: '#701a75', variableName: '--vw-color-fuchsia-900' },
    { name: '950', value: '#4a044e', variableName: '--vw-color-fuchsia-950' },
  ]},
  { family: 'Purple', colors: [
    { name: '25', value: '#fdfaff', variableName: '--vw-color-purple-25' },
    { name: '50', value: '#faf5ff', variableName: '--vw-color-purple-50' },
    { name: '100', value: '#f3e8ff', variableName: '--vw-color-purple-100' },
    { name: '200', value: '#e9d5ff', variableName: '--vw-color-purple-200' },
    { name: '300', value: '#d8b4fe', variableName: '--vw-color-purple-300' },
    { name: '400', value: '#c084fc', variableName: '--vw-color-purple-400' },
    { name: '500', value: '#a855f7', variableName: '--vw-color-purple-500' },
    { name: '600', value: '#9333ea', variableName: '--vw-color-purple-600' },
    { name: '700', value: '#7e22ce', variableName: '--vw-color-purple-700' },
    { name: '800', value: '#6b21a8', variableName: '--vw-color-purple-800' },
    { name: '900', value: '#581c87', variableName: '--vw-color-purple-900' },
    { name: '950', value: '#3b0764', variableName: '--vw-color-purple-950' },
  ]},
  { family: 'Violet', colors: [
    { name: '25', value: '#faf9ff', variableName: '--vw-color-violet-25' },
    { name: '50', value: '#f5f3ff', variableName: '--vw-color-violet-50' },
    { name: '100', value: '#ede9fe', variableName: '--vw-color-violet-100' },
    { name: '200', value: '#ddd6fe', variableName: '--vw-color-violet-200' },
    { name: '300', value: '#c4b5fd', variableName: '--vw-color-violet-300' },
    { name: '400', value: '#a78bfa', variableName: '--vw-color-violet-400' },
    { name: '500', value: '#8b5cf6', variableName: '--vw-color-violet-500' },
    { name: '600', value: '#7c3aed', variableName: '--vw-color-violet-600' },
    { name: '700', value: '#6d28d9', variableName: '--vw-color-violet-700' },
    { name: '800', value: '#5b21b6', variableName: '--vw-color-violet-800' },
    { name: '900', value: '#4c1d95', variableName: '--vw-color-violet-900' },
    { name: '950', value: '#2e1065', variableName: '--vw-color-violet-950' },
  ]},
  { family: 'Sky', colors: [
    { name: '25', value: '#f8fcff', variableName: '--vw-color-sky-25' },
    { name: '50', value: '#f0f9ff', variableName: '--vw-color-sky-50' },
    { name: '100', value: '#e0f2fe', variableName: '--vw-color-sky-100' },
    { name: '200', value: '#bae6fd', variableName: '--vw-color-sky-200' },
    { name: '300', value: '#7dd3fc', variableName: '--vw-color-sky-300' },
    { name: '400', value: '#38bdf8', variableName: '--vw-color-sky-400' },
    { name: '500', value: '#0ea5e9', variableName: '--vw-color-sky-500' },
    { name: '600', value: '#0284c7', variableName: '--vw-color-sky-600' },
    { name: '700', value: '#0369a1', variableName: '--vw-color-sky-700' },
    { name: '800', value: '#075985', variableName: '--vw-color-sky-800' },
    { name: '900', value: '#0c4a6e', variableName: '--vw-color-sky-900' },
    { name: '950', value: '#082f49', variableName: '--vw-color-sky-950' },
  ]},
  { family: 'Cyan', colors: [
    { name: '25', value: '#f5feff', variableName: '--vw-color-cyan-25' },
    { name: '50', value: '#ecfeff', variableName: '--vw-color-cyan-50' },
    { name: '100', value: '#cffafe', variableName: '--vw-color-cyan-100' },
    { name: '200', value: '#a5f3fc', variableName: '--vw-color-cyan-200' },
    { name: '300', value: '#67e8f9', variableName: '--vw-color-cyan-300' },
    { name: '400', value: '#22d3ee', variableName: '--vw-color-cyan-400' },
    { name: '500', value: '#06b6d4', variableName: '--vw-color-cyan-500' },
    { name: '600', value: '#0891b2', variableName: '--vw-color-cyan-600' },
    { name: '700', value: '#0e7490', variableName: '--vw-color-cyan-700' },
    { name: '800', value: '#155e75', variableName: '--vw-color-cyan-800' },
    { name: '900', value: '#164e63', variableName: '--vw-color-cyan-900' },
    { name: '950', value: '#083344', variableName: '--vw-color-cyan-950' },
  ]},
  { family: 'Yellow', colors: [
    { name: '25', value: '#fffef5', variableName: '--vw-color-yellow-25' },
    { name: '50', value: '#fefce8', variableName: '--vw-color-yellow-50' },
    { name: '100', value: '#fef9c3', variableName: '--vw-color-yellow-100' },
    { name: '200', value: '#fef08a', variableName: '--vw-color-yellow-200' },
    { name: '300', value: '#fde047', variableName: '--vw-color-yellow-300' },
    { name: '400', value: '#facc15', variableName: '--vw-color-yellow-400' },
    { name: '500', value: '#eab308', variableName: '--vw-color-yellow-500' },
    { name: '600', value: '#ca8a04', variableName: '--vw-color-yellow-600' },
    { name: '700', value: '#a16207', variableName: '--vw-color-yellow-700' },
    { name: '800', value: '#854d0e', variableName: '--vw-color-yellow-800' },
    { name: '900', value: '#713f12', variableName: '--vw-color-yellow-900' },
    { name: '950', value: '#422006', variableName: '--vw-color-yellow-950' },
  ]},
  { family: 'Lime', colors: [
    { name: '25', value: '#fbfff3', variableName: '--vw-color-lime-25' },
    { name: '50', value: '#f7fee7', variableName: '--vw-color-lime-50' },
    { name: '100', value: '#ecfccb', variableName: '--vw-color-lime-100' },
    { name: '200', value: '#d9f99d', variableName: '--vw-color-lime-200' },
    { name: '300', value: '#bef264', variableName: '--vw-color-lime-300' },
    { name: '400', value: '#a3e635', variableName: '--vw-color-lime-400' },
    { name: '500', value: '#84cc16', variableName: '--vw-color-lime-500' },
    { name: '600', value: '#65a30d', variableName: '--vw-color-lime-600' },
    { name: '700', value: '#4d7c0f', variableName: '--vw-color-lime-700' },
    { name: '800', value: '#3f6212', variableName: '--vw-color-lime-800' },
    { name: '900', value: '#365314', variableName: '--vw-color-lime-900' },
    { name: '950', value: '#1a2e05', variableName: '--vw-color-lime-950' },
  ]},
  { family: 'Emerald', colors: [
    { name: '25', value: '#f7fffb', variableName: '--vw-color-emerald-25' },
    { name: '50', value: '#ecfdf5', variableName: '--vw-color-emerald-50' },
    { name: '100', value: '#d1fae5', variableName: '--vw-color-emerald-100' },
    { name: '200', value: '#a7f3d0', variableName: '--vw-color-emerald-200' },
    { name: '300', value: '#6ee7b7', variableName: '--vw-color-emerald-300' },
    { name: '400', value: '#34d399', variableName: '--vw-color-emerald-400' },
    { name: '500', value: '#10b981', variableName: '--vw-color-emerald-500' },
    { name: '600', value: '#059669', variableName: '--vw-color-emerald-600' },
    { name: '700', value: '#047857', variableName: '--vw-color-emerald-700' },
    { name: '800', value: '#065f46', variableName: '--vw-color-emerald-800' },
    { name: '900', value: '#064e3b', variableName: '--vw-color-emerald-900' },
    { name: '950', value: '#022c22', variableName: '--vw-color-emerald-950' },
  ]},
];

@Component({
  standalone: false,
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
})
export class ColorPaletteComponent implements OnInit {
  /** Active theme name (Indigo, Black, Greenwave) from body class */
  activeThemeName = 'Indigo';

  indigoTheme: ColorPalette = {
    name: 'Indigo (Violet)',
    colors: {
      primary: [
        { name: '50', value: '#f5f3ff', variableName: '--primaryColor50', contrast: '#000000' },
        { name: '100', value: '#ede9fe', variableName: '--primaryColor100', contrast: '#000000' },
        { name: '200', value: '#ddd6fe', variableName: '--primaryColor200', contrast: '#000000' },
        { name: '300', value: '#c4b5fd', variableName: '--primaryColor300', contrast: '#000000' },
        { name: '400', value: '#a78bfa', variableName: '--primaryColor400', contrast: '#ffffff' },
        { name: '500', value: '#8b5cf6', variableName: '--primaryColor500', contrast: '#ffffff' },
        { name: '600', value: '#7c3aed', variableName: '--primaryColor600', contrast: '#ffffff' },
        { name: '700', value: '#6d28d9', variableName: '--primaryColor700', contrast: '#ffffff' },
        { name: '800', value: '#5b21b6', variableName: '--primaryColor800', contrast: '#ffffff' },
        { name: '900', value: '#4c1d95', variableName: '--primaryColor900', contrast: '#ffffff' },
        { name: 'A100', value: '#c4b5fd', variableName: '--primaryColorA100', contrast: '#000000' },
        { name: 'A200', value: '#a78bfa', variableName: '--primaryColorA200', contrast: '#000000' },
        { name: 'A400', value: '#7c3aed', variableName: '--primaryColorA400', contrast: '#ffffff' },
        { name: 'A700', value: '#2e1065', variableName: '--primaryColorA700', contrast: '#ffffff' },
      ],
      accent: [
        { name: '50', value: '#e0f2f1', variableName: '--accentColor50', contrast: '#000000' },
        { name: '100', value: '#b2dfdb', variableName: '--accentColor100', contrast: '#000000' },
        { name: '200', value: '#80cbc4', variableName: '--accentColor200', contrast: '#000000' },
        { name: '300', value: '#4db6ac', variableName: '--accentColor300', contrast: '#000000' },
        { name: '400', value: '#26a69a', variableName: '--accentColor400', contrast: '#ffffff' },
        { name: '500', value: '#009688', variableName: '--accentColor500', contrast: '#ffffff' },
        { name: '600', value: '#00897b', variableName: '--accentColor600', contrast: '#ffffff' },
        { name: '700', value: '#00796b', variableName: '--accentColor700', contrast: '#ffffff' },
        { name: '800', value: '#00695c', variableName: '--accentColor800', contrast: '#ffffff' },
        { name: '900', value: '#004d40', variableName: '--accentColor900', contrast: '#ffffff' },
        { name: 'A100', value: '#a7ffeb', variableName: '--accentColorA100', contrast: '#000000' },
        { name: 'A200', value: '#64ffda', variableName: '--accentColorA200', contrast: '#000000' },
        { name: 'A400', value: '#1de9b6', variableName: '--accentColorA400', contrast: '#000000' },
        { name: 'A700', value: '#00bfa5', variableName: '--accentColorA700', contrast: '#000000' },
      ],
      warn: [
        { name: '10', value: '#fffbeb', variableName: '--warnColor10', contrast: '#000000' },
        { name: '50', value: '#fff8e1', variableName: '--warnColor50', contrast: '#000000' },
        { name: '100', value: '#ffecb3', variableName: '--warnColor100', contrast: '#000000' },
        { name: '200', value: '#ffe082', variableName: '--warnColor200', contrast: '#000000' },
        { name: '300', value: '#ffd54f', variableName: '--warnColor300', contrast: '#000000' },
        { name: '400', value: '#ffca28', variableName: '--warnColor400', contrast: '#000000' },
        { name: '500', value: '#ffc107', variableName: '--warnColor500', contrast: '#000000' },
        { name: '600', value: '#ffb300', variableName: '--warnColor600', contrast: '#000000' },
        { name: '700', value: '#ffa000', variableName: '--warnColor700', contrast: '#000000' },
        { name: '800', value: '#ff8f00', variableName: '--warnColor800', contrast: '#000000' },
        { name: '900', value: '#ff6f00', variableName: '--warnColor900', contrast: '#ffffff' },
        { name: '1000', value: '#e65100', variableName: '--warnColor1000', contrast: '#ffffff' },
      ],
      gray: [
        { name: '50', value: '#fafafa', variableName: '--grayColor50', contrast: '#000000' },
        { name: '100', value: '#f5f5f5', variableName: '--grayColor100', contrast: '#000000' },
        { name: '200', value: '#eeeeee', variableName: '--grayColor200', contrast: '#000000' },
        { name: '300', value: '#e0e0e0', variableName: '--grayColor300', contrast: '#000000' },
        { name: '400', value: '#bdbdbd', variableName: '--grayColor400', contrast: '#000000' },
        { name: '500', value: '#9e9e9e', variableName: '--grayColor500', contrast: '#ffffff' },
        { name: '600', value: '#757575', variableName: '--grayColor600', contrast: '#ffffff' },
        { name: '700', value: '#616161', variableName: '--grayColor700', contrast: '#ffffff' },
        { name: '800', value: '#424242', variableName: '--grayColor800', contrast: '#ffffff' },
        { name: '900', value: '#212121', variableName: '--grayColor900', contrast: '#ffffff' },
        { name: '1000', value: '#000000', variableName: '--grayColor1000', contrast: '#ffffff' },
      ],
    },
  };

  blackTheme: ColorPalette = {
    name: 'Black',
    colors: {
      primary: [
        { name: '50', value: '#f2f2f2', variableName: '--primaryColor50', contrast: '#000000' },
        { name: '100', value: '#d9d9d9', variableName: '--primaryColor100', contrast: '#000000' },
        { name: '200', value: '#bfbfbf', variableName: '--primaryColor200', contrast: '#000000' },
        { name: '300', value: '#8c8c8c', variableName: '--primaryColor300', contrast: '#000000' },
        { name: '400', value: '#595959', variableName: '--primaryColor400', contrast: '#ffffff' },
        { name: '500', value: '#000000', variableName: '--primaryColor500', contrast: '#ffffff' },
        { name: '600', value: '#0a0a0a', variableName: '--primaryColor600', contrast: '#ffffff' },
        { name: '700', value: '#000000', variableName: '--primaryColor700', contrast: '#ffffff' },
        { name: '800', value: '#000000', variableName: '--primaryColor800', contrast: '#ffffff' },
        { name: '900', value: '#000000', variableName: '--primaryColor900', contrast: '#ffffff' },
        { name: 'A100', value: '#8583ff', variableName: '--primaryColorA100', contrast: '#000000' },
        { name: 'A200', value: '#5450ff', variableName: '--primaryColorA200', contrast: '#000000' },
        { name: 'A400', value: '#221dff', variableName: '--primaryColorA400', contrast: '#ffffff' },
        { name: 'A700', value: '#0903ff', variableName: '--primaryColorA700', contrast: '#ffffff' },
      ],
      accent: [
        { name: '50', value: '#e3f2fd', variableName: '--accentColor50', contrast: '#000000' },
        { name: '100', value: '#bbdefb', variableName: '--accentColor100', contrast: '#000000' },
        { name: '200', value: '#90caf9', variableName: '--accentColor200', contrast: '#000000' },
        { name: '300', value: '#64b5f6', variableName: '--accentColor300', contrast: '#000000' },
        { name: '400', value: '#42a5f5', variableName: '--accentColor400', contrast: '#000000' },
        { name: '500', value: '#2196f3', variableName: '--accentColor500', contrast: '#ffffff' },
        { name: '600', value: '#1e88e5', variableName: '--accentColor600', contrast: '#ffffff' },
        { name: '700', value: '#1976d2', variableName: '--accentColor700', contrast: '#ffffff' },
        { name: '800', value: '#1565c0', variableName: '--accentColor800', contrast: '#ffffff' },
        { name: '900', value: '#0d47a1', variableName: '--accentColor900', contrast: '#ffffff' },
        { name: 'A100', value: '#82b1ff', variableName: '--accentColorA100', contrast: '#000000' },
        { name: 'A200', value: '#448aff', variableName: '--accentColorA200', contrast: '#ffffff' },
        { name: 'A400', value: '#2979ff', variableName: '--accentColorA400', contrast: '#ffffff' },
        { name: 'A700', value: '#2962ff', variableName: '--accentColorA700', contrast: '#ffffff' },
      ],
      warn: [
        { name: '10', value: '#FFFBFA', variableName: '--warnColor10', contrast: '#000000' },
        { name: '50', value: '#FEF3F2', variableName: '--warnColor50', contrast: '#000000' },
        { name: '100', value: '#FEE4E2', variableName: '--warnColor100', contrast: '#000000' },
        { name: '200', value: '#FECDCA', variableName: '--warnColor200', contrast: '#000000' },
        { name: '300', value: '#FDA29B', variableName: '--warnColor300', contrast: '#000000' },
        { name: '400', value: '#F97066', variableName: '--warnColor400', contrast: '#ffffff' },
        { name: '500', value: '#F04438', variableName: '--warnColor500', contrast: '#ffffff' },
        { name: '600', value: '#D92D20', variableName: '--warnColor600', contrast: '#ffffff' },
        { name: '700', value: '#B42318', variableName: '--warnColor700', contrast: '#ffffff' },
        { name: '800', value: '#912018', variableName: '--warnColor800', contrast: '#ffffff' },
        { name: '900', value: '#7A271A', variableName: '--warnColor900', contrast: '#ffffff' },
        { name: '1000', value: '#55160C', variableName: '--warnColor1000', contrast: '#ffffff' },
      ],
      gray: [
        { name: '50', value: '#fafafa', variableName: '--grayColor50', contrast: '#000000' },
        { name: '100', value: '#f5f5f5', variableName: '--grayColor100', contrast: '#000000' },
        { name: '200', value: '#eeeeee', variableName: '--grayColor200', contrast: '#000000' },
        { name: '300', value: '#e0e0e0', variableName: '--grayColor300', contrast: '#000000' },
        { name: '400', value: '#bdbdbd', variableName: '--grayColor400', contrast: '#000000' },
        { name: '500', value: '#9e9e9e', variableName: '--grayColor500', contrast: '#ffffff' },
        { name: '600', value: '#757575', variableName: '--grayColor600', contrast: '#ffffff' },
        { name: '700', value: '#616161', variableName: '--grayColor700', contrast: '#ffffff' },
        { name: '800', value: '#424242', variableName: '--grayColor800', contrast: '#ffffff' },
        { name: '900', value: '#212121', variableName: '--grayColor900', contrast: '#ffffff' },
        { name: '1000', value: '#000000', variableName: '--grayColor1000', contrast: '#ffffff' },
      ],
    },
  };

  /** Single theme colors block; variable names resolve from active theme (body class). */
  activeThemeColors: ColorPalette['colors'] = this.indigoTheme.colors;

  themes: ColorPalette[] = [this.indigoTheme, this.blackTheme];

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.detectActiveTheme();
  }

  /** Detect active theme from body class (theme-indigo, theme-black, theme-greenwave) */
  detectActiveTheme(): void {
    if (typeof document === 'undefined' || !document.body) return;
    const classList = document.body.classList;
    for (const [themeClass, name] of Object.entries(THEME_CLASS_TO_NAME)) {
      if (classList.contains(themeClass)) {
        this.activeThemeName = name;
        this.activeThemeColors =
          themeClass === 'theme-black' ? this.blackTheme.colors : this.indigoTheme.colors;
        return;
      }
    }
    this.activeThemeColors = this.indigoTheme.colors;
  }

  /** Resolved value of a CSS variable from the active theme (e.g. --accentColor500) */
  getResolvedColor(variableName: string | undefined): string {
    if (!variableName || typeof document === 'undefined') return '';
    const value = getComputedStyle(document.body).getPropertyValue(variableName).trim();
    return value || '';
  }

  copyColor(valueOrVariable: string, variableName?: string): void {
    const toCopy = variableName ? this.getResolvedColor(variableName) || valueOrVariable : valueOrVariable;
    this.clipboard.copy(toCopy);
  }

  /** Theme column: Primary, Accent, Warn, Gray from active theme (var(...) resolved dynamically). */
  get themeColorsGroups(): ColorGroup[] {
    const c = this.activeThemeColors;
    return [
      { colorName: 'Primary', colors: c.primary.map(s => ({ name: s.name, value: s.value ?? '', variableName: s.variableName ?? '' })) },
      { colorName: 'Accent', colors: c.accent.map(s => ({ name: s.name, value: s.value ?? '', variableName: s.variableName ?? '' })) },
      { colorName: 'Warn', colors: c.warn.map(s => ({ name: s.name, value: s.value ?? '', variableName: s.variableName ?? '' })) },
      { colorName: 'Gray', colors: c.gray.map(s => ({ name: s.name, value: s.value ?? '', variableName: s.variableName ?? '' })) },
    ];
  }

  /** vw-palette column: all VisionWave palettes from variables.scss (from line ~1535). */
  get vwPaletteGroups(): ColorGroup[] {
    return VW_PALETTES_FROM_VARIABLES_SCSS.map(p => ({
      colorName: p.family,
      colors: p.colors.map(c => ({ name: c.name, value: c.value, variableName: c.variableName })),
    }));
  }

  cssVariables: {
    category: string;
    description: string;
    colors: ColorSwatch[];
  }[] = [
    {
      category: 'VisionWave Violet',
      description: 'Violet color palette (theme primary). Use --vw-color-violet-* or --primaryColor* in theme-indigo.',
      colors: [
        { name: '50', value: '#f5f3ff', variableName: '--vw-color-violet-50', contrast: '#000000' },
        { name: '100', value: '#ede9fe', variableName: '--vw-color-violet-100', contrast: '#000000' },
        { name: '200', value: '#ddd6fe', variableName: '--vw-color-violet-200', contrast: '#000000' },
        { name: '300', value: '#c4b5fd', variableName: '--vw-color-violet-300', contrast: '#000000' },
        { name: '400', value: '#a78bfa', variableName: '--vw-color-violet-400', contrast: '#ffffff' },
        { name: '500', value: '#8b5cf6', variableName: '--vw-color-violet-500', contrast: '#ffffff' },
        { name: '600', value: '#7c3aed', variableName: '--vw-color-violet-600', contrast: '#ffffff' },
        { name: '700', value: '#6d28d9', variableName: '--vw-color-violet-700', contrast: '#ffffff' },
        { name: '800', value: '#5b21b6', variableName: '--vw-color-violet-800', contrast: '#ffffff' },
        { name: '900', value: '#4c1d95', variableName: '--vw-color-violet-900', contrast: '#ffffff' },
        { name: '950', value: '#2e1065', variableName: '--vw-color-violet-950', contrast: '#ffffff' },
      ],
    },
    {
      category: 'VisionWave Blue',
      description: 'Blue color palette for VisionWave components',
      colors: [
        { name: '50', value: '#e3f2fd', variableName: '--vw-color-blue-50', contrast: '#000000' },
        { name: '100', value: '#bbdefb', variableName: '--vw-color-blue-100', contrast: '#000000' },
        { name: '200', value: '#90caf9', variableName: '--vw-color-blue-200', contrast: '#000000' },
        { name: '300', value: '#64b5f6', variableName: '--vw-color-blue-300', contrast: '#000000' },
        { name: '400', value: '#42a5f5', variableName: '--vw-color-blue-400', contrast: '#000000' },
        { name: '500', value: '#2196f3', variableName: '--vw-color-blue-500', contrast: '#ffffff' },
        { name: '600', value: '#1e88e5', variableName: '--vw-color-blue-600', contrast: '#ffffff' },
        { name: '700', value: '#1976d2', variableName: '--vw-color-blue-700', contrast: '#ffffff' },
        { name: '800', value: '#1565c0', variableName: '--vw-color-blue-800', contrast: '#ffffff' },
        { name: '900', value: '#0d47a1', variableName: '--vw-color-blue-900', contrast: '#ffffff' },
      ],
    },
    {
      category: 'VisionWave Teal',
      description: 'Teal color palette for VisionWave components',
      colors: [
        { name: '50', value: '#e0f2f1', variableName: '--vw-color-teal-50', contrast: '#000000' },
        { name: '100', value: '#b2dfdb', variableName: '--vw-color-teal-100', contrast: '#000000' },
        { name: '200', value: '#80cbc4', variableName: '--vw-color-teal-200', contrast: '#000000' },
        { name: '300', value: '#4db6ac', variableName: '--vw-color-teal-300', contrast: '#000000' },
        { name: '400', value: '#26a69a', variableName: '--vw-color-teal-400', contrast: '#ffffff' },
        { name: '500', value: '#009688', variableName: '--vw-color-teal-500', contrast: '#ffffff' },
        { name: '600', value: '#00897b', variableName: '--vw-color-teal-600', contrast: '#ffffff' },
        { name: '700', value: '#00796b', variableName: '--vw-color-teal-700', contrast: '#ffffff' },
        { name: '800', value: '#00695c', variableName: '--vw-color-teal-800', contrast: '#ffffff' },
        { name: '900', value: '#004d40', variableName: '--vw-color-teal-900', contrast: '#ffffff' },
      ],
    },
    {
      category: 'VisionWave Green',
      description: 'Green color palette for success states',
      colors: [
        { name: '50', value: '#e8f5e9', variableName: '--vw-color-green-50', contrast: '#000000' },
        { name: '100', value: '#c8e6c9', variableName: '--vw-color-green-100', contrast: '#000000' },
        { name: '200', value: '#a5d6a7', variableName: '--vw-color-green-200', contrast: '#000000' },
        { name: '300', value: '#81c784', variableName: '--vw-color-green-300', contrast: '#000000' },
        { name: '400', value: '#66bb6a', variableName: '--vw-color-green-400', contrast: '#000000' },
        { name: '500', value: '#4caf50', variableName: '--vw-color-green-500', contrast: '#ffffff' },
        { name: '600', value: '#43a047', variableName: '--vw-color-green-600', contrast: '#ffffff' },
        { name: '700', value: '#388e3c', variableName: '--vw-color-green-700', contrast: '#ffffff' },
        { name: '800', value: '#2e7d32', variableName: '--vw-color-green-800', contrast: '#ffffff' },
        { name: '900', value: '#1b5e20', variableName: '--vw-color-green-900', contrast: '#ffffff' },
      ],
    },
    {
      category: 'VisionWave Amber',
      description: 'Amber color palette for warning states',
      colors: [
        { name: '50', value: '#fff8e1', variableName: '--vw-color-amber-50', contrast: '#000000' },
        { name: '100', value: '#ffecb3', variableName: '--vw-color-amber-100', contrast: '#000000' },
        { name: '200', value: '#ffe082', variableName: '--vw-color-amber-200', contrast: '#000000' },
        { name: '300', value: '#ffd54f', variableName: '--vw-color-amber-300', contrast: '#000000' },
        { name: '400', value: '#ffca28', variableName: '--vw-color-amber-400', contrast: '#000000' },
        { name: '500', value: '#ffc107', variableName: '--vw-color-amber-500', contrast: '#000000' },
        { name: '600', value: '#ffb300', variableName: '--vw-color-amber-600', contrast: '#000000' },
        { name: '700', value: '#ffa000', variableName: '--vw-color-amber-700', contrast: '#000000' },
        { name: '800', value: '#ff8f00', variableName: '--vw-color-amber-800', contrast: '#000000' },
        { name: '900', value: '#ff6f00', variableName: '--vw-color-amber-900', contrast: '#ffffff' },
      ],
    },
    {
      category: 'VisionWave Red',
      description: 'Red color palette for error/danger states',
      colors: [
        { name: '50', value: '#ffebee', variableName: '--vw-color-red-50', contrast: '#000000' },
        { name: '100', value: '#ffcdd2', variableName: '--vw-color-red-100', contrast: '#000000' },
        { name: '200', value: '#ef9a9a', variableName: '--vw-color-red-200', contrast: '#000000' },
        { name: '300', value: '#e57373', variableName: '--vw-color-red-300', contrast: '#000000' },
        { name: '400', value: '#ef5350', variableName: '--vw-color-red-400', contrast: '#ffffff' },
        { name: '500', value: '#f44336', variableName: '--vw-color-red-500', contrast: '#ffffff' },
        { name: '600', value: '#e53935', variableName: '--vw-color-red-600', contrast: '#ffffff' },
        { name: '700', value: '#d32f2f', variableName: '--vw-color-red-700', contrast: '#ffffff' },
        { name: '800', value: '#c62828', variableName: '--vw-color-red-800', contrast: '#ffffff' },
        { name: '900', value: '#b71c1c', variableName: '--vw-color-red-900', contrast: '#ffffff' },
      ],
    },
    {
      category: 'Semantic Colors',
      description: 'Semantic color variables for common UI states',
      colors: [
        { name: 'info', value: '#1e88e5', variableName: '--vw-color-info', contrast: '#ffffff' },
        { name: 'info-hover', value: '#1976d2', variableName: '--vw-color-info-hover', contrast: '#ffffff' },
        { name: 'info-active', value: '#1565c0', variableName: '--vw-color-info-active', contrast: '#ffffff' },
        { name: 'success', value: '#4caf50', variableName: '--vw-color-success', contrast: '#ffffff' },
        { name: 'success-hover', value: '#43a047', variableName: '--vw-color-success-hover', contrast: '#ffffff' },
        { name: 'success-active', value: '#388e3c', variableName: '--vw-color-success-active', contrast: '#ffffff' },
        { name: 'warning', value: '#ffc107', variableName: '--vw-color-warning', contrast: '#000000' },
        { name: 'warning-hover', value: '#ffb300', variableName: '--vw-color-warning-hover', contrast: '#000000' },
        { name: 'warning-active', value: '#ffa000', variableName: '--vw-color-warning-active', contrast: '#000000' },
        { name: 'danger', value: '#f44336', variableName: '--vw-color-danger', contrast: '#ffffff' },
        { name: 'danger-hover', value: '#e53935', variableName: '--vw-color-danger-hover', contrast: '#ffffff' },
        { name: 'danger-active', value: '#d32f2f', variableName: '--vw-color-danger-active', contrast: '#ffffff' },
      ],
    },
    {
      category: 'Pure Colors',
      description: 'Basic white and black colors',
      colors: [
        { name: 'white', value: '#ffffff', variableName: '--vw-color-white', contrast: '#000000' },
        { name: 'black', value: '#000000', variableName: '--vw-color-black', contrast: '#ffffff' },
      ],
    },
  ];

  copyVariable(variableName: string, event: Event): void {
    event.stopPropagation();
    this.clipboard.copy(variableName);
  }
}
