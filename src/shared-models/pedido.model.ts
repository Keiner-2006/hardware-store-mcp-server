export enum EnumMetodoPago {
    Efectivo = 0,
    TransferenciaBancaria = 1,
    TarjetaDebito = 2,
    TarjetaCredito = 3
}

export enum EstadoPedido {
    SinConfirmar = 1,
    Confirmado = 2,
    EnPreparacion = 3,
    EnCamino = 4,
    Entregado = 5,
    Cancelado = 6
}

export interface DetallePedido {
    id?: number;
    pedidoId?: number;
    productoId: number;
    productoNombre?: string;
    unidadMedida?: string;
    precioUnitario: number;
    cantidad: number;
    subtotal?: number;
}

export interface Pedido {
    id?: number;
    numeroPedido?: string;
    fechaCreacion?: Date | string;
    clienteNombre: string;
    cedula_Nit: string;
    clienteTelefono: string;
    direccionEntrega: string;
    notas?: string;
    totalEstimado: number;
    metodoPago: EnumMetodoPago;
    estado: EstadoPedido;
    fechaEntregaPedido: Date | string;
    detalles: DetallePedido[];
}

export interface CrearDetallePedidoDto {
    productoId: number;
    cantidad: number;
}

export interface CrearPedidoDto {
    clienteNombre: string;
    cedula_Nit: string;
    clienteTelefono: string;
    direccionEntrega: string;
    notas?: string;
    metodoPago: EnumMetodoPago;
    fechaEntregaPedido: Date | string;
    detalles: CrearDetallePedidoDto[];
}
