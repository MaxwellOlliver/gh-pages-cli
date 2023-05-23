## CLI for Github Pages

### Get started

Clone the repository, open the folder and run the following scripts:

```bash
# Install all dependencies
yarn

# Install the CLI globaly
npm install -g
```

If you are using a Unix-based operating system, you may need to give permissions to execute the CLI file to the OS.

Therefore, running `chmod +x cli.js` in the root of the project should solve this permission problem.

### Commands

| Command | Description                          | Usage                                                        |
| ------- | ------------------------------------ | ------------------------------------------------------------ |
| setup   | set your project up for deploy       | npx gh-pages setup \<deploy-branch-name>                     |
| deploy  | deploy build version of your project | npx gh-pages deploy \<deploy-branch-name> \<build-directory> |
| clear   | clean the worktree                   | npx gh-pages clear                                           |
