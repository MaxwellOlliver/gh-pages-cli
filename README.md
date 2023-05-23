## CLI for Github Pages

### Get started

Clone the repository, open the folder and run the following scripts:

```bash
# Install all dependencies
yarn

# Install the CLI globaly
npm install -g
```

If you are using a Unix based operacional system, you may need to give permissions to the OS execute the CLI file.

So, running `chmod +x cli.js` in the root of the project should solve this permission problem.

### Commands

| Command | Description                          | Usage                                |
| ------- | ------------------------------------ | ------------------------------------ |
| setup   | set your project up for deploy       | npx gh-pages setup \<deploy-branch-name>       |
| deploy  | deploy build version of your project | npx gh-pages deploy \<deploy-branch-name> \<build-directory> |
| clear   | clean the worktree                   | npx gh-pages clear                   |
