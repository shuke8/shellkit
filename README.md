# shellkit

Small, dependency-free command-line utilities for everyday web development.

Every tool is a single POSIX shell or Node script with no `node_modules`, no install
step and no config file. Copy the one you need into your own `bin/`, or add the whole
directory to `$PATH`.

## Install

```sh
git clone https://github.com/shuke8/shellkit.git
export PATH="$PWD/shellkit/bin:$PATH"
```

## Tools

| Tool | What it does |
|------|--------------|
| `sk-serve` | Static file server for the current directory, no dependencies |
| `sk-port` | Find a free TCP port, or see and free the process holding one |
| `sk-tree` | Print a directory tree, skipping node_modules and build output |

## Design rules

1. One file per tool. No shared runtime, no build step.
2. `--help` on every tool, and it prints a real example.
3. Read from stdin when it makes sense, write to stdout, keep errors on stderr.
4. Exit non-zero on failure so the tool composes inside CI.

## License

MIT — see [LICENSE](LICENSE).
