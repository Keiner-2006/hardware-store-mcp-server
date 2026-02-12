export enum EstadoVenta {
    Pendiente = 0,
    Pagado = 1,
    Anulado = 2
}

export interface DetalleVenta {
    id?: number;
    ventaId?: number;
    productoId: number;
    pedidoId?: number;
    productoNombre?: string;
    unidadMedida?: string;
    precioUnitario: number;
    cantidad: number;
    subtotal?: number;
}

export interface Venta {
    id?: number;
    numeroVenta: string;
    fechaVenta?: Date | string;
    estado: EstadoVenta;
    total: number;
    pedidoId?: number;
    detalles: DetalleVenta[];
}

export interface CrearDetalleVentaDto {
    productoId: number;
    cantidad: number;
}

export interface CrearVentaLocalDto {
    detalles: CrearDetalleVentaDto[];
}

export interface CrearVentaDesdePedidoDto {
    pedidoId: number;
}
