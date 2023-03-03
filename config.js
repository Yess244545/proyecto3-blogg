require('dotenv').config()

const configs ={
    api:{
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        develpment:{//*Desarrollo
                dialect: 'postgres',
                host:'localhost',
                username:'postgres',
                password:'root',
                port:5432,
                database: 'post-db',
                define:{
                    timestamps: true, 
                    underscored:true, 
                    underscoredAll: true
                }
        },
        test:{//*test

        },
        production:{//*Produccion

        }
    }
}

module.exports=configs