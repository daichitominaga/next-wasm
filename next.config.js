// module.exports = {
//   webpack: (config, { isServer }) => {
//     config.experiments = {
//       asyncWebAssembly: true,
//     };
//     config.output.webassemblyModuleFilename = (isServer ? '../' : '') + 'static/wasm/webassembly.wasm';
//     return config;
//   },
// };
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
