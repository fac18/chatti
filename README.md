# chatti

![travis](https://travis-ci.com/fac18/chatti.svg?branch=master)
[![codecov](https://codecov.io/gh/fac18/chatti/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/chatti)

<img src="https://imgur.com/xGUSSRl.jpg" alt="database schema" width="300px">

### Overview

Chatti is an app that helps busy parents engage in quality time with their young children.  The app suggests fun, quick activities to do, which are targeted at children's early stages development goals.


### 👋Team
We are GAP!....

* Gillian: DevOps
* Ayub: UX/UI
* Pat: QA


### 🏁Getting Started 

1. download the project with `git clone https://github.com/fac18/chatti.git`
2. `cd` into the folder
3. run `npm run gap` -> this will npm i the three(!) package.jsons
4. you will need environment variables in the server root for the database url, test database url, and JWT secret: speak to us
5. run `npm run start:all` to simultaneously boot up the server and react app

### 💻Tech Stack
The app is built with:
React, including React router, styled components and Formik form library\
Express\
Bcrypt and JWT for authentication joy\
PostgreSQL (see database schema below)\
Heroku\
Videos and image URLs are hosted externally (e.g. Youtube and Imgur), and their URLs are stored in the database


### 🗄️Database schema
<img src="https://imgur.com/BVlwidp.jpg" alt="database schema" width="1000px">


### 👩‍👦User Stories

See our user stories in Github [here](https://github.com/fac18/chatti/labels/user%20story)

#### 📐Prototype

Our Figma prototype can be found [here](https://www.figma.com/file/x7cFeKTtGpQQfBNwkfg0oX/Chatty?node-id=54%3A607)

<img src="https://imgur.com/DepXu2I.jpg" alt="prototype" width="600px">


### 🏃First Build Sprint

We were able to accomplish a lot of setup in our first build sprint, including:
* React, Express and PostgreSQL setup
* Create an account and login
* Basic layout of all components, some with hard-coded data
* React component testing

### 🏃Second Build Sprint

In the second build sprint we pulled together many pieces, including:
* retrieving and rendering activities from database
* styling
* adding favourites

Team GAP looking serious:\
<img src="https://imgur.com/kZdLSpa.jpg" alt="team gap" width="500px">

### ⏳Unmet goals

Unfortunately there were some original parts of our MVP which had to be taken out of the scope.  These included:
* Adding new activities to the user's profile (according to their preferred settings)
* Sending push notifications to alert user to new activities
* Following up with invitation to rate last activity
* Ability to update user's profile settings (the page is visibile but not interactive)
* Filtering activities list e.g. by type, age range

We were probably too ambitious in what we chose to be our original MVP, especially given the technical difficulty of some of these elements.  We were also managing at a reduced capacity of 3 team members vs our expected 4.
