# Evaluate-News-Article

# Evaluate A News Article with Natural Language Processing

project at [Udacity](https://www.udacity.com/course/react-nanodegree--nd019) Become a React Developer Nanodegree program.

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

## Used Tools
* HTML
* CSS
* JavaScript
* Node
* Express
* Webpack
* Interacting with meaningcloud API
* Testing using Jest
* Serverworkers using Workbox

## Installation

1. Clone the repo
```
git clone <repo>
```
2. Install npm
```
npm install
```
3. Install loaders and plugins
```
# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```
4. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

5. Configure environment variables using dotenv package
	1. Install the dotenv package
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	```
	API_KEY=**************************
	```
6. Start the project

### Running the project

- cd into your new folder and run in prod mode 
- `npm install`
- `npm run build-prod` to generate a dist folder for prod
- `npm run start` to run the Express server on port 8085

7. Open browser at http://localhost:8081/
