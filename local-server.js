import os from "os";
import { exec } from "child_process";

const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    const iface = interfaces[interfaceName];
    for (const alias of iface) {
      if (alias.family === "IPv4" && !alias.internal) {
        return alias.address; // Return the first non-internal IPv4 address
      }
    }
  }
  return "127.0.0.1"; // Fallback to localhost if no LAN IP is found
};

// Get the local IP address
const localIP = getLocalIP();
const PORT = 3579;

// Start the Next.js development server with the detected IP
exec(
  `npm run clean && next dev --turbopack -H ${localIP} -p ${PORT}`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting the server: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Server stderr: ${stderr}`);
      return;
    }
    console.log(`Development server running at http://${localIP}:${PORT}`);
  },
);
