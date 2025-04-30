# Mansouri Nutritionist Mobile Application Technical Proposal (Updated)

## Project Overview

This document outlines the technical specifications for a React Native mobile application designed for clients of nutritionists using the Mansouri platform. The application will enable clients to log their food intake, monitor their calorie budgets, view personalized diet plans, and communicate with their nutritionist. The mobile app will work in conjunction with the existing Next.js web application used by nutritionists.

## Architecture Overview

The application will follow a modern mobile architecture using React Native with Expo managed workflow. The architecture has been updated to implement a hybrid database approach with PostgreSQL for user data and CouchDB/PouchDB for nutritional data to enable robust offline capabilities with automatic synchronization.

### Technology Stack

| Component | Technology | Rationale |
|-----------|------------|-----------|
| Framework | React Native with Expo | Faster development, cross-platform, extensive ecosystem |
| State Management | Redux Toolkit | Robust, predictable state management with offline persistence |
| Local Database | PouchDB (React Native) | Offline-first with built-in sync capabilities to CouchDB |
| UI Components | React Native Paper | Material Design components, theming support, active maintenance |
| Navigation | React Navigation | Industry standard, static configuration support |
| Forms | Formik + Yup | Reduces boilerplate, robust validation |
| Sync Strategy | PouchDB/CouchDB replication | Native sync protocol with conflict resolution |
| API Client | Axios | Configurable HTTP client for PostgreSQL data access |
| Authentication | JWT with Secure Storage | Secure, token-based authentication |
| Analytics | Firebase Analytics | Rich event tracking and user analytics |
| Error Tracking | Sentry | Real-time error tracking and reporting |
| Push Notifications | Firebase Cloud Messaging | Cross-platform notification delivery |
| Internationalization | i18next | Support for English and Persian languages |
| Media Handling | Expo MediaLibrary, Camera, AV | Native device integration for photos and audio |
| Deployment | Expo EAS | Simplified build and deployment pipeline |
| Code Sharing | Turborepo | Share types and utilities with web application |

## System Architecture

### Hybrid Database Architecture

```
┌───────────────────────────────────┐
│    React Native Mobile Application │
│                                   │
│  ┌─────────────┐  ┌─────────────┐ │
│  │ Redux Store │  │   PouchDB   │ │
│  └─────────────┘  └─────────────┘ │
│         │               │         │
│  ┌─────────────┐  ┌─────────────┐ │
│  │  API Client │  │ Sync Engine │ │
│  │   (Axios)   │  │  (PouchDB)  │ │
│  └─────┬───────┘  └─────┬───────┘ │
└────────┼─────────────────┼────────┘
         │                 │
         ▼                 ▼
┌────────────────┐  ┌─────────────────┐
│   PostgreSQL   │  │     CouchDB     │
│    Database    │  │    Databases    │
│  (User Data,   │  │  (Food Items,   │
│  Media Files,  │  │  Diet Plans,    │
│  Messages)     │  │  Consumed Food) │
└────────────────┘  └─────────────────┘
```

### Data Flow Architecture

```
┌────────────────────────────────────────┐
│             Mobile Client              │
│                                        │
│ ┌──────────────┐      ┌──────────────┐ │
│ │   REST API   │      │    PouchDB   │ │
│ │ Interactions │      │    Local     │ │
│ │  (Auth/Media/│      │   Database   │ │
│ │   Messages)  │      │              │ │
│ └──────┬───────┘      └───────┬──────┘ │
│        │                      │        │
└────────┼──────────────────────┼────────┘
         │                      │
┌────────┼──────────────────────┼────────┐
│ ┌──────▼───────┐     ┌────────▼──────┐ │
│ │   Next.js    │     │    CouchDB    │ │
│ │  API Routes  │     │    Server     │ │
│ └──────┬───────┘     └────────┬──────┘ │
│        │                      │        │
│ ┌──────▼───────┐              │        │
│ │  PostgreSQL  │◄─────────────┘        │
│ │   Database   │                       │
│ └──────────────┘                       │
│                                        │
│           Server Infrastructure        │
└────────────────────────────────────────┘
```

## Database Architecture

The mobile application will implement a hybrid database strategy:

### PostgreSQL (Server-side)
- User accounts, authentication, and relationships
- Media file references (images, voice recordings)
- Messaging and notifications
- CouchDB credential storage (for each user)

### CouchDB (Server-side) with PouchDB (Client-side)
- Global shared read-only database for food items
- User-specific database for diet plans and consumed foods
- Automatic bi-directional sync with conflict resolution

## Database Schemas

### CouchDB/PouchDB Document Models

```javascript
// Food Item document
{
  "_id": "food-item-123",
  "type": "foodItem",
  "name": {
    "en": "Apple",
    "fa": "سیب"
  },
  "category1": "FRUITS",
  "category2": null,
  "unit": "gram",
  "unitReferenceValue": 100,
  "caloriesPerReference": 52,
  "created_at": "2025-04-10T10:00:00Z",
  "updated_at": "2025-04-10T10:00:00Z"
}

// Diet Plan document
{
  "_id": "diet-plan-123",
  "type": "diet",
  "startDate": "2025-04-01T00:00:00Z",
  "endDate": "2025-05-01T00:00:00Z",
  "dailyCaloriesBudget": 2000,
  "isActive": true,
  "created_at": "2025-04-01T09:00:00Z",
  "updated_at": "2025-04-01T09:00:00Z",
  "budgets": [
    {
      "category": "FRUITS",
      "dailyBudget": 300
    },
    {
      "category": "VEGETABLES", 
      "dailyBudget": 400
    }
    // Other categories
  ]
}

// Consumed Food document
{
  "_id": "consumed-food-123",
  "type": "consumedFood",
  "date": "2025-04-27T12:30:00Z",
  "meal": "LUNCH",
  "foodItemId": "food-item-123",
  "quantity": 150,
  "description": "With skin",
  "created_at": "2025-04-27T12:30:00Z",
  "updated_at": "2025-04-27T12:30:00Z"
}
```

