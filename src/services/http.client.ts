import axios, { AxiosInstance, AxiosResponse } from 'axios';
import https from 'https';
import { config } from '../config/env.js';

/**
 * Cliente HTTP base configurado con Axios.
 * Se encarga de la configuración global como la URL base y Timeouts.
 */
export class HttpClient {
    protected api: AxiosInstance;

    constructor(baseURL: string = config.apiBaseUrl) {
        this.api = axios.create({
            baseURL,
            timeout: 10000, // 10 segundos máximo de espera
            headers: {
                'Content-Type': 'application/json',
                'Authorization': config.jwtToken ? `Bearer ${config.jwtToken}` : ''
            },
            // Permite conexiones https a localhost con certificados autofirmados (.NET dev certs)
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        });

        // Interceptor para manejo de respuestas y errores
        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    // Métodos genéricos para facilitar el tipado (Wrapper sobre axios)

    protected async get<T>(url: string, params?: object): Promise<T> {
        const response: AxiosResponse<T> = await this.api.get(url, { params });
        return response.data;
    }

    protected async post<T>(url: string, data: any): Promise<T> {
        const response: AxiosResponse<T> = await this.api.post(url, data);
        return response.data;
    }

    protected async put<T>(url: string, data: any): Promise<T> {
        const response: AxiosResponse<T> = await this.api.put(url, data);
        return response.data;
    }

    protected async delete<T>(url: string): Promise<T> {
        const response: AxiosResponse<T> = await this.api.delete(url);
        return response.data;
    }
}
