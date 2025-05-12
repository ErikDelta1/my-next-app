interface CarData {
  make: string;
  model: string;
  year: number;
  fuel_type: string;
  transmission: string;
  drive: string;
  cylinders: number;
  horsepower: number;
  city_mpg: number;
  highway_mpg: number;
}

interface CarCardProps {
  car: CarData;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="border p-4 rounded shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-2">
        {car.make} {car.model} ({car.year})
      </h2>
      <ul className="list-disc list-inside">
        <li>Fuel: {car.fuel_type}</li>
        <li>Transmission: {car.transmission}</li>
        <li>Drive: {car.drive}</li>
        <li>Cylinders: {car.cylinders}</li>
        <li>Horsepower: {car.horsepower} HP</li>
        <li>City MPG: {car.city_mpg} MPG</li>
        <li>Highway MPG: {car.highway_mpg} MPG</li>
      </ul>
    </div>
  );
}