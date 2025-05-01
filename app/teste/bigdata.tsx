// ./bigdata.tsx
'use client'
import { useEffect, useState } from 'react';

const BigData = () => {
  const [data, setData] = useState<number[] | null>(null);

  useEffect(() => {
    // Process data in chunks without blocking UI
    const processData = async () => {
      const chunkSize = 100000;
      const result: number[] = [];
      
      for (let i = 0; i < 60000000; i += chunkSize) {
        const chunk = Array.from({ length: chunkSize }, (_, j) => (i + j) * 2);
        result.push(...chunk);
        
        // Yield to main thread every chunk
        await new Promise(resolve => setTimeout(resolve, 0));
      }
      
      setData(result.slice(0, 100)); // Only store what you need
    };

    processData();
  }, []);

  if (!data) return <div>Generating data...</div>;

  return (
    <div>
      {/* Only render what's visible */}
      {data.slice(0, 100).map((num) => (
        <div key={num}>{num}</div>
      ))}
    </div>
  );
};

export default BigData;