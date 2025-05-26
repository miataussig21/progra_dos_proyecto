module.exports = function (sequelize, dataTypes ) {
    let alias = "Usuario"; 
    let cols = {
    id: {
    autoIncrement : true,
    primaryKey : true,
    type : dataTypes.INTEGER
    },
    email: {
    type : dataTypes.STRING
    },

    contraseña: {
        type : dataTypes.STRING
        },

    fecha: {
        type : dataTypes.DATE
        },
    identificacion: {
        type : dataTypes.STRING
        },
    foto: {
        type : dataTypes.STRING
        },
    createdAt: {
        type: dataTypes.DATE
        },
    updatedAt: {
        type: dataTypes.DATE
        },

    deletedAt: {
        type: dataTypes.DATE
        },

    }
    
    let config = {
    tableName: "usuarios",
    timestamps: false,
    underscored: false
    }
    let Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models){
    Usuario.hasMany(models.Comentario, {
        as:'relacion_uc',
        foregin_key: 'usuarios_id'
    })

    Usuario.hasMany(models.Producto, {
    as: 'relacion_up',
    foreignKey: 'usuarios_id'
    })
    
    
    }  
    return Usuario; 
}
 