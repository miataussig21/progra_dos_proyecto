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
    created_at: {
        type: dataTypes.DATE
        },
    updated_at: {
        type: dataTypes.DATE
        },

    deletedAt: {
        type: dataTypes.DATE
        },

    }
    
    let config = {
    tableName: "usuarios",
    timestamps: false,
    underscored: true
    }
    let Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models){
    Usuario.hasMany(models.Comentario, {
        as:'relacion_uc',
        foregin_key: 'comentario_id'
    })

    Usuario.belongsTo(models.Producto, {
    as: 'relacion_up',
    foreignKey: 'producto_id'
    })
    
    
    }
    return Usuario;
   }
 