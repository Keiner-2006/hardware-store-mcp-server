import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Importación de tus herramientas
import { obtenerProductosTool, obtenerProductoPorIdTool } from "./tools/inventory.tools.js";
import { obtenerPedidosTool, obtenerPedidoPorIdTool, obtenerVentasTool } from "./tools/sales.tools.js";

// 1. Crear el servidor
const server = new McpServer({
    name: "mcp-server-ferreteria",
    version: "1.0.0",
});

// 2. Definir las herramientas usando registerTool

// Obtener todos los productos
server.registerTool(
    "obtenerProductos",
    {
        description: "Obtiene la lista completa de productos del inventario de la ferretería.",
        inputSchema: z.object({}), // No requiere parámetros
    },
    async () => {
        const result = await obtenerProductosTool.handler({});
        return {
            content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
        };
    }
);

// Obtener producto por ID
server.registerTool(
    "obtenerProductoPorId",
    {
        description: "Busca un producto específico mediante su ID único.",
        inputSchema: z.object({
            id: z.number().describe("El ID del producto (número entero)")
        }),
    },
    async ({ id }) => {
        const result = await obtenerProductoPorIdTool.handler({ id });
        return {
            content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
        };
    }
);

// Obtener todos los pedidos
server.registerTool(
    "obtenerPedidos",
    {
        description: "Lista todos los pedidos realizados en la ferretería.",
        inputSchema: z.object({}),
    },
    async () => {
        const result = await obtenerPedidosTool.handler();
        return {
            content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
        };
    }
);

// Obtener pedido por ID
server.registerTool(
    "obtenerPedidoPorId",
    {
        description: "Obtiene los detalles de un pedido específico usando su ID.",
        inputSchema: z.object({
            id: z.number().describe("El ID del pedido (número entero)")
        }),
    },
    async ({ id }) => {
        const result = await obtenerPedidoPorIdTool.handler({ id });
        return {
            content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
        };
    }
);

// Obtener historial de ventas
server.registerTool(
    "obtenerVentas",
    {
        description: "Muestra el registro histórico de todas las ventas completadas.",
        inputSchema: z.object({}),
    },
    async () => {
        const result = await obtenerVentasTool.handler();
        return {
            content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
        };
    }
);

// 3. Escuchar las conexiones
const transport = new StdioServerTransport();
await server.connect(transport);
