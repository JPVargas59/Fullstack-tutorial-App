const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mysql = require('mysql')



const app = express()
const port = 3000

// MySQL Connection
const mysqlConnectionKeys = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'ng_tanques'
}


// DB stuff
const pool = mysql.createPool(mysqlConnectionKeys)

pool.query('select "Conexión exitosa con la base de datos" as result', (error, results, fields) => {
    if (error) throw error;
    console.log(results[0].result)
})

// DB Generic query as promise
function queryDB(query, queryParams = []) {
    return new Promise((resolve, reject) => {
        pool.query(query, queryParams, (error, results, fields) => {
            if (error) {
                reject({error});
            }
            if (results && results.length > 0) {
                resolve(results);
            } else {
                reject({result: 'Query found 0 results'})
            }
        });
    });
}

// App config setup
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.unsubscribe(express.urlencoded({extended: false}))

// Routes
app.get('/', (req, res) => {
    res.json({text: 'API is in /api/tanks'})
})

app.get('/api/tanks', (req, res) => {
    // List all tanks
    queryDB('SELECT * FROM tanque')
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        console.log(error);
    })
})

i
app.post('/api/tanks', (req, res) => {
    // Create one tank
    queryDB('INSERT INTO tanque set ?', [req.body])
    .then(() => {
        res.json({message: 'Tanque creado'})
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

app.put('/api/tanks/:id', (req, res) => {
    // Update a tank
    const { id } = req.params
    
    queryDB('UPDATE tanque set ? where idTanque = ?', [req.body, id])
    .then(() => {
        res.json({message: `Tanque ${id} actualizado`})
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

app.delete('/api/tanks/:id', (req, res) => {
    // Delete a tank
    const { id } = req.params;
    queryDB('DELETE FROM games WHERE id = ?', [id])
    .then(() => {
        res.json({message: `Tanque ${id} eliminado con éxito`})
    })
    .catch(error => {
        res.status(500).json(error)
    })
})



// App start
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
