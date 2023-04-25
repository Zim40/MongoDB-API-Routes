<br>

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# MongoDB Routing Demonstration

### Table of Contents <br>
***
 [**About**](#about)<br>
 [**Technologies**](#technologies)<br>
 [**Installation**](#installation)<br>
 [**Contributers**](#contributers)<br>
 [**Contact**](#contact)<br>
 [**Licence Information**](#licence)<br>
 [**Demo**](#demo)<br>


## About
This project is designed to demonstrate navigating a [MongoDb](https://www.mongodb.com/) database with a goal to show techniques relating to *CRUD* operations, otherwise known as *Create*, *Read*, *Update* and *Delete*. The goal of this demonstration is to help beginner developers to better understand how using technologies such as [*MongoDb*](https://www.mongodb.com/), [*Mongoose*(*ODM*)](https://mongoosejs.com/docs/) and [*Express*](https://expressjs.com/) can help to simplify traversing a complex and highly scalable database. By the end of this project, developers should have a better udnerstanding of how to use [MongoDb](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/docs/) to perform *CRUD* operations on a database.
***
## Technologies

### **Express**
This project is a demonstration of *CRUD* operations, which stand for *Create*, *Read*, *Update* and *Delete*, Where related to *HTTP* requests these would look like;
``` js
.post(createThought); // Create
.get(getSingleThought) // Read
.put(updateThought) // Update
.delete(deleteThought); // Delete
```
> In the example above we are using [*Express*](https://expressjs.com/) methods to read, add, create and delete entries in our [MongoDb](https://www.mongodb.com/) database.
>
### **MongoDb**
The database technology we are using is [MongoDb](https://www.mongodb.com/) which is a document-orientated NoSQL database, which means it is a type of NoSQL database that uses a document-based data model instead of the traditional table-based model used by relational databases such as *MySQL*.<br>
<br>
Below you will find an example of a NoSQL database which only defines a schema with no model defined to hold the data, by creating this model-less schema we are able to include it in a seperate model named *Thoughts* which will accept the data and populate the *Thoughts* model as a sub-document. This allows the Developer greater freedom to apply data to specific areas of the database without the need to explicitly define models for a Schemas data resulting in fast and more efficient development.   
<details>
  <summary>Example of Reaction Schema with NO MODEL defined</summary>

  ``` js
  const { Schema } = require('mongoose');


const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// Virtual to return formatted Date.
reactionSchema.virtual('formattedDate').get(function() {
    return this.createdAt.toLocaleDateString();
});

module.exports = reactionSchema;

```
</details>

<details>
  <summary>Example of Thought Schema</summary>

  ``` js
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            ref: 'User',
            required: true
        },
        reactions: [reactionSchema] //Note the reaction Schema is included as a field within the Thought Schema.
    }, {
        toJSON: { 
            virtuals: true
        },
        
    }
);

```
</details>

***

### **Mongoose**
[Mongoose](https://mongoosejs.com/docs/) is an Object Data Modelling (ODM) library for MongoDb and Node.js that provides a higher-level abstraction over the traditional MongoDb driver. This library allows the Developer to navigate and issue commands easily and also provides a Schema-based solution to model your application data, aswell and additional validator, middleware and quering features. It also provides features to populate, which means developers can easily reference documents from other collections, and transaction management for performing multiple database operations as a single, atomic unit.

***

### **Node.js**
[Node.js](https://nodejs.org/en/docs) is a Javascript runtime environment built on the V8 engine of the Chrome web browser, it allows developers to run Javascript on the server-side, outside of the browser environment. <br>

Node.js comes with a large library of packages that are frequently used by developers to enhance their web applications, this includes all of the Technologies we discussed above with the exemption of [MongoDb](https://www.mongodb.com/).

***
### **Insomnia**
[Insomnia](https://docs.insomnia.rest/) is a tool for Developers to perform HTTP requests to your server and test routes, view the responses and debug issues in real-time.<br>

Insomnia supports a wide range of HTTP methods, authentication types, and data formats, making it an ideal tool for testing and debugging RESTful APIs.

***

## Installation
To operate this application, navigate to the server.js file and open an intergrated terminal, and run **npm install**.
Once all dependencies are installed you may open [Insomnia](https://docs.insomnia.rest/) and begin testing routes. <br>
**Find Below a list of API endpoints and data entries!**

<details>
  <summary>USER API endpoints</summary>

  ``` js
//   /api/users
router.route('/')
    .get(getUser)
    .post(createUser);

// /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

// JSON Example Data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}

```
</details>
<details>
  <summary>THOUGHTS API endpoints</summary>

  ``` js
// api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

// /api/thoughts/:thoughts
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(postReact);

// api/thoughts//:thoughtId/:reactionId
router.route('/:thoughtId/:reactionId')
    .delete(deleteReact);

// JSON Example Data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}

```
</details>
<br>

>Note! This application uses [MongoDB](https://www.mongodb.com/), you will need to install this database application on your device to successfully connect to the database. Please follow official documentation for installation steps. 
>
## Contributers
This project was the creation of Michael Monaghan as part of Challenge 18 of the curriculum - **University of Adelaide Coding Bootcamp** <br>
[Github Link](https://github.com/Zim40)
## Contact
If you would like to contact this Developer, please use details below:<br>
[Send Email](mailto:michaelm810129@gmail.com)
## Licence
Click the badge for more information relating to this licence.<br>
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
## Demo 

