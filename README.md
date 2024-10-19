
# Status Update Page

This is a simple web application designed to display real-time status updates and guide users through next steps after viewing an update. The app features a welcome page, a video page, and a next steps page. Users can navigate through these pages to receive important updates and further instructions.

## Features

- **Status Update Portal**: A centralized page for users to view and access the latest updates.
- **Video Presentation**: Displays a video containing the latest update.
- **Next Steps**: A page guiding users on what actions to take after viewing the video update.

## Technology Stack

- **React.js**: The app is built using React to enable smooth navigation and dynamic content rendering.
- **React Router**: Utilized for navigating between different pages of the app (Welcome Page, Video Page, Next Steps Page).
- **HTML5 & CSS3**: Provides structure and styling to ensure a responsive and user-friendly UI.

## Installation Guide

### Prerequisites

Before you begin, ensure you have Node.js installed on your machine. You'll also need npm (which comes bundled with Node.js) or Yarn as your package manager.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/choshingcheung/status_update_page.git
   cd status_update_page
   ```

2. **Install Dependencies**:
   Install the project dependencies by running the following command:
   ```bash
   npm install
   ```
   or if you prefer Yarn:
   ```bash
   yarn install
   ```

3. **Run the Application**:
   Start the development server:
   ```bash
   npm start
   ```
   or for Yarn:
   ```bash
   yarn start
   ```

4. **Build for Production**:
   To create a production-ready build:
   ```bash
   npm run build
   ```
   or:
   ```bash
   yarn build
   ```

The app will be available at `http://localhost:3000`.

## Application Pages

- **Welcome Page**: Introduces the user to the status update portal and includes a button to view the latest video update.
- **Video Page**: Contains a video update that the user can watch, followed by a button that leads to the next steps.
- **Next Steps Page**: Provides detailed instructions on the next actions the user needs to take after viewing the update video.

## File Structure

```plaintext
status_update_page/
├── public/                 # Public files (index.html, video.mp4, etc.)
├── src/                    # Main source files
│   ├── App.js              # Main app component
│   ├── NextStepsPage.js     # Page showing next steps after the video
│   ├── VideoPage.js        # Page displaying the status update video
│   ├── index.js            # Entry point of the application
│   ├── App.css             # Main styles for the app
│   └── index.css           # General styles for the app
├── package.json            # Dependencies and project scripts
└── README.md               # Project documentation
```

## Application Overview

- **Welcome Page**: Displays a title and introduction text with a button to navigate to the video page.
- **Video Page**: Contains an embedded video that auto-plays. Below the video, a button links to the next steps page.
- **Next Steps Page**: Lists actionable steps for the user to follow after viewing the video.

## License

This project is licensed under the MIT License.

---

### Detailed Component and Function Explanation

This document provides an in-depth explanation of the main components and their functionalities within the Status Update Page project.

---

## 1. `App.js`

### Description

The **App.js** file is the core component of the application and manages the routing between different pages using `react-router-dom`. It contains three main routes: the welcome page, the video page, and the next steps page.

### Components

1. **Router**: `BrowserRouter` is used to wrap the entire app, enabling the application to manage navigation between different pages without refreshing the browser.
   
2. **Routes**: This defines the different paths (pages) of the app:
   - `/` (Home): Displays the **Welcome Page** with a title, description, and a button that links to the Video Page.
   - `/video`: Displays the **Video Page** where the user can watch a video and click a button to proceed to the next steps.
   - `/next-steps`: Displays the **Next Steps Page** with a list of actions for the user to follow.

### Functions

- **Route Component**: `<Route path="/" element={}` defines what content will be displayed when the user navigates to that path.
- **Link Component**: `<Link>` from `react-router-dom` is used for in-app navigation. It renders as an HTML `<a>` element but doesn’t reload the page, providing a smoother user experience.

---

## 2. `NextStepsPage.js`

### Description

This component renders the **Next Steps Page**, which provides users with guidance on the actions they should take after watching the video.

### Structure

- **Container (`<div>`)**: The `next-steps-container` div wraps all the content, ensuring consistent styling and layout.
  
- **Heading (`<h1>`)**: The main heading, "What you need to do next?", informs users about the purpose of the page.

- **Ordered List (`<ol>`)**: Displays a series of actionable steps that the user is instructed to follow, such as keeping the information confidential or scheduling a meeting.

- **Image (`<img>`)**: Displays an image related to the content. The image file `ISL.png` is referenced, which should be included in the `public` directory.

### Key Functions

- **HTML Elements**: It uses semantic HTML such as `<h1>`, `<p>`, `<ol>`, and `<li>` to structure the content.
- **CSS Classes**: Classes like `next-steps-container` help style the content, making it responsive and user-friendly.

---

## 3. `VideoPage.js`

### Description

This component renders the **Video Page** where a video is played, and after watching, the user can proceed to the next steps.

### Structure

- **Video Container (`<div>`)**: The `video-container` wraps the video and other content, providing structure and styling.

- **Heading (`<h1>`)**: A heading that introduces the video content with a message like "We've prepared a video for you...".
  
- **Video (`<video>`)**: The HTML `<video>` tag plays the video file `video.mp4`. It includes attributes like `autoPlay`, `muted`, and `controls`, allowing the user to control playback.

- **Link Component**: The `<Link>` component redirects the user to the Next Steps Page after watching the video.

### Key Functions

- **Video Playback**: The `<video>` tag handles playback of the embedded video. `autoPlay` starts the video automatically, `muted` prevents sound playback, and `controls` allows the user to pause, play, or adjust volume.
- **Navigation**: The button at the bottom of the page, wrapped in a `<Link>`, directs the user to the Next Steps Page.

---

## 4. `App.css`

### Description

The **App.css** file defines the overall styling of the application. It ensures that the pages are responsive and visually appealing across different devices.

### Key Styles

- **`.App`**: Styles the root container of the app. It uses flexbox for centering content and sets a minimum height to ensure it fills the screen.
- **`.App-header`**: Centers and styles the header area of the Welcome Page.
- **Button Styling**: Buttons use a green background color with a hover effect, improving the user experience.
- **Responsive Design**: Media queries ensure that the app adjusts gracefully on smaller screens by reducing font sizes and adjusting layout widths.

---

## 5. `index.js`

### Description

This file serves as the **entry point** of the application. It uses `ReactDOM.createRoot()` to mount the main **App** component into the root DOM element (`<div id="root">`).

### Key Functions

- **ReactDOM.createRoot**: Creates a root container and renders the `<App />` component inside it.
- **Strict Mode**: The application is wrapped in `<React.StrictMode>`, which helps identify potential problems in the app during development.

---

## 6. `index.css`

### Description

The **index.css** file contains global styles applied across the entire application. It ensures that fonts and text rendering are consistent across different browsers.

### Key Styles

- **Body Styling**: Sets default font-family, margin, and text rendering properties for the entire application.
- **Code Styling**: Specific styles for any `<code>` elements, ensuring they use a monospaced font.
