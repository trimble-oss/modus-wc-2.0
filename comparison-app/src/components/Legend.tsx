import React from 'react';

interface LegendProps {
  items: {
    color: 'green' | 'red' | 'yellow';
    label: string;
  }[];
  className?: string;
}

const Legend: React.FC<LegendProps> = ({ items, className = '' }) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-500';
      case 'red':
        return 'bg-red-500';
      case 'yellow':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div
      className={`sticky top-4 z-10 bg-white border rounded-lg p-4 shadow-lg ${className}`}
    >
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <span className="font-semibold text-gray-700">Legend:</span>
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className={`inline-block w-4 h-4 ${getColorClass(item.color)} rounded-full`}
            ></span>
            <span className="text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
