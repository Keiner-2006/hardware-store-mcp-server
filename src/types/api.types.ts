export type IsoDateString = string;

export enum CategoriaProducto {
    General = 0,
    Herramientas = 1,
    Construccion = 2,
    Electrico = 3,
}

export enum EnumMetodoPago {
    Efectivo = 0,
    TransferenciaBancaria = 1,
    Tarjeta = 2,
    Otro = 3,
}

export enum EstadoPedido {
    SinConfirmar = 0,
    Confirmado = 1,
    Enviado = 2,
    Entregado = 3,
    Cancelado = 4,
}

export enum EstadoVenta {
    Pendiente = 0,
    Pagado = 1,
    Anulado = 2,
}

export interface Producto {
    id: number;
    nombre: string;
    descripcion?: string;
    precioCompra: number;
    precio: number;
    unidadMedida: string;
    categoria: CategoriaProducto | number;
    stockActual: number;
    activo: boolean;
    imagenUrl?: string;
}

export interface Pedido {
    id: number;
    numeroPedido?: string;
    fechaCreacion: IsoDateString;
    clienteNombre: string;
    totalEstimado: number;
    estado: EstadoPedido | number;
    detalles: any[];
}

export interface Venta {
    id: number;
    numeroVenta: string;
    fechaVenta: IsoDateString;
    estado: EstadoVenta | number;
    total: number;
    detalles: any[];
}

export interface CrearPedidoDto {
    clienteNombre: string;
    cedula_Nit: string;
    clienteTelefono: string;
    direccionEntrega: string;
    metodoPago: EnumMetodoPago | number;
    fechaEntregaPedido: IsoDateString;
    detalles: any[];
}

export interface CrearVentaLocalDto {
    detalles: any[];
}

export interface CrearVentaDesdePedidoDto {
    pedidoId: number;
}
