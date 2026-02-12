# MCP Server - Gestión de Ferretería

Servidor compatible con Model Context Protocol (MCP) que permite a LLMs (como Claude o Gemini) interactuar con la base de datos y lógica de negocio de la Ferretería a través de su API.

## Características

- Consulta de productos y stock en tiempo real.
- Gestión de pedidos y seguimiento de estados.
- Historial de ventas y transacciones.
- Validación de esquemas con Zod.
- Cliente HTTP robusto con Axios.

## Herramientas (Tools)

El servidor expone las siguientes funciones a la IA:

- **obtenerProductos**: Consulta del catálogo completo o por categoría.
- **obtenerProductoPorId**: Detalles técnicos y precios de un producto.
- **obtenerPedidos**: Listado de órdenes de compra/entrega.
- **obtenerPedidoPorId**: Detalle de ítems dentro de una orden.
- **obtenerVentas**: Registro de facturación realizada.

## Desarrollo

1. `npm install`
2. `npm run dev` (requiere .env configurado)

## Build

1. `npm run build`
2. El binario ejecutable se genera en `dist/main.js`.
