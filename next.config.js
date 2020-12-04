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
    }
}