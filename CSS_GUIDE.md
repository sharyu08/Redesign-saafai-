# CSS Architecture Guide

This project uses a centralized CSS architecture where all colors, themes, and common styles are defined in `globals.css`. This makes it easy to modify the entire UI theme from a single location.

## 📋 Table of Contents

1. [CSS Variables](#css-variables)
2. [Utility Classes](#utility-classes)
3. [Component Patterns](#component-patterns)
4. [How to Update Colors](#how-to-update-colors)
5. [Migration Guide](#migration-guide)

## 🎨 CSS Variables

All colors are defined as CSS variables in `globals.css` under the `:root` and `.dark` selectors. These variables automatically adapt to light and dark modes.

### Primary Colors
- `--primary-dark`: Main dark teal color (#007C85)
- `--primary-light`: Light cyan color (#58BECF)
- `--primary-medium`: Medium cyan color (#2DB7C4)
- `--primary-secondary`: Secondary teal color (#2D8E97)

### Background Colors
- `--bg-light-cyan`: Light cyan background (#E6F7F9)
- `--bg-very-light-cyan`: Very light cyan background (#E0F7FA)
- `--bg-light-cyan-alt`: Alternative light cyan (#F4FBFC)
- `--bg-light-gray`: Light gray background (#F8FAFB)
- `--bg-light-cyan-variant`: Variant light cyan (#EAF7F8)
- `--bg-light-gray-alt`: Alternative light gray (#EAF2F5)
- `--bg-light-rose`: Light rose background (#FFF5F7)

### Text Colors
- `--text-dark-gray`: Dark gray text (#2F3A45)
- `--text-medium-gray`: Medium gray text (#6B7280)
- `--text-light-gray`: Light gray text (#9CA3AF)

### Accent Colors
- `--accent-gold`: Gold accent (#F4B740)
- `--accent-green`: Green accent (#28C76F)
- `--accent-red`: Red accent (#EA5455)
- `--accent-gold-bright`: Bright gold (#FFD700)
- `--accent-gold-dark`: Dark gold (#FFC000)
- `--accent-blue`: Blue accent (#6D9CDC)

## 🛠️ Utility Classes

### Background Classes
```css
.bg-primary-light          /* Light cyan background */
.bg-primary-very-light     /* Very light cyan background */
.bg-primary-light-alt       /* Alternative light cyan */
.bg-light-gray              /* Light gray background */
.bg-light-cyan-variant      /* Variant light cyan */
.bg-light-rose              /* Light rose background */
```

### Text Classes
```css
.text-primary-dark          /* Primary dark teal text */
.text-primary-light         /* Primary light cyan text */
.text-primary-secondary      /* Secondary teal text */
.text-dark-gray             /* Dark gray text */
.text-medium-gray           /* Medium gray text */
.text-light-gray            /* Light gray text */
.text-accent-gold           /* Gold accent text */
.text-accent-green          /* Green accent text */
```

### Button Classes
```css
.btn-primary                /* Primary button style */
.btn-secondary              /* Secondary button style */
.btn-action                 /* Action button style */
.btn-assign                 /* Assign button style */
```

### Card Classes
```css
.card-primary               /* Primary card style */
.card-light                 /* Light card style */
.card-gray                  /* Gray card style */
```

### Icon Container Classes
```css
.icon-container            /* Standard icon container */
.icon-container-light      /* Light icon container */
```

### Navigation Classes
```css
.nav-item-active           /* Active navigation item */
.nav-item                  /* Standard navigation item */
```

### Sidebar Classes
```css
.sidebar-bg                /* Sidebar background */
.sidebar-border            /* Sidebar border */
```

## 📦 Component Patterns

### Using CSS Variables in Tailwind Classes

You can use CSS variables directly in Tailwind classes:

```jsx
// Background colors
<div className="bg-primary-dark">Content</div>
<div className="bg-primary-light">Content</div>

// Text colors
<p className="text-primary-dark">Text</p>
<p className="text-primary-light">Text</p>

// Border colors
<div className="border border-primary-dark">Content</div>
```

### Using Utility Classes

```jsx
// Buttons
<button className="btn-primary">Click me</button>
<button className="btn-secondary">Click me</button>

// Cards
<div className="card-primary">Card content</div>
<div className="card-light">Card content</div>

// Icons
<div className="icon-container">
  <Icon />
</div>
```

### Using CSS Variables Directly

```jsx
// In style attributes
<div style={{ backgroundColor: 'hsl(var(--primary-dark))' }}>
  Content
</div>

// In className with arbitrary values
<div className="bg-[hsl(var(--primary-dark))]">
  Content
</div>
```

## 🎨 How to Update Colors

### Changing the Primary Color

1. Open `src/app/globals.css`
2. Find the `:root` section
3. Update the primary color variables:

```css
:root {
  --primary-dark: 188 100% 26%;     /* Change this value */
  --primary-light: 188 65% 58%;     /* Change this value */
  --primary-medium: 188 75% 50%;    /* Change this value */
}
```

4. Update the dark mode version in `.dark` section:

```css
.dark {
  --primary-dark: 188 65% 58%;      /* Change this value */
  --primary-light: 188 70% 65%;      /* Change this value */
}
```

### Changing Background Colors

Update the background color variables in `globals.css`:

```css
:root {
  --bg-light-cyan: 188 50% 95%;      /* Change this value */
  --bg-very-light-cyan: 188 60% 96%; /* Change this value */
}
```

### Adding New Colors

1. Add the CSS variable to `:root` and `.dark` sections:

```css
:root {
  --new-color: 200 100% 50%;
}

.dark {
  --new-color: 200 100% 60%;
}
```

2. Optionally add it to Tailwind config:

```js
// tailwind.config.js
colors: {
  "new-color": "hsl(var(--new-color))",
}
```

3. Use it in components:

```jsx
<div className="bg-new-color">Content</div>
```

## 🔄 Migration Guide

### Before (Hardcoded Colors)

```jsx
<div className="bg-[#E6F7F9] text-[#007C85]">
  Content
</div>
```

### After (CSS Variables)

```jsx
// Option 1: Using Tailwind classes
<div className="bg-primary-light text-primary-dark">
  Content
</div>

// Option 2: Using utility classes
<div className="bg-light-cyan-variant text-primary-dark">
  Content
</div>

// Option 3: Using CSS variables directly
<div className="bg-[hsl(var(--bg-light-cyan))] text-[hsl(var(--primary-dark))]">
  Content
</div>
```

### Common Replacements

| Old Hardcoded Color | New CSS Variable | New Tailwind Class |
|-------------------|------------------|-------------------|
| `#007C85` | `hsl(var(--primary-dark))` | `text-primary-dark` / `bg-primary-dark` |
| `#58BECF` | `hsl(var(--primary-light))` | `text-primary-light` / `bg-primary-light` |
| `#2DB7C4` | `hsl(var(--primary-medium))` | `text-primary-medium` / `bg-primary-medium` |
| `#E6F7F9` | `hsl(var(--bg-light-cyan))` | `bg-primary-light` |
| `#E0F7FA` | `hsl(var(--bg-very-light-cyan))` | `bg-primary-very-light` |
| `#F4FBFC` | `hsl(var(--bg-light-cyan-alt))` | `bg-primary-light-alt` |
| `#F8FAFB` | `hsl(var(--bg-light-gray))` | `bg-light-gray` |
| `#2F3A45` | `hsl(var(--text-dark-gray))` | `text-dark-gray` |
| `#6B7280` | `hsl(var(--text-medium-gray))` | `text-medium-gray` |
| `#9CA3AF` | `hsl(var(--text-light-gray))` | `text-light-gray` |

## 📝 Best Practices

1. **Always use CSS variables** instead of hardcoded colors
2. **Use utility classes** for common patterns (buttons, cards, etc.)
3. **Update colors in globals.css** only, not in individual components
4. **Test both light and dark modes** after making color changes
5. **Use semantic color names** (e.g., `primary-dark` instead of `teal-800`)

## 🔍 Finding Components to Update

To find components that still use hardcoded colors, search for:

```bash
# Search for hex colors
grep -r "#[0-9A-Fa-f]\{6\}" src/components

# Search for rgb colors
grep -r "rgb(" src/components

# Search for specific color patterns
grep -r "bg-\[#" src/components
grep -r "text-\[#" src/components
```

## 🎯 Example: Complete Component Migration

### Before

```jsx
export default function MyComponent() {
  return (
    <div className="bg-[#E6F7F9] border border-[#D1F0F2] rounded-xl p-4">
      <h2 className="text-[#007C85] font-bold">Title</h2>
      <p className="text-[#6B7280]">Description</p>
      <button className="bg-[#007C85] text-white px-4 py-2 rounded-lg">
        Click me
      </button>
    </div>
  );
}
```

### After

```jsx
export default function MyComponent() {
  return (
    <div className="card-primary">
      <h2 className="text-primary-dark font-bold">Title</h2>
      <p className="text-medium-gray">Description</p>
      <button className="btn-primary">
        Click me
      </button>
    </div>
  );
}
```

This approach makes the component:
- ✅ Easier to maintain
- ✅ Automatically theme-aware
- ✅ Consistent with the design system
- ✅ Easy to update globally

