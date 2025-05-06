module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'build',
                'ci',
                'chore',
                'revert',
            ],
        ],
        'scope-enum': [
            2,
            'always',
            [
                'init',
                'web',
                'mobile',
                'shared-types',
                'database',
                'api-client',
                'config',
                'deps',
            ],
        ],
        'scope-empty': [2, 'never'],
        'subject-case': [2, 'always', 'lower-case'],
    },
}; 