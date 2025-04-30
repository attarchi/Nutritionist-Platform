# Mansouri Nutritionist Web Application Technical Proposal (Revised)

## Project Overview

This document outlines the technical specifications for a web application designed for nutritionists. The application will enable nutritionists to create personalized diet plans for clients, track their progress, and communicate with them. Clients will use a separate mobile application.

## Architecture Overview

The application will follow a hybrid database architecture using Next.js 14, with a domain-driven design structure. This approach provides a balance between development speed, maintainability, and scalability appropriate for this application's scope.

### Technology Stack

| Component | Technology | Rationale |
|-----------|------------|-----------|
| Frontend Framework | Next.js 14 | Clean architecture, route handling, API routes |
| UI/Styling | Tailwind CSS with Shadcn/UI | Rapid development, component reusability |
| Primary Database | PostgreSQL (Neon.tech) | User management, media, messaging |
| Nutritional Database | CouchDB | Real-time sync for diet and food consumption data |
| Media Storage | AWS S3 | Cost-effective, reliable storage for images and audio files |
| SQL ORM | Prisma | Type safety, auto-generated migrations, intuitive query API |
| NoSQL Client | PouchDB | CouchDB client for browser, sync capabilities |
| Authentication | NextAuth.js (Google/Apple) | Secure, well-maintained, supports social login |
| State Management | React Context API | Sufficient for app complexity, built into React |
| API Architecture | REST with versioning | Familiar, well-supported, suitable for multi-client access |
| Internationalization | next-i18next | Robust i18n support for English and Persian |
| Testing | Jest | Industry standard, good integration with Next.js |
| Deployment | Vercel | Optimized for Next.js, generous free tier |
| Version Control | GitHub | Industry standard, supports CI/CD workflows |
| Forms | Formik + Yup | Reduces boilerplate code for managing form state |
| Monorepo Management | Turborepo | Code sharing between web and mobile applications |

## Hybrid Database Architecture

The application will use a hybrid database approach to leverage the strengths of both PostgreSQL and CouchDB:

### PostgreSQL (Relational Database)
- User accounts and authentication
- Nutritionist-client relationships
- Media file metadata and storage references
- Messaging system

### CouchDB (Document Database)
- Global food item database (shared across all users)
- User-specific databases for each client containing:
  - Diet plans
  - Diet category budgets
  - Consumed food logs

### Database Selection Rationale

- **PostgreSQL** provides robust relational data capabilities for user management and relationships
- **CouchDB** offers built-in synchronization and offline-first capabilities critical for the mobile experience
- This hybrid approach allows direct sync between the mobile client and database while maintaining relational integrity where needed

## Domain Model

### PostgreSQL Models

1. **User**
   - Properties: id, role (nutritionist/client), firstname, lastname, email, password (hashed), language preference, signup date
   - CouchDB credentials: couchDbName, couchDbUsername, couchDbPassword (encrypted)
   - Relations: One nutritionist can have many clients

2. **MediaFile**
   - Properties: id, userId, type (image/audio), fileUrl, fileKey, uploadDate, consumedFoodId
   - Relations: belongs to one user, references consumed food

3. **Message**
   - Properties: id, senderId, receiverId, content, timestamp, isRead
   - Relations: has sender and receiver (users)

### CouchDB Models

1. **FoodItem** (Global CouchDB)
   - Properties: _id, name (with translations), category1, category2, unit, unitReferenceValue, caloriesPerReference
   - Categories: Grains, Proteins, Fats, Simple Sugars, Fruits, Vegetables, Dairy

2. **Diet** (User CouchDB)
   - Properties: _id, type:"diet", startDate, endDate, dailyCaloriesBudget, isActive
   - Embedded: budgets array with category-specific allocations

3. **ConsumedFood** (User CouchDB)
   - Properties: _id, type:"consumedFood", date, meal, foodItemId, quantity, description
   - References: foodItemId links to global food item

## Database Schema

### PostgreSQL Schema (Prisma)

