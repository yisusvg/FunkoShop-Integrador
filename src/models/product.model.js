//Ver Todos los productos

//Ver algunos productos

//Crear productos

//Eliminar un producto
const deleteProduct = async (product_id) => {
    try{
        const [rows] = await conn.query('DELETE FROM product WHERE product_id = ?;', [product_id]);
        return rows;
    } catch(error){
        throw error;
    } finally{
        conn.releaseConnection();
    }
   
}



//Editar/actualizar productos

const { conn } = require('../config/conn');

//Agarrar todos los productos

const getAll = async () => {
    try{
        const [rows] = await conn.query('SELECT * FROM product;');
        return rows;
    } catch(error){
        throw error;
    } finally{
        conn.releaseConnection();
    }
   
}

module.exports = {
    getAll,
    deleteProduct
}
