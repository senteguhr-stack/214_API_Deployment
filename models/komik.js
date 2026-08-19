module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("Komik", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sinopsis: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tahun_terbit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        penulis_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: "komik",
        timestamps: true,
    });
    Komik.associate = (models) => {
        Komik.belongsTo(models.Penulis, {
            foreignKey: "penulis_Id",
            as: "penulis",
        });
        Komik.belongsToMany(models.Genre, {
            through: "Komik_genre",
            foreignKey: "komik_Id",
            otherKey: "genre_Id",
            as: "genre",
        });
    };

    return Komik;
};