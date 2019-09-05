# VirtualDOM

is tree like object
this idea of a unique directional data flow means that any time we want
something to change on our Web page. the state has to change or the data has to change in our app

should have unique key, because the react need to know what element need to be updated

In the previous lesson, you may have seen the strange syntax: import { ReactComponent as Logo }

This is a a new special syntax when importing SVG in React. The ReactComponent import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename. You can read more about it here, but keep in mind that this is a React library special syntax:

https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files

3 important principle

1. decide on components
2. decide t he state and where it lives
3. what changes when state changes

# firebase

firebase have two different object: queryReference object and Snapshot object

DocumentReference vs CollectionReference
we use documentref object to perform our CURD methods. the documentRef methods are .set(), get(), .update() and delete() respectively

we can also add documents to cllections using the collectionRef object using the add() method. // collectionRef.add({//value" prop})

we get the snapshotObject from the referenceObject using the get() method. ie. documentRef.get() or collectionRef.get

documentRef returns a documentSnapshot object.
collectionRef returns a querySnapshot object.

DocumentSnapshot

we get a documentSnapshot object from our documentReference object.

the documentSnapshot object allows us to check if a document exists at this query using the .exists property which returns a boolean

we can also get the actual properties on the object by calling the .data() method, which returns us a json object of the document

# Redux

3 principles

1. Single source of truth
2. State is read only
3. Changes using pure function

a pure function is something that receives an input and always returns an output that is predectable

redux flow
action -> root reducer --> store --> DOM changes

action: is something that a user does such as clicking on a button or a drop down menu and what happens in redux is as soon as a user clicks on something a button and creates an action

reduder: is simply a function, pure function that receives an input which is the action so the user just clicked on a button and creates an output and this output is the state or the store as we call it in redux which is the entire state of the app. so as it goes through the function the store gets updated and react, because it notices this state change then the DOM changes

flux patern architecture: software is used as a way to make sure that we are able to solve problems in a logical sense and in a organized fashion in this flux pattern which inspired the library redux

action --> dispatcher --> store --> view

reselector: have 2 types:
the first is called an input selector that doesn't use create selector, and the second type is called an output selector that
does use input selectorand creates selector to build themselves

- all an input selector is it is a function that usually take this naming structure of select, that gets the whole state and just returns a slice of it one layer

setting buildpack in heroku: heroku create crwn-clothing-live-test --buildpack https://github.com/mars/create-react-app-buildpack.git

using BEM - block element modifier, it's a style of naming your css so that you follow a certain format know as the block element modifier

style component library

# firebase

- QueryReference, snapshot and security rules
  a Query is a request we make to firestore to give us something from the database.

FireStore returns us two types of objects: reference and snapshot. of these object, they can be either document or collection version

firestore will always return us these object, event if nothing exists at from that query

- a QueryReference object is an object that represents the 'current' place in the database that we are querying

we get them by calling either:

```
firestore.doc('/users/:userId');
firestore.collections('/users/');
```

the queryReference object does not have the actual data of the collection or document. It instead has properties that tell us details about it, or the method to get the snapshot object which gives us the data we are looking for

DocumentReference vs CollectionReference
we use documentRef ojbection to perform our CRUD method. the documentRef methods are .set, .get(), .update() and .delete() respectively.

we can also add documents to collections using the collectionRef object using the .add() method

```
collectionRef.add({prop})
```

we get the snapshot object from the referenct object using the .get() method. ie. documentRef.get() or collectionRef.get()

documentRef returns a documentSnapshot object.
collectionRef return a collectionSnapshot object.

DocumentSnapshot

we get a documentSnapshot object from our documentRef objecgt

the documentSnapshot object allow us to check if a document exists at this query using the .exist() property which return a boolean.

we can also get the actual properties on the object by calling the .data() method, which return us a JSON object of the document

querySnapshot
we get a querySnapshot object from our collectionRef object. we can check if there are any documents in the collection by calling the .empty() property which returns boolean.

we can get all the document in the collection by calling the .docs property. It returns an array of our documents as documentSnapshot object.

Observables + observer Pattern

redux thunk

write a function that retuns a function that gets dispatch in it so that whenever dispatch is called it will fire multiple action.
