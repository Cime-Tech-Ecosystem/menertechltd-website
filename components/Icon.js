const paths = {
  web: 'M3 12h18M12 3c2.5 2.5 3.5 5.7 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.7-3.5-9s1-6.5 3.5-9ZM3 12a9 9 0 0 1 18 0 9 9 0 0 1-18 0Z',
  site: 'M4 5h16v14H4zM4 9h16M8 5v4',
  cloud: 'M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.5a4 4 0 0 1-1 7.5H7Z',
  monitor: 'M4 5h16v10H4zM9 19h6M12 15v4M6 9l3 3 2-2 4 4',
  shield: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z',
  alert: 'M12 4 3 19h18L12 4ZM12 10v4M12 17h.01',
  compare: 'M8 4v16M16 4v16M4 8h4M16 8h4M4 16h4M16 16h4',
  upgrade: 'M12 20V6M6 12l6-6 6 6',
  idea: 'M12 3a6 6 0 0 0-3 11.2V16h6v-1.8A6 6 0 0 0 12 3ZM9.5 19h5M10 21.5h4',
  flag: 'M5 21V4h13l-3 4 3 4H5',
  gear: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19 12a7 7 0 0 0-.13-1.35l2.02-1.57-2-3.46-2.38.96A7.03 7.03 0 0 0 14.35 5L14 2.5h-4L9.65 5a7.03 7.03 0 0 0-2.16 1.24l-2.38-.96-2 3.46 2.02 1.57A7 7 0 0 0 5 12c0 .46.04.9.13 1.35l-2.02 1.57 2 3.46 2.38-.96A7.03 7.03 0 0 0 9.65 19L10 21.5h4l.35-2.5a7.03 7.03 0 0 0 2.16-1.24l2.38.96 2-3.46-2.02-1.57c.09-.45.13-.89.13-1.35Z',
};

export default function Icon({ name }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


