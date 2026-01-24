import { HttpClient } from './http.client.js';
import {
    Pedido, CrearPedidoDto, EstadoPedido,
    Venta, CrearVentaLocalDto, CrearVentaDesdePedidoDto, EstadoVenta
} from '../types/api.types.js';

export class SalesService extends HttpClient {
    constructor() {
        super();
    }

    async getPedidos(): Promise<Pedido[]> {
        return this.get<Pedido[]>('/Pedidoes');
    }

    async getPedidoById(id: number): Promise<Pedido> {
        return this.get<Pedido>(`/Pedidoes/${id}`);
    }

    async createPedido(dto: CrearPedidoDto): Promise<Pedido> {
        return this.post<Pedido>('/Pedidoes', dto);
    }

    async updatePedidoEstado(id: number, estado: EstadoPedido): Promise<void> {
        await this.put(`/Pedidoes/${id}/estado`, estado);
    }

    async getVentas(): Promise<Venta[]> {
        return this.get<Venta[]>('/Ventas');
    }

    async createVentaLocal(dto: CrearVentaLocalDto): Promise<Venta> {
        return this.post<Venta>('/Ventas/local', dto);
    }

    async createVentaDesdePedido(dto: CrearVentaDesdePedidoDto): Promise<Venta> {
        return this.post<Venta>('/Ventas/desde-pedido', dto);
    }
}

export const salesService = new SalesService();
