# Solución del Error de Inicialización MCP (Carácter 'd')

Este documento detalla el problema encontrado al registrar el servidor MCP de la ferretería y los pasos técnicos realizados para solucionarlo.

## 1. El Problema: "invalid character 'd' looking for beginning of value"

Este error ocurre porque el protocolo MCP utiliza la **Salida Estándar (stdout)** para la comunicación entre el cliente (IDE/IA) y el servidor. El protocolo espera recibir un objeto JSON puro (que comienza con `{`).

Si el servidor imprime cualquier texto plano antes del JSON, la comunicación se rompe. En este caso, el mensaje de la librería `dotenv` era el culpable:
`[dotenv@17.2.3] injecting env (1) from .env...`
La **'d'** inicial de "[dotenv]" era el carácter inesperado que causaba el fallo.

## 2. Intentos de Solución y Evolución

### A. Silenciar `dotenv` mediante código
Primero se intentó configurar `dotenv` en el archivo `src/config/env.ts` con la opción `debug: false`. 
```typescript
dotenv.config({ debug: false });
```
**Resultado:** Insuficiente. Algunas versiones de `dotenv` o el cargador `tsx` siguen emitiendo logs informativos incluso con debug desactivado.

### B. Uso de la funcionalidad nativa de Node.js
Dado que estamos usando **Node.js v20+**, decidimos eliminar la dependencia de la librería `dotenv` para la carga de variables y usar la bandera nativa `--env-file`.

1. **Modificación en `src/config/env.ts`**: Se eliminó la importación de `dotenv` para garantizar silencio absoluto desde el código.
2. **Uso de la bandera en el comando**: Se intentó usar `--env-file=.env`.

### C. El problema de la Ruta Relativa
Al usar `--env-file=.env` en el archivo `mcp_config.json`, el servidor fallaba con un error de `.env not found`. Esto sucede porque el IDE ejecuta el comando desde una ubicación que no siempre coincide con la raíz del proyecto.

## 3. Solución Definitiva (Implementada)

La solución consistió en dos pasos clave:

### Paso 1: Configuración en `mcp_config.json`
Se pasó de usar una ruta relativa a una **ruta absoluta** para el archivo de variables de entorno, asegurando que Node lo encuentre siempre.

```json
"ferreteria": {
    "command": "npx.cmd",
    "args": [
        "-y",
        "tsx",
        "--env-file=C:\\Users\\KEINER ARIAS\\MCPserverFerretería\\.env",
        "C:\\Users\\KEINER ARIAS\\MCPserverFerretería\\src\\main.ts"
    ]
}
```

### Paso 2: Limpieza de `src/config/env.ts`
Se dejó el archivo de configuración limpio, delegando la responsabilidad de cargar las variables al motor de ejecución de Node/TSX.

```typescript
// src/config/env.ts
export const config = {
    apiBaseUrl: process.env.API_BASE_URL || 'https://localhost:7108/api',
    apiKey: process.env.API_KEY || '',
};
```

## Conclusión
Para que un servidor MCP funcione correctamente:
1. **Silencio Total**: No usar `console.log` ni permitir que librerías externas escriban en `stdout`.
2. **Rutas Absolutas**: En archivos de configuración como `mcp_config.json`, usar siempre rutas completas para evitar errores de archivo no encontrado.
3. **Carga Nativa**: Siempre que sea posible, preferir `--env-file` de Node para evitar dependencias innecesarias que ensucien la consola.
