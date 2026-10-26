# Design Brief for Tremor

## Visual Identity

### Color Palette
- **Primary Color:**
  - Amber #FFBF00
- **Secondary Color:**
  - Red #FF4500
- **Accent Color:**
  - Electric Blue #007BFF
- **Background Colors:**
  - Dark #121212
  - Light Grey #2D2D2D
- **Text Colors:**
  - Primary Text #FFFFFF
  - Secondary Text #B0B0B0

### Mood/Tone
- Modern, Energetic, and Responsive
- Focus on urgency and real-time information

## Typography

### Heading Font
- **Font Family:** Roboto
- **Sizes & Weights:**
  - H1: 32px, Bold
  - H2: 24px, Medium
  - H3: 20px, Medium

### Body Font
- **Font Family:** Open Sans
- **Sizes & Weights:**
  - Body: 16px, Regular
  - Small Text: 14px, Regular

## Component Library

### UI Components
- **Event Card:** Displays event title, description, timestamp, and matched markets with current Yes price and volume.
- **Notification Banner:** Push notification preview with deep-link button.
- **Portfolio Tracker:** Graphical timeline with overlay of events and market positions.
- **Navigation Bar:** Bottom navigation with icons for Home, Portfolio, and Settings.
- **Button:** Standardized with rounded corners, primary and secondary styles.
- **Subscription Modal:** Clear gradient overlay with subscription details and call to action.

## Key Screen Layouts

### Home Screen
- **Header:** App logo, search bar.
- **Event Feed:** Vertical list of event cards.
- **Market Match Details:** Below each event, compact market information and CTA buttons.
- **Footer:** Navigation bar with quick links.

### Portfolio Screen
- **Header:** User's portfolio summary.
- **Event Timeline:** Interactive graph connecting events with market outcomes.
- **Metrics Section:** Textual representation of open positions and their performance.

### Notification Settings
- **Category List:** Checkbox interface for selecting event categories.
- **Notification Frequency Controls:** Toggle between real-time and delayed.

## Responsive Strategy

### Breakpoints
- **Mobile:** Up to 600px
- **Tablet:** 601px to 1024px
- **Desktop:** 1025px and above
- Ensure components resize and reflow elegantly between screen sizes.

## Micro-interactions

### Key Animations/Transitions
- **Event Card Hover:** Slight elevation and shadow increase.
- **Button Press:** Quick scale effect and color change.
- **Navigation Transition:** Swipe animation when switching tabs.
- **Loading Spinner:** Pulsating effect to signify data fetching.

## Accessibility

### WCAG Considerations
- **Contrast Ratio:** Ensure contrast ratio meets at least 4.5:1 for text and 3:1 for larger text.
- **Alt Text:** All images/icons have descriptive alt text for screen readers.
- **Keyboard Navigation:** All interactive elements are accessible via keyboard.
- **Focus Indication:** Ensure visible focus states for all navigable components.

This design brief outlines the visual and functional elements needed to create a seamless and engaging user experience for Tremor, focusing on timely interactions and user empowerment in prediction markets.