/* eslint-disable unicorn/no-process-exit */
const spawn = require('cross-spawn')

module.exports = function (bin, args) {
  const proc = spawn(bin, args, { stdio: 'inherit', customFds: [0, 1, 2] })
  proc.on('close', (code, signal) => {
    if (code !== null) {
      process.exit(code)
    }
    if (signal) {
      if (signal === 'SIGKILL') {
        process.exit(137)
      }
      console.log(`got signal ${signal}, exitting`)
      process.exit(1)
    }
    process.exit(0)
  })
  proc.on('error', err => {
    console.error(err)
    process.exit(1)
  })
  return proc
}
