# aitown

This repository contains a minimal implementation of an **AI Town** application. It is composed of a small Express server and a very light React client that demonstrates how agents can be managed and displayed.

## Project Overview
The aim of this project is to provide a simple starting point for experimenting with AI agents in a web environment. The server exposes an API for creating and listing agents, while the client consumes this API and allows users to add agents from the browser.

## Directory Structure
- `server/` – Express server exposing `/api/agents`
- `client/` – Static client using React from a CDN

## Getting Started
### Prerequisites
- Node.js and npm

### Installing
Install dependencies for the server:
```bash
cd server
npm install
```

The client has no build step and can be served with any static file server.

### Running the Application
Start the server (listens on `http://localhost:3001`):
```bash
npm start
```

Serve the client (for example using `npx serve`):
```bash
cd ../client
npx serve -l 3000
```

Once both are running, open `http://localhost:3000` in your browser.

## License
This project is licensed under the MIT License.
