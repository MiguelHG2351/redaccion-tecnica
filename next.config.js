module.exports = {
    redirects: async () => {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true
            }
        ]
    }
}