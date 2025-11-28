# CLAUDE.md - LilliBloom Project Guide

## Project Overview

**LilliBloom** is a luxury artificial wedding florals business website serving Suffolk, UK (Ipswich, Colchester, Bury St Edmunds, Cambridge). This is a static HTML/CSS/JavaScript website showcasing wedding floral services, portfolio, and customer inquiry forms.

### Business Context
- **Industry**: Wedding florals and event decoration
- **Products**: Luxury artificial wedding flowers and arrangements
- **Target Market**: Brides and event planners in Suffolk and surrounding areas
- **Value Proposition**: 40% less expensive than fresh flowers, with lasting beauty

---

## Technology Stack

### Core Technologies
- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Build System**: None - static files only
- **Package Manager**: npm (minimal usage, no runtime dependencies)
- **Deployment**: GitHub Pages via GitHub Actions
- **Form Handling**: Netlify Forms (configured but using preventDefault placeholder)

### External Services
- **Fonts**: Google Fonts (Playfair Display, Montserrat)
- **Version Control**: Git with GitHub
- **CI/CD**: GitHub Actions (`.github/workflows/static.yml`)

### Browser Compatibility
- Modern browsers with ES6+ support
- Mobile-first responsive design
- Smooth scrolling, CSS Grid, Flexbox

---

## Repository Structure

```
LilliBloom/
├── .github/
│   └── workflows/
│       └── static.yml          # GitHub Pages deployment workflow
├── .idea/                      # IDE configuration (JetBrains)
├── includes/
│   └── Images/                 # All website images
│       ├── Top Table.jpg
│       ├── Centrepiece.jpg
│       ├── Boquet.jpg
│       ├── Bridesmaid with Boquet.jpg
│       ├── Fireplace Flowers.jpg
│       ├── Cake Flowers.jpg
│       ├── Table Topper.jpg
│       ├── Logo-no-bg.png
│       └── ... (other images)
├── index.html                  # Homepage
├── about.html                  # About page
├── services.html               # Services page
├── gallery.html                # Gallery page
├── privacy.html                # Privacy policy
├── styles.css                  # Main stylesheet (35KB)
├── navigation.js               # Navigation & core JavaScript
├── package.json                # Minimal npm configuration
└── CLAUDE.md                   # This file
```

---

## File Purposes

### HTML Files
- **index.html**: Homepage with hero, philosophy, services preview, gallery preview, and contact form
- **about.html**: Detailed story about the business, founder, and philosophy
- **services.html**: Comprehensive service offerings and pricing packages
- **gallery.html**: Portfolio showcase of previous work
- **privacy.html**: Privacy policy and data handling information

### CSS Architecture
- **styles.css**: Single monolithic stylesheet (~35KB)
  - Mobile-first approach
  - CSS custom properties (variables) for theming
  - Fluid typography using `clamp()`
  - Organized by component sections with clear comments

### JavaScript
- **navigation.js**: All interactive functionality
  - Mobile navigation toggle
  - Smooth scrolling for anchor links
  - Form submission handling (placeholder)
  - Accessibility features (ARIA, keyboard navigation)

---

## Design System

### Color Palette
```css
--cream: #F5F3EF       /* Primary background */
--lightcream: #F3F0E4E5 /* Alternate background */
--beige: #E8E3DC       /* Accent background */
--charcoal: #2C2C2C    /* Primary text */
--black: #1A1A1A       /* Dark elements */
--gold: #C9A772        /* Accent color */
--white: #FFFFFF       /* Pure white */
```

### Typography
- **Headings**: Playfair Display (serif, elegant)
  - Font weights: 400, 500, 600, 700
- **Body**: Montserrat (sans-serif, clean)
  - Font weights: 300, 400, 500, 600
