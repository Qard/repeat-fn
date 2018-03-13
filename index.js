'use strict'

module.exports = function repeat (times, task, callback) {
  if (times === 0) return setImmediate(callback)
  setImmediate(task, function () {
    repeat(--times, task, callback)
  })
}
