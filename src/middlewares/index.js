const KoaLogger =  require('koa-logger');
const convert = require('koa-convert');
const compress =  require('koa-compress');
const bodyParser = require('koa-body-parser');
const cors = require('koa-cors');
const zlib =  require('zlib');

module.exports = (app) => {
  if (app.env !== 'production') {
    app.use(new KoaLogger());
  }

  app
  .use(convert(cors({
    origin: true,
    methods: ['GET', 'POST', 'OPTIONS'],
  })))
  .use(convert(bodyParser()))
  .use(compress({
    filter: function cType(contentType) {
      return /(text|json|javascript)$/i.test(contentType);
    },
    threshold: 2048,
    flush: zlib.Z_SYNC_FLUSH
  }));
}
