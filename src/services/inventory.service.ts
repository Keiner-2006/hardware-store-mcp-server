import { HttpClient } from './http.client.js';
import { Producto, CategoriaProducto } from '../types/shared-models.js';

/**
 * Servicio para gestionar el inventario de la ferretería.
 */
export class InventoryService extends HttpClient {
    constructor() {
        super();
    }

    /**
     * Obtiene la lista de productos del inventario.
     * Según BACKEND_DOCUMENTATION, el endpoint es /Products
     */
    async getProducts(categoria?: CategoriaProducto): Promise<Producto[]> {
        const params = categoria !== undefined ? { categoria } : undefined;
        return this.get<Producto[]>('/Products', params);
    }

    /**
     * Busca un producto específico por su ID.
     */
    async getProductById(id: number): Promise<Producto> {
        return this.get<Producto>(`/Products/${id}`);
    }

    /**
     * Crea un nuevo registro de producto.
     */
    async createProduct(producto: Partial<Producto>): Promise<Producto> {
        return this.post<Producto>('/Products', producto);
    }

    /**
     * Actualiza un producto existente por su ID.
     */
    async updateProduct(id: number, producto: Partial<Producto>): Promise<void> {
        await this.put(`/Products/${id}`, producto);
    }

    /**
     * Elimina un producto del inventario.
     */
    async deleteProduct(id: number): Promise<void> {
        await this.delete(`/Products/${id}`);
    }
}

export const inventoryService = new InventoryService();
