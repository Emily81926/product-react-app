# Immersive Shopping App

This project shows the product list and detail information to the clients, built with React, Javascript, and Bulma CSS framework.

## Project Screen Shots

#### Product List

![image](https://github.com/Emily81926/product-react-app/blob/ebc749a2cdc3fceb2d492791344675643f5c68e7/src/assets/productList.png)

#### Detail Modal

![image](https://github.com/Emily81926/product-react-app/blob/ebc749a2cdc3fceb2d492791344675643f5c68e7/src/assets/detailModal.png)

#### Error Page

![image](https://github.com/Emily81926/product-react-app/blob/ebc749a2cdc3fceb2d492791344675643f5c68e7/src/assets/errorPage.png)

## Features
- Users can see basic product information on Product List, such as title, image and price
- Users click the detail button, will see the detail information, such as category, rating, count and description
- While page loading, will show the loading spinner
- Error page will show, when page cannot get product data from API

## Installation and Setup Instructions
Clone down this repository. You will need `node` and `npm` installed globally on your machine.

#### Installation
1. Download project to local
```
git clone https://github.com/Emily81926/product-react-app.git
```
2. Enter project folder
```
cd product-react-app
```
3. Install package
```
npm install
```
4. Add `.env.local` file in root directory

5. Add API url to `.env.local` (See `.env.example`)
```
REACT_APP_PRODUCT_API= `put in your own product API`
```

#### Develop
```
npm start
```

#### Build
```
npm run build
```

## Dependencies

- `axios`  1.3.3 
- `bulma` 0.9.4
- `env-cmd` 10.1.0
- `react` 18.2.0
- `react-dom` 18.2.0
- `react-error-boundary` 3.1.4
- `react-spinners` 0.13.8

## Reflections

#### What I have learned

 `Framework of Reactjs project`

organize the codes in folders, such as components , pages, context, hooks, assets and so on

`Reactjs function component and hooks`

create function component, apply `useState` and pass the props to manipulate the value, use `useEffect` to make the request right after the component renders, and apply `useContext` to pass the value and method without passing through several component layers

`Bulma CSS framework`

use Bulma framework to style the app, and apply some libraries to accelerate the development , such as Card and Modal component, Hero layer, column styles, and so on

`ErrorHandling`

to prevent the page from crashing due to the server error, I use react-error-boundary to log the error, and add ErrorFallback page when page cannot render the ProductList page

`React-spinner, React-rating-stars component`

use react-spinners and react-rating-stars to build the special styles of these elements

`Suspense and Lazy`

to fill the blank page when component is still rendering, add suspense and lazy method to show the spinner during the suspense time

`Coding style custom setting`

Not only use Prettier and Eslint extensions in vscode, also add prettierrc.json to customize the coding style, such as don’t use the semi colon, use the single quote, make jsx bracket at the same line, and so on
