---
title: "Deploy Your React App To Heroku"
date: "March 23, 2018"
slug: "deploy-your-react-app-to-heroku"
---

![](https://shakhorblog.files.wordpress.com/2018/03/heroku.png?w=512)

Before you jump into this tutorial you do need to have a few things installed first before you can start.

#### Requirements:

-   [Node / NPM](https://nodejs.org/en/) --- Click the link and download the installer
-   [Git](https://git-scm.com/downloads) --- Click the link and download the installer
-   [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) --- Click the link and download the installer

#### Steps:

1.  Sign up for [Heroku](https://www.heroku.com/)
2.  Setup our React App for deployment
3.  Create Heroku git repository

* * * * *

### Step 1 --- Sign up For Heroku

![](https://shakhorblog.files.wordpress.com/2018/03/f3f51-1ppwg0zvhu_gyhgmhxi83dw.png?w=1100)

Visit Heroku for free hosting

This step explains itself, we need to sign up for [Heroku](https://www.heroku.com/) before we can do any deployment. So head over to [Heroku](https://www.heroku.com/) and sign up. Once you signed up make sure you head over to your email and confirm your account.

### Step 2 --- Setup React App

![](https://shakhorblog.files.wordpress.com/2018/03/dbe0c-1t-t56mocumwzm2py8xdwgw.png?w=1100)

package.json - Before

Open up your React app (I'm using create-react-app) and open up your package.json file. If your using create-react-app we're going to add a new object called engines. Inside of our engines object we need to specify the versions for npm and node. To do this open up your terminal and type in:

```npm -v```

-   Press enter

```node -v```

-   Press enter

Your versions may be different than mine, but that's fine. Once you specified your engine versions save your file.
```
{ 
  "name": "deploy", 
  "version": "0.1.0", 
  "private": true, 
  "engines": { 
  "npm": "5.7.1", 
  "node": "9.5.0" 
  }, 
  "dependencies": { 
  "react": "^16.2.0", 
  "react-dom": "^16.2.0", 
  "react-scripts": "1.1.1" 
  }, 
  "scripts": { 
  "start": "react-scripts start", 
  "build": "react-scripts build", 
  "test": "react-scripts test --env=jsdom", 
  "eject": "react-scripts eject" 
  } 
} 
```

### Step 3 --- Create Heroku Git Repository

With your terminal still open navigate to your React app folder and change directory into it. Now we need to connect our project to Heroku. If you haven't already installed the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli). To make sure it's installed correctly run this command:

-   ```heroku --version```

You should see your Heroku CLI version. Once that is installed we need to setup up Heroku git repository by running these commands:

1.  ```heroku login (Enter your Heroku credentials)```
2.  ```git init```
3.  ```git add .```
4.  ```git commit -m "initial commit"```
5.  ```heroku create (You should see two links after running this command. Copy the second one)```
6.  ```git remote add heroku *PASTE THE LINK YOU JUST COPIED*```
7.  ```git push heroku master```

* * * * *

Once you run the last command Heroku will start to run some tests on your app. If everything goes right you should see a successful deploy message. Now you're able to navigate to your app by running:

-   heroku open

Anytime you make changes to your app and want to re-deploy the only commands you need to run are:

1.  ```git add .```
2.  ```git commit -m "any message goes here"```
3.  ```git push heroku master```

* * * * *

### Easier Method 😁

![](https://shakhorblog.files.wordpress.com/2018/03/94ad9-1n0wsbavf_snjqyyfin39lw.png?w=1100)

Now that I made you go through all of that process, there is an easier method if you use Github. All you have to do is log into your Heroku account; click "new" then "create new app" and give your app a name. After clicking create you should be greeted with a dashboard for the app you just created. Navigate to the deploy tab and sync your Github account with Heroku. After syncing your Github account and can search for the repository you want to sync with Heroku by scrolling down to "App connected to Github" section and searching for the repository you want to sync. You can also set up automatic deployment, so every time you push to the master branch Heroku will rebuild your app for you.

Enjoy your free hosting!