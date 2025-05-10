'use client';

import { useState } from 'react';
import CarSelector from '../../components/CarSelector';
import CarCard from '../../components/CarCard';
import { fetchCarData } from '../../utils/api';

export default function HomePage() {
  const [car1, setCar1] = useState(null);
  const [car2, setCar2] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelectCar1 = async (make: string, model: string) => {
    setLoading(true);
    try {
      const data = await fetchCarData(make, model);
      setCar1(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCar2 = async (make: string, model: string) => {
    setLoading(true);
    try {
      const data = await fetchCarData(make, model);
      setCar2(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Porovnání automobilů</h1>
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Auto 1</h2>
          <CarSelector onSelect={handleSelectCar1} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Auto 2</h2>
          <CarSelector onSelect={handleSelectCar2} />
        </div>
      </div>
      {loading && <p className="text-center">Načítání dat...</p>}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {car1 && <CarCard car={car1} />}
        {car2 && <CarCard car={car2} />}
      </div>
    </main>
  );
}