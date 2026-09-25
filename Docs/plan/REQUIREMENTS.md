# Chat-App — Product Requirements Document

> **Product:** Real-time Chat App
> **Version:** 1.0
> **Status:** Living Document — derived from codebase audit

## Epic Index

| ID | Epic | Priority |
|---|---|---|
| EPIC-01 | User Authentication & Profile | MVP |
| EPIC-02 | Real-time Messaging | MVP |
| EPIC-03 | Frontend UI & User Experience | MVP |
| EPIC-04 | Unit Testing & Quality Assurance | MVP |
| EPIC-05 | API Testing (Postman) | MVP |

## EPIC-01: User Authentication & Profile
**Goal:** Allow users to sign up, log in, and manage their profile.

- **US-01.1 — User Registration:** As a user, I want to sign up using my name, email, password, and bio.
- **US-01.2 — User Login:** As a user, I want to log in using my email and password.
- **US-01.3 — Profile Management:** As a user, I want to update my profile picture, name, and bio.
- **US-01.4 — Auth State Persistence:** As a user, I want my session to be remembered so I don't have to log in repeatedly.

## EPIC-02: Real-time Messaging
**Goal:** Enable users to exchange messages and images in real time.

- **US-02.1 — Send and Receive Messages:** As a user, I want to send text and images to other users.
- **US-02.2 — Online Status:** As a user, I want to see which users are currently online.
- **US-02.3 — Message History:** As a user, I want to view my past chat history with a specific user.
- **US-02.4 — Unread/Seen Status:** As a user, I want to see unread message counts and know when my messages are seen.

## EPIC-03: Frontend UI & User Experience
**Goal:** Provide an intuitive React interface for chat and profile.

- **US-03.1 — Registration Page UI:** As a user, I want a dedicated signup page to create an account. *(Pending)*
- **US-03.2 — Chat Layout:** As a user, I want a sidebar of contacts and a main chat window.
- **US-03.3 — Responsive Design:** As a user, I want the chat app to work well on mobile and desktop.

## EPIC-04: Unit Testing & Quality Assurance
**Goal:** Ensure code reliability using unit tests for both frontend and backend.

- **US-04.1 — Backend Unit Tests:** As a developer, I want unit tests for controllers and models using Jest.
- **US-04.2 — Frontend Unit Tests:** As a developer, I want component and context tests using Vitest/React Testing Library.

## EPIC-05: API Testing (Postman)
**Goal:** Create a Postman folder to verify all backend API endpoints.

- **US-05.1 — Postman Collection & Env:** As a developer, I want a `postman` folder containing a collection of all API routes (Auth, Messages) and an environment file for variables like `base_url` and `token`.
- **US-05.2 — README Documentation:** As a developer, I want a markdown file in the `postman` folder documenting how to run the scripts and tests.
