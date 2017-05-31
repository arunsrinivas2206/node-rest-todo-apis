// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to Mongo server');
	}
	console.log("connected to the mongo db server");

	// db.collection('Todos').find({_id: new ObjectID('592e817c40efc51d90b54a73')}).toArray().then((res) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(res, undefined, 2));
	// }, (err) => {
	// 	console.log('unable to fetch the documents');
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count is ${count}`);
	// }, (err) => {
	// 	console.log('unable to fetch the documents');
	// });

	// db.collection('Users').find({name: 'Arun'}).toArray().then((res) => {
	// 	console.log('User as Arun are ' + JSON.stringify(res, undefined, 2));
	// }, (err) => {
	// 	console.log("Unable to fetch ", err);
	// });

	// db.collection('Todos').insertOne({text: 'Tennis at Motta maadi', completed: false}, (err, res) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(res.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({name: 'Arun', age: 25, location: 'Chennai'}, (err, res) => {
	// 	if(err) {
	// 		return console.log("Unable to insert user ", err);
	// 	}
	// 	console.log(JSON.stringify(res.ops, undefined, 2));
	// 	console.log(res.ops[0]._id.getTimestamp());
	// });


	// Delete data
	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
	// 	console.log(res);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({text: 'dance class'}).then((res) => {
	// 	console.log(res);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({text: 'singing'}).then((res) => {
	// 	console.log(res);
	// });

	// db.collection('Users').deleteMany({text: 'dance class'}).then((res) => {
	// 	console.log(res);
	// });

	// db.collection('Users').deleteMany({name: 'Arun'}).then((res) => {
	// 	console.log(res);
	// });

	db.collection('Users').findOneAndDelete({_id: 123}).then((res) => {
		console.log(res);
	});
	// db.close();
});