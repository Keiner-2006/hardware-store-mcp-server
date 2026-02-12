export enum CategoriaProducto {
    Construccion = 1,
    Herramientas = 2,
    Pinturas = 3,
    Electricidad = 4,
    Plomeria = 5,
    Tornilleria = 6,
    Otros = 0
}

export interface Producto {
    id?: number;
    nombre: string;
    descripcion?: string;
    precioCompra: number;
    precio: number;
    unidadMedida: string;
    categoria: CategoriaProducto;
    stockActual: number;
    activo: boolean;
    imagenUrl?: string;
}
