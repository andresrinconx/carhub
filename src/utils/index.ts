export const fetchCars = async () => {
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: {
      'X-RapidAPI-Key': '5db913edf5msh6ec7bf157474b83p1f6670jsn3b71a0f7013c',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  })
  const data = await response.json()
  return data
}