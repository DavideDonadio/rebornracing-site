import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://rebornracing.com',
    redirects: {
        '/discord': 'https://discord.gg/gUXfjbfSa2',
        '/Formula_RSS4_Driver_Tyre_Manual': '/manual'
    }
});
