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
          <li>Palivo: {car.fuel_type}</li>
          <li>Převodovka: {car.transmission}</li>
          <li>Pohon: {car.drive}</li>
          <li>Počet válců: {car.cylinders}</li>
          <li>Výkon: {car.horsepower} HP</li>
          <li>Spotřeba město: {car.city_mpg} MPG</li>
          <li>Spotřeba dálnice: {car.highway_mpg} MPG</li>
        </ul>
      </div>
    );
  }  