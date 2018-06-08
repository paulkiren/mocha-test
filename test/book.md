Wow that's a lot of new things, let's dig into it:

You must have noticed the we set the NODE_ENV variable to test, by doing so we change the configuration file to be loaded so the server will connect to the test database and avoid morgan logs in the cmd.
We required the dev-dependencies modules and server itself (Do you remember we exported it by module.exports?).
We defined should by running chai.should() to style our tests on the HTTP requests result, then we told chai to use chai HTTP.
So it starts with "describe" blocks of code for better organizing your assertions and this organization will reflect in the output at command line as we will see later.

beforeEach is a block of code that is going to run before each the describe blocks on the same level. Why we did that? Well we are going to remove any book from the database to start with an empty bookstore whenever a test is run.

