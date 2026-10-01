type DataPoint = {
  label: string;
  value: number;
};

type AreaChartProps = {
  data: DataPoint[];
  width: number;
  height: number;
  color: string;
  strokeW: number;
};

export default function AreaChart({
  data,
  width,
  height,
  color,
  strokeW,
}: AreaChartProps) {
  // پایین‌ترین مقدار
  const minValue = Math.min(...data.map((item) => item.value));

  // بالاترین مقدار
  const maxValue = Math.max(...data.map((item) => item.value));

  const range = maxValue - minValue;

  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * width;

    // تبدیل مقدار به محدوده 0 تا 1
    const normalized = range === 0 ? 0 : (item.value - minValue) / range;

    // کمترین داده = کف نمودار
    // بیشترین داده = بالای نمودار
    const y = height - normalized * height;

    return {
      x,
      y,
      value: item.value,
    };
  });

  const linePath = points
    .map((point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }

      const previous = points[index - 1];

      const controlX = (previous.x + point.x) / 2;

      return `
        C
        ${controlX} ${previous.y},
        ${controlX} ${point.y},
        ${point.x} ${point.y}
      `;
    })
    .join(" ");

  const areaPath = `
    ${linePath}
    L ${width} ${height}
    L 0 ${height}
    Z
  `;

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full overflow-visible"
      >
        {/* Area */}
        <path d={areaPath} fill={color} fillOpacity={0.15} />

        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth={strokeW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex justify-between text-xs text-text-secondary">
        {data.map((item) => (
          <span key={item.label}>{item.label}</span>
        ))}
      </div>
    </div>
  );
}
