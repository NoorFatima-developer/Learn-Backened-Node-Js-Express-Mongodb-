i--  show dbs 
ii-- show collections

lkin show collections krny sy ye mjhy kuch dekhyega nahie ku k ye admin ka data hai and osko access hai so mjsy hidden hai iskye mai apni db bana skti o...

<!-- create own database -->

iii-- use noor
iv-- show dbs(abi noor db k andr kuch write ni kea that's why kuch b nahie kryga...)

ab mai collection banati o jismai mai data insert krskogi..
and yahan meny collection ka name students rkha hai...
v-- db.students.insertOne({name: "noor", age: "23", description : "This is me Noor Ftaima..."})
vi-- show collections
vii-- db.students.find()

<!-- So simpley summary how can create apna db.. -->

i--db.db_name.insertOne({name: "noor", age: "23", description : "This is me Noor Ftaima..."}) 
ii-- use db_name(iss sy hum apji db mai switch kr jygy..)
iii-- show collections(iss sy wo collection ka name batyega)
iv-- db.db_name.find() (iss sy wo collection k andr jo data insert kea hai wo dekhyega...)
<!-- And aghr 1 e sath zada objects bejny hain tu i can use this: -->
v-- db.students.insertMany([{name: "noor", age: "23", description: "This is me Noor"}, {name: "hira", age: "30", location: "Lahore"}])
vi-- db.students.findOne({name: "noor"}) ---> (iss sy wo bss pehla noor wala obj e dekhyega aghr meny noor k nam sy 1 sy zda b banaye hain tu)
vi-- db.students.find({name: "noor"}).limit(1) ----> (hum limit b use krskty thy...)
vii-- db.students.updateOne({name : "noor"}, {$set{name: "Noorah"}})