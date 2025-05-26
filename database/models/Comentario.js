module.exports = function(sequelize, dataTypes){
    let alias = "Comentario";
    let cols = {
        id: { autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        producto_id: {
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
	        type: dataTypes.DATE
        },
    };

    let config = {
        tableName: "comentarios",
        timestamps: false,
    };

    let Comentario = sequelize.define(alias, cols, config);
        Comentario.associate = function(models){
            Comentario.belongsTo(models.Usuario, {
            as: "relacion_cu",
            foreignKey: "usuarios_id"
        })};

        Comentario.associate = function(models){
            Comentario.belongsTo(models.Producto, {
            as: "relacion_cp",
            foreignKey: "producto_id"

        })};
    
    return Comentario

}