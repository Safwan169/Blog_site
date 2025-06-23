'use client';
import { useState } from 'react';

const images = [
  '/banner1.jpg',
  '/banner2.jpg',
  '/banner3.jpg',
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <img src={images[index]} alt={`Slide ${index}`} className="w-full h-full object-cover" />
      <button onClick={prev} className="absolute top-1/2 left-4 text-white bg-black bg-opacity-50 p-2 rounded-full">◀</button>
      <button onClick={next} className="absolute top-1/2 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full">▶</button>
    </div>
  );
}
