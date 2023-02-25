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

