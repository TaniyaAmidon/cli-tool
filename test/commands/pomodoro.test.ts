import {expect, test} from '@oclif/test'

describe('pomodoro', () => {
  test
  .stdout()
  .command(['pomodoro'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['pomodoro', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
