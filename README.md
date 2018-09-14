#### Overview
  This app was an experiment to do some things with Node.js and Socket.io.  It consists of two views, a `/` route and a `/view` route. The main view allows the user to increment or set a custom number that is then written to a text file. That new number is then updated in the main view, and Socket.io is used to push the updated number to the `/view` page.  The view page is intended to be on a separate tab on a different monitor or viewed on another computer on the same network, since the app listens by IP address.  You will need a `data.txt` file in the root directory of the app for it to work.

  [pkg](https://www.npmjs.com/package/pkg) is used to compile all the files to a binary for running on Mac, Windows, or Linux machines without having to install Node or other depdencies.

#### Running
  ````
  git clone https://github.com/AntonEmery/counter-app
  cd counter-app
  npm install
  npm start
  ````
  Once the app starts your IP address should be displayed in the terminal. Open `your-ip-address:7777` and `your-ip-address:7777/view` in the browser


#### Package the contents into a binary
  ````
  pkg package.json
  ````
  Select the approriate binary file from the three created.
  Be sure to place a `data.txt` in the same directory that binary is being installed in.

#### Technologies Used
  - Node.js - For all the server side code and writing to the text file
  - Pug - basic templating
  - Socket.io - For pushing the updated number from the text file to the `/view` page
  - pkg - Packages the app into a binary for running on various operating systems.


