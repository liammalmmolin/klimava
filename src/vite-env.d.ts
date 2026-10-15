/// <reference types="vite/client" />

/// <reference types="vite-imagetools" />
declare module "*?format=webp&quality=92" { const url: string; export default url; }
declare module "*?format=webp&quality=88" { const url: string; export default url; }
declare module "*?w=800;1600;2400&format=webp&quality=88&as=srcset" { const sources: string; export default sources; }
