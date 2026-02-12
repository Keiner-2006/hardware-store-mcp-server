# Guía de Integración MCP - Ferretería

Este documento describe cómo integrar y utilizar el servidor MCP (Model Context Protocol) para interactuar con la API de la Ferretería.

## Requisitos Previos

- Node.js v18 o superior.
- Una instancia de la API de Ferretería en ejecución.
- Token JWT válido para la autenticación (si es necesario).

## Configuración

1.  Copia el archivo `.env.example` a `.env`.
2.  Configura las variables de entorno:
    - `API_BASE_URL`: URL base de la API de Ferretería.
    - `JWT_TOKEN`: Token de autenticación Bearer.

## Instalación

```bash
cd mcp-server
npm install
npm run build
```

## Uso con Claude Desktop

Para utilizar este servidor con Claude Desktop, añade la siguiente configuración a tu archivo `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ferreteria": {
      "command": "node",
      "args": ["C:/ruta/donde/esta/angular-ferreteria/mcp-server/dist/main.js"]
    }
  }
}
```

## Herramientas Disponibles

- `obtenerProductos`: Lista productos con filtros opcionales.
- `obtenerProductoPorId`: Obtiene detalles de un producto específico.
- `obtenerPedidos`: Lista el historial de pedidos.
- `obtenerPedidoPorId`: Detalles de un pedido y sus productos.
- `obtenerVentas`: Historial de ventas completadas.
