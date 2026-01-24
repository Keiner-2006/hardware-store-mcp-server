import { HttpClient } from './http.client.js';
import { Producto, CategoriaProducto } from '../types/api.types.js';

export class InventoryService extends HttpClient {
    constructor() {
        super();
    }

    async getProducts(categoria?: CategoriaProducto): Promise<Producto[]> {
        const params = categoria !== undefined ? { categoria } : undefined;
        return this.get<Producto[]>('/Productoes', params);
    }

    async getProductById(id: number): Promise<Producto> {
        return this.get<Producto>(`/Productoes/${id}`);
    }

    async createProduct(producto: Partial<Producto>): Promise<Producto> {
        return this.post<Producto>('/Productoes', producto);
    }

    async updateProduct(id: number, producto: Partial<Producto>): Promise<void> {
        await this.put(`/Productoes/${id}`, producto);
    }
}

export const inventoryService = new InventoryService();