```prisma
// Prisma schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id                  String    @id @default(cuid())
  role                UserRole
  firstname           String
  lastname            String
  email               String    @unique
  password            String?   // Hashed, nullable for social auth
  languagePreference  String    @default("en")
  signupDate          DateTime  @default(now())
  dateOfBirth         DateTime?
  phone               String?
  country             String?
  state               String?
  city                String?
  
  // CouchDB credentials
  couchDbName         String?   // Database name for this user
  couchDbUsername     String?   // Username for CouchDB access
  couchDbPassword     String?   // Encrypted password for CouchDB
  
  // Relations
  nutritionist        User?     @relation("NutritionistToClient", fields: [nutritionistId], references: [id])
  nutritionistId      String?
  clients             User[]    @relation("NutritionistToClient")
  
  mediaFiles          MediaFile[]
  sentMessages        Message[] @relation("SentMessages")
  receivedMessages    Message[] @relation("ReceivedMessages")
  
  accounts            Account[]
  sessions            Session[]
  
  @@index([email])
  @@index([nutritionistId])
  @@index([role])
}

enum UserRole {
  NUTRITIONIST
  CLIENT
}

model MediaFile {
  id                String       @id @default(cuid())
  userId            String
  type              MediaType
  fileUrl           String       // URL to file in S3
  fileKey           String       // S3 key for deletion
  uploadDate        DateTime     @default(now())
  
  // Reference to consumed food in CouchDB
  consumedFoodId    String?      // CouchDB id of related consumed food
  
  // Relations
  user              User         @relation(fields: [userId], references: [id])
  
  @@index([userId])
  @@index([consumedFoodId])
}

enum MediaType {
  IMAGE
  AUDIO
}

model Message {
  id          String    @id @default(cuid())
  senderId    String
  receiverId  String
  content     String
  timestamp   DateTime  @default(now())
  isRead      Boolean   @default(false)
  
  // Relations
  sender      User      @relation("SentMessages", fields: [senderId], references: [id])
  receiver    User      @relation("ReceivedMessages", fields: [receiverId], references: [id])
  
  @@index([senderId])
  @@index([receiverId])
  @@index([timestamp])
}

// NextAuth.js models
model Account {
  id                 String  @id @default(cuid())
  userId             String
  type               String
  provider           String
  providerAccountId  String
  refresh_token      String?  @db.Text
  access_token       String?  @db.Text
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String?  @db.Text
  session_state      String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@index([userId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@index([userId])
}
```

### CouchDB Document Structures

```javascript
// Global Food Items Database
{
  "_id": "food-item-1",
  "type": "foodItem",
  "name": {
    "en": "Apple",
    "fa": "سیب"
  },
  "category1": "FRUITS",
  "category2": null,
  "unit": "gram",
  "unitReferenceValue": 100,
  "caloriesPerReference": 52
}

// User-specific Database - Diet
{
  "_id": "diet-1",
  "type": "diet",
  "startDate": "2025-04-01T00:00:00Z",
  "endDate": "2025-05-01T00:00:00Z",
  "dailyCaloriesBudget": 2000,
  "isActive": true,
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

// User-specific Database - Consumed Food
{
  "_id": "consumed-food-1",
  "type": "consumedFood",
  "date": "2025-04-27T12:30:00Z",
  "meal": "LUNCH",
  "foodItemId": "food-item-1",
  "quantity": 150,
  "description": "With skin",
  // Reference to media files stored in PostgreSQL
  "mediaFileIds": ["media-1", "media-2"]
}
```

## API Structure

The API will be structured to route requests to the appropriate database:

### Authentication Endpoints
- `POST /api/v1/auth/...` - Handled by NextAuth.js
- `POST /api/v1/auth/token` - JWT token generation with CouchDB credentials
- `POST /api/v1/auth/refresh` - JWT token refresh

### User Endpoints (PostgreSQL)
- `GET /api/v1/users` - List users (nutritionists only)
- `GET /api/v1/users/:id` - Get user details
- `PUT /api/v1/users/:id` - Update user profile
- `POST /api/v1/users` - Create new user with CouchDB database

### Media Endpoints (PostgreSQL + S3)
- `POST /api/v1/media/presigned-url` - Get S3 presigned URL for upload
- `POST /api/v1/media` - Register media file after upload
- `DELETE /api/v1/media/:id` - Delete media file

### Messaging Endpoints (PostgreSQL)
- `GET /api/v1/messages` - Get messages
- `POST /api/v1/messages` - Send message
- `PUT /api/v1/messages/:id` - Update message (mark as read)

### CouchDB Admin Endpoints (Protected)
- `POST /api/v1/admin/user-db` - Create user CouchDB database
- `DELETE /api/v1/admin/user-db/:id` - Delete user CouchDB database
- `POST /api/v1/admin/regenerate-credentials` - Regenerate user CouchDB credentials

## CouchDB Integration

### Database Setup and Management

1. **Global Food Items Database**
   - Shared read-only database for all users
   - Write access restricted to nutritionists

2. **User-specific Databases**
   - Created on user registration
   - Named with pattern `user_[uuid]`
   - Individual credentials per user

3. **Security Model**
   - CouchDB admin credentials stored in environment variables
   - User-specific database credentials stored encrypted in PostgreSQL
   - Role-based access control for CouchDB users


## Application Features (Nutritionist Web App)

### User Management
1. **Authentication**
   - Login via email/password or social login (Google, Apple)
   - Account creation and profile management
   - Password reset functionality

2. **User Roles**
   - Nutritionist: Create diet plans, review reports, manage clients
   - Client management with CouchDB provisioning

### Nutritionist Features
1. **Client Management**
   - View list of all clients
   - View client details and history
   - Associate/disassociate with clients
   - Monitor client activity/usage

2. **Diet Planning**
   - Create personalized diet plans for clients
   - Set daily calorie budget
   - Set category-specific budgets
   - Specify start and end dates

