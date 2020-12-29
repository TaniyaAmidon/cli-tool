import { expect, test } from "@oclif/test";

describe("pomodoro", () => {
  test
    .stdout()
    .command(["pomodoro"])
    .it("notifies after 25 mins", (ctx) => {
      expect(ctx.stdout).to.not.be.null;
    });
});
