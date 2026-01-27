# Ferretería API MCP Server 🛠️

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![MCP](https://img.shields.io/badge/MCP-Protocol-orange.svg)](https://modelcontextprotocol.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Un servidor robusto basado en el Model Context Protocol (MCP) que actúa como puente inteligente entre modelos de IA y la API de gestión de la ferretería. Permite realizar consultas de inventario, seguimiento de ventas y gestión de pedidos con soporte nativo para autenticación JWT.

## 🚀 Technical Stack
- **Runtime:** Node.js (ESM)
- **Language:** TypeScript
- **Communication:** Model Context Protocol (MCP) SDK
- **HTTP Client:** Axios
- **Auth:** JWT (JSON Web Tokens) integration for secure endpoints.
- **Validation:** Zod for strong-typed schema validation.

## ✨ Key Features
- **Gestión de Inventario:** Consultas detalladas de productos y verificación de stock en tiempo real.
- **Auditoría de Ventas:** Acceso al histórico de transacciones y estados de facturación.
- **Integración con Pedidos:** Visualización y gestión del flujo de pedidos de clientes.
- **Seguridad Garantizada:** Todas las peticiones administrativas se validan mediante tokens JWT configurables.
- **AI Ready:** Herramientas preconfiguradas para interactuar directamente con Claude Desktop y otros clientes MCP.

## 🛠️ Project Structure
- `src/main.ts`: Punto de entrada y registro del servidor MCP.
- `src/tools/`: Definición de herramientas (Inventory, Sales) expuestas a la IA.
- `src/services/`: Lógica central y cliente HTTP para la comunicación con la API.
- `src/config/`: Orquestación de variables de entorno y secretos.
- `src/types/`: Definiciones de interfaces y esquemas de datos.

## ⚙️ Getting Started

1. **Instalación:**
   ```bash
   npm install
   ```

2. **Configuración de Entorno:**
   Configura las variables en tu sistema o mediante un archivo `.env`:
   ```bash
   API_BASE_URL=https://localhost:7108/api
   API_TOKEN=tu_token_jwt_aqui
   ```

3. **Compilación:**
   ```bash
   npm run build
   ```

## 🚀 Usage in Claude Desktop

Añade lo siguiente a tu archivo `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ferreteria-api": {
      "command": "node",
      "args": ["/ruta/absoluta/hardware-store-mcp-server/dist/main.js"],
      "env": {
        "API_BASE_URL": "https://localhost:7108/api",
        "API_TOKEN": "TU_TOKEN_JWT"
      }
    }
  }
}
```

## 📄 License
Este proyecto está licenciado bajo la Licencia MIT.