3. **Reporting & Analytics**
   - View client daily reports from CouchDB data
   - Leave comments on client reports
   - View active user metrics (24h active users, weekly chart)

4. **Food Database Management**
   - Add, edit, remove food items in global CouchDB
   - Categorize foods in the seven categories

5. **Communication**
   - Send and receive messages from clients using PostgreSQL and the backend API
   - View message history
   - Send push notifications to clients

## File Structure (Domain-Driven)

```
/app                     # Next.js app directory
  /api                   # API routes
    /v1                  # API version
      /auth              # Authentication endpoints
      /users             # User endpoints
      /media             # Media endpoints (PostgreSQL)
      /messages          # Messaging endpoints (PostgreSQL)
      /admin             # CouchDB administration endpoints
  /[locale]              # Internationalization
    /nutritionist        # Nutritionist routes
    /auth                # Auth routes
/domains
  /user                  # User-related code (PostgreSQL)
    /components
    /hooks
    /types
    /utils
  /food                  # Food items, categories (CouchDB)
    /components
    /hooks
    /types
    /utils
  /diet                  # Diet plans, budgets (CouchDB)
  /reporting             # Daily reports based on CouchDB data
  /messaging             # Chat functionality (PostgreSQL)
  /media                 # Media handling (PostgreSQL + S3)

/services
  /postgresql            # PostgreSQL service functions
  /couchdb               # CouchDB service functions
    /admin               # Admin-level CouchDB operations
    /global              # Global DB operations
    /user                # User DB operations

/shared
  /components            # Shared UI components
  /hooks                 # Shared hooks
  /utils                 # Utility functions
  /types                 # Shared TypeScript types
/prisma                  # Database schema and migrations
/public                  # Static assets and locales
  /locales               # Translation files
    /en
    /fa
```

## Project Breakdown

### Phase 1: Project Setup and Core Infrastructure (Weeks 1-3)
1. **Development Environment Setup** (Week 1)
   - Configure development tools and environments
   - Set up GitHub repository and CI/CD
   - Initialize Next.js project with TypeScript

2. **Monorepo Configuration** (Week 2)
   - Set up Turborepo structure
   - Configure shared packages
   - Create initial build scripts

3. **Database Setup** (Week 3)
   - Provision PostgreSQL database
   - Configure Prisma and initial schema
   - Set up CouchDB instance and security

### Phase 2: Authentication and User Management (Weeks 4-6)
1. **Authentication System** (Week 4)
   - Implement NextAuth.js
   - Create login and registration pages
   - Set up JWT token handling

2. **User Management** (Week 5)
   - Create user profile pages
   - Implement user roles and permissions
   - Build client management interface

3. **CouchDB Integration** (Week 6)
   - Create CouchDB database provisioning system
   - Implement secure credential storage
   - Set up user database creation

### Phase 3: Core Nutritionist Features (Weeks 7-12)
1. **Food Database Management** (Weeks 7-8)
   - Create food item CRUD interface
   - Implement food categorization system
   - Build food search and filtering

2. **Diet Planning System** (Weeks 9-10)
   - Create diet plan interface
   - Implement category budget allocation
   - Build calendar selection system

3. **Client Data Visualization** (Weeks 11-12)
   - Implement client progress charts
   - Create reporting dashboard
   - Build exportable reports

### Phase 4: Communication and Media (Weeks 13-16)
1. **Messaging System** (Weeks 13-14)
   - Create messaging interface
   - Implement real-time updates
   - Build notification system

2. **Media Management** (Weeks 15-16)
   - Set up S3 integration
   - Implement media upload system
   - Create media gallery interface

### Phase 5: Integration and Testing (Weeks 17-20)
1. **Mobile Integration** (Week 17)
   - Test API endpoints with mobile requirements
   - Implement mobile-specific API routes
   - Verify authentication flows

2. **Performance Optimization** (Week 18)
   - Optimize database queries
   - Implement caching strategies
   - Reduce bundle size

3. **User Testing** (Weeks 19-20)
   - Conduct internal testing
   - Fix identified issues
   - Prepare for deployment

### Phase 6: Deployment and Launch (Weeks 21-22)
1. **Production Deployment** (Week 21)
   - Configure Vercel production environment
   - Set up monitoring and analytics
   - Perform final tests

2. **Launch Support** (Week 22)
   - Monitor production performance
   - Address any initial issues
   - Provide documentation and training


## Conclusion

This revised technical proposal outlines a comprehensive plan for developing a web application for nutritionists using Next.js 14 with a hybrid database approach. By leveraging PostgreSQL for user management and messaging, while using CouchDB for nutritional data, the architecture provides the best of both worlds - strong relational capabilities where needed and automatic synchronization for mobile clients.

The design follows the domain-driven approach, with clear separation of concerns and a focus on creating a robust, maintainable, and scalable solution. The API is structured to handle both databases appropriately, with authentication and security measures adapted for this hybrid approach.
