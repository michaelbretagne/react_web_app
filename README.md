## Burger Builder app

This application uses a lot of **advanced features** of **react** and **redux**.<br>
This app is built along with the instructor from the [react course](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview) hosted on Udemy.com.<br>
It allows users to customize the burger they want.<br>
The burger created is stored in a database handle by **firebase**.<br>
Users have to **sign in** or **login** to check out. Users are required to fill up a form with customer details to submit the request.<br>
A **authentification token**, valid for one hour, is created and stored on firebase and localStorage to allow users to stay logged in after leaving the webpage and have access to the checkout page.

### Libraries used in this project:

* [react](https://reactjs.org/) to build the user interface.
* [redux](https://redux.js.org/) to manage the application state.
* [react-redux](https://github.com/reduxjs/react-redux) to connect redux to the react app.
* [redux-thunk](https://github.com/reduxjs/redux-thunk), middleware to handle async actions.
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) to handle routings in our app.
* [axios](https://github.com/axios/axios) to make HTTP requests.
* [Firebase](https://firebase.google.com/) is used for the backend of the application. It stores the data and it is also used to host the web app.

The web app can be seen live [here](https://react-app-burger-f5cbf.firebaseapp.com/).
