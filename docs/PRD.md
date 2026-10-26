# Tremor - Product Requirements Document (PRD)

## 1. Executive Summary
Tremor is a mobile app that transforms real-world events into actionable prediction markets. It integrates with USGS, NWS, and news APIs to provide real-time alerts and matches these events with relevant prediction markets on Kalshi and Polymarket. By closing the gap between breaking news and trades, Tremor provides a streamlined experience for prediction market enthusiasts.

## 2. Goals & Success Metrics
- **User Adoption:** Achieve 10,000 downloads within the first three months.
- **Subscription Conversion:** Convert 10% of free users to Tremor Pro subscribers.
- **Engagement:** Attain an average of 5 daily active users (DAU) interactions per user.
- **Churn Rate:** Maintain a monthly churn rate of under 5% for Pro subscribers.

## 3. User Personas
- **Prediction Enthusiast:** Regularly participates in prediction markets and seeks a competitive edge through timely information.
- **Casual Trader:** Interested in prediction markets but needs guidance and easy access to relevant trades.
- **News Junkie:** Primarily interested in real-time breaking news with secondary interest in market trading.

## 4. Core Features
- **P0 Features:**
  - Real-time event feed (USGS, NWS, News)
  - Smart market matcher using GPT-4o mini
  - Push notification engine with deep links
- **P1 Features:**
  - Portfolio tracker with Kalshi API integration
  - Dark theme design with alert color system
- **P2 Features:**
  - Enhanced filtering and customization options for event feeds
  - Detailed analytics on personal trading impacts

## 5. User Stories
- **As a Prediction Enthusiast,** I want to receive real-time alerts for specific events so that I can quickly make trades on impacted markets.
- **As a Casual Trader,** I want a simple way to see how current events are influencing my open positions so that I can make informed decisions.
- **As a News Junkie,** I want to get alerts when a major event occurs so that I can stay informed and potentially explore related markets.

## 6. Out of Scope
- Integration with prediction markets beyond Kalshi and Polymarket.
- In-depth predictive analytics and forecasting beyond event-to-market matching.
- Advanced trading tools or capabilities beyond current market visibility.

## 7. Technical Constraints
- Must use React Native, Expo, Node.js, and Supabase.
- API rate limits from USGS, NWS, and Kalshi need consideration.
- Secure storage and encryption for user data using Supabase Vault.

## 8. Timeline Estimate
- **Weeks 1-2:** Project setup, API integrations, and backend architecture.
- **Weeks 3-4:** Develop real-time event feed and smart market matcher.
- **Weeks 5-6:** Implement push notifications and portfolio tracker.
- **Week 7:** Testing, bug fixes, and refinements.
- **Week 8:** Prepare for launch with marketing and onboarding strategies.

