---
title: WhatShouldIBuy - Consumer Decision Support
type: Live web app
year: "2025"
summary: A consumer decision-support web app for high-stakes purchases (laptops, phones, TVs, ACs, mattresses, headphones). Built end-to-end from product spec to deployed live app. Designed to act as a decision assistant, not a product filter.
link: https://sagarassignment1.replit.app/
linkLabel: Try the live app
tags: [AI, Decision Support, End-to-end build]
order: 1
icon: sparkles
status: Live
image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=240&fit=crop&q=80"
---

## What it is

A web-based consumer decision-support application that helps users make confident, transparent purchasing decisions for high-stakes products. Built end-to-end as an independent project: product spec, UX, and deployed live app.

**Built with:** Replit (app), ChatGPT (spec), Claude (verification), Gamma (presentation).

## The problem

Consumers face information overload, biased reviews, unclear personal preferences, and rapidly changing product options when making high-value purchases. Most tools filter and rank. None explain.

The goal: **act as a decision assistant, not a product filter.** Go beyond showing options to explaining the reasoning behind each recommendation.

## Key features

- **Structured preference collection** via a progressive questionnaire (1-2 questions per screen, skippable, with progress bar). Designed explicitly to reduce cognitive overload and improve completion rates.
- **Conversational search** with text and voice input. Users type natural language queries. The system interprets intent, asks clarifying questions if needed, and triggers the recommendation engine.
- **Decision Engine** with five modules: Scoring Model, Confidence Model, Tradeoff Analyzer, Regret Risk Analyzer, Explanation Generator.
- **Weighted scoring**: Budget Match (30%), Feature Match (25%), Performance (20%), Reliability (15%), Popularity (10%).
- **Decision Confidence Score**: a calculated percentage based on preference depth, match strength, and variability among top options.
- **Regret Risk Indicator** surfaces potential future concerns to address long-term satisfaction, not just immediate fit.
- **Tradeoff Insights** explicitly identify what each recommendation is best at. A **Why Not These?** transparency layer explains why popular products were excluded.
- **Side-by-side comparison** view with clickable recommendation cards linking directly to purchase pages.

## What I learned

Recommendations are easy. Confidence calibration is hard. Telling a user *why we excluded the obvious answer* is what makes a recommendation system feel like an advisor instead of a black box.
