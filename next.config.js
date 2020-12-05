module.exports = {
    redirects: async () => {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true
            },
            {
                source: '/videos',
                destination: '/search',
                permanent: true
            },
            {
                source: '/video',
                destination: '/search',
                permanent: true
            },
        ]
    },
    images: {
        devicesSizes:  [270, 320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    }
}