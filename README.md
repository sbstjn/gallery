# Gallery

Zero-Maintenance Photo Gallery using [hugo](https://gohugo.com) and [Netlify](https://netlify.com).

> Preview: https://cranky-morse-79acc7.netlify.com

## Setup

### Dependencies

```bash
$ > make install
```

### Build

```bash
$ > make build
```

### Local Development

If you want to develop on your local machine with live-reload, you can use the following commands:

```bash
# To start hugo in dev mode with file watcher
$ > make run

# To watch for sass changes
$ > make styles-watch

# To watch for TypeScript changes
$ > make scripts-watch
```


## ToDo

- [x] Deploy page using Netlify
- [x] Support GitHub uploads in `static/images/`
- [x] Display first 10 images only
- [ ] Use *lazy loading* for more than 10 images *(Still looking for a slick solution without much custom JavaScript)*

## Usage

Put images im `static/images` and run `make build` to build the site. This works awesome with GitHub, Netlify, and common Pull Request workflow. No manual actions needed! 😍
