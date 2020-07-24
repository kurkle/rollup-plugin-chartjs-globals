# rollup-plugin-chartjs-globals

Plugin for configuring [rollup](https://rollupjs.org) with proper `output.globals` for [Chart.js](https:///www.chartjs.org) v3.

## Installation

```bash
npm install --save-dev rollup-plugin-chartjs-globals
```

## Usage

```js
import chartjs from 'rollup-plugin-chartjs-globals';
rollup({
  entry: 'index.js',
  plugins: [
    chartjs()
  ]
})
```
