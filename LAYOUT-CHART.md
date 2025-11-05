# 📊 EventPro 2025 - Visual Layout Chart

## Complete Project Structure

```
event-template/
│
├── 📄 index.html                          [ROOT HOMEPAGE]
│   ├── Navigation Bar (Sticky, 70px height)
│   ├── Hero Section (Background gradient)
│   ├── About Section (2-column grid)
│   ├── Featured Speakers (3-column grid)
│   ├── Schedule Highlights (Timeline)
│   ├── Sponsor Logos (4-column grid)
│   ├── Newsletter Signup (Form)
│   └── Google Maps (Embed)
│
├── 📂 assets/
│   │
│   ├── 📂 css/
│   │   ├── style.css                      [Core Styles]
│   │   │   ├── CSS Variables (Colors, Typography, Spacing)
│   │   │   ├── Reset & Base
│   │   │   ├── Typography (System fonts, 6 sizes)
│   │   │   ├── Grid System (2, 3, 4 columns)
│   │   │   ├── Buttons (Gradient, Outline)
│   │   │   ├── Navbar (Sticky, 70px)
│   │   │   ├── Hero Section
│   │   │   ├── Cards (Speaker, Pricing, Blog)
│   │   │   ├── Timeline (Schedule)
│   │   │   ├── Forms (Inputs, Validation)
│   │   │   └── Footer (3-column grid)
│   │   │
│   │   ├── responsive.css                 [Media Queries]
│   │   │   ├── Tablet (768px+)
│   │   │   ├── Desktop (1024px+)
│   │   │   └── Mobile (< 768px)
│   │   │
│   │   ├── dark.css                       [Dark Theme]
│   │   │   └── [data-theme="dark"] styles
│   │   │
│   │   └── rtl.css                        [RTL Support]
│   │       └── [dir="rtl"] styles
│   │
│   ├── 📂 js/
│   │   ├── main.js                        [Core Functions]
│   │   │   ├── Mobile Menu Toggle
│   │   │   ├── Smooth Scroll
│   │   │   ├── Lazy Loading Images
│   │   │   ├── Active Navigation
│   │   │   └── Back to Top Button
│   │   │
│   │   ├── ajax.js                        [Form Handling]
│   │   │   ├── Form Validation
│   │   │   ├── Contact Form
│   │   │   ├── Registration Form
│   │   │   ├── Login Form
│   │   │   └── Newsletter Form
│   │   │
│   │   └── plugins.js                    [Plugins]
│   │       ├── Countdown Timer
│   │       ├── Image Slider
│   │       ├── Modal Popup
│   │       ├── Gallery Lightbox
│   │       └── Schedule Filter
│   │
│   ├── 📂 img/                            [Your Images]
│   │   ├── banners/
│   │   ├── speakers/
│   │   ├── gallery/
│   │   └── icons/
│   │
│   └── 📂 fonts/                          [Optional]
│
├── 📂 pages/
│   │
│   ├── 📄 about.html                      [About Page]
│   │   ├── Mission Section (2-column)
│   │   ├── Vision Section (2-column)
│   │   └── Team Grid (3-column)
│   │
│   ├── 📄 speakers.html                   [Speakers Page]
│   │   └── Speaker Cards Grid (3-column)
│   │
│   ├── 📄 schedule.html                    [Schedule Page]
│   │   ├── Day Filter Buttons
│   │   └── Timeline (Day 1/2/3)
│   │
│   ├── 📄 tickets.html                     [Pricing Page]
│   │   └── Pricing Cards Grid (4 cards)
│   │
│   ├── 📄 sponsors.html                    [Sponsors Page]
│   │   ├── Platinum Sponsors (3-column)
│   │   └── Gold Sponsors (4-column)
│   │
│   ├── 📄 gallery.html                     [Gallery Page]
│   │   └── Gallery Grid (Masonry)
│   │
│   ├── 📄 blog.html                        [Blog Page]
│   │   └── Blog Cards Grid (3-column)
│   │
│   ├── 📄 contact.html                     [Contact Page]
│   │   ├── Contact Form (Left)
│   │   └── Map + Info (Right)
│   │
│   ├── 📄 register.html                    [Registration]
│   │   └── Registration Form (Centered)
│   │
│   ├── 📄 login.html                       [Login Page]
│   │   └── Login Form (Centered)
│   │
│   └── 📄 404.html                         [Error Page]
│       └── 404 Message
│
└── 📂 partials/
    ├── header.html                         [Navigation]
    ├── footer.html                         [Footer]
    ├── modals.html                         [Modal Structure]
    └── sidebar.html                        [Dashboard Sidebar]
```

## 🎨 Color Scheme

```
Primary:   #6366f1 (Indigo)
Secondary: #8b5cf6 (Purple)
Accent:    #ec4899 (Pink)
Text:      #1f2937 (Dark Gray)
Text Light: #6b7280 (Gray)
Background: #ffffff (White)
BG Gray:   #f9fafb (Light Gray)
Border:    #e5e7eb (Light Border)
```

## 📐 Layout Rules

### Container
```css
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
```

### Spacing (8px base unit)
```
8px   →  var(--spacing-8)
16px  →  var(--spacing-16)
24px  →  var(--spacing-24)
32px  →  var(--spacing-32)
40px  →  var(--spacing-40)
48px  →  var(--spacing-48)
64px  →  var(--spacing-64)
```

### Typography Sizes
```
14px → var(--fs-14)  [Body]
16px → var(--fs-16)
20px → var(--fs-20)
24px → var(--fs-24)
32px → var(--fs-32)
48px → var(--fs-48)  [H1]
```

## 🔄 Component Hierarchy

```
Page
  └── Navbar (70px, sticky)
      └── Container
          ├── Brand
          └── Menu (Flexbox)
  └── Section
      └── Container
          └── Grid / Content
  └── Footer
      └── Container
          └── Footer Grid (3 columns)
```

## 📱 Responsive Breakpoints

```
Mobile:   < 768px   → Single column
Tablet:   768-1024px → 2 columns
Desktop:  > 1024px  → 3-4 columns
```

## 🎯 Key Components

### Navbar
- Height: 70px
- Position: sticky
- Mobile: Hamburger menu (slide-in)

### Cards
- Border: 1px solid
- Border-radius: 12px
- Hover: Shadow + translateY(-4px)

### Forms
- Input padding: 16px
- Border-radius: 8px
- Focus: Border color change + shadow

### Buttons
- Padding: 16px 32px
- Border-radius: 8px
- Background: Gradient (primary → secondary)
- Hover: Transform + shadow

## 📊 File Sizes

```
CSS Files:     ~35 KB
JS Files:      ~12 KB
HTML Pages:    ~150 KB
Total:         ~200 KB
```

## ✅ All Requirements Met

- ✅ Pure HTML/CSS/JS (No Bootstrap)
- ✅ CSS Grid & Flexbox
- ✅ CSS Variables for colors
- ✅ 8px spacing system
- ✅ System font stack
- ✅ 6 font sizes only
- ✅ Sticky navbar (70px)
- ✅ Mobile-first responsive
- ✅ Purple/indigo gradient theme
- ✅ Clean, minimalist design
- ✅ Form validation
- ✅ AJAX form handling
- ✅ Placeholder images (placehold.co)
- ✅ No inline styles
- ✅ Semantic HTML5
- ✅ Accessibility (ARIA labels)
- ✅ Proper heading hierarchy

---

**Status:** ✅ Complete & Production Ready

