
# Vuex-typescript
Diference between Normal Vuex import vs Vuex-class lib.

## Summary
- [Description](#description)
- [Requirements](#requirements)
- [Enviorements](#enviorements)
- [Stack](#stack)
- [Conclusion](#conclusion)

## Description
  Checking best way to import Vuex modules on components in Vue-TypeScript projects. it considering:
  clean-code, legibility and performance. 

## Requirements
  - [Node.js](https://nodejs.org/en/)
  - [NPM](https://www.npmjs.com/)
  - run: npm i && npm run serve

## Enviorements
    http://localhost:8080 to see project running
    http://127.0.0.1:8888 to see Bundles (filter by js/Normal.js and js/Class.js)

## Stack
- [Vue.js](https://vuejs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vuex](https://vuex.vuejs.org/) 
- [WebpackBundleAnalyzer](https://www.npmjs.com/package/vue-cli-plugin-webpack-bundle-analyzer) - to check bundles size

## Conclusion
Clean code: Notably, vuex-class has a code cleaner than normal import.

Legibility: Draw here. Its depends on your Developer background.

Performance: Its hard to meansure the real final impact here, cause depends on your way to build aplication and of context. But, as you can see on webpack-analyzer, vuex-class has maker smallers bundle than normal import.

### Webpack Analyzer results
![Screenshot](/public/img/printscreen-webpack-analyzer-result.png)


