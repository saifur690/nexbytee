type NexbyteMarkProps = {
  className?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

function NexbyteMark({ className, x, y, width = 64, height = 48 }: NexbyteMarkProps) {
  return (
    <svg className={className} x={x} y={y} width={width} height={height}
      viewBox="0 0 80 52" aria-hidden="true" focusable="false">
      <path d="M1 32 21 2h30l3 5-12 17-7-5-23 32-4-2Z" fill="#8050ff" />
      <path d="m24 47 17-24 5 7L65 3l13 20-17 27H27Z" fill="#8050ff" />
    </svg>
  );
}

export default NexbyteMark;
