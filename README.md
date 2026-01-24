# Hardware Store MCP Server 🛠️

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![MCP](https://img.shields.io/badge/MCP-Protocol-orange.svg)](https://modelcontextprotocol.io/)

A Model Context Protocol (MCP) server that provides a bridge between AI models and a Hardware Store REST API. It enables AI assistants to query products, manage inventory levels, and track sales transactions in real-time.

## 🌟 Features

- **Inventory Management**: Query products, check stock levels, and view prices.
- **Sales Tracking**: Access historical sales data and transaction details.
- **Order Processing**: Retrieve and manage customer orders.
- **AI-Ready**: Designed for seamless integration with Claude Desktop and other MCP-compatible clients.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Communication**: Model Context Protocol (MCP) SDK
- **HTTP Client**: Axios
- **Schema Validation**: Zod

## 📁 Project Structure

- `src/main.ts`: Entry point and tool registration.
- `src/tools/`: Definition of MCP tools for inventory and sales.
- `src/services/`: Logic for interacting with the external REST API.
- `src/types/`: TypeScript interfaces and API schemas.
- `src/config/`: Configuration and environment variable management.
- `src/utils/`: Shared utilities and formatting functions.

## ⚙️ Configuration

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Keiner-2006/hardware-store-mcp-server.git
   cd hardware-store-mcp-server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file based on `.env.example`:
   ```bash
   API_BASE_URL=https://your-api-url.com/api
   API_KEY=your_key_here
   ```

4. **Build the project**:
   ```bash
   npm run build
   ```

## 🚀 Usage

### Adding to Claude Desktop

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "hardware-store": {
      "command": "node",
      "args": ["/path/to/hardware-store-mcp-server/dist/main.js"],
      "env": {
        "API_BASE_URL": "https://your-api-url.com/api"
      }
    }
  }
}
```

## 🛤️ Roadmap

- [ ] Implement pagination for large inventory lists.
- [ ] Add support for product creation and stock updates from the AI.
- [ ] Support for authentication headers (JWT).
- [ ] Interactive sales dashboard integration.

## 📄 License

This project is licensed under the MIT License.
