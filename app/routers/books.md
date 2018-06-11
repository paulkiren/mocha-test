Here the key concepts:

The routes are no more than standard routes, GET, POST, DELETE, PUT to perform CRUD operations on our data.
In the function updatedBook() we use Object.assign, a new function introduced in ES6 which, in this case, overrides the common properties of book with req.body while leaving untouched the others.
At the end we export the object using a faster syntax which pairs key and value to avoid useless repetitions.
We finished this section and actually we have a working app!