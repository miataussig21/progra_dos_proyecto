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
        usuarios_id: {
            type: dataTypes.INTEGER,
            field: "usuarios_id"
            
        },
        comentario: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE,
            field:"createdAt"
        },
        updated_at: {
	        type: dataTypes.DATE,
            field: "updatedAt"
        },
    };

    let config = {
        tableName: "comentarios",
        timestamps: false,
        underscored: true,

    };

    let Comentario = sequelize.define(alias, cols, config);
        Comentario.associate = function(models){
            Comentario.belongsTo(models.Usuario, {
            as: "relacion_cu",
            foreignKey: "usuarios_id"
        }),
            Comentario.belongsTo(models.Producto, {
            as: "relacion_cp",
            foreignKey: "producto_id"

        })};
    
        return Comentario
}