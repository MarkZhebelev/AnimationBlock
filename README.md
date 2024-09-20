
# AnimationBlock

This project was set up using Webpack for React and TypeScript. It serves as the foundation for building an animation-based React application.

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in development mode using Webpack Dev Server.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Webpack will automatically bundle your project and refresh the page when you make edits.

### `npm run build`

Builds the app for production into the `dist` folder.\
The production build is optimized for the best performance.

### `npm test`

This project uses testing libraries like `@testing-library/react` and Jest.\
You can write and run unit tests for your components. Currently, no specific tests are configured by default.

### `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can’t go back!**

If you need full control over the build configuration (e.g., for advanced setups), you can use the `eject` script. It copies all configuration files and transitive dependencies (like Webpack, Babel, etc.) into your project.

## Learn More

To learn more about React, check out the [React documentation](https://reactjs.org/).

For Webpack configuration details, consult the [Webpack documentation](https://webpack.js.org/).

## Project Structure

- **Entry Point**: The main entry point for the application is `./src/index.tsx`, and the output is bundled into the `dist` directory as `bundle.js`.
- **TypeScript**: TypeScript is used to ensure type safety throughout the project.
- **CSS and Image Support**: CSS and image files are processed and bundled using `style-loader` and `css-loader`, along with Webpack's asset handling for images.
- **Plugins**:
    - `HtmlWebpackPlugin`: Automatically generates the `index.html` file and injects the output bundle.
    - `CleanWebpackPlugin`: Cleans up the `dist` folder before each new build.

## How to Get Started

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-repo/AnimationBlock.git
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm start
   \`\`\`

4. To create a production build:
   \`\`\`bash
   npm run build
   \`\`\`

