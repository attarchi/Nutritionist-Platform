# Nutritionist Application Design Outline

## Brand Identity

**Brand Name**: Mansouri

**Logo**
- The existing Mansouri logo should be used consistently across all application interfaces
- Placement: Centered in authentication screens, left-aligned in main app header
- Minimum size: 32px height on mobile, 40px height on desktop
- Clear space: Maintain padding equal to 25% of the logo height on all sides
- For favicons and app icons, use the symbol-only version where available

## Color Palette

### Primary Brand Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Leaf Green | #1D6A32 | Primary color, buttons, active states |
| Light Apple Green | #88B04B | Secondary color, highlights, progress indicators |
| Dark Outline Green | #0F3D23 | Primary text, borders, footer |
| Background (off-white) | #FAF8F5 | Page backgrounds, cards |

### Extended Palette
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Light Gray | #E2E2E0 | Borders, dividers, disabled backgrounds |
| Medium Gray | #9A9A98 | Secondary text, icons, inactive states |
| Dark Gray | #4A4A48 | Body text alternative |

### Feedback Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Success | #2E7D32 | Success messages, completed actions |
| Warning | #ED8936 | Warnings, approaching limits |
| Error | #D32F2F | Error messages, exceeded limits |
| Info | #2B6CB0 | Informational messages, tips |

## Design System

### Typography

- **Primary Font**: 'Inter', sans-serif
  - Provides excellent readability across devices
  - Supports multiple languages including Persian
  - Weights: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

- **Hierarchy**:
  - H1: 28px/32px mobile, 36px/40px desktop (Semi-bold)
  - H2: 24px/28px mobile, 30px/36px desktop (Semi-bold)
  - H3: 20px/24px mobile, 24px/28px desktop (Semi-bold)
  - Body: 16px/24px (Regular)
  - Small: 14px/20px (Regular)
  - Caption: 12px/16px (Regular)

### Iconography

