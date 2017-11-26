'use strict';

module.exports = function getExistingAccessHeader(res) {
  var headers = ['Location'];
  var existing_headers = res.getHeaders()['access-control-expose-headers'];
  if (existing_headers !== undefined) {
    if (typeof existing_headers === 'string') {
      existing_headers = existing_headers.split(',');
    }
    return existing_headers.concat(headers);
  }
  return headers;
};