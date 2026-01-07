# 🎨 Design System Guide

## ✅ Your Design System is Fully Centralized!

**All colors, themes, and visual styling can be controlled from ONE location: `src/app/globals.css`**

---

## 🎯 How It Works

When you change a color variable in `globals.css`, **everything** in your project automatically updates because:

1. **CSS Variables** are defined in `globals.css` (`:root` for light mode, `.dark` for dark mode)
2. **Tailwind Config** maps these variables to utility classes (`tailwind.config.js`)
3. **All Components** use these utility classes or CSS variables directly

---

## 📝 Changing Colors - Simple 3-Step Process

### Step 1: Open `src/app/globals.css`

Find the `:root` section (around line 9) for light mode, or `.dark` section (around line 114) for dark mode.

### Step 2: Change the HSL Values

All colors use HSL format: `H S% L%`

**Example: Change Primary Dark Color**

```css
:root {
  /* Change this value to update ALL primary-dark colors */
  --primary-dark: 238 56% 13%;  /* ← Change this number */
}

.dark {
  --primary-dark: 192 58% 70%;  /* ← Also update dark mode */
}
```

### Step 3: Save and Refresh

That's it! All components using `primary-dark` will automatically update.

---

## 🔄 How Variables Flow Through Your Project

```
┌─────────────────────────────────┐
│   globals.css                   │
│   --primary-dark: 238 56% 13%  │
└──────────┬──────────────────────┘
           │
           ▼
┌─────────────────────────────────┐
│   tailwind.config.js            │
│   primary.dark: "hsl(var(--primary-dark))" │
└──────────┬──────────────────────┘
           │
           ▼
┌─────────────────────────────────┐
│   Your Components               │
│   className="bg-primary-dark"   │
│   className="text-primary-dark" │
└─────────────────────────────────┘
```

---

## 🎨 Available Color Variables

### Primary Colors
- `--primary` - Main primary color
- `--primary-dark` - Dark primary variant
- `--primary-light` - Light primary variant
- `--primary-medium` - Medium primary variant
- `--primary-secondary` - Secondary primary variant

### Background Colors
- `--background` - Main background
- `--card` - Card background
- `--muted` - Muted background
- `--bg-light-cyan` - Light cyan background
- `--bg-very-light-cyan` - Very light cyan background
- `--bg-light-gray` - Light gray background

### Text Colors
- `--foreground` - Main text color
- `--muted-foreground` - Muted text color
- `--text-dark-gray` - Dark gray text
- `--text-medium-gray` - Medium gray text
- `--text-light-gray` - Light gray text

### Accent Colors
- `--accent-gold` - Gold accent
- `--accent-green` - Green accent
- `--accent-red` - Red accent
- `--accent-blue` - Blue accent

---

## 🛠️ Usage Examples

### In Components (Tailwind Classes)

```jsx
// Background colors
<div className="bg-primary-dark">...</div>
<div className="bg-primary-light">...</div>
<div className="bg-muted">...</div>

// Text colors
<p className="text-primary-dark">...</p>
<p className="text-foreground">...</p>
<p className="text-muted-foreground">...</p>

// Border colors
<div className="border border-border">...</div>
<div className="border-primary-dark">...</div>
```

### In CSS (Direct Variables)

```css
.my-custom-class {
  background-color: hsl(var(--primary-dark));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
}
```

---

## ✨ Quick Color Change Examples

### Change Primary Color to Blue

```css
:root {
  --primary-dark: 220 90% 30%;    /* Blue */
  --primary-light: 220 70% 60%;   /* Light blue */
  --primary-medium: 220 80% 45%;  /* Medium blue */
}
```

### Change Background to Warm Gray

```css
:root {
  --background: 0 0% 98%;          /* Warm white */
  --card: 0 0% 100%;               /* Pure white */
  --muted: 0 0% 96%;               /* Light gray */
}
```

### Change Accent to Purple

```css
:root {
  --accent-gold: 270 80% 60%;      /* Purple */
  --accent-green: 270 70% 55%;     /* Darker purple */
}
```

---

## 🔍 Finding What Uses Which Variable

All Tailwind classes automatically use the CSS variables through `tailwind.config.js`. The mapping is:

- `bg-primary-dark` → `--primary-dark`
- `text-primary-light` → `--primary-light`
- `bg-muted` → `--muted`
- `border-border` → `--border`
- etc.

---

## ⚠️ Important Notes

1. **Always update both `:root` and `.dark` sections** for proper dark mode support
2. **Use HSL format**: `Hue Saturation% Lightness%` (e.g., `218 43% 37%`)
3. **Test in both light and dark modes** after making changes
4. **Don't use hardcoded colors** - always use CSS variables

---

## 📚 Full Variable List

See `src/app/globals.css` lines 9-176 for the complete list of all available CSS variables.

---

**🎉 That's it! Your entire project's color scheme is now controlled from one place!**

