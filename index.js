require('dotenv').config()
const prompt = require('prompt-sync')()
const utils = require('./utils/utilities')
const Instagram = require('instagram-web-api')
const delay = require('delay');

async function main(){

    //Url de la imagen a comentar
    const url = process.env.URL || prompt('Introduce el link de la imagen a comentar: ')
    //Numero de comentarios que queremos realizar
    const followingNumber = process.env.FOLLOWING_NUMBER || prompt('Introduce el numero de comentarios que deseas realizar(máximo 75): ')
    //Numero de comentarios maximos a realizar
    const maxComments = process.env.MAX_COMMENTS || 75


    //Credenciales
    const username = process.env.IG_USERNAME
    const password = process.env.IG_PASSWORD
    
    //Obtenemos la información de la imagen a comentar
    const media_id = await utils.getImageId(url)

    //Comprobamos si el numero de seguidores es un número
    if(isNaN(followingNumber)){
        console.error("Error: No se ha introducido un número válido. ")
        return
    }

    //Comprobamos que se hayan introducido el usuario y la contraseña en el archivo .env
    if(!username || !password) {
        console.error("Error: No se ha introducido la información del usuario en el archivo .env.")
        return
    }

    //Comprobamos que se haya encontrado la imagen
    if(!media_id){
        console.error("Error: No se ha encontrado la imagen con url: " + url)
        return
    }

    //Creamos el usuario de instagram
    const instagramClient = new Instagram({ username, password})

    try{
        const user = await instagramClient.login()

        //Comprobamos si se ha iniciado sesión
        if(!user.authenticated) {
            console.error("Error: No se ha podido iniciar sesion");
            return
        }

        //Obtenemos los datos de la gente a la que seguimos
        const followings = await instagramClient.getFollowings({userId: user.userId, first: followingNumber})
        
        for(let i = 0; i < i < followings.data.length && i < followingNumber && i < maxComments; i++){
            console.log("Añadiendo el comentario @" + followings.data[i].username + "...")

            await instagramClient.addComment({mediaId: media_id, text: '@' + followings.data[i].username})

            console.log("Comentario numero " + (i + 1) + " añadido.")
            await delay(30000)
        }
        

        console.log(user.credentials.username)
    }catch(e) {
        console.error("Se ha producido el siguiente error: " + e)
    }
        

}

main()