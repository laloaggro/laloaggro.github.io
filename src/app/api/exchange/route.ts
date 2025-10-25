export async function GET(request: Request) {
  try {
    // Para demostración, usaremos datos simulados
    // En una implementación real, conectarías con una API de tasas de cambio
    const mockExchangeData = {
      usdToClp: 950.50,
      eurToClp: 1020.75,
      lastUpdated: new Date().toISOString(),
      source: "Banco Central de Chile (simulado)"
    };

    return new Response(
      JSON.stringify({
        success: true,
        data: mockExchangeData
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
        error: 'Error al obtener las tasas de cambio'
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