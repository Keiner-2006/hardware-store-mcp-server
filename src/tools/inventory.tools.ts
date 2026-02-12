import { z } from "zod";
import { inventoryService } from "../services/inventory.service.js";

/**
 * Tool para obtener la lista de productos.
 * Permite filtrar opcionalmente por categoría.
 */
export const obtenerProductosTool = {
    name: "obtener_productos",
    description: "Obtiene la lista de productos del inventario. Útil para consultar precios, stock y nombres.",
    parameters: z.object({
        categoria: z.number().optional().describe("ID numérico de la categoría para filtrar (ej: 1=Herramientas, 2=Construcción). Opcional."),
    }),
    handler: async (args: { categoria?: number }) => {
        const productos = await inventoryService.getProducts(args.categoria);
        return productos;
    }
};

/**
 * Tool para buscar un producto específico por ID.
 */
export const obtenerProductoPorIdTool = {
    name: "obtener_producto_por_id",
    description: "Busca un producto específico usando su ID único. Devuelve todos los detalles del producto.",
    parameters: z.object({
        id: z.number().describe("El ID único del producto."),
    }),
    handler: async (args: { id: number }) => {
        const producto = await inventoryService.getProductById(args.id);
        return producto;
    }
};
