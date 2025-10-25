export async function GET(request: Request) {
  try {
    // Obtener la hora actual en Santiago, Chile
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('es-CL', {
      timeZone: 'America/Santiago',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const formattedDate = formatter.format(now);
    
    // Obtener componentes separados para una mejor presentación
    const dateComponents = new Intl.DateTimeFormat('es-CL', {
      timeZone: 'America/Santiago',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).formatToParts(now);
    
    const timeComponents = new Intl.DateTimeFormat('es-CL', {
      timeZone: 'America/Santiago',
      hour: '2-digit',
      minute: '2-digit'
    }).formatToParts(now);

    const date = `${dateComponents[4].value}/${dateComponents[2].value}/${dateComponents[0].value}`;
    const time = `${timeComponents[0].value}:${timeComponents[2].value}`;

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          fullDate: formattedDate,
          date: date,
          time: time,
          timezone: 'America/Santiago'
        }
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
        error: 'Error al obtener la hora local'
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