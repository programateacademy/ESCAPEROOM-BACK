
const multer = require('multer') // declaramos multer para subir archivos
// const sharp = require('sharp') // declaramos sharp para redimensionar imagenes


// const helperImg = (filePath, fileName, size = 300) => {
//     return sharp(filePath)
//         .resize(size)
//         .toFile(`./optimizer/${fileName}`)
// }


const storage = multer.diskStorage({ // declaramos el storage para subir archivos 
    destination: (req, file, cb) => {   // declaramos la funcion destino
    cb(null, './src/storage/imgs') // declaramos la ruta donde se guardaran los archivos
    }, 
    filename: (req, file, cb) => { // declaramos la funcion filename        
        const ext = file.originalname.split('.').pop();
        cb(null, `${file.fieldname}-${Date.now()}.${ext}`)
    }
})

// declaramos la variable uploads  que va hacer nuestro pequeño 
// middleware que lo vamos a inyectar en nuestra ruta que va hacer capas d edetectar
// esta imagen y aplicar todas las estrategias
const upload = multer({ storage }) 

module.exports = upload


