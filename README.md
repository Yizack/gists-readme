[![Vercel build](https://img.shields.io/github/deployments/yizack/gists-readme/Production?label=Build&logo=vercel)](https://gists-readme.yizack.com/)
[![Tests](https://github.com/Yizack/gists-readme/actions/workflows/tests.yml/badge.svg)](https://github.com/Yizack/gists-readme/actions/workflows/tests.yml)
[![codecov](https://codecov.io/gh/Yizack/gists-readme/branch/main/graph/badge.svg?token=HR7SFR4C5N)](https://codecov.io/gh/Yizack/gists-readme)

# GitHub Gists Readme (gists-readme)

Display a card with your Gists on your GitHub README.md

- [Gists List Card](#gists-list-card)
  - [Example 1](#card-example-1)
  - [Example 2](#card-example-2)
  - [Example 3](#card-example-3)
- [Gist Pin](#gist-pin)
  - [Example 1](#pin-example-1)
  - [Example 2](#pin-example-2)

Generate your card here: [https://gists-readme.yizack.com](https://gists-readme.yizack.com)

## Cache

Cache is configured to expire after 4 hours and is implemented on the Vercel Edge Network by using `Cache-Control: max-age=0, s-maxage=14400` header for every API response.

## Gists List Card

Display a list of your gists

### Parameters

| Parameter | Description                   | Optional | Default value |
| --------- | ----------------------------- | -------- | ------------- |
| `user`    | Your GitHub profile username. | No       |               |
| `theme`   | Set the theme of the card.    | Yes      | `default`     |
| `n`       | Number of Gists to display.   | Yes      | `30`          |
| `title`   | Set the title of the card.    | Yes      | `My Gists`    |

### Card Example 1

| Parameter | Value    |
|-----------|----------|
| user      | `yizack` |
| theme     | `dark`   |

#### Result

[![gists-readme](https://gists-readme.yizack.com/api?user=yizack&theme=dark)](https://gist.github.com/Yizack)

```md
[![gists-readme](https://gists-readme.yizack.com/api?user=yizack&theme=dark)](https://gist.github.com/Yizack)
```

### Card Example 2

| Parameter | Value    |
|-----------|----------|
| user      | `yizack` |
| n         | `2`      |

#### Result

[![gists-readme](https://gists-readme.yizack.com/api?user=yizack&n=2)](https://gist.github.com/Yizack)

```md
[![gists-readme](https://gists-readme.yizack.com/api?user=yizack&n=2)](https://gist.github.com/Yizack)
```

### Card Example 3

| Parameter | Value          |
|-----------|----------------|
| user      | `Cy4Bot`       |
| n         | `20`           |
| title     | `Cy4Bot Gists` |

#### Result

[![gists-readme](https://gists-readme.yizack.com/api?user=Cy4Bot&n=20&title=Cy4Bot+Gists)](https://gist.github.com/Cy4Bot)

```md
[![gists-readme](https://gists-readme.yizack.com/api?user=Cy4Bot&n=20&title=Cy4Bot+Gists)](https://gist.github.com/Cy4Bot)
```

## Gists Pin


### Parameters

| Parameter | Description                   | Optional | Default value |
| --------- | ----------------------------- | -------- | ------------- |
| `id`      |  Your Gist ID                 | No       |               |
| `owner`   | Shows the owner of the gist,  | Yes      | `false`       |
| `theme`   | Sets the theme of the pin.    | Yes      | `default`     |

### Pin Example 1

| Parameter | Value                              |
|-----------|------------------------------------|
| id        | `bbfce31e0217a3689c8d961a356cb10d` |

#### Result

[![gists-readme](https://gists-readme.yizack.com/api/pin?id=bbfce31e0217a3689c8d961a356cb10d)](https://gist.github.com/Yizack/bbfce31e0217a3689c8d961a356cb10d)

```md
[![gists-readme](https://gists-readme.yizack.com/api/pin?id=bbfce31e0217a3689c8d961a356cb10d)](https://gist.github.com/Yizack/bbfce31e0217a3689c8d961a356cb10d)
```

### Pin Example 2

| Parameter | Value                              |
|-----------|------------------------------------|
| id        | `07694a749c8fc5f4d996a2bd50237939` |
| owner     | `true`                             |
| theme     | `dark`                             |

#### Result

[![gists-readme](https://gists-readme.yizack.com/api/pin?id=07694a749c8fc5f4d996a2bd50237939&owner=true&theme=dark)](https://gist.github.com/Yizack/07694a749c8fc5f4d996a2bd50237939)

```md
[![gists-readme](https://gists-readme.yizack.com/api/pin?id=07694a749c8fc5f4d996a2bd50237939&owner=true&theme=dark)](https://gist.github.com/Yizack/07694a749c8fc5f4d996a2bd50237939)
```

##

Inspired by [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats).\
Hosted on [Vercel](https://vercel.com/) with Node.js.
