module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
  },
  extends: ["airbnb", "@react-native-community", "plugin:jest/recommended", "plugin:lodash/canonical", "plugin:prettier/recommended"],
};
