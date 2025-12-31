const MiniChart = () => {
  const bars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 68];
  
  return (
    <div className="w-full h-full flex items-end justify-between gap-1 p-4">
      {bars.map((height, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-violet to-cyan opacity-80 transition-all duration-300 hover:opacity-100"
          style={{ 
            height: `${height}%`,
            animationDelay: `${i * 0.05}s`
          }}
        />
      ))}
    </div>
  );
};

export default MiniChart;
