import { z } from "zod";
import { salesService } from "../services/sales.service.js";

export const obtenerPedidosTool = {
    name: "obtener_pedidos",
    description: "Obtiene el historial de pedidos realizados por clientes. Incluye estado, fechas y montos.",
    handler: async () => {
        return await salesService.getPedidos();
    }
};

export const obtenerPedidoPorIdTool = {
    name: "obtener_pedido_por_id",
    description: "Obtiene los detalles completos de un pedido específico, incluyendo los productos comprados.",
    parameters: z.object({
        id: z.number().describe("El ID único del pedido."),
    }),
    handler: async (args: { id: number }) => {
        return await salesService.getPedidoById(args.id);
    }
};

export const obtenerVentasTool = {
    name: "obtener_ventas",
    description: "Obtiene el historial de ventas finalizadas.",
    handler: async () => {
        return await salesService.getVentas();
    }
};
