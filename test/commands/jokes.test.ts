import { expect, test } from "@oclif/test";

describe("jokes", () => {
  test
    .stdout()
    .command(["jokes"])
    .it("get a random joke", (ctx) => {
      expect(ctx.stdout).to.not.be.null;
    });
});
