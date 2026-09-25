# Chat-App — Requirements Traceability

> **Status Marks:** ✅ Done | ⚠️ Partial/Buggy | ❌ Missing | 🚨 Blocker

## EPIC-01: User Authentication & Profile
| Task | Code File(s) | Status | Notes |
|---|---|---|---|
| User Registration (Backend) | `server/controllers/User.controller.js` | ✅ | `signUp` implemented. |
| User Login (Backend) | `server/controllers/User.controller.js` | ✅ | `Login` implemented. |
| Profile Update (Backend) | `server/controllers/User.controller.js` | ✅ | `updateProfile` implemented using Cloudinary. |
| Check Auth (Backend) | `server/controllers/User.controller.js` | ✅ | `checkAuth` and `protectRoute` implemented. |
| Registration Page (Frontend)| `client/src/pages/LoginPage.jsx` | ✅ | Integrated into LoginPage.jsx. |
| Login Page (Frontend) | `client/src/pages/LoginPage.jsx` | ✅ | UI implemented. |
| Profile Page (Frontend) | `client/src/pages/ProfilePage.jsx` | ✅ | UI implemented. |

## EPIC-02: Real-time Messaging
| Task | Code File(s) | Status | Notes |
|---|---|---|---|
| Send Message (Backend) | `server/controllers/Message.controller.js` | ✅ | Fixed bug in `sendMessage`. |
| Get Messages (Backend) | `server/controllers/Message.controller.js` | ✅ | `getMessages` implemented. |
| Sidebar Users (Backend) | `server/controllers/Message.controller.js` | ✅ | `getUsersForSidebar` implemented, returns unseen message counts. |
| Mark Seen (Backend) | `server/controllers/Message.controller.js` | ✅ | `markMessageSeen` implemented. |
| Socket.io Connection | `server/server.js` | ✅ | Basic connection, mapping userId to socketId. |
| Online Users | `server/server.js` | ✅ | `getOnlineUsers` emitted to all. |
| New Message Event | `server/controllers/Message.controller.js` | ✅ | Event emitted to receiver if online. Bug fixed. |

## EPIC-03: Frontend UI & User Experience
| Task | Code File(s) | Status | Notes |
|---|---|---|---|
| Chat UI Layout | `client/src/components/*` | ✅ | `ChatContainer`, `Sidebar`, `RightSidebar` implemented. |
| Responsive Design | Tailwind Classes | ✅ | Basic responsive Tailwind is set up. |
| Missing Routes | `client/src/App.jsx` | ✅ | Signup route is handled via `/login`. |

## EPIC-04: Unit Testing & Quality Assurance
| Task | Code File(s) | Status | Notes |
|---|---|---|---|
| Backend Test Setup | N/A | ❌ | Jest not configured. |
| Frontend Test Setup | N/A | ❌ | Vitest/RTL not configured. |
| Unit Tests implementation | N/A | ❌ | No tests written. |

## EPIC-05: API Testing (Postman)
| Task | Code File(s) | Status | Notes |
|---|---|---|---|
| Postman Folder & Collection | `postman/collection.json` | ❌ | Not created. |
| Postman Environment | `postman/environment.json` | ❌ | Not created. |
| Postman README | `postman/README.md` | ❌ | Not created. |
