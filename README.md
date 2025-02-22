# MongoDB $inc operator error with string field
This example demonstrates an error that occurs when using the `$inc` operator with a string field in MongoDB.  The `$inc` operator is designed to increment numeric fields, and attempting to use it with a string field results in an error.

The solution involves ensuring that the target field is of a numeric type (e.g., NumberInt, NumberLong, or NumberDecimal).