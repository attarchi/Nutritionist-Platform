# Nutritionist Platform

A monorepo containing shared packages for the Nutritionist Platform.

## Package Structure

The monorepo includes the following shared packages:

| Package | Purpose | Consumers |
|---------|---------|-----------|
| `@mansouri/shared-types` | TypeScript interfaces, types, enums | Web, Mobile |
| `@mansouri/database` | Database models and utilities | Web, Mobile |
| `@mansouri/api-client` | API client utilities and hooks | Web, Mobile |
| `@mansouri/config` | Shared configuration (ESLint, TS, etc.) | Web, Mobile |

## Shared Types Package

The `@mansouri/shared-types` package provides TypeScript type definitions used across the platform. This ensures type consistency between the web and mobile applications.

### Available Types

- **User Types**: `UserRole`, `User`, `UserWithRelations`
- **Food Types**: `FoodCategory`, `FoodItem`, `ConsumedFood`
- **Diet Types**: `Diet`, `CategoryBudget`, `DietProgress`
- **API Types**: `ApiResponse`, `PaginatedResponse`, `ErrorResponse`

### Usage

```typescript
import { User, FoodItem, Diet } from '@mansouri/shared-types'

// Example usage
const user: User = {
  id: '123',
  role: 'CLIENT',
  firstname: 'John',
  lastname: 'Doe',
  email: 'john@example.com',
  languagePreference: 'en',
  signupDate: new Date()
}
```

### Development

The package uses:
- TypeScript for type definitions
- Jest for type validation tests
- tsup for building (CommonJS and ESM outputs)

To build the package:
```bash
cd packages/shared-types
yarn build
```

To run tests:
```bash
yarn test
```

## Development Setup

This project uses Yarn as the package manager. Make sure you have the correct version installed:

```bash
yarn --version
# Should be 1.22.21
```

### Installation

```bash
yarn install
```

## Versioning System

This project uses a lockstep versioning strategy where all packages share the same version number. The versioning system includes:

- Conventional commits validation
- Automated CHANGELOG generation
- Centralized version bumping

### Commit Message Format

All commits must follow the conventional commit format:

```
type(scope): message
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks
- `revert`: Reverting changes
- `ci`: CI configuration changes
- `build`: Build system changes

Scopes:
- `shared-types`
- `database`
- `api-client`
- `config`
- `deps`
- `release`

### Releasing a New Version

To release a new version:

```bash
yarn release 1.0.0
```

This command will:
1. Generate/update CHANGELOG.md based on conventional commits
2. Bump versions in all packages
3. Create a git commit and tag

### Available Scripts

- `yarn bump-version <version>`: Bump version across all packages
- `yarn generate-changelog <version>`: Generate CHANGELOG.md
- `yarn release <version>`: Run both changelog generation and version bumping

## Git Hooks

The project uses Husky to enforce commit message conventions. The commit-msg hook will automatically validate your commit messages against the conventional commit format.

## Package Management

- All packages use workspace dependencies
- Internal dependencies use the `workspace:*` syntax
- External dependencies are hoisted to the root package.json when possible 