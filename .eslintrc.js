module.exports = {
  root: true,

  env: {
    browser: true,
    mocha: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  globals: {
    "artifacts": false,
    "web3": true,
    "contract": false,
    "assert": false,
  },

  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/essential'
  ],

  // required to lint *.vue files
  plugins: [
    'vue',
    'mocha',
  ],

  // add your custom rules here
  rules: {
		'max-len': ['error', 120],
    'no-console': 'off',
    'one-var': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'one-var-declaration-per-line': 'off',
		'no-shadow': ['error', {
			'allow': ['state', 'getters'],
		}],
    'vue/max-attributes-per-line': 'off',

		// don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
  },

	settings: {
		'import/core-modules': ['vue', 'vuex'],
		'import/resolver': {
			nuxt: {
				extensions: ['.js', '.vue'],
			},
		}
	}
}
