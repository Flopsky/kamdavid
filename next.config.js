// next.config.js
const withImages = require('next-images');

module.exports = withImages({
    basePath: '/Flopsky.github.io',
    // Your other configurations...

    // Use the target: 'serverless' option to enable the export feature
    target: 'serverless',

    // Add the following lines for static HTML export
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            // Add other pages as needed
        };
    },
});
