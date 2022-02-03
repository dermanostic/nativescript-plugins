# @dermanostic/nativescript-plugins

Welcome to the monorepo for nativscript-plugins of dermanostic.

Please find the documentation to the plugins we currently maintain here:

- [@dermanostic/nativescript-adjust](https://github.com/dermanostic/nativescript-plugins/tree/master/packages/adjust)

## Contribute

Contributions are very welcome! Please add a PR and have a little patience – our team will review and get back to you ASAP

### Run demos

```
npm run setup
npm start
```

### Add a new package to workspace

```
npm run add
```

At the prompt, enter the name of the new package.

- This adds a plugin harness in `packages` with the necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

### Publish package

```
npm run publish-packages
```

- You will be prompted for the package names to publish. Leaving blank and hitting enter will publish them all.
- You will then be prompted for the version to use. Leaving blank will auto bump the patch version (it also handles prerelease types like alpha, beta, rc, etc. - It even auto tags the corresponding prelease type on npm).
- You will then be given a brief sanity check 🧠😊
