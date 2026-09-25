# Chat-App — Sprint Plan

## Sprint 1: Fix Core Bugs & Complete Auth UI
**Goal:** Ensure existing features work without errors and finish user registration on the client.

| # | Task | Status |
|---|---|---|
| 1 | 🚨 **Fix Bug:** Remove `new` keyword before `Message.create` in `server/controllers/Message.controller.js` (`sendMessage` method) | ✅ |
| 2 | Create `SignupPage.jsx` in frontend and wire up with API. | ✅ | Handled in `LoginPage.jsx`. |
| 3 | Add `/signup` route to `App.jsx`. | ✅ | Handled in `/login` route. |

## Sprint 2: API Testing (Postman) Setup
**Goal:** Document and test backend routes via Postman.

| # | Task | Status |
|---|---|---|
| 1 | Create `postman/` directory. | ✅ |
| 2 | Create Postman Collection JSON covering Auth and Message routes. | ✅ |
| 3 | Create Postman Environment JSON with `base_url` and `token`. | ✅ |
| 4 | Write `postman/README.md` with instructions on how to import and run tests. | ✅ |

## Sprint 3: Unit Testing Setup & Implementation
**Goal:** Ensure codebase is robust using unit tests.

| # | Task | Status |
|---|---|---|
| 1 | Install Jest and Supertest in `server/`. Configure `jest.config.js`. | ✅ |
| 2 | Write backend unit tests for `User.controller.js` and `Message.controller.js`. | ✅ |
| 3 | Install Vitest and React Testing Library in `client/`. | ✅ |
| 4 | Write frontend unit tests for components. | ✅ |

## Sprint 4: Final Polish & Deployment
**Goal:** Review and prepare the app for deployment.

| # | Task | Status |
|---|---|---|
| 1 | Verify all real-time features (online users, live chat). | ❌ |
| 2 | Code cleanup and final QA. | ❌ |
