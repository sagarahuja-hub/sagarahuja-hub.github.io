---
title: App Redesign and Cohort-Configurable Lobby
company: Games24x7
role: Senior PM, Growth Platform
year: "2023"
timeframe: 9 months
summary: Reimagined the app from the ground up, moving from a fixed landscape layout to a cohort-configurable architecture with an experimentation engine that ran parallel A/B tests without app releases.
tags: [Growth, Personalization, Experimentation, Mobile]
featured: true
order: 1
icon: smartphone
metrics:
  - value: "+9%"
    label: New user retention
  - value: "+3%"
    label: ARPU (existing)
  - value: "-82%"
    label: App release dependency
---

## Context

The mobile app was built entirely in landscape. Qualitative user feedback and product intuition suggested portrait would feel more natural given standard phone usage patterns, but a significant portion of the user base were older players accustomed to the existing experience. The redesign could not be fully validated with small experiments because orientation impacts navigation, content hierarchy, and core interaction patterns across the entire app.

## The judgment call

Rather than forcing a binary orientation switch or waiting indefinitely for statistically conclusive data, I made a judgment call to redesign the app with **personalization as the core value proposition**. User research with ~100 players surfaced the real insight: different portrait layouts worked better for different cohorts. There was no single best design for everyone.

> Optimizing for the average user means under-serving every cohort. The lobby was not one product. It was many, and we were shipping one for all of them.

## Approach

- Rejected the landscape-only option (slow learning, persistent usability issues) and the binary portrait switch (high adoption risk, especially for older users).
- Redesigned the app architecture to support configurable layouts, controlled through backend configuration rather than hard-coded client logic.
- Built an **experimentation engine** that ran parallel A/B tests concurrently without requiring app releases.
- Conducted in-person user research with older and newer player segments using both guided and unguided sessions.
- Reduced the game start journey from 5 steps to 1 via reusable in-app personalization.

## Result

- **9% increase in new user retention.**
- **3% increase in ARPU** for existing users.
- **82% reduction in dependency on app releases** for testing and rollouts.
- Established a durable system for ongoing experimentation and UX optimization across the org.

## Why this mattered

The cohort-configurable architecture became the foundation for every personalization and growth experiment that followed. The release-decoupled experimentation engine compounded velocity across multiple teams for years afterward.

> The decision that paid off the most was not the orientation. It was treating layout as a parameter we could change per cohort, not a constant.
