# AnimationBlock

AnimationBlock
AnimationBlock is a React and TypeScript project set up with Webpack for bundling and a JSON server for simulating a backend API. This serves as a foundation for building an animation-focused React application.

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs both the development server and the JSON server concurrently:

The React app is available at http://localhost:3000
The JSON server is available at http://localhost:3002
Webpack automatically bundles your project and refreshes the page when you make edits. The JSON server serves data from the ./server/db.json file.

### `npm run build:dev`

Creates a development build of the app in the dist folder. This build is not optimized.

### `npm run build:prod`

Builds the app for production in the dist folder. The production build is optimized for best performance.

### `npm run analyze`

Generates a production build, creates a JSON file of the bundle statistics, and runs Webpack Bundle Analyzer to visualize the content of your bundles.

### `npm run server`
Runs the JSON server in standalone mode. It serves data from ./server/db.json at http://localhost:3002.

### `npm run eject`

Note: This is a one-way operation. Once you eject, you can’t go back! Use this if you need to customize Webpack or Babel configurations.


## Project Structure

- **Entry Point**: The main entry point is ./src/index.tsx, and the bundled output is generated in the dist directory as bundle.js.
- **TypeScript**: TypeScript is used to ensure type safety throughout the project.
- **CSS and Image Support**: CSS and image files are processed and bundled using `style-loader` and `css-loader`, along with Webpack's asset handling for images.
- **Plugins**:
   - `HtmlWebpackPlugin`: Automatically generates the `index.html` file and injects the output bundle.
   - `CleanWebpackPlugin`: Cleans up the `dist` folder before each new build.
- **JSON Server**: A JSON server is set up to serve mock API data. It watches changes in the `./server/db.json` file and runs on [http://localhost:3002](http://localhost:3002).

## Dependencies

- **React**: The UI framework.
- **React Router**: For managing application routes.
- **Styled-components**: For styling React components with CSS-in-JS.
- **MobX**: For state management.
- **Axios**: For handling HTTP requests.
- **Swiper**: For implementing sliders.

## Development Environment

- **Webpack**: Bundles JavaScript, TypeScript, and other assets.
- **JSON Server**: Simulates a backend API for development purposes.
- **Concurrently**: Runs the React development server and JSON server at the same time.
- **TypeScript**:  Ensures type safety in the project.

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

4. Create a development build:
   \`\`\`bash
   npm run build:dev
   \`\`\`

5. Create a production build::
   \`\`\`bash
   npm run build:prod
   \`\`\`

6. Run only the JSON server:
   \`\`\`bash
   npm run server
   \`\`\`

7. Analyze the production bundle:
   \`\`\`bash
   npm run analyze
   \`\`\` 
