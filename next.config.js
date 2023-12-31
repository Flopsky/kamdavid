// next.config.js
module.exports = {
    basePath: '/Flopsky.github.io',
    // Your other configurations...

    // Add the following lines for static HTML export
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            // Add other pages as needed
        };
    },
};