- **Style**: Outlined icons with 2px stroke weight
- **Size**: 24x24px standard, 20x20px for compact UI elements
- **Color**: Primarily Dark Outline Green (#0F3D23) for most icons
- **Highlight**: Leaf Green (#1D6A32) for active/selected states

### Component Design

#### Buttons

**Primary Button**
- Background: Leaf Green (#1D6A32)
- Text: White
- Border Radius: 8px
- Height: 44px (mobile), 48px (desktop)
- Padding: 12px 24px
- States:
  - Hover: 10% darker
  - Active: 15% darker
  - Disabled: 50% opacity, Light Gray (#E2E2E0) background

**Secondary Button**
- Background: Transparent
- Text: Leaf Green (#1D6A32)
- Border: 1.5px solid Leaf Green (#1D6A32)
- Border Radius: 8px
- Height: 44px (mobile), 48px (desktop)
- Padding: 12px 24px

**Tertiary Button**
- Background: Transparent
- Text: Leaf Green (#1D6A32)
- Border: None
- Height: 44px (mobile), 48px (desktop)
- Padding: 12px 24px

#### Form Elements

**Text Input**
- Background: White
- Border: 1px solid Light Gray (#E2E2E0)
- Border Radius: 8px
- Height: 44px (mobile), 48px (desktop)
- Padding: 12px 16px
- Text: Dark Gray (#4A4A48)
- States:
  - Focus: Border 2px Leaf Green (#1D6A32)
  - Error: Border 2px Error (#D32F2F)
  - Disabled: Background Light Gray (#E2E2E0), text Medium Gray (#9A9A98)

**Select Dropdown**
- Same styling as Text Input
- Dropdown icon: Dark Outline Green (#0F3D23)
- Dropdown menu: White background, 4px border radius, subtle shadow

**Checkbox & Radio**
- Unchecked: 1.5px border Medium Gray (#9A9A98), white fill
- Checked: Leaf Green (#1D6A32) background, white check/dot
- Size: 20px × 20px

**Toggle**
- Off: Light Gray (#E2E2E0) track, white thumb
- On: Light Apple Green (#88B04B) track, white thumb
- Size: 36px × 20px
- Border Radius: Fully rounded (20px)

#### Cards

**Standard Card**
- Background: White
- Border: None
- Border Radius: 12px
- Shadow: 0px 4px 12px rgba(0, 0, 0, 0.05)
- Padding: 16px (mobile), 24px (desktop)

**Highlighted Card**
- Background: White
- Border Left: 4px solid Light Apple Green (#88B04B)
- Border Radius: 12px
- Shadow: 0px 4px 12px rgba(0, 0, 0, 0.05)
- Padding: 16px (mobile), 24px (desktop)

**Food Item Card**
- Background: White
- Border Radius: 12px
- Shadow: 0px 2px 8px rgba(0, 0, 0, 0.05)
- Padding: 12px
- Image container: 60px × 60px, rounded corners
- Food category tag: Light background based on category

**Status Cards**
- Success: 4px green left border, light green background
- Warning: 4px orange left border, light orange background
- Error: 4px red left border, light red background
- Info: 4px blue left border, light blue background

## Page Layouts

### Global Elements

**Navigation - Mobile**
- Bottom tab bar with 4-5 primary destinations
- Background: White
- Active icon: Leaf Green (#1D6A32)
- Inactive icon: Medium Gray (#9A9A98)
- Mansouri logo centered in header

**Navigation - Desktop**
- Left sidebar with expandable sections
- Selected item: Light Apple Green (#88B04B) background, Leaf Green (#1D6A32) text
- Hover: Light Gray (#E2E2E0) background
- Mansouri logo in top-left of sidebar

**Header**
- Logo positioned on left (desktop) or center (mobile)
- Background: Background off-white (#FAF8F5)
- Border bottom: 1px solid Light Gray (#E2E2E0)
- Height: 56px (mobile), 64px (desktop)
- User profile icon/dropdown on right

### Key Screens

#### Login & Registration

**Login Screen**
- Mansouri logo prominently displayed (centered, top third of screen)
- Clean, centered form on Background off-white (#FAF8F5)
- Social login options clearly separated from email/password
- Language toggle in upper right corner

**Registration Flow**
- Step indicator showing progress
- One logical group of fields per step
- Back/Next buttons consistently positioned
- Role selection (nutritionist/client) with visual differentiation

#### Nutritionist Dashboard

**Layout**
- 4 key metric cards in a grid (mobile: 2×2, desktop: 4×1)
- Recent activity list below metrics
- Quick action buttons in a floating action button or card

**Client Management**
- Searchable, filterable client list
- Client cards with photo, name, active diet status
- Quick action buttons for each client
- Add new client button prominently displayed

**Diet Creation**
- Multi-step form with clear sectioning
- Diet summary always visible
- Food category budget sliders
- Date range selector with calendar

#### Client Dashboard

**Layout**
- Today's budget status card at top
- Progress bars for each food category
- Recently logged meals with photos
- Quick add food button (floating action button)

**Food Logging Form**
- Search with auto-complete
- Category filters as horizontally scrollable chips
- Recently used foods section
- Quantity selector with common portions
- Photo/voice note upload option
- Date and meal type selectors

**Daily Report**
- Calendar for day selection
- Meal-by-meal breakdown
- Calorie and budget visualizations
- Nutritionist comment area
- Edit/delete options for entries

## Mobile Design Patterns

1. **Bottom Sheet Dialogs**
   - For quick actions without leaving the current context
   - Used for meal selection, quick food addition

2. **Pull-to-Refresh**
   - For updating data feeds and reports

3. **Swipe Actions**
   - Swipe to delete/edit food entries
   - Swipe between days in reports

4. **Floating Action Button (FAB)**
   - For primary actions like adding food or creating a diet
   - Leaf Green (#1D6A32) background with white icon

5. **Collapsible Headers**
   - Maximize content area when scrolling long lists

## Responsive Behaviors

| Element | Mobile (< 768px) | Tablet (768-1024px) | Desktop (> 1024px) |
|---------|------------------|---------------------|-------------------|
| Navigation | Bottom tab bar | Left sidebar (compact) | Left sidebar (expanded) |
| Mansouri Logo | Centered in header | Left-aligned in header | Top of sidebar |
| Content | Single column | Two columns | Two or three columns |
| Forms | Full width | Contained width (600px) | Contained width (600px) |
| Data Tables | Stacked cards | Horizontal scroll | Full table |
| Activity Feed | Full width list | 2-column grid | 3-column grid |

## Animation & Micro-interactions

1. **Transitions**
   - Subtle fade in/out for page transitions (300ms)
   - Slide up for bottom sheets (250ms)
   - Scale effect for cards on hover (desktop)

2. **Feedback**
   - Button press effect (scale down 2%)
   - Success animations for form submissions
   - Progress indicators for loading states

3. **Chart Animations**
   - Progressive reveal for data visualization (600ms)
   - Hover states for data points

## Accessibility Considerations

1. **Color Contrast**
   - All text meets WCAG AA standard minimum (4.5:1 for normal text)
   - Interactive elements have sufficient contrast
   - Text on Leaf Green uses white with appropriate contrast

2. **Touch Targets**
   - Minimum 44×44px for all interactive elements on mobile
   - Adequate spacing between clickable items

3. **Screen Reader Support**
   - Proper ARIA labels
   - Logical tab order
   - Meaningful alt text for images

4. **Responsive Text**
   - No text smaller than 16px for body content
   - Adjustable text size support

## Design Components for Key Features

### Food Search & Selection

**Search Experience**
- Prominent search bar
- Real-time results as user types
- Categorized results
- Recent searches saved

**Food Category Browsing**
- Visual category tiles with icons
- Horizontal scrolling category chips on mobile
- Grid layout on larger screens

### Diet Progress Visualization

**Daily Budget Tracker**
- Circular progress indicator for overall calories
- Bar charts for category-specific progress
- Color coding: 
  - Success green (within budget)
  - Warning orange (approaching budget)
  - Error red (exceeded budget)

**Historical Tracking**
- Line chart for calorie intake over time
- Heatmap calendar showing adherence to plan
- Weekly summary cards

### Meal Photo Gallery

**Grid Layout**
- Masonry grid of food photos
- Date and meal labels
- Quick view option

**Detail View**
- Larger image
- Complete meal details
- Swipe between photos

### Messaging Interface

**Conversation List**
- Contact photo and name
- Message preview
- Timestamp
- Unread indicator (Light Apple Green dot)

**Chat Interface**
- Message bubbles:
  - Sent: Light Apple Green (#88B04B)
  - Received: Light Gray (#E2E2E0)
- Text input at bottom with attachment button
- Voice message recording option

## Image & Media Guidelines

**Food Photography**
- Square aspect ratio preferred
- Minimum resolution: 600×600px
- Compressed for web (max 200KB)

**User Avatars**
- Circular crop
- 1:1 aspect ratio
- Minimum size: 200×200px
- Default avatar with Mansouri branding for new users

**Icons & Illustrations**
- SVG format for scalability
- Consistent style throughout the app
- Food category icons: outline style with 2px stroke

## Empty States & Error Handling

**Empty States**
- Friendly illustrations
- Clear messaging
- Appropriate call-to-action in Leaf Green

**Error Messages**
- Clear, non-technical language
- Actionable solutions
- Consistent positioning
- Error red for critical issues

## Multi-language Support

**Text Considerations**
- Allow for text expansion/contraction between languages
- Right-to-left (RTL) layout support for Persian
- Font selection that supports both Latin and Persian scripts

**Direction Switching**
- All layouts should adapt correctly between LTR and RTL
- Icons that indicate direction should flip appropriately
- Consider cultural differences in food categorization

## Design Deliverables

1. **Design System Documentation**
   - Color palette with accessibility notes
   - Typography specifications
   - Component library

2. **Screen Designs**
   - Mobile designs (375px width)
   - Tablet designs (768px width)
   - Desktop designs (1440px width)

3. **Interaction Specifications**
   - Animations and transitions
   - Hover/focus/active states
   - Micro-interactions

4. **Asset Library**
   - Icons and illustrations
   - Logo files in various formats
   - Pattern and texture elements
