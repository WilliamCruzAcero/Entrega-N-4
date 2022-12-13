import express from 'express' 
import Productos from './api/productos.js'

let productos = new Productos()

const app = express()

app.use(express.static('plublic'))

const router = express.Router()
app.use('/api', router)

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/productos/', (req, res) => {
    res.json(productos.listarAll)
})

router.get('/productos/:id', (req, res)=> {
    let {id} = req.params
    res.json(productos.listar(id))
})

router.post('/productos/agregar', (req, res) =>{
    let producto = req.body
    productos.agregar(producto)
    res.json(producto)
})

router.put('/productos/actualizar/:id', (req, res) => {
    let {id} = req.params
    let producto = req.body
    productos.actualizar(producto, id)
    res.json(producto)
})

router.delete('/prodoctos/eliminar/:id', (req, res) => {
    let {id} = req.params
    let producto = productos.eliminar(id)
    res.json(producto)
})

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})
server.on("error", error => console.log(`Error en el servidor ${error}`))