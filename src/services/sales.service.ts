import { HttpClient } from './http.client.js';
import {
    Pedido, CrearPedidoDto, EstadoPedido,
    Venta, CrearVentaLocalDto, CrearVentaDesdePedidoDto, EstadoVenta
} from '../types/shared-models.js';

export class SalesService extends HttpClient {
    constructor() {
        super();
    }

    // --- PEDIDOS ---

    async getPedidos(): Promise<Pedido[]> {
        return this.get<Pedido[]>('/Orders');
    }

    async getPedidoById(id: number): Promise<Pedido> {
        return this.get<Pedido>(`/Orders/${id}`);
    }

    async createPedido(dto: CrearPedidoDto): Promise<Pedido> {
        // Nota: Ajustar el tipo de retorno si la API devuelve solo ID o el objeto completo
        return this.post<Pedido>('/Orders', dto);
    }

    async updatePedidoEstado(id: number, estado: EstadoPedido): Promise<void> {
        // PUT api/Orders/{id}/estado
        await this.put(`/Orders/${id}/estado`, estado);
    }

    // --- VENTAS ---

    async getVentas(): Promise<Venta[]> {
        return this.get<Venta[]>('/Sales');
    }

    async createVentaLocal(dto: CrearVentaLocalDto): Promise<Venta> {
        return this.post<Venta>('/Sales/local', dto);
    }

    async createVentaDesdePedido(dto: CrearVentaDesdePedidoDto): Promise<Venta> {
        return this.post<Venta>('/Sales/desde-pedido', dto);
    }
}

export const salesService = new SalesService();
