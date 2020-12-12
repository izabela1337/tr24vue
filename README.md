# tr24vue
vue ver for tr24 w/ shop system

requierments: nodejs v12 installed 

To open:
1. install node_modules for server and client side:  
  1.1 cd /client  
  1.2 npm i  
  1.3 cd /server  
  1.4 npm i  
2. start server by goint into sever directory and running `npm start`  
  2.1 by default, it should be up at port :3000  
  2.2 you can change the port by editing line 15 in /bin/www in server directory, in should look something like this:  
  `var port = normalizePort(process.env.PORT || '3000')` where '3000' is the port used. 
3. start client-side by goint into main client directory and running `npm run serve`  
  3.1 Mind that if you changed the default backend port, you'll have to change baseURL variable in /src/axios/dbModule.js accordingly.
