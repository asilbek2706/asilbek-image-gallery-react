# 📸 Image Gallery

A modern, responsive image gallery web application built with React and Tailwind CSS. Search and browse high-quality images from Pixabay with a beautiful, animated user interface.

## ✨ Features

- 🔍 **Image Search** - Search for images using keywords powered by Pixabay API
- 📱 **Responsive Design** - Fully responsive grid layout that works on all devices
- ⚡ **Fast Loading** - Optimized image loading with lazy loading indicators
- 🎨 **Modern UI** - Beautiful glassmorphism design with smooth animations
- 📊 **Image Details** - View image statistics including views, likes, and downloads
- 🏷️ **Image Tags** - Browse related tags for each image
- 👤 **Creator Info** - See the photographer's name and profile

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Pixabay API key (get one at [https://pixabay.com/api/](https://pixabay.com/api/))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd image-gallery
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Pixabay API key:
```
REACT_APP_PIXABAY_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

### `npm start`
Runs the app in development mode with hot reloading.

### `npm build`
Builds the app for production to the `build` folder. The build is optimized and minified.

### `npm test`
Launches the test runner in watch mode.

## 📁 Project Structure

```
src/
├── App.js                 # Main app component with image fetching logic
├── index.js              # React entry point
├── index.css             # Global styles
└── components/
    ├── ImageSearch.js    # Search input component
    └── ImageCard.js      # Individual image card component
```

## 🛠️ Technologies Used

- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool
- **Pixabay API** - Image data source
- **react-loading-indicators** - Loading animations
- **Create React App** - Development environment

## 🎯 How It Works

1. **Search** - Enter keywords in the search box
2. **Fetch** - The app queries Pixabay API with your search term
3. **Display** - Images load and display in a responsive grid
4. **Interact** - Hover over images to see photographer info and download details

## 🌐 API Integration

This app uses the **Pixabay API** to fetch free-to-use images. Each API call returns:
- Image URL in multiple formats
- Creator information
- View, like, and download counts
- Associated tags

## 📱 Responsive Breakpoints

- **Mobile** - 1 column
- **Tablet** - 2 columns
- **Desktop** - 3 columns
- **Wide Screen** - 4 columns

## 🎨 Styling

The app uses Tailwind CSS with custom configurations for:
- Glassmorphism effects
- Smooth transitions and animations
- Gradient overlays
- Responsive spacing and sizing

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## 📧 Support

For issues or questions, please create an issue in the repository.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
