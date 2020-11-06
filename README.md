# Keeper-App
- Scope of this app was to be more familiar with how to use MERN stack as a full stack web application along with usage of CRUD.

![what-is-mern-stack-architecture](https://user-images.githubusercontent.com/62245004/98396310-99937000-206e-11eb-9ad1-4799d58e8699.png)


## Deployed Version of The App
https://stormy-dusk-01415.herokuapp.com .

## Functionality of The App
- This app is similar to [Google Keep](https://keep.google.com). 
- Users can add notes as many as they wanted.
- They can delete and edit the notes that are taken.
- Additionally editing time will be recorded.

![keeper](https://user-images.githubusercontent.com/62245004/98396762-4b32a100-206f-11eb-8cd3-99c85f3d452c.png)


## What I Have Used
- For the backend server environment, I used [Node.js](https://nodejs.org) with [Express.js](https://expressjs.com) framework to design application layer.
- For the persistence of data, I used [MongoDB](https://www.mongodb.com) as my database to store user's notes.
  - A note schema holds title and content fields.
- For the frontend i used [React.js](https://en.reactjs.org) library to design the client side of the application.
- React hooks especially [useState](https://en.reactjs.org/docs/hooks-reference.html#usestate), [useEffect](https://en.reactjs.org/docs/hooks-reference.html#useeffect) and [useRef](https://en.reactjs.org/docs/hooks-reference.html#useref) are used to increase effectiveness of the application through maintaining(useState), refreshing(useEffect) and reassigning(useRef) amongst component states.
- For deploying the app to [Heroku](https://devcenter.heroku.com), [I followed this article.](https://www.freecodecamp.org/news/deploying-a-mern-application-using-mongodb-atlas-to-heroku).

## Resources I Follow Up
- [Easiest Way to Connect a React Frontend with Node.js](https://medium.com/zero-equals-false/how-to-connect-a-react-frontend-with-node-js-bccb1fb7e2bb).
- [Code splitting](https://en.reactjs.org/docs/code-splitting.html).
- [React Hooks: How to use useEffect()](https://medium.com/javascript-in-plain-english/react-hooks-how-to-use-useeffect-ecea3e90d84f).

## To Use Locally
1. Clone local branch $ git clone -b local https://github.com/onkolahmet/Keeper-App.
2. Run 'npm install' in client folder. 
3. Run 'npm install' in root folder.
4. Run 'npm run dev' in root folder.

