import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // ✅ Apply ESLint to relevant files
    languageOptions: { globals: globals.browser }, // ✅ Ensure browser globals are recognized
    plugins: {
      react: pluginReact, 
      "react-hooks": pluginReactHooks,
    },
    rules: {
      "no-unused-vars": ["warn", { varsIgnorePattern: "^_" }], // Warns on unused variables but ignores those starting with "_"
      eqeqeq: ["error", "always"], // Requires === instead of ==
      "react/jsx-uses-react": "off", // Not needed for React 17+ (automatic runtime)
      "react/react-in-jsx-scope": "off", // Not needed for React 17+ (automatic import)
      "react/prop-types": "off", // Disable prop-types checking (useful for TypeScript)
      "react-hooks/rules-of-hooks": "error", // ✅ Enforces correct Hook usage
      "react-hooks/exhaustive-deps": "warn", // ✅ Warns about missing dependencies in useEffect
    },
    ignores: ["dist", ".eslintrc.cjs"], // ✅ Correct way to ignore files in flat config
  },

];
