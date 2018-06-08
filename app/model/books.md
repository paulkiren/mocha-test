Our book schema has a title, author, the number of pages, the publication year and the date of creation in the db. I set the versionKey to false since it's useless for the purpose of the tutorial.

NB: the exotic callback syntax in the .pre() function is an arrow function, a function who has a shorter syntax which, according to the definiton on MDN , "lexically binds the this value (does not bind its own this, arguments, super, or new.target). Arrow functions are always anonymous".

Well, pretty much all we need to know about the model so let's move to the routes.

