//Create database
//Create table

const productdb = () => {

const db = new Dexie('myDb');
db.version(1).stores ({
friends: `name,age`
})

db.open();

}

export default productdb;
