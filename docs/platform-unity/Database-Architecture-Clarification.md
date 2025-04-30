# Database Architecture Clarification
This document serves as the high-level reference for the entire platform. In case of any discrepancies or conflicts with other documentation, this document should be considered the authoritative source.

## Global Food Database

- The food items database will be implemented as a single global CouchDB database
- This database will be read-only for clients on the mobile application
- Nutritionists will have write access to this database through the web application
- Food items will contain multilingual support (English and Persian)
- All nutrition data will be standardized across the platform

## User-Specific Databases

- Each client will have their own CouchDB database for their personal data
- User-specific databases will contain:
  - Diet plans assigned by nutritionists
  - Food consumption logs
  - Category budgets and tracking data
- Data in user-specific databases will sync bidirectionally with the mobile app

## Database Access Control

- CouchDB admin credentials will be stored securely in environment variables
- Client applications will receive limited-scope credentials for their specific database
- The global food database will implement role-based permissions:
  - Nutritionist role: read/write access
  - Client role: read-only access

## PostgreSQL and CouchDB Integration

- User accounts, relationships, and media metadata will be stored in PostgreSQL
- Each user record in PostgreSQL will store encrypted CouchDB credentials
- The web application will manage provisioning of CouchDB databases through admin APIs
- Cross-database references will be maintained (e.g., media files in PostgreSQL referencing consumed food in CouchDB)
