---
title: Money Multiplier - Variable Reward Growth Framework
company: Games24x7
role: Senior PM, Growth Charter
year: "2022"
timeframe: 8 months
summary: A first-of-its-kind variable reward mechanic in Indian rummy, inspired by Nir Eyal's Hooked Model. Shipped V1, learned the wrong behavior was being optimized, redesigned around a multi-lever ARPU framework.
tags: [Growth, Monetization, Behavioral Design]
featured: true
order: 3
icon: trending-up
metrics:
  - value: "+15%"
    label: ARPU (new users)
  - value: "+4%"
    label: ARPU (existing)
  - value: "-"
    label: Incentive cost reduced
screenshots:
  - src: /case-studies/money-multiplier-hooked-model.png
    caption: The Hooked Model - the behavioral framework that inspired the mechanic.
    alt: Hooked Model diagram showing Trigger, Action, Variable Reward, Investment
  - src: /case-studies/money-multiplier-unlocked.png
    caption: Multiplier card unlocked - users earn a 2x-100x multiplier to apply on a follow-up game.
    alt: Multiplier card unlocked screen
---

## Context

ARPU growth among active users had plateaued at Games24x7. The category relied on static cashback offers and deposit bonuses, which were losing effectiveness with repeat users and becoming increasingly expensive. The goal was to grow ARPU while maintaining retention and cost discipline.

## V1 - The first innovation

I proposed and led **Money Multiplier**, a mechanic inspired by Nir Eyal's Hooked Model. Users first completed a challenge to earn a multiplier, which then multiplied their winnings if they played and won a follow-up game (typically at a higher entry fee). This shifted incentives from static and entitlement-driven to **performance-and-behavior-linked**. It was a first-of-its-kind mechanic in the Indian rummy category.

Early data showed revenue per game trending upward. But a deeper cohort analysis surfaced something concerning: games played per session were declining and churn was increasing. **Net ARPU impact was close to neutral.** The mechanic was optimizing the wrong behavior.

## V2 - Reframing the problem

- Paused further rollout and communicated the rationale clearly to leadership.
- Decomposed ARPU into its fundamental drivers: **Games Played**, **Revenue per Game**, and **Active Days**.
- Key insight: different users have different constraints. A single uniform incentive cannot optimize all three levers simultaneously.
- Redesigned the system to identify each user's weakest ARPU lever and personalize incentives to strengthen only that lever (frequency, longevity, or value).
- Collaborated with Data Science to automate lever identification and target-setting via predictive models on recent user behavior.
- Initially optimized two levers, expanded to all three once complexity and signal strength warranted it.

## Result

- **4% ARPU increase for existing users.**
- **15% ARPU increase for new users.**
- Meaningful reduction in incentive cost relative to the initial rollout.
- Money Multiplier became a reusable internal playbook and mental model for future growth initiatives.

## What I learned

Top-line metrics can hide compositional changes. Decompose the metric before celebrating the lift.
