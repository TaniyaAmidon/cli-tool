# my-cli

My first cli.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/my-cli.svg)](https://npmjs.org/package/my-cli)
[![Downloads/week](https://img.shields.io/npm/dw/my-cli.svg)](https://npmjs.org/package/my-cli)
[![License](https://img.shields.io/npm/l/my-cli.svg)](https://github.com/TaniyaAmidon//blob/master/package.json)

<!-- toc -->
* [my-cli](#my-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g my-cli
$ my-cli COMMAND
running command...
$ my-cli (-v|--version|version)
my-cli/0.0.1 darwin-x64 node-v12.1.0
$ my-cli --help [COMMAND]
USAGE
  $ my-cli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`my-cli forecast`](#my-cli-forecast)
* [`my-cli jokes [FILE]`](#my-cli-jokes-file)

## `my-cli forecast`

Get weather forecast

```
USAGE
  $ my-cli forecast

OPTIONS
  -l, --location  Get weather of a specified location e.g. London
```

_See code: [src/commands/forecast.ts](https://github.com/TaniyaAmidon/cli-tool/blob/v0.0.1/src/commands/forecast.ts)_

## `my-cli jokes [FILE]`

describe the command here

```
USAGE
  $ my-cli jokes [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/jokes.ts](https://github.com/TaniyaAmidon/cli-tool/blob/v0.0.1/src/commands/jokes.ts)_
<!-- commandsstop -->
