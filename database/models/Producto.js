module.exports = function(sequelize, dataTypes){
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        imagen:{
            type: dataTypes.STRING
        },
        producto:{
            type: dataTypes.STRING
        },
        descripcion:{
            type: dataTypes.STRING
        },
        created_at: {
	        type: dataTypes.DATE
        },
        updated_at: {
	        type: dataTypes.DATE
        },
        usuarios_id: {
            type: dataTypes.INTEGER
        }

    }

        let config = {
        tableName: "productos",
        timestamps: false,
        }

        let Producto = sequelize.define(alias, cols, config);
        Producto.associate = function(models){
            Producto.hasMany(models.Usuario,{
                as: "relacion_pu",
                foreignKey: "usuarios_id"
            })
            return Producto
        }

         Producto.associate = function(models){
            Producto.hasMany(models.Comentario, {
            as: "relacion_pc",
            foreignKey: "producto_id"
            })
        };
        return Producto;

}