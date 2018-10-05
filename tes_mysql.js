var mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'ecommerce'
})
db.connect(()=>{
    console.log('Database Connected to MySQL!')
});

// get data
// var perintah = 'select * from produk_mainan';
var barang = 'Barbie';
// var perintah = `select * from produk_mainan where nama = '${barang}'`;
// var perintah = `select * from produk_mainan where nama = ?`;
var perintah = `select * from produk_mainan where nama < ? and stok < ? `;
db.query(perintah, [100000, 50],(error, hasil)=>{
// db.query(perintah, barang, (error, hasil)=>{
    if(error) throw error;
    console.log(hasil);
})


// send data to MySQL
var data = {
    id: 6,
    nama: 'Balon',
    bert: 0.1,
    stok: 321,
    harga: 10000
}
var perintah = 'insert into produk_mainan set ?';
db.query(perintah, data, (error, hasil)=>{
    if(error) throw error;
    console.log(hasil);
})
db.end();