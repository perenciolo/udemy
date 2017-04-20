module.exports = () => {
    this.getNoticias = (connection, callback) => {
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = (connection, id, callback) => {
        connection.query('select * from noticias  where id =' + id, callback);
    }

    return this;
}