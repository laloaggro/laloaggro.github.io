export async function GET(request: Request) {
  try {
    // Para demostración, usaremos datos simulados
    // En una implementación real, conectarías con una API como OpenWeatherMap
    const mockWeatherData = {
      location: "Santiago",
      country: "CL",
      temperature: 22,
      condition: "Soleado",
      humidity: 65,
      windSpeed: 12,
      feelsLike: 24,
      high: 25,
      low: 18
    };

    return new Response(
      JSON.stringify({
        success: true,
        data: mockWeatherData
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Error al obtener datos del tiempo'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}