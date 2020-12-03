const pwa = require('next-pwa')

module.exports = pwa({
    pwa: {
        dest: 'public',
        register: true,
        scope: '/',
        sw: 'service-worker.js'
    }
})