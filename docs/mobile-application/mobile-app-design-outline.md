# Nutritionist Mobile Application Design Outline

## Brand Identity & Visual Language

**Brand Consistency**
- Utilize the same Mansouri logo and brand identity established in the web application
- Create a mobile-optimized experience that feels like part of the same ecosystem
- Maintain consistent color palette, typography, and iconography

## Color Palette

### Primary Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Leaf Green | #1D6A32 | Primary buttons, active states, key UI elements |
| Light Apple Green | #88B04B | Secondary elements, highlights, progress indicators |
| Dark Outline Green | #0F3D23 | Primary text, borders |
| Background | #FAF8F5 | Screen backgrounds |

### Extended Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| White | #FFFFFF | Cards, content containers |
| Light Gray | #E2E2E0 | Borders, dividers, disabled states |
| Medium Gray | #9A9A98 | Secondary text, inactive states |
| Dark Gray | #4A4A48 | Body text |

### Functional Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Success | #2E7D32 | Success indicators, within budget elements |
| Warning | #ED8936 | Near-budget warnings |
| Error | #D32F2F | Error states, over-budget indicators |
| Info | #2B6CB0 | Tooltips, information messages |

## Typography

- **Primary Font**: 'Inter', sans-serif
  - Weights: Regular (400), Medium (500), Semi-Bold (600), Bold (700)
  - Supports both Latin and Persian alphabets

- **Type Scale**:
  - Heading 1: 24px/28px
  - Heading 2: 20px/24px 
  - Heading 3: 18px/22px
  - Body: 16px/24px
  - Caption: 14px/20px
  - Small: 12px/16px

## Iconography

- **Style**: Consistent outlined style with 2px stroke weight
- **Primary Size**: 24x24px
- **Compact Size**: 20x20px for tab bars and dense UI areas
- **Color**: Primarily Dark Outline Green with Leaf Green for active states
- **Categories**: Food category-specific icons to maintain visual distinction

## UI Components

### Navigation Components

**Bottom Navigation Bar**
- Fixed bottom position
- 5 primary destinations: Dashboard, Food Log, Diet Plan, Messages, Profile
- Active tab: Leaf Green icon with label
- Inactive tab: Medium Gray icon with label
- Background: White with subtle top border

