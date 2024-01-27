# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

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

<!-- Full CSS -->
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;

body,
html {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

input:focus,
textarea:focus,
select:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

/* Basic class for tailwind  */
.linear-bg {
  background: linear-gradient(269.82deg, #07091c00 0.17%, #080a1ad6 99.87%);
}

.hoveres {
  @apply hidden;
}

.hovered:hover .hoveres {
  @apply flex-colo;
}

.flex-colo {
  @apply flex flex-col justify-center items-center;
}

.flex-rows {
  @apply flex flex-row justify-center items-center;
}

.flex-btn {
  @apply flex justify-between items-center;
}

.transitions {
  @apply transition duration-300 ease-in;
}

.zIndex {
  z-index: 1000;
}

/* Drawer */
.rc-drawer {
  overflow: visible;
}

.rc-drawer .rc-drawer-content-wrapper {
  width: 100%;
}

.rc-drawer {
  position: fixed;
  z-index: 9999;
  transition: width 0s ease 0.3s, height 0s ease 0.3s,
  transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}

.rc-drawer>\* {
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
  opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
  box-shadow 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}

.rc-drawer.rc-drawer-open {
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}

.rc-drawer .rc-drawer-mask {
  background: #000;
  opacity: 0;
  width: 100%;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
  height 0s ease 0.3s;
}

.rc-drawer-content-wrapper {
  position: absolute;
  background: #fff;
}

.rc-drawer-content {
  overflow: auto;
  z-index: 1;
  position: relative;
}

.rc-drawer-handle {
  position: absolute;
  top: 72px;
  width: 41px;
  height: 40px;
  cursor: pointer;
  z-index: 0;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  display: none;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.rc-drawer-handle-icon {
  width: 14px;
  height: 2px;
  background: #333;
  position: relative;
  transition: background 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}

.rc-drawer-handle-icon:before,
.rc-drawer-handle-icon:after {
  content: '';
  display: block;
  position: absolute;
  background: #333;
  width: 100%;
  height: 2px;
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}

.rc-drawer-handle-icon:before {
  top: -5px;
}

.rc-drawer-handle-icon:after {
  top: 5px;
}

.rc-drawer-left,
.rc-drawer-right {
  width: 0%;
  height: 100%;
}

.rc-drawer-left .rc-drawer-content-wrapper,
.rc-drawer-right .rc-drawer-content-wrapper,
.rc-drawer-left .rc-drawer-content,
.rc-drawer-right .rc-drawer-content {
  height: 100%;
}

.rc-drawer-left.rc-drawer-open,
.rc-drawer-right.rc-drawer-open {
  width: 100%;
}

.rc-drawer-left.rc-drawer-open.no-mask,
.rc-drawer-right.rc-drawer-open.no-mask {
  width: 0%;
}

.rc-drawer-left {
  top: 0;
  left: 0;
}

.rc-drawer-left .rc-drawer-handle {
  right: -40px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  border-radius: 0 4px 4px 0;
}

.rc-drawer-left.rc-drawer-open .rc-drawer-content-wrapper {
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
}

.rc-drawer-right {
  top: 0;
  right: 0;
}

.rc-drawer-right .rc-drawer-content-wrapper {
  right: 0;
}

.rc-drawer-right .rc-drawer-handle {
  left: -40px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px 0 0 4px;
}

.rc-drawer-right.rc-drawer-open .rc-drawer-content-wrapper {
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
}

.rc-drawer-right.rc-drawer-open.no-mask {
  right: 1px;
  transform: translateX(1px);
}

.rc-drawer-top,
.rc-drawer-bottom {
  width: 100%;
  height: 0%;
}

.rc-drawer-top .rc-drawer-content-wrapper,
.rc-drawer-bottom .rc-drawer-content-wrapper,
.rc-drawer-top .rc-drawer-content,
.rc-drawer-bottom .rc-drawer-content {
  width: 100%;
}

.rc-drawer-top .rc-drawer-content,
.rc-drawer-bottom .rc-drawer-content {
  height: 100%;
}

.rc-drawer-top.rc-drawer-open,
.rc-drawer-bottom.rc-drawer-open {
  height: 100%;
}

.rc-drawer-top.rc-drawer-open.no-mask,
.rc-drawer-bottom.rc-drawer-open.no-mask {
  height: 0%;
}

.rc-drawer-top .rc-drawer-handle,
.rc-drawer-bottom .rc-drawer-handle {
  left: 50%;
  margin-left: -20px;
}

.rc-drawer-top {
  top: 0;
  left: 0;
}

.rc-drawer-top .rc-drawer-handle {
  top: auto;
  bottom: -40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0 0 4px 4px;
}

.rc-drawer-top.drawer-open .rc-drawer-content-wrapper {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.rc-drawer-bottom {
  bottom: 0;
  left: 0;
}

.rc-drawer-bottom .rc-drawer-content-wrapper {
  bottom: 0;
}

.rc-drawer-bottom .rc-drawer-handle {
  top: -40px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px 4px 0 0;
}

.rc-drawer-bottom.rc-drawer-open .rc-drawer-content-wrapper {
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
}

.rc-drawer-bottom.rc-drawer-open.no-mask {
  bottom: 1px;
  transform: translateY(1px);
}

.rc-drawer.rc-drawer-open .rc-drawer-mask {
  opacity: 0.3;
  height: 100%;
  transform: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}

.rc-drawer.rc-drawer-open .rc-drawer-handle-icon {
  background: transparent;
}

.rc-drawer.rc-drawer-open .rc-drawer-handle-icon:before {
  transform: translateY(5px) rotate(45deg);
}

.rc-drawer.rc-drawer-open .rc-drawer-handle-icon:after {
  transform: translateY(-5px) rotate(-45deg);
}

@media (min-width: 480px) {
  .rc-drawer .rc-drawer-content-wrapper {
    width: 420px;
  }
}