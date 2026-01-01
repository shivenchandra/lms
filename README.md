# Converso — AI-Powered Learning Platform

Converso is a modern, full-stack AI learning platform built using Next.js, Supabase, and Vapi, designed to deliver interactive voice-based tutoring experiences.
This project was developed as part of my learning journey by following and extending the JavaScript Mastery SaaS tutorial, with additional customization and architectural understanding applied throughout the build.

# 🚀 Project Overview

Converso enables users to interact with AI tutors through real-time voice conversations, manage learning sessions, and explore different topics using an intuitive and responsive interface.

The goal of this project was to understand:

1) Full-stack SaaS architecture

2) Authentication and user management

3) Real-time AI interaction

4) Scalable frontend and backend integration

This repository represents my hands-on implementation of these concepts.
## Features

- AI Voice Tutors 
- Authentication & User Management 
- Session History
- Custom Tutor Creation
- Search and Filtering
- Responsive UI
- Scalable Architecture


## Tech Stack

**Frontend:**
- Next.js (App Router)

- TypeScript

- Tailwind CSS

- shadcn/ui

**Backend and Services:**

- Supabase – Database, authentication, and real-time data

- Clerk – User authentication & session handling

- Vapi – Voice AI integration

- Sentry – Error tracking and monitoring

- Zod – Schema validation
## Project Setup

Prerequisites:

Ensure you have the following installed:

- Node.js (v18+ recommended)

- npm or pnpm

- Git

Clone the Repository

```bash
  https://github.com/shivenchandra/lms.git
  cd lms
```
Install Dependencies
```bash
  npm install
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
```bash
#Clerk:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

#Supabase:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

#Vapi:
NEXT_PUBLIC_VAPI_WEB_TOKEN=

#Sentry(Optional):
SENTRY_AUTH_TOKEN=
```


## Run the Project


```bash
  npm run start
```


## License

This project is intended for educational use only.

If you plan to use it commercially, please refer to the original tutorial’s licensing and ensure proper permissions are obtained.


[Javascript Mastery](https://www.youtube.com/@javascriptmastery)

[Tutorial's Github Page](https://github.com/adrianhajdin/saas-app)

Original Project Concept: SaaS LMS with AI Voice Agents