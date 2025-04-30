# Shared Package Versioning Strategy
This document serves as the high-level reference for the entire platform. In case of any discrepancies or conflicts with other documentation, this document should be considered the authoritative source.

## Package Structure

The monorepo will include the following shared packages:

| Package | Purpose | Consumers |
|---------|---------|-----------|
| `@mansouri/shared-types` | TypeScript interfaces, types, enums | Web, Mobile |
| `@mansouri/database` | Database models and utilities | Web, Mobile |
| `@mansouri/api-client` | API client utilities and hooks | Web, Mobile |
| `@mansouri/config` | Shared configuration (ESLint, TS, etc.) | Web, Mobile |

## Versioning Approach

1. **Semantic Versioning**
   - All shared packages will follow semantic versioning (MAJOR.MINOR.PATCH)
   - Breaking changes increment MAJOR version
   - Non-breaking features increment MINOR version
   - Bug fixes increment PATCH version

2. **Version Synchronization**
   - All packages will use the same version number for any release
   - This "lockstep versioning" ensures compatibility between packages
   - Example: When releasing v1.2.0, all packages move to v1.2.0 together

3. **Change Management**
   - All changes to shared packages will be documented in a CHANGELOG.md
   - Breaking changes must be clearly identified with migration instructions
   - Pull requests that modify shared packages require additional review

## Release Process

1. **Development Workflow**
   - Feature branches are created from main
   - Changes to shared packages are reviewed carefully
   - Integration tests must pass before merging

2. **Version Bumping**
   - Version bumps are done using a centralized script
   - The script updates all package.json files consistently
   - Versions are tagged in git with prefix `v` (e.g., `v1.2.0`)

3. **Publishing**
   - Packages are published to a private npm registry
   - CI/CD pipeline handles automatic publishing on version tags
   - Only the CI/CD system has publish permissions

## Package Dependency Management

1. **Internal Dependencies**
   - Packages reference each other using workspace syntax
   - Example: `"@mansouri/shared-types": "workspace:*"`
   - This ensures using the local version during development

2. **External Dependencies**
   - External dependencies are standardized across packages
   - Common dependencies are hoisted to the root package.json
   - Version conflicts are resolved at the root level

3. **Dependency Updates**
   - Dependabot will be configured to keep dependencies updated
   - Security updates are prioritized and applied quickly
   - Major version updates of dependencies are carefully reviewed

## Version Control Integration

1. **Branch Protection**
   - The `main` branch is protected and requires passing CI checks
   - Changes to shared packages require approvals from multiple team members
   - Version bumps are done in separate PRs from feature changes

2. **Commit Conventions**
   - Conventional commit format is enforced
   - Format: `type(scope): message`
   - Types: feat, fix, docs, style, refactor, perf, test, chore

3. **Automated Changelog**
   - CHANGELOG.md is automatically generated from commit messages
   - Breaking changes are highlighted prominently
   - Each version includes a summary of changes by type
