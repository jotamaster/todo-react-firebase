## TODO react firebase

Example of how to make a ToDo with react and firebase

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.



Clone the repo: 
```
git clone https://github.com/jotamaster/todo-react-firebase.git
```

Install the dependencies: 
```
cd my-new-project && npm install
```

We need something to tell Firebase that our app will access it. That thing is authentication key. It can be found at overview page of your firebase project, click Add firebase to your web app. The authorization stuff should show like this.

![ScreenShot](https://cdn-images-1.medium.com/max/1080/1*SbD46AqIkoSsMdyCKJp20w.png)


paste that configuration into the file ./src/firebase/key.js
