// Ya no importamos dotenv aquí para evitar logs innecesarios
// Las variables se cargarán mediante la bandera --env-file de Node

export const config = {
    apiBaseUrl: process.env.API_BASE_URL || 'https://localhost:7085/api',
    jwtToken: process.env.JWT_TOKEN || '',
    apiKey: process.env.API_KEY || '',
};
