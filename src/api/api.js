module.exports.handler = (evt, ctxt, done) => {
  done(null, {
    statusCode: 200,
    headers: {

    },
    body: JSON.stringify({message: 'hello from FEM course'})
  })
}