- **Fluid Sizing**: Uses `clamp()` for responsive typography
  ```css
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.85rem)
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem)
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem)
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.5rem)
  --text-xl: clamp(1.5rem, 1.3rem + 1vw, 2rem)
  --text-2xl: clamp(2rem, 1.6rem + 2vw, 3rem)
  --text-3xl: clamp(2.5rem, 2rem + 2.5vw, 4rem)
  ```

### Spacing System
```css
--section-padding-mobile: 4rem 5%
--section-padding-tablet: 6rem 5%
--section-padding-desktop: 8rem 5%
```

### Design Principles
1. **Luxury & Elegance**: Serif headings, ample white space, sophisticated color palette
2. **Mobile-First**: All styles start mobile, scale up with media queries
3. **Performance**: Lazy loading implemented for images
4. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

---

## Development Workflows

### Local Development
```bash
# No build process required - open HTML files directly
# Recommended: Use a local server for accurate testing
python -m http.server 8000
# or
npx serve
```

### Making Changes

#### HTML Changes
1. Maintain consistent structure across all pages
2. Navigation must be identical on all pages
3. Keep the Netlify form attributes: `data-netlify="true"` and `netlify-honeypot="bot-field"`
4. Use semantic HTML5 elements
5. Include proper meta tags for SEO

#### CSS Changes
1. Add new styles in the appropriate section of `styles.css`
2. Use existing CSS custom properties when possible
3. Follow mobile-first approach (base styles for mobile, media queries for larger screens)
4. Maintain the existing naming conventions (BEM-lite style)
5. Test responsiveness at: 320px, 768px, 1024px, 1440px

#### JavaScript Changes
1. All JavaScript should be in `navigation.js`
2. Use vanilla JavaScript (no frameworks)
3. Wrap new code in DOMContentLoaded event listener
4. Include null checks for DOM elements
5. Add clear section comments following existing format

#### Image Guidelines
1. Store all images in `includes/Images/`
2. Use descriptive filenames with proper capitalization
3. Optimize images before committing (keep file sizes reasonable)
4. Include `width` and `height` attributes on `<img>` tags for CLS prevention
5. Use `loading="lazy"` for images below the fold
6. Use `loading="eager"` and `fetchpriority="high"` for hero images

### Git Workflow
```bash
# Standard workflow
git checkout -b feature/your-feature-name
# Make changes
git add .
git commit -m "Descriptive commit message"
git push -u origin feature/your-feature-name

# For Claude Code sessions - use the designated branch
git checkout claude/claude-md-mij2ubz5v7l3vw3f-01TwcGjCsxSXCGsbLccFqsZ4
# Make changes
git add .
git commit -m "Descriptive commit message"
git push -u origin claude/claude-md-mij2ubz5v7l3vw3f-01TwcGjCsxSXCGsbLccFqsZ4
```

### Deployment Process
1. **Automatic**: Pushing to `master` branch triggers GitHub Actions
2. **Workflow**: `.github/workflows/static.yml` deploys to GitHub Pages
3. **Preview**: Changes appear at the GitHub Pages URL after ~2-3 minutes
4. **No Build Step**: Static files are deployed as-is

---

## Code Conventions

### HTML Conventions
- **Indentation**: 4 spaces (not tabs)
- **Attributes**: Use double quotes
- **Comments**: Section markers for major page areas
  ```html
  <!-- Navigation -->
  <!-- Hero Section -->
  <!-- Footer -->
  ```
- **IDs vs Classes**:
  - IDs for JavaScript targets and anchor links
  - Classes for styling
- **Form Elements**: Always include `name`, `id`, and `label` associations

### CSS Conventions
- **Indentation**: 4 spaces
- **Organization**: Grouped by component with section headers
  ```css
  /* ========================================
     COMPONENT NAME
     ======================================== */
  ```
- **Selectors**: Keep specificity low, prefer classes over IDs
- **Colors**: Use CSS custom properties, never hardcode hex values
- **Units**:
  - `rem` for font sizes and spacing
  - `%` for widths
  - `px` for borders and small fixed values
  - `vw/vh` for viewport-based sizing (sparingly)

