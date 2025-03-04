import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            // Remove ...tseslint.configs.recommended and replace with this
            ...tseslint.configs.recommendedTypeChecked,
            // Alternatively, use this for stricter rules
            ...tseslint.configs.strictTypeChecked,
            // Optionally, add this for stylistic rules
            ...tseslint.configs.stylisticTypeChecked,
        ],
        languageOptions: {
            // other options...
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        files: ['**/*.{ts,tsx}'],
        plugins: {
            // Add the react-x and react-dom plugins
            'react-x': reactX,
            'react-dom': reactDom,
        },
        rules: {
            // other rules...
            // Enable its recommended typescript rules
            ...reactX.configs['recommended-typescript'].rules,
            ...reactDom.configs.recommended.rules,
        },
    },
)
