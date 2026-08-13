# AK Enterprises Website Revamp Implementation Plan

This plan details the end-to-end development of the AK Enterprises Next.js website. The site is designed with a single goal: converting qualified business owners to book a free audit call, strictly adhering to Hormozi's Value Equation and Suby's Grab-Engage-Educate-Offer framework.

## User Review Required
> [!IMPORTANT]
> Please review the 5 phases below. If this structure looks good to you, simply hit "Proceed" to approve it. Once approved, I will automatically begin executing **Phase 1**.

## Open Questions
> [!NOTE]
> 1. **Next.js Preferences:** Should I use the `app` router (recommended) or the `pages` router for this project?
> 2. **Animations (Phase 3):** The brief specifically calls for a word-by-word animation on the hero headline and scroll-triggered count-ups for numbers. Would you like me to install `framer-motion` in Phase 1 for this, or do you prefer standard CSS animations?
> 3. **Demo Section (Phase 5):** Will the interactive AI lead acquisition demo be an `iframe` embed from an existing system, or do you need a custom-built mock interface?

---

## Phase 1: Foundation and Next.js Setup
**Goal:** Initialize a robust, scalable Next.js project with all required dependencies, typography, and the strict design system.

- Create the Next.js project (App Router, Tailwind CSS, TypeScript).
- Configure the design system in `tailwind.config.ts`:
  - **Colors:** Ink Black (`#0B0B0C`), Gold (`#C9A961`), White (`#FFFFFF`), Warm Grey (`#BDBAB2`), Muted Grey (`#6B6862`), Cream (`#F5F2EC`).
- Setup custom fonts (`Source Serif 4` and `Arimo`) via `next/font`.
- Install necessary packages:
  - `framer-motion` (for the required Hero and Number animations).
  - `react-hook-form` (for the Contact form).
  - Icons library (e.g., `lucide-react`).
- Scaffold the directory structure for pages: Home, What We Build, Case Studies, The Demo, About, Contact.

## Phase 2: Structural Build and Mobile Responsiveness
**Goal:** Build the complete structure of the website section by section across all pages, ensuring pixel-perfect mobile-first responsiveness.

- **Global Components:** Build the Shared Navigation Bar and Shared Footer.
- **Home Page:** Implement Hero, Cost of Inaction (Pain), Bright Face Barber (Proof), How It Works, Numbers, Demo, More Proof, Credibility, Testimonials, Who This Is For, Audit Offer, and FAQ.
- **What We Build Page:** Implement the Outcome-framed components table.
- **Case Studies Page:** Build the verified results sections.
- **The System Demo Page:** Scaffold the live demo container.
- **About Page:** Group story and founders.
- **Contact Page:** Implement the audit booking form (with qualification fields).
- Ensure the primary CTA ("Book a Free Audit") is always above the fold on mobile and uses the strict Gold button styling.

## Phase 3: UX, Accessibility, and Animations
**Goal:** Elevate the UI/UX to a highly professional, premium feel while maintaining the strict conversion principles.

- **Hero Animation:** Implement the word-by-word fade-up animation (0.08s delay) on the home page hero headline.
- **Number Counters:** Implement scroll-triggered count-up animations for the "Numbers" section.
- **Micro-interactions:** Add subtle hover states to links (excluding the primary Gold button which remains distinct).
- **Accessibility:** Ensure proper ARIA labels, semantic HTML tags, keyboard navigability, and color contrast ratios to support a premium, inclusive UX.

## Phase 4: Performance and SEO Optimization (Lighthouse 100)
**Goal:** Optimize the application to achieve a 100/100 Lighthouse score across Performance, Accessibility, Best Practices, and SEO.

- **SEO:** Add metadata, title tags, and meta descriptions to all pages.
- **Images/Video:** Ensure Antonios' video embed and case study screenshots are properly lazy-loaded and optimized.
- **Performance:** Minify assets, optimize font loading, and ensure zero Cumulative Layout Shift (CLS).
- Run Lighthouse audits and iteratively fix any bottlenecks until perfect scores are achieved.

## Phase 5: Production Readiness and Final Checks
**Goal:** Connect functional elements, squash bugs, and prepare for deployment.

- **Form Logic:** Connect the Contact Page audit form to route submissions (e.g., setting up the API route to handle the email to `office@akmarketing.agency`).
- **Demo Integration:** Finalize the interactive Almass AI lead acquisition demo embed.
- **Analytics:** Prepare integration snippets for Google Analytics 4 (tracking page views, CTA clicks, risk reversal interactions, etc.).
- Comprehensive cross-browser and mobile device testing to ensure a flawless experience.
