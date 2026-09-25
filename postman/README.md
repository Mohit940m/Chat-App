# Postman API Testing for Chat-App

This directory contains the Postman collection and environment variables needed to test the backend API.

## Setup Instructions

1. Open Postman.
2. Click on **Import** (top left).
3. Select the `Chat-App.postman_collection.json` file to import the collection.
4. Click on **Import** again and select the `Chat-App_Local.postman_environment.json` file to import the environment.

## Running Tests

1. Ensure your backend server is running (`npm run dev` in `server/`).
2. Make sure the `Chat-App Local Environment` is selected in the top right corner of Postman.
3. First, use the **Auth -> Sign Up** or **Auth -> Login** requests to create/login a user.
4. Copy the `token` from the response body.
5. Edit the `Chat-App Local Environment` variables and paste the token into the `token` value.
6. Save the environment variables.
7. Now you can use the other requests (like **Check Auth**, **Get Users**, **Send Message**) as they will automatically include the token from your environment variables.
