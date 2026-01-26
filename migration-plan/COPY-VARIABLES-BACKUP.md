# variables.scss — safe backup before move

Duplicate the theme `variables.scss` into this folder before refactors:

```bash
cp node_modules/@enttribe/themes-gx-theme/src/lib/variables.scss migration-plan/variables.scss.backup
```

Or from project root:

```bash
cp ./node_modules/@enttribe/themes-gx-theme/src/lib/variables.scss ./migration-plan/variables.scss.backup
```

After running, you should have `migration-plan/variables.scss.backup` as an exact copy (move-safe backup).