### JavaScript Conventions
- **Indentation**: 4 spaces
- **Variable Naming**: camelCase
- **Constants**: Not used currently, but would be UPPER_SNAKE_CASE
- **Functions**: Named functions preferred over arrow functions for clarity
- **Comments**: Section markers matching CSS style
  ```javascript
  // ========================================
  // Feature Name
  // ========================================
  ```
- **Event Listeners**:
  - Check element exists before adding listener
  - Use addEventListener, never inline handlers
  - Clean, descriptive function names

### Naming Conventions
- **Files**: kebab-case for multi-word files (not used yet, but preferred)
- **CSS Classes**:
  - Component-based: `.hero`, `.nav-container`, `.service-card`
  - State classes: `.active`, `.open`
  - No strict BEM, but semantic naming
- **IDs**: kebab-case: `#contact`, `#services`
- **Image Files**: PascalCase with spaces (existing convention)
  - Example: `Top Table.jpg`, `Bridesmaid with Boquet.jpg`

---

## Common Tasks for AI Assistants

### Adding a New Page
1. Copy existing page structure (e.g., `about.html`)
2. Update `<title>` and meta description
3. Ensure navigation links are correct
4. Add page-specific content
5. Update all other pages' navigation if needed
6. Test responsive layout
7. Commit with message: "Add [page-name] page"

### Modifying Styles
1. Locate the relevant section in `styles.css`
2. Make changes using existing CSS variables
3. Test across mobile (320px), tablet (768px), desktop (1440px)
4. Ensure changes don't break other pages
5. Commit with message: "Update [component] styling"

### Adding Interactive Features
1. Add code to `navigation.js` in appropriate section
2. Wrap in DOMContentLoaded if manipulating DOM
3. Include null checks for DOM elements
4. Add section comment header
5. Test functionality across devices
6. Commit with message: "Add [feature] functionality"

### Image Updates
1. Optimize image (reasonable file size, appropriate dimensions)
2. Place in `includes/Images/`
3. Update HTML with proper path
4. Include width/height attributes
5. Add loading="lazy" unless above fold
6. Commit with message: "Update [location] images"

### SEO Improvements
1. Check all pages have unique, descriptive `<title>` tags
2. Ensure meta descriptions are 150-160 characters
3. Use semantic HTML (h1, h2, article, section, etc.)
4. Add alt text to all images (descriptive, not keyword-stuffed)
5. Ensure proper heading hierarchy (single h1 per page)
6. Test with Lighthouse audit

---

## Known Issues & Technical Debt

### Current State
1. **Form Submission**: Uses `e.preventDefault()` with alert placeholder
   - **Resolution**: Remove preventDefault to enable Netlify Forms
   - **Location**: `navigation.js:96-112`

2. **No Build Process**: Direct static files
   - **Pro**: Simple, fast
   - **Con**: No minification, no SASS, no TypeScript

3. **Single CSS File**: Large monolithic stylesheet
   - **Impact**: Loads all CSS on every page
   - **Future**: Consider page-specific CSS if file grows significantly

4. **Image Optimization**: Images not in web-optimized formats
   - **Current**: JPG and PNG
   - **Recommendation**: Consider WebP with fallbacks for better performance

5. **No Testing**: No automated tests
   - **Current**: Manual testing only
   - **Future**: Consider adding basic accessibility tests

### Recent Changes
- **Latest Feature**: Lazy loading implemented for images (commit: 54d3506)
- **Recent Activity**: Multiple merge commits from master branch

---

## Performance Considerations

### Current Optimizations
- Lazy loading on below-fold images
- Google Fonts preconnect
- Responsive images (max-width: 100%)
- Smooth scroll behavior in CSS
- Minimal JavaScript

