import { z } from "zod";
import { salesService } from "../services/sales.service.js";

/**
 * Tool para obtener la lista de pedidos.
 */
export const obtenerPedidosTool = {
    name: "obtener_pedidos",
    description: "Obtiene el historial de pedidos realizados por clientes. Incluye estado, fechas y montos.",
    parameters: z.object({}), // Sin parámetros por ahora
    handler: async () => {
        return await salesService.getPedidos();
    }
};

/**
 * Tool para obtener un pedido por ID con sus detalles.
 */
export const obtenerPedidoPorIdTool = {
    name: "obtener_pedido_por_id",
    description: "Obtiene los detalles completos de un pedido específico, incluyendo los productos comprados (detalles).",
    parameters: z.object({
        id: z.number().describe("El ID único del pedido."),
    }),
    handler: async (args: { id: number }) => {
        return await salesService.getPedidoById(args.id);
    }
};

/**
 * Tool para obtener el historial de ventas (facturadas).
 */
export const obtenerVentasTool = {
    name: "obtener_ventas",
    description: "Obtiene el historial de ventas finalizadas. Diferente a los pedidos, estas son transacciones completadas.",
    parameters: z.object({}),
    handler: async () => {
        return await salesService.getVentas();
    }
};
