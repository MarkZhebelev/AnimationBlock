# AnimationBlock

This project was set up using Webpack for React and TypeScript, along with a JSON server for simulating a backend API. It serves as the foundation for building an animation-based React application.

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs both the development server and the JSON server concurrently.\
The development server is available at [http://localhost:3000](http://localhost:3000), and the JSON server is available at [http://localhost:3002](http://localhost:3002).

Webpack will automatically bundle your project and refresh the page when you make edits, while the JSON server serves the data from the `db.json` file.

### `npm run build`

Builds the app for production into the `dist` folder.\
The production build is optimized for the best performance.

### `npm run server`

Runs the JSON server in standalone mode, serving data from `./server/db.json` at [http://localhost:3002](http://localhost:3002).

### `npm test`

This project uses testing libraries like `@testing-library/react` and Jest.\
You can write and run unit tests for your components. Currently, no specific tests are configured by default.

### `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can’t go back!**

If you need full control over the build configuration (e.g., for advanced setups), you can use the `eject` script. It copies all configuration files and transitive dependencies (like Webpack, Babel, etc.) into your project.

## Learn More

To learn more about React, check out the [React documentation](https://reactjs.org/).

For Webpack configuration details, consult the [Webpack documentation](https://webpack.js.org/).

To learn more about JSON server, see the [JSON Server documentation](https://github.com/typicode/json-server).

## Project Structure

- **Entry Point**: The main entry point for the application is `./src/index.tsx`, and the output is bundled into the `dist` directory as `bundle.js`.
- **TypeScript**: TypeScript is used to ensure type safety throughout the project.
- **CSS and Image Support**: CSS and image files are processed and bundled using `style-loader` and `css-loader`, along with Webpack's asset handling for images.
- **Plugins**:
   - `HtmlWebpackPlugin`: Automatically generates the `index.html` file and injects the output bundle.
   - `CleanWebpackPlugin`: Cleans up the `dist` folder before each new build.
- **JSON Server**: A JSON server is set up to serve mock API data. It watches changes in the `./server/db.json` file and runs on [http://localhost:3002](http://localhost:3002).

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

5. To run only the JSON server:
   \`\`\`bash
   npm run server
   \`\`\`