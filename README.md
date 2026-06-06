# 🎧 React Podcast Discovery App

A responsive podcast discovery application built with React. The app fetches podcast data from an external API and dynamically renders a grid of podcast previews. It emphasizes data fetching, component structure, rendering logic, and responsive layout styling.

-----

## 🚀 Features

## 🔄 Data Fetching

 -Fetches podcast data from Podcast API on initial page load.

 -Uses useEffect() for one-time fetch and useState() for managing data.

 -Displays a loading indicator while fetching.

 -Handles errors and empty results with clear user messages.

 ----

## 🎙 Podcast Preview Grid

 -Renders a responsive grid of podcast previews using reusable components.

 -Each PodcastPreviewCard displays:

   -Podcast image

   -Podcast title

   -Number of seasons

   -Genre tags

   -Last updated date (formatted, e.g., "2 days ago")

# 📱 Responsive Layout 

 -Built with CSS Grid or Flexbox.

 -Adapts seamlessly to:

    -Desktop (≥1200px)
    -Tablet (~768px)
    -Mobile (~375px)


# 🧩 Architecture 

 -Functional Components – Modular, reusable React components.

 -Props – Pass podcast data into components for rendering.

 -Date Formatting – Uses date-fns or custom formatter.

 -Error & Empty States – Clear feedback for users. 

--------

# 📂 Project Structure

podcast-app/
│── public/
│   └── index.html
│
│── src/
│   ├── components/
│   │   ├── PodcastPreviewCard.js   # Renders individual podcast card
│   │   └── LoadingIndicator.js     # Shows loading state
│   │
│   ├── pages/
│   │   └── LandingPage.js          # Fetches data & renders grid
│   │
│   ├── utils/
│   │   └── dateFormatter.js        # Formats last updated dates
│   │
│   ├── App.js                      # Root component
│   ├── index.js                    # Entry point
│   └── styles.css                  # Global styles
│
│── README.md
│── package.json

-----

# 🛠 Tech Stack

 -React (Functional Components + Hooks)

 -Fetch API for data retrieval

 -CSS Grid / Flexbox for responsive layout

 -date-fns for date formatting

 ------

# 📱 Design & UX Goals
 -Clean, consistent layout across devices.

 -Clear hierarchy with readable typography and spacing.

 -Accessibility considerations:

 -High contrast

 -Semantic HTML

 -Responsive buttons and cards

# 🧩 Future Improvements
 -Add search and filter functionality.

 -Implement dark/light theme toggle.

 -Enhance accessibility with ARIA roles and focus trapping.

-Integrate routing for podcast detail pages.

# 👩‍💻 Contributors

Kenneth Ngcobo (@Kenneth-Ngcobo)

# 📜 License

This project is licensed under the MIT License.

