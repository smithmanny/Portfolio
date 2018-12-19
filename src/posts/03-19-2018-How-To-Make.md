---
title: "How To Make A Blog With React & GraphQL"
date: "03-19-2018"
slug: "how-to-make-a-blog-with-react-and-graphql"
---

After hearing all the hype about GraphQL and why developers should start learning it, I finally decided to do some research. I'm not going to go into to much detail, but GraphQL is a query language for your API. If you want to read more about it visit the official link [here](https://graphql.org/). So after reading, I came across a headless-cms that uses GraphQL instead of Rest and thought this would be the best chance for me to really try it out. We're going to build a blog with GrapgQL!

* * * * *

Requirements:

-   create-react-app
-   GraphCMS account (Free)

![](https://shakhorblog.files.wordpress.com/2018/03/f9f51-13oteigk7uaspn93n2iywew.png?w=1100)

Sign up it's free!

### Step 1 --- Setup GraphCMS:

![](https://shakhorblog.files.wordpress.com/2018/03/e88d9-1uqh0g-bk6mbvyp_yhb8ytw.png?w=1100)

GraphCMS Dashboard

Before we start doing any coding, you need to sign up for a free [GraphCMS](https://graphcms.com/) account. We will be using GraphCMS to handle our backend for us. After signing up we're going to make a new project. Click on that project and you'll be greeted with the dashboard page. Don't worry about everything right now, the first thing we need to do is set up a new model. Click "Models" on the side nav bar, then click "Add Content Model" at the top of the page. The only field we need to worry about is display name. Enter "Post" as the display name and the API ID should autofill itself; once your done click save.

#### Adding Fields:

You should now see a new button that says "Add Field" under your Post Model. We're going to add four fields to make a basic blog: Image, Title, Description, and Slug.

Adding Image:

1.  Click "Add Field"
2.  Click "Asset" then "Asset Grid"
3.  Give it the name "Image"
4.  Click next then save

Adding Title:

1.  Click "Add Field"
2.  Click "Text" then "Single Line"
3.  Give it the name "Title"
4.  Click next then save

Adding Description:

1.  Click "Add Field"
2.  Click "Text" then "Rich Text"
3.  Give it the name "Description"
4.  Click next then save

Adding Slug:

1.  Click "Add Field"
2.  Click "Text" then "Slug"
3.  Give it the name "Slug"
4.  Click next then save

![](https://shakhorblog.files.wordpress.com/2018/03/b5c67-127tuqehvduyjcsj8wuvxma.png?w=1100)

Make sure to click "R" on the main Post model and Asset

#### Giving API access:

Once we're finished with our model, we need to give our API access to read our fields. Still, inside your Models view go to Post and click on "R". Make sure "R" is clicked for every field and that "connect" is selected for Image. Make sure to do the same for Asset as well.

#### Creating Dummy Data:

The last step for us inside of our GraphQL is to create some dummy data to show on our front-end. Click on Content then Post on the left side nav bar. You should see a plus icon on the top left. Click it and fill in the data. For the Slug field, you can just put in the Title name with dashes instead of spaces (This is a test = This-is-a-test).

### Step 2 --- Create New React Project:

* If you do not have creact-react-app installed run this command**

``` npm i -g create-react-app ```

Now we can finally code our blog. I did not design this blog to be amazing, so the design is bad, but it gets the job done.

1.  Navigate to where you want to store this project and create a new react project. I'm using create-react-app and I like to keep my projects inside a folder called projects(makes sense). I'm going to call this project "blog". Open up your terminal and type

``` create-react-app blog ```

then press enter and let create-react-app create our project for us.

2\. Once it's finished you need to change directory into your project.

(Press Enter after the command)

``` cd blog ```

3\. Before we can run our App we need to install a few packages.

``` npm i react-router-dom react-apollo graphql-tag apollo-client apollo-link-http apollo-cache-inmemory ```

4\. Now we can finally start our App!

``` npm start ```

### Step 3 --- Start Coding

Now it's time for the fun part, coding our React project! I'm trying to keep this project as simple as possible, so I'm just going to throw all of my files inside the root of my src folder. Usually, I'll create a new folder for components, and etc, but we're not doing that today because it's a very small App.

So with our project running, let's start creating our components.

#### Index.js

Open up your Index.js file inside your src folder and change it to this:

```
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { ApolloClient } from 'apollo-client'; 
import { HttpLink } from 'apollo-link-http'; 
import { InMemoryCache } from 'apollo-cache-inmemory'; 
import { ApolloProvider } from 'react-apollo';
import App from './App'; 
import registerServiceWorker from './registerServiceWorker'; 

const API = 'ENTER_YOUR_API_ROUTE_HERE'; 
const client = new ApolloClient({ 
  link: new HttpLink({ uri: API }), 
  cache: new InMemoryCache() 
 }); 

ReactDOM.render(
  <ApolloProvider client={client}> 
    <App /> 
  </ApolloProvider>, 
  document.getElementById('root')); 

  registerServiceWorker();
  ```

![](https://shakhorblog.files.wordpress.com/2018/03/675a1-1f6fdkmy4q-cnov1wevrpkg.png?w=1100)

For the const variable API, we need to get your GraphCMS API key. Head over back to GraphCMS website and log in. Once logged in scroll down to settings. Inside your settings tab scroll down until you see Endpoints and copy your Simple Endpoint API.

#### Header Component

Inside your src folder create a new file called Header.js and paste this code:
```
import React from 'react';

const Header = () => {
  return <header>Headless CMS</header>;
}

export default Header;
```

#### Landing Component

Make a new file in src folder called Landing.js and paste this code, I'll explain it later.
```
 import React from 'react'; 
 import { Link } from 'react-router-dom'; 
 import { graphql } from 'react-apollo'; 
 import gql from 'graphql-tag'; 
  
 const Landing = ({ data: { loading, allPosts } }) => { 
  if (!loading) { 
    return ( 
      <div className="wrapper"> 
        {allPosts.map(post => ( 
          <article className="content" key={post.id}> 
            <h2>{post.title}</h2> 
            <p dangerouslySetInnerHTML={{ __html: post.description }} /> 
            <Link to={`/post/${post.slug}`}> 
              <button className="btn">Read More</button> 
            </Link> 
          </article> 
        ))} 
      </div> 
    ); 
  } 
  
  return <h2>Loading Posts...</h2> 
 }; 
  
 const allPosts = gql` 
  query allPosts { 
    allPosts { 
      id 
      title 
      description 
      slug 
    } 
  } 
 `; 

 export default graphql(allPosts)(Landing); 
```

That was a lot of code so let me explain it a little. We created a new component called Landing and imported a few packages.

-   react-router-dom (To use the Link to switch between our component views)
-   react-apollo (Used to get our data from GraphCMS API)
-   graphql-tag (Used to get our data from GraphCMS API)

The const variable allPosts is where we are calling to our database to get all of our posts and its fields (id, title, description, and slug) in the form of an array, then we're passing that to our Landing.js data object. The if statement for loading is something that Apollo looks for. If the query is not finished "loading" is set to true and we return

//Landing.js

```<h2>Loading Posts...</h2>```

Once Apollo finishes with the query loading is set to false and then we render all of our blog posts.

#### Post Component

Our Post Component is going to be the same thing just a little different since we only want the post that we clicked on. How we handle this is from the Landing Component when we click on the "read more" button:

//Landing.js
```
<Link to={`/post/${post.slug}`}>
  <button className="btn">Read More</button>
</link>
```

If our slug was "first-post" the Link tag would navigate the user to localhost/post/first-post. This is important because later inside of out Post component we're going to get the slug from the URL.

* * * * *

Create a new file called Post.js and paste this code in:
```
import React from 'react'; 
import { graphql } from 'react-apollo'; 
import gql from 'graphql-tag'; 

const Post = ({ data: { loading, post } }) => { 
  if (!loading) { 
    return ( 
    <article className="wrapper"> 
      <div className="post"> 
        <h1>{post.title}</h1> 
        <img src={post.image.url} alt="Dogs" /> |
        <p dangerouslySetInnerHTML={{ __html: post.description }} /> 
      </div> 
    </article> 
  ); 
} 
  return <h2>Loading article...</h2> 
}; 

const singlePost = gql` 
  query singlePost($slug: String!) { 
    post: Post(slug: $slug) { 
      id 
      slug 
      title 
      description 
      image { 
        url 
    } 
  } 
 } 
 `; 
  
 export default graphql(singlePost, { 
  options: ({ match }) => ({ 
    variables: { 
      slug: match.params.slug 
    } 
  }) 
 })(Post); 
```

Like I said before you can see that we are getting the slug params from the variables object. This code is basically saying we are only looking for a post that matches slug param from the URL.

#### App Component

Open up our App.js file and delete everything and paste this code. Don't worry if you don't know what this code is doing, it's just setting up our routes for us. You can learn more [here](https://reacttraining.com/react-router/).

```
import React from 'react'; |
import { BrowserRouter, Switch, Route } from 'react-router-dom'; |
import Header from './Header'; |
import Landing from './Landing'; |
import Post from './Post'; |
import './App.css'; |

const App = () => ( 
  <BrowserRouter>
    <main> 
      <Header /> 
      <Switch> 
        <Route exact path="/" component={Landing} /> 
        <Route path="/post/:slug" component={Post} /> 
      </Switch> 
    </main> 
  </BrowserRouter> 
); 

export default App; 
```

### Step 4 --- Styling our App (Sort of)

This is something hopefully everybody knows if you're reading this tutorial, if not stop and go learn the basics first...for real. Again to keep this tutorial simple I just posted everything inside my App.css file.
```
* {
 box-sizing: border-box;
 padding: 0;
 margin: 0;
}

body {
 background-color: #F4F4F4;
}

header {
 height: 100px;
 background-color: rgb(211, 206, 206);
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 2.5em;
}

.wrapper {
 max-width: 1500px;
 margin: 0 auto;
}

/* Landing Section */
.content {
 background-color: white;
 margin: 50px auto;
 padding: 1rem;
 box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
}

article h2 {
 text-align: center;
}
article p {
 margin-top: 20px;
}

.btn {
 background-color: transparent;
 border: 1px solid black;
 padding: .5rem 1rem;
 margin: 20px auto 0 auto;
 display: block;
}

/* Post Section */
.post {
 padding: 1rem;
}
.post h1 {
 text-align: center;
 margin: 20px;
}
.post img {
 display: block;
 margin: 0 auto 30px auto;
}
```

### Enjoy your React and GraphQL blog!

You can view the full code [here](https://github.com/smithmanny/React-Blog). (I probably will be updating this App later to make it look more appealing and structuring the code)

![](https://shakhorblog.files.wordpress.com/2018/03/f9501-13nt0aops5jkjtywuk_4yww.png?w=1100)

![](https://shakhorblog.files.wordpress.com/2018/03/c8947-1vuacxx50zarecqjuw_shkg.png?w=1100)
