# react-vite-redux-toolkit-mantine-ui-setup
React Vite Template with mantine ui and redux toolkit setup with eslint and pretier plugins startup template with best src architecture to build new projects

### prettier and eslint commands
```
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-simple-import-sort pre-commit prettier
```

### package.json script for eslint and prettier
```
"lint:fix": "eslint ./src --ext .jsx,.js,.ts,.tsx --quiet --fix --ignore-path ./.gitignore",
"lint:format": "prettier --loglevel warn --write \"./**/*.{js,jsx,ts,tsx,css,md,json}\" ",
"lint": "yarn lint:format && yarn lint:fix ",
"type-check": "tsc"
```
