//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Book = require('../app/model/book');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
    beforeEach((done) => { //Before each test we empty the database
        Book.remove({}, (err) => {
            done();
        });
    });
    /*
      * Test the /GET route
      */
    describe('/GET book', () => {
        it('it should GET all the books', (done) => {
            chai.request(server)
                .get('/book')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });



    /*
     * Test the /POST route
     */
    describe('/POST book', () => {
        it('it should not POST a book without pages field', (done) => {
            let book = {
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                year: 1954
            }
            chai.request(server)
                .post('/book')
                .send(book)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('pages');
                    res.body.errors.pages.should.have.property('kind').eql('required');
                    done();
                });
        });
        it('its Should post book and give success ', (done)=> {
            let book = {
                title: "Oru Deshathinte Kadha",
                author : 'S K pottakkad',
                year : '1960',
                pages : '350'
            }
            chai.request(server).post('/book').send(book).end((err, res)=>{
                res.should.have.status(200);
                console.log("Book", res.body)
                res.body.should.be.a('object');
                res.body.should.have.property("message");
                res.body.should.have.property("message").eql("Book successfully added!");
               
                done();
            })
        })

    });
});