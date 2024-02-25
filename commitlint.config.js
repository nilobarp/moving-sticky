export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "chore", "docs", "style", "refactor", "perf", "test", "build", "ci", "revert"],
    ],
    "scope-enum": [2, "always", ["tools", "core", "config", "deps", "docs", "examples", "test", "ci", "release"]],
  },
};
