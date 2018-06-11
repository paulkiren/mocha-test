Here are the key concepts:

We require the module config to access the configuration file named as the NODE_ENV content to get the mongo db URI parameter for the db connection. This helps us to keep the "real" database clean by testing on another database hidden to our app future users.
The enviroment variable NODE_ENV is test against test to disable morgan log in the command line or it would interfere with the test output.
The last line of code exports the server for testing purposes.
Notice the variables definition using let which makes the variable enclosed to the nearest enclosing block or global if outside any block.
The remaining lines of codes are nothing new, we simply go through requiring all the necessary modules, define the header options for the communication with the server, craete the specific roots and eventually let the server listen on a defined port.

