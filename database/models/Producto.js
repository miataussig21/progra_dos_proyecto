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
        createdAt: {
	        type: dataTypes.DATE
        },
        updatedAt: {
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
            Producto.belongsTo(models.Usuario,{
                as: "relacion_pu",
                foreignKey: "usuarios_id"
            }),
            Producto.hasMany(models.Comentario, {
            as: "relacion_pc",
            foreignKey: "producto_id"
            })
        };
        return Producto;

}