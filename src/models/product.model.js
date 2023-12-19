const { conn } = require('../config/conn');

const getAll = async () => {
    try{
        const [rows] = await conn.query('SELECT product.*,category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
        return rows;
    }   catch (error){
        return{
            error:true,
            message: 'Hemos encotrado un error:' + error
        }
    }   finally{
        conn.releaseConnection();
    }

}


const getOne = async (id) => {
    try{
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', id);
        return rows;
    }   catch (error){
        return{
            error:true,
            message: 'Hemos encotrado un error:' + error
        }
    }   finally{
        conn.releaseConnection();
    }

}

const create = async (params) => {
    try {
        const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, img_front, img_back, licence_id, category_id) VALUES ?;', [params]);

        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos crear los valores seleccionados por: ${e}`
        };
        return error;
    }
};

const edit = async (params, id) => {
    try {
        const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);

        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos crear los valores seleccionados por: ${e}`
        };
        return error;
    }
};

const deleteOne = async (params) => {
    try {
        const [rows] = await conn.query('DELETE FROM product WHERE  ?;', params);

        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos crear los valores seleccionados por: ${e}`
        };
        return error;
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    edit, 
    deleteOne
}

