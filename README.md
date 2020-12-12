cli-tool
========

My first cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli-tool.svg)](https://npmjs.org/package/cli-tool)
[![Downloads/week](https://img.shields.io/npm/dw/cli-tool.svg)](https://npmjs.org/package/cli-tool)
[![License](https://img.shields.io/npm/l/cli-tool.svg)](https://github.com/[object Object]/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli-tool
$ my-cli COMMAND
running command...
$ my-cli (-v|--version|version)
cli-tool/1.0.0 darwin-x64 node-v12.1.0
$ my-cli --help [COMMAND]
USAGE
  $ my-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-cli hello [FILE]`](#my-cli-hello-file)
* [`my-cli help [COMMAND]`](#my-cli-help-command)

## `my-cli hello [FILE]`

describe the command here

```
USAGE
  $ my-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ my-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/TaniyaAmidon/cli-tool/blob/v1.0.0/src/commands/hello.ts)_

## `my-cli help [COMMAND]`

display help for my-cli

```
USAGE
  $ my-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
