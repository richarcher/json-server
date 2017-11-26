module.exports = function getExistingAccessHeader(res) {
  const headers = ['Location']
  const existing_headers = res.getHeaders()['access-control-expose-headers']
  if (existing_headers !== undefined) {
    if (typeof existing_headers === 'string') {
      existing_headers = existing_headers.split(',')
    }
    return existing_headers.concat(headers)
  }
  return headers
}