module.exports.handler = (evt, ctx, done) => {
  // console.log('evt', evt)
  return done(null, evt.message)
  // return;
}
