// Íconos de trazo propios (24×24), sin dependencias.
const paths: Record<string, string> = {
  compass: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-12.5-2 5-5 2 2-5 5-2Z',
  ship: 'M3 17l1.5 3h15L21 17M5 17V11h14v6M8 11V7h8v4M12 7V3',
  file: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Zm0 0v5h5M9 13h6M9 17h6',
  stack: 'M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5',
  route: 'M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 17h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7',
  calculator: 'M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 4h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01',
  cycle: 'M20 11a8 8 0 0 0-14.9-3M4 13a8 8 0 0 0 14.9 3M5 3v5h5M19 21v-5h-5',
  gate: 'M3 21V8l9-5 9 5v13M7 21v-8h10v8M10 13v8M14 13v8',
  plane: 'M10.5 13.5 3 11l1-2 7 1 4-6h2l-2 7 5 1 1 2-6 .5-3 5.5h-2l.5-6.5Z',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3Z',
  bank: 'M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18',
  briefcase: 'M4 8h16v11H4V8Zm5 0V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M4 13h16',
  home: 'M4 11 12 4l8 7v9h-5v-6H9v6H4v-9Z',
  book: 'M5 4h9a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4V4Zm0 12a4 4 0 0 1 4-4h9',
  cards: 'M8 4h11v14H8zM5 7v13h11',
  check: 'M5 12.5 10 17l9-10',
  checkCircle: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-4-9 3 3 5-6',
  x: 'M6 6l12 12M18 6 6 18',
  xCircle: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9 9l6 6M15 9l-6 6',
  quiz: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-2.5-11.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5V14m0 3h.01',
  timer: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-12v4l2.5 2.5M9 2h6',
  case: 'M9 4h6l1 3h4v13H4V7h4l1-3Zm-1 9h8M8 16h5',
  mic: 'M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3Zm-6 9a6 6 0 0 0 12 0M12 18v3',
  headphones: 'M4 15v-3a8 8 0 0 1 16 0v3M4 15a2 2 0 0 1 2-2h1v7H6a2 2 0 0 1-2-2v-3Zm16 0a2 2 0 0 0-2-2h-1v7h1a2 2 0 0 0 2-2v-3Z',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 4 4',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0',
  menu: 'M4 7h16M4 12h16M4 17h16',
  chevronRight: 'M9 6l6 6-6 6',
  chevronLeft: 'M15 6l-6 6 6 6',
  doc: 'M7 3h7l5 5v13H7V3Zm7 0v5h5M10 12h6M10 15h6M10 18h4',
  tool: 'M14.5 6.5a4 4 0 0 0 5 5L12 19l-3 1 1-3 7.5-7.5a4 4 0 0 1-5-5l2-2Z',
  bulb: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z',
  warn: 'M12 4 2.5 20h19L12 4Zm0 6v4m0 3h.01',
  info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-10v6m0-9h.01',
  flag: 'M5 21V4h11l-1.5 4L16 12H5',
  cloud: 'M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1 0 9H7Z',
  cloudOff: 'M3 3l18 18M8 18H7a4 4 0 0 1-.6-8M11 6.3A6 6 0 0 1 18 9a4.5 4.5 0 0 1 2.7 8',
  refresh: 'M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7',
  download: 'M12 4v11m-5-5 5 5 5-5M5 20h14',
  upload: 'M12 20V9m-5 5 5-5 5 5M5 4h14',
  play: 'M7 5v14l12-7L7 5Z',
  shuffle: 'M4 7h3c5 0 5 10 10 10h3m-3 3 3-3-3-3M4 17h3c1.5 0 2.5-.9 3.3-2M14 9c.8-1.2 1.8-2 3-2h3m-3-3 3 3-3 3',
  sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-15v2m0 16v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M2 12h2m16 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
  moon: 'M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z',
  external: 'M14 4h6v6M20 4l-9 9M18 14v6H4V6h6',
  layers: 'M12 3 2 8l10 5 10-5-10-5ZM2 13l10 5 10-5',
  star: 'M12 3l2.8 5.8 6.2.9-4.5 4.4 1.1 6.2L12 17.4 6.4 20.3l1.1-6.2L3 9.7l6.2-.9L12 3Z',
  list: 'M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01',
}

export function Icon({ name, size = 20, title }: { name: string; size?: number; title?: string }) {
  const d = paths[name] ?? paths.info
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      style={{ flexShrink: 0 }}
    >
      {title && <title>{title}</title>}
      <path d={d} />
    </svg>
  )
}
