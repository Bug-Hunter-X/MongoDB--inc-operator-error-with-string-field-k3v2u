```javascript
// Correct usage of $inc operator with a numeric field
db.collection.updateOne({ _id: 1 }, { $inc: { numericField: 1 } });

//Ensure the field is of numeric type before using $inc
db.collection.insertOne({ _id: 1, numericField: 0, stringField: "test"});
```