import { z } from 'zod';
import {
    CategoriaProducto,
    EnumMetodoPago,
    EstadoPedido,
    EstadoVenta
} from './shared-models.js';

// --- Schemas Auxiliares ---

// Validación básica de ID
export const IdSchema = z.object({
    id: z.number().int().positive().describe("ID numérico del recurso"),
});

// --- Schemas de Producto ---

export const ProductSchema = z.object({
    nombre: z.string().max(150),
    descripcion: z.string().max(500).optional(),
    precioCompra: z.number().min(0),
    precio: z.number().min(0),
    unidadMedida: z.string().max(50),
    categoria: z.nativeEnum(CategoriaProducto).describe("0: Otros, 1: Otros, 2: Otros..."),
    stockActual: z.number().int().min(0).default(0),
    activo: z.boolean().default(true),
    imagenUrl: z.string().url().optional(),
});

export const ProductUpdateSchema = ProductSchema.partial().and(IdSchema);

// --- Schemas de Pedido ---

const CrearDetallePedidoSchema = z.object({
    productoId: z.number().int().positive(),
    cantidad: z.number().int().positive(),
});

export const CrearPedidoSchema = z.object({
    clienteNombre: z.string().max(100),
    cedula_Nit: z.string().min(1),
    clienteTelefono: z.string().max(20),
    direccionEntrega: z.string().max(200),
    notas: z.string().max(500).optional(),
    metodoPago: z.nativeEnum(EnumMetodoPago).default(EnumMetodoPago.TransferenciaBancaria),
    fechaEntregaPedido: z.string().datetime().describe("Fecha de entrega en formato ISO 8601"),
    detalles: z.array(CrearDetallePedidoSchema).min(1, "Debe incluir al menos un producto"),
});

export const UpdatePedidoEstadoSchema = z.object({
    id: z.number().int().positive(),
    estado: z.nativeEnum(EstadoPedido),
});

// --- Schemas de Venta ---

const CrearDetalleVentaSchema = z.object({
    productoId: z.number().int().positive(),
    cantidad: z.number().int().positive(),
});

export const CrearVentaLocalSchema = z.object({
    detalles: z.array(CrearDetalleVentaSchema).min(1, "Debe incluir al menos un producto"),
});

export const CrearVentaDesdePedidoSchema = z.object({
    pedidoId: z.number().int().positive(),
});

export const UpdateVentaEstadoSchema = z.object({
    id: z.number().int().positive(),
    estado: z.nativeEnum(EstadoVenta),
});

// --- Schemas de Tool Arguments ---

export const SearchProductsArgsSchema = z.object({
    query: z.string().optional().describe("Término de búsqueda por nombre o descripción"),
    categoria: z.nativeEnum(CategoriaProducto).optional(),
});

export const GetByIdArgsSchema = IdSchema;

// Tipos exportados
export type Product = z.infer<typeof ProductSchema>;
export type ProductUpdate = z.infer<typeof ProductUpdateSchema>;
export type CrearPedido = z.infer<typeof CrearPedidoSchema>;
export type UpdatePedidoEstado = z.infer<typeof UpdatePedidoEstadoSchema>;
export type CrearVentaLocal = z.infer<typeof CrearVentaLocalSchema>;
export type CrearVentaDesdePedido = z.infer<typeof CrearVentaDesdePedidoSchema>;
export type UpdateVentaEstado = z.infer<typeof UpdateVentaEstadoSchema>;
export type SearchProductsArgs = z.infer<typeof SearchProductsArgsSchema>;
export type GetByIdArgs = z.infer<typeof GetByIdArgsSchema>;
