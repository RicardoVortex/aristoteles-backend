/// Validar como hacerlo con otra tecnologia como redis
const mcache = require('memory-cache')

const cache = (duration) => {
  return (req, res, next) => {
    const key = '__express__' + req.originalUrl || req.url
    const cachedBody = mcache.get(key)
    if (cachedBody) {
      console.log('peticon desde cache')
      res.json(cachedBody)
    } else {
      console.log('peticon desde base de datos')
      res.sendResponse = res.json
      res.json = (body) => {
        mcache.put(key, body, duration * 1000)
        res.sendResponse(body)
      }
      next()
    }
  }
}

module.exports = { cache }