## Synchronization Strategy

The application will implement a robust synchronization mechanism with CouchDB.


## Application Features

### Authentication & User Management
1. **Login Flow**
   - JWT-based authentication against PostgreSQL
   - Retrieve CouchDB credentials upon successful login
   - Secure token storage using Expo SecureStore
   - Automatic token refresh mechanism
   - Biometric authentication option

2. **User Profile**
   - User information stored in PostgreSQL
   - Profile editing through API endpoints
   - Language preference setting
   - Push notification preferences

### Diet Tracking
1. **Active Diet View**
   - Retrieve diet plans from local PouchDB
   - Real-time updates when online
   - Cached offline access to active diet plan
   - Visual progress indicators

2. **Historical Diet View**
   - Query local PouchDB for historical diet data
   - Performance analytics and trends
   - Export capabilities

### Food Logging
1. **Food Search & Selection**
   - Search food items in local PouchDB
   - Offline-accessible food database
   - Recently used items cache
   - Favorites system

2. **Meal Logging**
   - Create consumed food entries in local PouchDB
   - Automatic background sync when online
   - Add offline photos and voice notes
   - Immediate local data consistency

### Media Handling
1. **Photo Capture**
   - Store media references in PouchDB documents
   - Queue actual files for upload to S3 via PostgreSQL API
   - Local caching of media files

2. **Voice Notes**
   - Record and attach to consumed food entries
   - Prioritized upload queue for media files
   - Local playback while offline

### Communication
1. **Messaging**
   - PostgreSQL-based messaging system
   - Store messages locally while offline
   - Queue unsent messages for later delivery
   - Read status synchronization

2. **Notifications**
   - Push notification integration
   - Local notifications for offline reminders
   - Diet plan update alerts

## Project Breakdown

### Phase 1: Infrastructure & Authentication (4 weeks)
1. **Project Setup**
   - Initialize React Native with Expo
   - Configure TypeScript and linting
   - Set up development environment

2. **Database Configuration**
   - Integrate PouchDB with React Native
   - Set up database adapters and plugins
   - Create database schemas and indexes

3. **Authentication System**
   - Implement login and registration flows
   - Store and refresh JWT tokens
   - Retrieve and securely store CouchDB credentials
   - Set up biometric authentication

### Phase 2: Core Data Management & Sync (5 weeks)
1. **Database Initialization**
   - Create PouchDB instances for different data types
   - Implement database migration logic
   - Set up initial replication with CouchDB

2. **Sync Infrastructure**
   - Implement bi-directional sync with CouchDB
   - Create sync status management
   - Develop conflict resolution strategies
   - Build retry and error handling logic

3. **Offline Support**
   - Implement offline data access patterns
   - Create offline queue for changes
   - Develop connectivity detection and recovery

### Phase 3: Food & Diet Tracking Features (6 weeks)
1. **Food Database**
   - Read-only food items database implementation
   - Food search and filtering functionality
   - Recent and favorite foods features

2. **Diet Plan Interface**
   - View and interpret diet plans
   - Display calorie budgets and category allocations
   - Implement progress visualization

3. **Food Logging System**
   - Develop food consumption recording
   - Create meal categorization interface
   - Implement quantity selection and calculation

### Phase 4: Media & Communication (4 weeks)
1. **Media Integration**
   - Implement camera and photo library access
   - Create audio recording functionality
   - Develop media upload queue with progress tracking

2. **Messaging System**
   - Build messaging interface
   - Implement offline message queue
   - Create read receipts and status indicators

3. **Push Notifications**
   - Integrate Firebase Cloud Messaging
   - Implement notification handling
   - Create user notification preferences

### Phase 5: UI Polish & Performance (3 weeks)
1. **UI Refinement**
   - Polish user interface components
   - Implement animations and transitions
   - Create skeleton screens for loading states

2. **Performance Optimization**
   - Optimize PouchDB queries and indexing
   - Implement data pagination and virtualization
   - Memory usage optimization for media

3. **Sync Performance**
   - Optimize sync frequency and batch size
   - Implement selective sync strategies
   - Create background sync scheduling

### Phase 6: Testing & Deployment (3 weeks)
1. **Testing Strategy**
   - Unit testing for core functionality
   - Integration testing for data flow
   - End-to-end testing for critical paths

2. **Beta Testing**
   - TestFlight and Google Play beta distribution
   - Analytics integration for usage tracking
   - Crash reporting and monitoring

3. **Production Deployment**
   - Store submission preparation
   - CI/CD pipeline finalization
   - Production environment configuration

## Conclusion

This updated technical proposal outlines a robust approach to building a React Native mobile application for Mansouri's nutrition clients using a hybrid database architecture with PostgreSQL and CouchDB/PouchDB. This architecture provides the best of both worlds: the structured data management of PostgreSQL for user management and media, along with the powerful offline-first capabilities of CouchDB/PouchDB for nutritional data.

The proposed implementation leverages the natural synchronization capabilities of PouchDB to provide seamless offline functionality while maintaining data consistency across devices. This approach significantly reduces the complexity of custom sync logic while improving the reliability of the offline experience.

By separating concerns between databases, we optimize each system for its strengths: PostgreSQL for relational data and secure user management, and CouchDB for distributed, offline-capable document storage with automatic synchronization.
