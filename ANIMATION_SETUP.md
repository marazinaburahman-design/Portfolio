# Framer Motion animation setup

This version uses Framer Motion throughout the portfolio.

## Run
```bash
npm install
npm run dev
```

## Animation behavior
- Scroll reveal animations replay every time sections leave/re-enter the viewport (`once: false`).
- Fade-up, fade-left, fade-right, scale/blur, staggered cards, hover/tap effects.
- Animated hero entrance and floating profile image.
- Animated mobile navbar drawer with `AnimatePresence`.
- Skills, education/tool cards, projects, contact, footer and social buttons are animated.
- Animated scroll-to-top button.

The reusable reveal component is `src/components/MotionReveal.jsx`.
