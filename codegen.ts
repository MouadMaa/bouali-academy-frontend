import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://127.0.0.1:4000/graphql',
  documents: './graphql/**/*.{gql,graphql}',
  generates: {
    './graphql/generated/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
}

export default config
