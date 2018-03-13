'use strict'

var tap = require('tap')
var repeat = require('./')

tap.test('it works', function (t) {
  var count = 0
  repeat(5, function (cb) {
    count++
    cb()
  }, function () {
    t.equal(count, 5, 'repeated the expected number of times')
    t.end()
  })
})
