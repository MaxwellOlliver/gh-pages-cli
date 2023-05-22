#!/usr/bin/env node

const { program } = require("commander");
const commands = require("./commands");

program.version("1.0.0");

program
  .command("setup <branchName>")
  .description("Setup your project to deploy")
  .action(commands.setup);

program
  .command("deploy <branchName> <directory>")
  .description("Deploy directory folder to github pages")
  .action(commands.deploy);

program.command("clear").description("Clear worktree").action(commands.clear);

program.parse(process.argv);