**Top App Bar**
- Title centered or left-aligned based on screen context
- Back button when navigating into sub-screens
- Action icons (search, notifications) on right side
- Transparent or subtle background (#FAF8F5)
- Elevation shadow on scroll

**Drawer Navigation (Optional)**
- Access to secondary features and settings
- User profile section at top
- Menu items with icons and labels
- Background: White

### Core Components

**Buttons**
- Primary: Leaf Green background, white text, 8px radius, 44px height
- Secondary: Transparent with Leaf Green border and text
- Text Button: Leaf Green text, no background
- Icon Button: 40x40px touch target
- FAB: 56x56px, Leaf Green background, white icon

**Input Fields**
- Height: 44px
- Border: 1px Light Gray, 8px radius
- Focus state: 2px Leaf Green border
- Error state: 2px Error red border
- Clear text button appears when text is entered
- Helper text below input for additional context

**Cards**
- Food Item Card:
  - White background, 12px radius
  - Optional small thumbnail (60x60px)
  - Food name as primary text
  - Category tag chip
  - Calories/quantity as secondary text
  - Swipe actions for quick edit/delete
  
- Meal Card:
  - White background, 12px radius, subtle shadow
  - Meal type header (Breakfast, Lunch, etc.)
  - List of contained food items
  - Total calories
  - Media thumbnails if available
  - Expandable/collapsible design

**Lists**
- Food Item List:
  - Consistent height items
  - Pull-to-refresh
  - Infinite scroll loading
  - Sticky category headers
  - Search bar at top
  
- Recent Items:
  - Horizontal scrolling list
  - Visual thumbnails
  - Quick-add action

**Selection Controls**
- Checkboxes: 20x20px, Leaf Green when selected
- Radio Buttons: 20x20px, circular
- Toggles: 36x20px track, 20x20px thumb
- Sliders: Leaf Green track and thumb

**Bottom Sheets**
- Used for context-specific actions without leaving the screen
- Food selection
- Meal type selection
- Date/time pickers
- Quick actions menu

## Screen Layouts

### Authentication & Onboarding

**Login Screen**
- Centered Mansouri logo (32px height)
- Email/password fields
- "Login with Google/Apple" buttons
- "Forgot Password" and "Register" links
- Language toggle in upper corner

**Registration Flow**
- Step indicator at top
- One logical group per screen
- Next/Back buttons at bottom
- Final confirmation screen

**Onboarding Tutorial**
- 3-5 screens highlighting key features
- Skip option
- Progress dots
- Illustrations demonstrating main workflows

### Primary Screens

**Dashboard**
- Today's date and greeting at top
- Diet plan status card
  - Circular progress for overall calories
  - Bar charts for each food category
- Quick-add meal button (FAB)
- Recently consumed meals
- Nutritionist messages preview (if any)
- Pull-to-refresh for latest data

**Food Logging**
- Tabbed interface (Today, History)
- Search bar at top
- Recent foods horizontal scroll
- Meal type segmented control
- Category filter chips (horizontal scroll)
- Food results in vertical list
- FAB to add custom food item

**Food Item Detail**
- Full page modal
- Food name and image
- Nutrition facts
- Quantity selector
- Date and meal type selector
- Notes field
- Photo/voice note attachment
- Save button at bottom

**Diet Plan View**
- Current plan details card
- Start/end dates
- Daily calorie budget
- Category breakdown with visual indicators
- Calendar view for selecting dates
- Daily adherence statistics
- Weekly progress chart

**Media Capture**
- Camera interface with clear capture button
- Gallery thumbnail to access previous photos
- Voice recording interface
  - Waveform visualization
  - Record/pause/stop controls
  - Playback and delete options

**Messaging**
- Conversation list view
  - Profile picture
  - Name
  - Message preview
  - Timestamp
  - Unread indicator
- Conversation detail view
  - Message bubbles (sent: Light Apple Green, received: Light Gray)
  - Text input at bottom
  - Attachment button
  - Voice message recording button

**Profile & Settings**
- User photo and name at top
- Profile information section
- Settings section
  - Notification preferences
  - Language selection
  - Privacy settings
  - Sync settings
  - App information

## Specialized Components

### Food Search & Selection

**Search Experience**
- Prominent search bar with instant filtering
- Voice search option
- Filter tabs for categories
- Sort options (recently used, alphabetical, calories)
- Clear history option

**Food Selection Flow**
1. Search or browse by category
2. Select food item
3. Set quantity and portion
4. Choose meal and date
5. Add notes/media (optional)
6. Save entry

### Diet Progress Visualization

**Daily Tracker**
- Circular progress for overall calories
- Color-coded based on status (green: good, orange: near limit, red: over)
- Category-specific progress bars
- Remaining calories prominently displayed

**Weekly View**
- 7-day bar chart
- Horizontal scrolling for previous weeks
- Color-coded bars based on adherence
- Average adherence percentage

**Category Breakdown**
- Stacked bar chart showing consumed amounts per category
- Color-coded based on food categories
- Tap to see detailed breakdown

### Media Management

**Photo Gallery**
- Grid layout of food photos
- Date/meal filters
- Tap for larger view
- Swipe between photos

**Voice Notes**
- List of recordings with dates
- Duration displayed
- Playback controls
- Transcript option (if available)

### Offline Mode Indicators

**Sync Status**
- Subtle indicator in status bar or header
- Green: fully synced
- Orange: pending sync
- Red: sync issues

**Offline Mode Banner**
- Appears when connection lost
- Provides reassurance that data is being saved locally
- Disappears when connection returns

## Interaction Design

### Gestures & Navigation

- **Swipe Actions**
  - Swipe left/right on food items for quick actions (edit/delete)
  - Swipe between days in calendar view
  - Pull down to refresh data
  - Swipe up on bottom sheet to expand

- **Long Press Actions**
  - Long press on food item for additional options
  - Long press on calendar day for summary popup

- **Transitions**
  - Screen transitions: subtle slide or fade (250ms)
  - Bottom sheet: slide up from bottom (300ms)
  - List item additions: fade in with slight slide (200ms)

### Feedback & States

- **Loading States**
  - Skeleton screens instead of spinners
  - Placeholder content that indicates layout
  - Progress bar for longer operations

- **Success States**
  - Brief toast message with success icon
  - Subtle animation for completed actions
  - Haptic feedback (when available)

- **Error States**
  - Clear error messages with resolution steps
  - Retry options for failed operations
  - Offline caching for pending operations

### Micro-interactions

- **Button Feedback**
  - Subtle scale animation on tap (95%)
  - Color shift to darker shade
  - Ripple effect from tap point

- **Form Interactions**
  - Fields animate focus state
  - Input validation in real-time
  - Error shake animation for invalid submissions

- **Progress Animations**
  - Progress bars animate to their value
  - Charts animate data points sequentially
  - Budget indicators pulse when approaching limits

## Offline-First Experience

### Data Availability

- **Always Available**
  - Personal profile information
  - Active diet plan
  - Recent food entries
  - Food database (core items)

- **Cached When Viewed**
  - Older food history
  - Previous diet plans
  - Media thumbnails

- **Online Only (Fallback UI when offline)**
  - Full-resolution media
  - Complete food database search
  - Real-time messaging

### Sync Visualization

- **Sync Indicator States**
  - Up-to-date: Checkmark icon
  - Syncing: Rotating icon
  - Pending: Clock icon with count
  - Error: Alert icon with retry option

- **Background Sync**
  - Automatic sync when connection returns
  - Battery-aware sync scheduling
  - Size-aware media uploads (wait for WiFi)

## Responsive Layout Strategy

### Device Adaptation

- **Phone (Standard)**
  - Single column layout
  - Full-width cards and lists
  - Bottom navigation

- **Phone (Large)**
  - Single column with optimized spacing
  - Same core layout with adjusted proportions

- **Tablet (Portrait)**
  - Optional two-column layout on certain screens
  - Split view for message threads
  - Enhanced data visualizations

- **Tablet (Landscape)**
  - Two-column master-detail views
  - Side panel for filters or details
  - Expanded charts and visualizations

### Orientation Changes

- **Portrait to Landscape**
  - Food search results switch from list to grid
  - Charts expand to show more detail
  - Bottom sheet content reorganizes to horizontal layout

- **Safe Areas & Notches**
  - Content properly inset from notches and camera cutouts
  - Bottom navigation adapts to home indicators
  - Floating actions positioned to avoid system gestures

## Accessibility Considerations

- **Text Size Adaptation**
  - Support system text size settings
  - Layouts adapt to larger text without breaking
  - Minimum text size of 16px for body content

- **Screen Reader Support**
  - All interactive elements properly labeled
  - Meaningful content descriptions for images
  - Announcements for state changes

- **Reduced Motion Option**
  - Respect system motion reduction settings
  - Alternative static indicators for animations
  - Critical information never conveyed by motion alone

- **Touch Targets**
  - Minimum 44×44px for all interactive elements
  - Sufficient spacing between clickable items
  - Forgiving touch areas that extend beyond visual boundaries

## Multi-Language Support

- **RTL Adaptation**
  - Full right-to-left layout support for Persian
  - Mirrored navigation, icons, and layouts
  - Direction-aware animations and transitions

- **Content Strategy**
  - Text containers that accommodate expansion/contraction
  - Language-specific date and number formatting
  - Cultural adaptations for food categories and meals

- **Language Selection**
  - Easy access to language toggle
  - System language detection with manual override
  - Remember language preference across sessions

## Empty States & User Guidance

- **First-Time User**
  - Guided empty states with illustrations
  - Clear call-to-action buttons
  - Progressive disclosure of features

- **Content-Empty States**
  - "No items yet" messages with clear next steps
  - Sample/example content suggestions
  - Visual illustrations that reinforce the feature purpose

- **Error Recovery**
  - Friendly error messaging
  - Clear resolution steps
  - Contact support option for persistent issues

## Design Implementation Notes

### Design System Integration

- Design components should match Shadcn/UI and React Native Paper capabilities
- Create component equivalents between web and mobile
- Document specific mobile adaptations of shared components

### Performance Considerations

- Optimize image loading strategies (progressive, thumbnails first)
- Use list virtualization for long scrolling lists
- Implement caching strategy for frequently used data
- Consider reduced animation mode for lower-end devices

### Implementation Priorities

1. **Core Experience**
   - Food logging workflow
   - Diet plan visualization
   - Offline capability

2. **Enhanced Features**
   - Media capture and management
   - Advanced visualizations
   - Messaging system

3. **Polish & Refinement**
   - Animations and transitions
   - Empty state illustrations
   - Accessibility refinements

## Deliverables

1. **Component Library**
   - Core UI components with states
   - Navigation elements
   - Custom visualizations

2. **Screen Designs**
   - All primary screens
   - Key workflows
   - Empty and error states

3. **Interactive Prototype**
   - High-fidelity prototype of core user flows
   - Transition and animation specifications

4. **Design System Documentation**
   - Comprehensive style guide
   - Component usage guidelines
   - Accessibility specifications

This design outline aligns with the proposed technical architecture, particularly accommodating the offline-first PouchDB/CouchDB approach, while maintaining consistency with the web application for nutritionists.