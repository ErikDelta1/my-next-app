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
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12">
      <h1 className="text-4xl font-extrabold text-center mb-12">Car Comparasion</h1>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12 mb-12">
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Car 1</h2>
          <CarSelector onSelect={handleSelectCar1} />
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Car 2</h2>
          <CarSelector onSelect={handleSelectCar2} />
        </div>
      </div>

      {loading && <p className="text-center text-blue-400">Loading...</p>}

      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        {car1 && <CarCard car={car1} />}
        {car2 && <CarCard car={car2} />}
      </div>
    </main>
  );
}
