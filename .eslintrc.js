module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "jest": true,
      "node": true
  },
  globals: {
    bootstrap: 'readonly'
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": ["import"], 
  "rules": {
  }
};
