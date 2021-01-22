const mysql = require('mysql2/promise')
const dbConfig = require('../config/db.config')

class Dbconect {

    constructor() {
      //this.connect();

    }
    //Соединение с базой
    async connect(){
       return await mysql.createConnection({host: dbConfig.HOST, user: dbConfig.USER,password: dbConfig.PASSWORD, database: dbConfig.DB});
    }

    //Отключение от бызы
    async disconnect(){
     return await this.connection.end();
    }
    //Выборка
    //поиск одного обекта по id
     async executeById(table, id) {
      this.connection = await this.connect();
      let [rows, fields] = await this.connection.execute('SELECT * FROM `'+table+'` WHERE `id` = ?', [id]); 
      this.disconnect(); 
      return  rows
    }
    ////поиск одного массива по id
    async qweryById(table, id) {
      this.connection = await this.connect();
        let [rows, fields] = await this.connection.query('SELECT * FROM `'+table+'` WHERE `id` = ?', [id]); 
        this.disconnect(); 
         return  rows
      }
    ////поиск всех записей в таблице массив
    async qweryall(table) {
      this.connection = await this.connect();
        let [rows, fields] = await this.connection.query('SELECT * FROM `'+table+'`'); 
        this.disconnect(); 
         return  rows
      }
    //поиск всех записей в таблице объект
    async executeall(table) {
      this.connection = await this.connect();
        let [rows, fields] = await this.connection.execute('SELECT * FROM `'+table+'`'); 
        this.disconnect(); 
         return  rows
      }
      //поиск по значению
      async qweryByValue(table, colum, value) {
        this.connection = await this.connect();
          let [rows, fields] = await this.connection.query('SELECT * FROM `'+table+'` WHERE `'+colum+'` = ?', [value]); 
          this.disconnect(); 
           return  rows[0]
        }

      //вставка
      async insert(table, date){
        this.connection = await this.connect();
         let [rows, fields] = await this.connection.query('INSERT INTO '+table+' SET ?', date);
         this.disconnect(); 
         return rows.insertId;
      }

      //обновление
      async update(table, id, date){
        this.connection = await this.connect();
         let [rows, fields] = await this.connection.query('UPDATE '+table+' SET ? Where ID = '+id, date);
         this.disconnect(); 
         return rows;
      }      

      //удоление
      async delet(table, id){
        this.connection = await this.connect();
         let [rows, fields] = await this.connection.query('DELETE FROM '+table+' WHERE id = ?', [id]);
         this.disconnect(); 
         return rows;
      } 
}

   
  module.exports = Dbconect = new Dbconect();
   //экспортируем наше соединение