### Recommendations for Future
1. **WebP Images**: Convert JPG/PNG to WebP with fallbacks
2. **Critical CSS**: Inline above-fold CSS
3. **Font Subsetting**: Load only required character sets
4. **Service Worker**: Add for offline capability (if needed)
5. **Resource Hints**: Add dns-prefetch for external resources

---

## Testing Checklist

Before committing changes, verify:

### Functionality
- [ ] All navigation links work
- [ ] Mobile menu opens/closes correctly
- [ ] Smooth scrolling to anchors works
- [ ] Contact form fields validate
- [ ] All images load properly

### Responsiveness
- [ ] Test on mobile (320px - 767px)
- [ ] Test on tablet (768px - 1023px)
- [ ] Test on desktop (1024px+)
- [ ] Test on very large screens (1920px+)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] ARIA labels present
- [ ] Alt text on all images
- [ ] Sufficient color contrast

### Cross-Browser
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if possible)

### Performance
- [ ] Lighthouse score > 90 (all categories)
- [ ] Images optimized
- [ ] No console errors
- [ ] Fast page load

---

## Contact & Support

### Key Contacts
- **Business Owner**: LilliBloom team
- **Development**: Community maintained
- **Deployment**: Automated via GitHub Actions

### Resources
- **Repository**: GitHub (current repository)
- **Live Site**: GitHub Pages
- **Analytics**: Not currently implemented

---

## AI Assistant Guidelines

### When Making Changes
1. **Read First**: Always read the full file before editing
2. **Maintain Consistency**: Match existing code style exactly
3. **Test Thoroughly**: Check responsive behavior at all breakpoints
4. **Commit Clearly**: Use descriptive commit messages
5. **Preserve Intent**: Keep the luxury brand voice and aesthetic

### Content Tone
- **Elegant & Sophisticated**: Match the luxury brand positioning
- **Professional**: Wedding industry appropriate
- **Warm**: Family-run business, personable but professional
- **Clear**: Avoid jargon, make services understandable

### Brand Voice
- Focus on quality, craftsmanship, and lasting beauty
- Emphasize the practical benefits (lasting flowers, cost savings)
- Maintain aspirational but accessible tone
- Use "we" not "I" (family business)

### Common Pitfalls to Avoid
1. Don't add build tools unless explicitly requested
2. Don't introduce frameworks (keep it vanilla)
3. Don't over-engineer solutions
4. Don't break the mobile navigation
5. Don't change the color scheme without discussion
6. Don't add analytics/tracking without explicit approval
7. Don't modify image files without optimization

### Preferred Approaches
1. **Simple over complex**: Vanilla JS over frameworks
2. **CSS over JS**: Use CSS for animations and interactions when possible
3. **Semantic HTML**: Proper elements over divs with classes
4. **Progressive enhancement**: Core functionality works without JS
5. **Accessibility first**: ARIA, keyboard navigation, focus management

---

## Version History

- **v1.0** (2025-11-28): Initial CLAUDE.md creation
  - Documented current codebase structure
  - Established conventions and workflows
  - Added comprehensive guide for AI assistants

---

## Quick Reference

### File Locations
- **Images**: `includes/Images/`
- **Styles**: `styles.css` (root)
- **Scripts**: `navigation.js` (root)
- **Pages**: All HTML in root directory
- **Deployment**: `.github/workflows/static.yml`

### Key CSS Variables
```css
--cream: #F5F3EF
--charcoal: #2C2C2C
--gold: #C9A772
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem)
--section-padding-mobile: 4rem 5%
```

### Important Classes
- `.nav-toggle`: Mobile menu button
- `.hero`: Homepage hero section
- `.service-card`: Service grid items
- `.gallery-item`: Gallery grid items
- `.contact-form`: Contact form container

### Git Branches
- **master**: Production branch (auto-deploys to GitHub Pages)
- **claude/***: AI assistant working branches

---

*This document is maintained by AI assistants working on the LilliBloom project. Last updated: 2025-11-28*
