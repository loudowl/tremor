# Tremor Architecture Document

## 1. Tech Stack

### Frontend
- **Framework:** React Native (via Expo SDK 44.0.0)
- **State Management:** Redux 4.1.0

### Backend
- **Framework:** Node.js 16.x, Express 4.17.1

### Database
- **Backend as a Service (BaaS):** Supabase
- **Database:** PostgreSQL 13

### Hosting & Deployment
- **Backend Hosting:** Vercel or Railway
- **CI/CD Pipeline:** GitHub Actions

### Push Notifications
- **Service:** Expo Push Notifications

### Payment & Subscription
- **Service:** RevenueCat

### AI API
- **Semantic Matching:** OpenAI GPT-4o mini

## 2. Project Structure

```plaintext
tremor/
├── app/
│   ├── components/
│   │   ├── EventCard.js
│   │   ├── NotificationBanner.js
│   │   ├── PortfolioTracker.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── PortfolioScreen.js
│   ├── navigation/
│   │   ├── AppNavigator.js
│   ├── state/
│   │   ├── store.js
│   │   ├── reducers/
│   ├── styles/
│   │   ├── colors.js
│   │   ├── typography.js
│   ├── App.js
├── backend/
│   ├── controllers/
│   │   ├── eventController.js
│   │   ├── marketController.js
│   ├── routes/
│   │   ├── eventRoutes.js
│   │   ├── marketRoutes.js
│   ├── models/
│   │   ├── eventModel.js
│   │   ├── userModel.js
│   ├── services/
│   │   ├── notificationService.js
│   │   ├── matchingService.js
│   ├── app.js
│   ├── server.js
└── README.md
```

## 3. API Design

### Event API
- **GET /api/events**
  - **Request:** None
  - **Response:**
    ```json
    [
      {
        "id": "string",
        "type": "earthquake",
        "description": "string",
        "timestamp": "timestamp"
      }
    ]
    ```

- **POST /api/events/match**
  - **Request:**
    ```json
    {
      "eventId": "string",
      "description": "string"
    }
    ```
  - **Response:**
    ```json
    {
      "markets": ["slug1", "slug2"]
    }
    ```

### Market API
- **GET /api/markets/:slug**
  - **Request:** None
  - **Response:**
    ```json
    {
      "question": "string",
      "yes_price": "number",
      "volume_24h": "number"
    }
    ```

## 4. Data Models

### Event Table
```sql
CREATE TABLE events (
  id UUID PRIMARY KEY,
  type VARCHAR(50),
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

### User Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  subscription_status VARCHAR(20),
  kalshi_api_key TEXT
);
```

### Market Table
```sql
CREATE TABLE markets (
  id UUID PRIMARY KEY,
  slug VARCHAR(100),
  question TEXT,
  yes_price FLOAT,
  volume_24h FLOAT,
  related_event_id UUID REFERENCES events(id)
);
```

## 5. Authentication

- **Approach:** Supabase Auth using email magic links
- **Flow:**
  1. User enters email.
  2. Receives a magic link via email.
  3. Clicks link to authenticate and retrieve JWT token.
  4. JWT token used for session management in the app.

## 6. State Management

- **Strategy:** Use Redux for global state management
  - **Stores:** User data, event feed, subscription status, and notification preferences
  - **Reducers:** Events, Markets, User, Notifications

## 7. Key Dependencies

- **React Native**: UI development
- **Redux**: State management
- **Express**: Backend REST API framework
- **Supabase JS**: Supabase integration
- **axios**: HTTP requests
- **node-cron**: Scheduling backend tasks
- **expo-notifications**: Push notifications
- **revenuecat/react-native-purchases**: Subscription management

## 8. Deployment

- **Hosting:** Use Vercel or Railway for Node.js deployment
- **Database:** Supabase provides the database as part of its platform
- **CI/CD:** Implement GitHub Actions
  - **Scripts:** Auto-deploy main branch to Vercel/Railway
  - **Tests:** Run automated tests on every pull request
  
This architecture ensures robust, scalable development suited for a mobile-first application, with a focus on rapid development and deployment.