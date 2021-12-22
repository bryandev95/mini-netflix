module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  moduleNameMapper: {
    "^components/([^\\.]*)$": "<rootDir>/src/components/$1.vue",
    "^config/([^\\.]*)$": "<rootDir>/src/config/$1.js",
    "^pages/([^\\.]*)$": "<rootDir>/src/pages/$1.vue",
    "^services/([^\\.]*)$": "<rootDir>/src/services/$1.js",
    "^store/([^\\.]*)$": "<rootDir>/src/store/$1.js",
  },
};
