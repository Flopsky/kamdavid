// next.config.js
module.exports = {
    basePath: '/Flopsky.github.io',
    // Your other configurations...


    async generateStaticParams() {
        // Return the paths you want to export
        return {
            '/': { page: '/' },
            // Add other pages as needed
        };
    },
};
