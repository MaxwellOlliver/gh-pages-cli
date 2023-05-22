## CLI for Github Pages

### Get started

Clone the repository, open the folder and run the following scripts:

```bash
yarn

npm install -g
```

Obs: If you are using a Unix based operacional system, you may need to give permissions to the OS execute the CLI file.

To give permission, run `chmod +x cli.js` in the root of the project.

### Commands

| Command | Description                          | Usage                                |
| ------- | ------------------------------------ | ------------------------------------ |
| setup   | set your project up for deploy       | npx gh-pages setup branch-name       |
| deploy  | deploy build version of your project | npx gh-pages deploy branch-name dist |
| clear   | clean the worktree                   | npx gh-pages clear                   |
