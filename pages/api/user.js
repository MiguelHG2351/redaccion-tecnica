const os = require('os')


export default (req, res) => {
    res.statusCode = 200
    const platform = os.platform()
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ name: 'John DoeS', platform }))
}