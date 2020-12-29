import { expect, test } from "@oclif/test";

describe("forecast", () => {
  test
    .stdout()
    .command(["forecast"])
    .it("get current location forecast", (ctx) => {
      expect(ctx.stdout).not.be.null;
    });
});
