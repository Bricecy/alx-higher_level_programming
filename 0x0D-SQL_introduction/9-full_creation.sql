-- creates a table second_table in the database hbtn_0c_0 with attributes id,name and score in  MySQL server and add multiple rows.
CREATE TABLE IF NOT EXISTS second_table (
	id INT,
	name VARCHAR(256)
	score INT,
	);

INSERT INTO second_table (
	VALUES(1, "John", 10);
	VALUES(2, "Alex", 3);
	VALUES(3, "Bob", 14);
	VALUES(4, "George", 8);

