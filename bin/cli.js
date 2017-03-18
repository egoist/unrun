#!/usr/bin/env node
/* eslint-disable import/no-dynamic-require */
const path = require('path')
const cac = require('cac')
const chalk = require('chalk')
const inq = require('inquirer')
const startProcess = require('../lib/start-process')

const cli = cac()

cli.option('npm', 'use `npm run` instead of `yarn run`')

cli.command('*', 'Run npm script', (input, flags) => {
  const bin = flags.npm ? 'npm' : 'yarn'

  if (input[0]) {
    startProcess(bin, ['run', input[0]])
    return
  }

  let pkg

  try {
    pkg = require(path.resolve('package.json'))
  } catch (err) {
    if (err.code !== 'MODULE_NOT_FOUND') {
      console.error(chalk.red(err.stack))
      process.exit(1)
    }
  }

  const scripts = pkg && pkg.scripts
  if (!scripts) {
    console.error(chalk('> no npm scripts existing in current directory'))
    process.exit(1)
  }

  const unrun = pkg.unrun || pkg.aboutScripts || {}
  const choices = Object.keys(scripts).map(value => {
    const description = unrun[value]
    const script = scripts[value]
    const displayScript = chalk.gray(` $ ${script}`)
    return {
      value,
      name: description ? `${value}${displayScript}\n  ${chalk.gray(description)}` : value + displayScript,
      short: description ? `${value}\n> ${chalk.gray(description)}` : value
    }
  })

  inq.prompt([{
    name: 'script',
    type: 'list',
    message: 'Choose a script:',
    choices
  }]).then(({ script }) => {
    startProcess(bin, ['run', script])
  })
})

cli.parse()
