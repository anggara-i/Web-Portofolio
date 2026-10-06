type PiMarkProps = {
  variant: string;
  className?: string;
};

export default function PiMark({ variant, className }: PiMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 80"
      role="img"
      aria-label="PI"
    >
      <defs>
        <linearGradient id={`pi-silver-${variant}`} x1="0" y1="0" x2="0.85" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.28" stopColor="#f4f8ff" />
          <stop offset="0.58" stopColor="#a9c9eb" />
          <stop offset="0.82" stopColor="#e0efff" />
          <stop offset="1" stopColor="#668cb9" />
        </linearGradient>
        <linearGradient id={`pi-blue-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#effcff" />
          <stop offset="0.18" stopColor="#83d9ff" />
          <stop offset="0.42" stopColor="#168cff" />
          <stop offset="0.72" stopColor="#0870ed" />
          <stop offset="1" stopColor="#063ea9" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#pi-silver-${variant})`}
        fillRule="evenodd"
        d="M8 72V17Q8 7 18 7h27q25 0 25 22 0 23-25 23H28v17q0 4-4 6l-16 5V72Zm20-36h16q8 0 8-7t-8-7H28v14Z"
      />
      <path fill={`url(#pi-blue-${variant})`} d="M77 15 94 5v62L77 77V15Z" />
      <path d="M12 17q0-7 7-7h25" fill="none" stroke="#fff" strokeOpacity=".94" strokeWidth="2.2" />
      <path d="m80 15 11-7v12L80 27Z" fill="#fff" fillOpacity=".25" />
      <path d="m79 70 12-7" fill="none" stroke="#54baff" strokeOpacity=".72" strokeWidth="1.5" />
    </svg>
  );
}