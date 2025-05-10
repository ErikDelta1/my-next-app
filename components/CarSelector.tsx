import { useState } from 'react';

interface CarSelectorProps {
  onSelect: (make: string, model: string) => void;
}

export default function CarSelector({ onSelect }: CarSelectorProps) {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  const handleSelect = () => {
    if (make && model) {
      onSelect(make, model);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Značka (např. Toyota)"
        value={make}
        onChange={(e) => setMake(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Model (např. Corolla)"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleSelect}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Vybrat
      </button>
    </div>
  );
}