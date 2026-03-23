# Hycast Onboarding Demo Scaffold

This repository contains a greenfield Next.js scaffold for a Hycast onboarding app with three role-based interfaces:

- Management dashboard
- Manager onboarding workspace
- Employee onboarding workspace

## Demo authentication

Use the `/login` page and pick a seeded demo account:

- `management@hycast.local`
- `manager.tech@hycast.local`
- `employee.newhire@hycast.local`
- `admin@hycast.local`

The current scaffold uses cookie-based demo auth and in-memory mock onboarding data so the app can be explored before wiring up a database and real SSO.

## Current scope

- Role-aware navigation and protected routes
- Management overview and onboarding detail views
- Manager overview, onboarding list, onboarding detail, and create-onboarding form shell
- Employee onboarding view
- Admin template placeholder page
- Mock onboarding checklist data derived from the Hycast procedure

## Recommended next steps

1. Replace mock data with Prisma + PostgreSQL.
2. Replace demo auth with Auth.js / SSO.
3. Wire manager actions to persistent onboarding records.
4. Add template editing and checklist versioning.
