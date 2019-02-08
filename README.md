# react-indicative-hooks

> A wrapper between React Hooks and Indicative libraries

[![NPM](https://img.shields.io/npm/v/react-indicative-hooks.svg)](https://www.npmjs.com/package/react-indicative-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-indicative-hooks
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'react-indicative-hooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [marceloadsj](https://github.com/marceloadsj)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
