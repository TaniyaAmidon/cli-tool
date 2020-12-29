import { expect, test } from "@oclif/test";

describe("task_manager", () => {
  test
    .stdout()
    .command(["task_manager"])
    .it("list tasks when no flags provided", (ctx) => {
      expect(ctx.stdout).not.be.null;
    });

  test
    .stdout()
    .command(["task_manager", "--list"])
    .it("list tasks", (ctx) => {
      expect(ctx.stdout).not.be.null;
    });
});
