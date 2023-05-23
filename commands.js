const { exec } = require("child_process");

module.exports = {
  setup: (branchName) => {
    console.log(
      "\x1b[34m%s\x1b[0m",
      `Creating orphan branch named "${branchName}"`
    );
    exec(`git checkout --orphan ${branchName}`, (error) => {
      if (error) {
        console.log(
          "\x1b[31m%s\x1b[0m",
          `Error on create orphan branch named as: "${branchName}".\n\n${error.message}`
        );
        return;
      }
      exec(`git reset --hard`);
      exec(`git commit --allow-empty -m "deploy: init"`);
      exec(`git checkout main`, (error) => {
        if (error) {
          console.log(
            "\x1b[33m%s\x1b[0m",
            `Cannot checkout to main branch. Please, check if "main" exists.\n\n${error.message}`
          );
        } else {
          console.log("\x1b[32m%s\x1b[0m", `Done!`);
        }
      });
    });
  },
  deploy: (branchName, directory) => {
    console.log(
      "\x1b[34m%s\x1b[0m",
      `Removing old directory "${directory}" folder...`
    );
    exec(`rm -rf ${directory}`, (error) => {
      if (error) {
        console.log(
          "\x1b[31m%s\x1b[0m",
          `Error on removing build directory named as: "${directory}"`
        );
        return;
      }
      console.log(
        "\x1b[34m%s\x1b[0m",
        `Adding worktree "${directory}" on branch "${branchName}"`
      );
      exec(
        `git worktree prune && git worktree add ${directory} ${branchName}`,
        (error) => {
          if (error) {
            console.log(
              "\x1b[31m%s\x1b[0m",
              `Error on create worktree.\n\n${error.message}`
            );
            return;
          }
          console.log("\x1b[34m%s\x1b[0m", "Building project...");
          exec(`npm run build`, (error) => {
            if (error) {
              console.log(
                "\x1b[31m%s\x1b[0m",
                `Error while building.\n\n${error.message}`
              );
              return;
            } else {
              exec(
                `cd ${directory} && git add --all && git commit -m "deploy: upload updates" && git push origin ${branchName}`,
                (error, stdout) => {
                  if (error) {
                    console.log(error);
                  }
                  console.log(stdout);
                }
              );
              exec(`git worktree prune`);
            }
          });
        }
      );
    });
  },
  clear: () => {
    exec("git worktree prune");
  },
};
