export interface Usuario {
    id?: number;
    username: string;
    passwordHash?: string;
    nombreCompleto?: string;
    rol: string;
}

export interface LoginDto {
    username: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    usuario: Usuario;
}
