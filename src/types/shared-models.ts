// Re-export de tipos compartidos desde mcp-server/src/shared-models/

export {
    CategoriaProducto,
    type Producto
} from '../shared-models/producto.model.js';

export {
    EnumMetodoPago,
    EstadoPedido,
    type DetallePedido,
    type Pedido,
    type CrearDetallePedidoDto,
    type CrearPedidoDto
} from '../shared-models/pedido.model.js';

export {
    type Usuario,
    type LoginDto,
    type AuthResponse
} from '../shared-models/usuario.model.js';

export {
    EstadoVenta,
    type DetalleVenta,
    type Venta,
    type CrearDetalleVentaDto,
    type CrearVentaLocalDto,
    type CrearVentaDesdePedidoDto
} from '../shared-models/venta.model.js';
