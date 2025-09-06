# [PropBot - Real Estate App](https://prop-bot-sand.vercel.app/)

PropBot is a responsive web application for exploring, buying, or renting properties. It's built with React, Vite, Firebase, and TailwindCSS, offering a smooth and intuitive user experience.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup Instructions](#setup-instructions)  
- [Firebase Setup](#firebase-setup)  
- [Screenshots](#screenshots)  
- [Live URL](#live-url)  
- [Demo Video](#demo-video)  

---

## Features

- **User Authentication:** Secure sign-up and login using Firebase.  
- **Browse Properties:** Discover a curated list of featured properties.  
- **Search & Filter:** Easily find properties with powerful search and filtering tools.  
- **Responsive Design:** The app works flawlessly on desktop, tablet, and mobile devices.  
- **Social Login:** Conveniently sign in with Google, Facebook, and Apple accounts.  

---

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS  
- **Backend:** Firebase Authentication & Storage  
- **Database:** Firebase Firestore  
- **Icons:** Lucide-React, React-Icons  

---

## Setup Instructions

Follow these steps to get the app running on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/propbot.git
cd propbot
```
### 2. Install dependencies
```bash
npm install
```
### 3. Set up environment variables
- Create a .env file in the root directory. Add your Firebase credentials, replacing the placeholders with your actual keys.
``` bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
### 4. Run the app
``` bash
npm run dev
```
The app will now be available at http://localhost:5173.

### Firebase Setup
- Go to the Firebase Console and create a new project.

- Enable Authentication and select your desired sign-in methods (Email/Password, Google, etc.).

- Enable Firestore Database and Storage.

- Copy your Firebase config (API Key, Auth Domain, Project ID, Storage Bucket, Messaging Sender ID, App ID) and add them to your .env file.

- Restart the Vite development server after adding .env variables.

### Screenshots
- Featured Properties / Hero Section
  
  ![Image](https://github.com/user-attachments/assets/0896199a-039b-47c8-97b0-f02097476266)

  ![Image](https://github.com/user-attachments/assets/cee74a7b-d5c9-48a6-be8a-cfd0e848198a)

  ![Image](https://github.com/user-attachments/assets/ed5bda2b-528a-4937-a370-930199b918b0)

- Login Page
  
  ![Image](https://github.com/user-attachments/assets/763da3fc-c786-469d-ab1d-3c4a0f5743ad)

- Signup Page
  
  ![Image](https://github.com/user-attachments/assets/d0be7138-a16f-4972-91d3-d5e8b9d7cb69)


### Live URL
You can view the live application here - https://prop-bot-sand.vercel.app/

### Demo Video
Watch the demo video here: Google Drive Link - https://drive.google.com/file/d/1nO30K-LTSDoVkw3K4dbJPM-8DnIr9C-H/view?usp=sharing

### License
This project is licensed under the MIT License.

### Author
#### Tanmoy Santra
- **GitHub:** https://github.com/yourusername

- **LinkedIn:** https://linkedin.com/in/yourprofile
