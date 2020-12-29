# Daily-Tools

Multi task CLI tool created with oclif and typescript.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/my-cli.svg)](https://npmjs.org/package/my-cli)
[![Downloads/week](https://img.shields.io/npm/dw/my-cli.svg)](https://npmjs.org/package/my-cli)
[![License](https://img.shields.io/npm/l/my-cli.svg)](https://github.com/TaniyaAmidon//blob/master/package.json)

<!-- toc -->

- [Daily-Tools](#daily-tools)
- [Usage](#usage)
- [Commands](#commands)
  - [`daily-tools forecast`](#daily-tools-forecast)
  - [`daily-tools jokes`](#daily-tools-jokes)
  - [`daily-tools pomodoro`](#daily-tools-pomodoro)
  - [`daily-tools task_manager`](#daily-tools-task_manager)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g daily-tools
$ daily-tools COMMAND
running command...
$ daily-tools (-v|--version|version)
daily-tools/1.0.0 darwin-x64 node-v12.1.0
$ daily-tools --help [COMMAND]
USAGE
  $ daily-tools COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [Daily-Tools](#daily-tools)
- [Usage](#usage)
- [Commands](#commands)
  - [`daily-tools forecast`](#daily-tools-forecast)
  - [`daily-tools jokes`](#daily-tools-jokes)
  - [`daily-tools pomodoro`](#daily-tools-pomodoro)
  - [`daily-tools task_manager`](#daily-tools-task_manager)

## `daily-tools forecast`

Get weather forecast

```
USAGE
  $ daily-tools forecast

OPTIONS
  -l, --location  Get weather of a specified location e.g. London
```

_See code: [src/commands/forecast.ts](https://github.com/TaniyaAmidon/cli-tool/blob/master/src/commands/forecast.ts)_

## `daily-tools jokes`

Get a random joke

```
USAGE
  $ daily-tools jokes
```

_See code: [src/commands/jokes.ts](https://github.com/TaniyaAmidon/cli-tool/blob/master/src/commands/jokes.ts)_

## `daily-tools pomodoro`

Set a pomodoro timer.

```
USAGE
  $ daily-tools pomodoro

OPTIONS
  -c, --custom  Add a custom time
```

_See code: [src/commands/pomodoro.ts](https://github.com/TaniyaAmidon/cli-tool/blob/master/src/commands/pomodoro.ts)_

## `daily-tools task_manager`

Task manager

```
USAGE
  $ daily-tools task_manager

OPTIONS
  -a, --add     Add a task.
  -c, --check   Mark as completed.
  -d, --delete  Delete a task.
  -l, --list    List tasks.
```

_See code: [src/commands/task_manager.ts](https://github.com/TaniyaAmidon/cli-tool/blob/master/src/commands/task_manager.ts)_

<!-- commandsstop -->
