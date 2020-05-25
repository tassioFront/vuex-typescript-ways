module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    collect: {
      isSinglePageApplication: true,
      url: [
        "http://localhost:46155/hello-vue",
      ],
    },
    assert: {
      assertions: {
        // "categories:performance": ["error", { "minScore": 0.8 }],
        "first-contentful-paint": ["error", { "maxNumericValue": 2000 }],
        // "interactive": ["error", { "maxNumericValue": 5200 }],
        // "speed-index": ["error", { "maxNumericValue": 4300 }],
        // "resource-summary:script:size": ["error", { "maxNumericValue": 170000 }],
        // "resource-summary:total:size": ["error", { "maxNumericValue": 300000 }]
      }
    }
  }
}
