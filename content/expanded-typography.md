# Comprehensive Mobile App Typography System

## Core Text Styles (By Category)

### Headings & Titles
| Style | Size | Weight | Case | Line Height | Letter Spacing (%) | Color | Usage |
|-------|------|--------|------|-------------|---------------|-------|-------|
| **App Name / Brand** | 24pt | Bold (700) | Title Case | 1.2x (29pt) | -1% | Primary Brand | App header, splash screen, about page |
| **Headings (H1)** | 20pt | Semi-bold (600) | Sentence case | 1.3x (26pt) | -0.5% | Primary Text (#333333) | Main screen titles, major section headers |
| **Subheadings (H2)** | 16pt | Semi-bold (600) | Sentence case | 1.4x (22pt) | 0% | Primary Text (#333333) | Section titles, feature headers |
| **Subheadings (H3)** | 15pt | Medium (500) | Sentence case | 1.4x (21pt) | Normal | Primary Text (#333333) | Subsection titles, card headers |

### Body Text
| Style | Size | Weight | Case | Line Height | Letter Spacing | Color | Usage |
|-------|------|--------|------|-------------|---------------|-------|-------|
| **Body Text - Primary** | 14pt | Regular (400) | Sentence case | 1.5x (21pt) | Normal | Primary Text (#333333) | Main content, descriptions |
| **Body Text - Secondary** | 14pt | Regular (400) | Sentence case | 1.5x (21pt) | Normal | Secondary Text (#666666) | Supporting content, secondary information |
| **List Item - Primary** | 14pt | Regular (400) | Sentence case | 1.4x (20pt) | Normal | Primary Text (#333333) | Primary list item text |
| **List Item - Secondary** | 13pt | Light (300) | Sentence case | 1.3x (17pt) | Normal | Secondary Text (#666666) | Secondary list item text |

### Interactive Elements
| Style | Size | Weight | Case | Line Height | Letter Spacing | Color | Usage |
|-------|------|--------|------|-------------|---------------|-------|-------|
| **Button Text - Primary** | 14pt | Medium (500) | ALL CAPS | 1.2x (17pt) | 2% | White (#FFFFFF) | Primary CTA buttons |
| **Button Text - Secondary** | 14pt | Medium (500) | ALL CAPS | 1.2x (17pt) | 0.5pt | Brand Primary | Secondary action buttons |
| **Button Text - Tertiary** | 14pt | Medium (500) | Sentence case | 1.2x (17pt) | Normal | Brand Primary | Text buttons, links |
| **Navigation Text - Selected** | 13pt | Medium (500) | Title Case | 1.2x (16pt) | Normal | Brand Primary | Active navigation items |
| **Navigation Text - Unselected** | 13pt | Regular (400) | Title Case | 1.2x (16pt) | Normal | Secondary Text (#666666) | Inactive navigation items |
| **Tab Labels - Selected** | 12pt | Medium (500) | Title Case | 1.2x (14pt) | 1% | Brand Primary | Active tab labels |
| **Tab Labels - Unselected** | 12pt | Regular (400) | Title Case | 1.2x (14pt) | 0.2pt | Secondary Text (#666666) | Inactive tab labels |

### Form Elements
| Style | Size | Weight | Case | Line Height | Letter Spacing | Color | Usage |
|-------|------|--------|------|-------------|---------------|-------|-------|
| **Labels** | 12pt | Medium (500) | Sentence case | 1.3x (16pt) | Normal | Secondary Text (#666666) | Form field labels, settings options |
| **Input Fields** | 14pt | Regular (400) | Sentence case | 1.3x (18pt) | Normal | Primary Text (#333333) | User input text |
| **Placeholder Text** | 14pt | Regular (400) | Sentence case | 1.3x (18pt) | Normal | Tertiary Text (#999999) | Form field placeholders |
| **Hints/Helper Text** | 12pt | Light (300) | Sentence case | 1.3x (16pt) | Normal | Secondary Text (#666666) | Form field hints, tooltips |

### Supporting & Metadata Text
| Style | Size | Weight | Case | Line Height | Letter Spacing | Color | Usage |
|-------|------|--------|------|-------------|---------------|-------|-------|
| **Captions** | 12pt | Regular (400) | Sentence case | 1.3x (16pt) | Normal | Secondary Text (#666666) | Image captions, supporting text |
| **Timestamps** | 11pt | Light (300) | Sentence case | 1.2x (13pt) | Normal | Tertiary Text (#999999) | Time indicators, metadata |
| **Badge Text** | 11pt | Medium (500) | Numeric/ALL CAPS | 1.0x (11pt) | Normal | Varies by context | Notification badges, counters |

### System Feedback
| Style | Size | Weight | Case | Line Height | Letter Spacing | Color | Usage |
|-------|------|--------|------|-------------|---------------|-------|-------|
| **Error Text** | 12pt | Regular (400) | Sentence case | 1.4x (17pt) | Normal | Error (#E53935) | Error messages, validation text |
| **Success Text** | 12pt | Regular (400) | Sentence case | 1.4x (17pt) | Normal | Success (#43A047) | Success messages, confirmations |
| **Warning Text** | 12pt | Regular (400) | Sentence case | 1.4x (17pt) | Normal | Warning (#FB8C00) | Warning messages, alerts |

## Font Family
- **Primary Font**: San Francisco (iOS) / Roboto (Android)
- **Alternative Font**: Inter or Nunito Sans (for cross-platform consistency)
- **Fallback Font Stack**: System default sans-serif

## Special Text Treatments

| Treatment | Description | Usage |
|-----------|-------------|-------|
| **Bold Emphasis** | Apply Bold (700) weight | Key terms, strong emphasis |
| **Italic** | Apply italic style | Quotes, book titles, emphasis |
| **Underline** | Apply underline | Interactive elements only |
| **Strikethrough** | Apply strikethrough | Discounted prices, completed items |
| **Truncation** | Ellipsis (...) after 1-2 lines | Long titles, descriptions |
| **All Caps** | Uppercase all letters | Buttons, small emphasis blocks |

## Responsive Typography Scale

| Screen Size | Base Body Text | Heading Scale | Line Height Adjustment |
|-------------|----------------|---------------|------------------------|
| **Small** (<375px) | 13pt | -1pt all headings | No change |
| **Medium** (375-428px) | 14pt | Standard | No change |
| **Large** (>428px) | 14pt | +1pt all headings | +0.1x for all text |
| **Tablet** (>768px) | 15pt | +2pt all headings | +0.1x for all text |

## Text Alignment Guidelines

| Context | Alignment |
|---------|-----------|
| **Headlines** | Left-aligned |
| **Body Text** | Left-aligned |
| **Form Labels** | Left-aligned |
| **Button Text** | Center-aligned |
| **Centered Cards** | Center-aligned |
| **Navigation Labels** | Center-aligned |
| **Numerical Data** | Right-aligned |

## Text Accessibility Requirements

| Requirement | Specification |
|-------------|---------------|
| **Minimum Size** | No text smaller than 11pt |
| **Color Contrast** | Minimum 4.5:1 ratio for all text |
| **Scalability** | All text should scale with system settings |
| **Focus States** | Clear visual indication for interactive text |
| **Alt Text** | Required for any text contained in images |

## Localization Considerations

| Language Feature | Accommodation |
|------------------|---------------|
| **Text Expansion** | Allow 30-40% additional space for translations |
| **RTL Support** | Mirror text alignment and interfaces for RTL languages |
| **Character Sets** | Support Unicode for international alphabets |
| **Line Height** | Increase for languages with diacritical marks |
