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
