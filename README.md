[![Vercel build](https://github.com/Yizack/gists-readme/actions/workflows/production.yml/badge.svg)](https://github.com/Yizack/gists-readme/actions/workflows/production.yml)
[![Tests](https://github.com/Yizack/gists-readme/actions/workflows/tests.yml/badge.svg)](https://github.com/Yizack/gists-readme/actions/workflows/tests.yml)
[![codecov](https://codecov.io/gh/Yizack/gists-readme/branch/main/graph/badge.svg?token=HR7SFR4C5N)](https://codecov.io/gh/Yizack/gists-readme)

# GitHub Gists Readme (gists-readme)

Display a card with your Gists on your GitHub README.md

## Live Demo Card

Generate your card: [https://gists-readme.yizack.com/](https://gists-readme.yizack.com/)

## Usage Example 1

user: `yizack`\
theme: `dark`

```
[![gists-readme](https://gists-readme.yizack.com/api?user=yizack&theme=dark)](https://gist.github.com/Yizack)
```
### Demo Card

[![gists-readme](https://gists-readme.yizack.com/api?user=yizack&theme=dark)](https://gist.github.com/Yizack)

## Usage Example 2

user: `yizack`\
n: `2`

```
[![gists-readme](https://gists-readme.yizack.com/api?user=yizack&n=2)](https://gist.github.com/Yizack)
```
### Demo Card

[![gists-readme](https://gists-readme.yizack.com/api?user=yizack&n=2)](https://gist.github.com/Yizack)

## Usage Example 3

user: `Cy4Bot`\
n: `20`\
title: `Cy4Bot Gists`

```
[![gists-readme](https://gists-readme.yizack.com/api?user=Cy4Bot&n=20&title=Cy4Bot+Gists)](https://gist.github.com/Cy4Bot)
```

### Demo Card

[![gists-readme](https://gists-readme.yizack.com/api?user=Cy4Bot&n=20&title=Cy4Bot+Gists)](https://gist.github.com/Cy4Bot)



## Parameters

| Parameter | Description                   | Optional | Default value |
| --------- | ----------------------------- | -------- | ------------- |
| `user`    | Your GitHub profile username. | No       |               |
| `theme`   | Set the theme of the card.    | Yes      | `default`     |
| `n`       | Number of Gists to display.   | Yes      | `30`          |
| `title`   | Set the title of the card.    | Yes      | `My Gists`    |

##

Inspired by [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats).\
Hosted on [Vercel](https://vercel.com/) with Node.js.
