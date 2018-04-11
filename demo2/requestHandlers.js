const querystring = require('querystring')
const fs = require('fs')
const formidable = require('formidable')

const start = response => {
  const body = `
  <html>
    <head>
      <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
    </head>
    <body>
      <form action='/upload' enctype='multipart/form-data' method='post'>
        <input type='file' name='upload' multiple='multiple' />
        <input type='submit' value='Upload file' />
      </form>
    </body>
  </html>
  `
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write(body)
  response.end()
}

const upload = (response, request) => {
  const form = new formidable.IncomingForm()
  form.parse(request, (error, fields, files) => {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/plain'})
      response.write(`Upload file error: ${error}.\n`)
    } else {
      // upload 对应到上面的 name 属性
      const { upload } = files
      fs.renameSync(upload.path, './tmp/test.png')
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.write('Received image:<br/>')
      response.write(`Image info: ${JSON.stringify(upload)}`)
      response.write("<img src='/show' />")
    }
    response.end()
  })
}

exports.start = start
exports.upload = upload