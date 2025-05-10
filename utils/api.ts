export async function fetchCarData(make: string, model: string) {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/cars?make=${make}&model=${model}`,
      {
        headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJAS_KEY || '' },
      }
    );
  
    if (!response.ok) {
      throw new Error('Chyba při načítání dat o vozidle');
    }
  
    const data = await response.json();
    return data[0];
  }
  