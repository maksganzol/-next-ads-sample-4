interface AdZoneProps {
  width: number;
  height: number;
  className?: string;
  zoneClass?: string; // CSS class for NextAds integration
  id?: string; // Unique ID for query selector
}

export function AdZone({ width, height, className = "", zoneClass = "", id }: AdZoneProps) {
  return (
    <div
      id={id}
      className={`flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg ${className} ${zoneClass}`}
      style={{ width: `${width}px`, height: `${height}px`, maxWidth: "100%" }}
    >
      <span className="text-gray-400 text-sm font-medium">
        Ad Zone {width}x{height}
      </span>
    </div>
  );
}
