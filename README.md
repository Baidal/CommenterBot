# CommenterBot
El propósito de este "bot" es el de añadir comentarios de forma automática a una publicación de instragram, con el fin de participar en un sorteo en el que se requiera etiquetar
a cuantas más personas mejor. De esta forma, el bot, a partir de las personas a las que sigues, añade comentarios a una publicación con el formato @ + username, donde username
es el nombre de usuario de los usuarios a los que sigues.

## Uso
Para usar este bot, primero hay que copiar el archivo .env.example en un archivo .env, tal como sigue:
```
IG_USERNAME=
IG_PASSWORD=
MAX_COMMENTS=75
URL=
FOLLOWING_NUMBER=65
```

Donde IG_USERNAME se refiere al usuareio de la cuenta de Instagram, y IG_PASSWORD a la contraseña. Así, estos dos parámetros son indispensables para el funcionamiento del bot.
Los siguientes parámetros son opcionales:
* MAX_COMMENTS indica el número máximo de comentarios que puede realizar el bot.
* URL indica el link de la imagen a comentar.
* FOLLOWING_NUMBER indica el número de comentarios a realizar.

Una vez creado el archivo .env y configurado este, el siguiente paso es ejecutar el bot. Para esto, se puede utilizar el siguiente comando: 
```
npm start
```

En caso de no haber introducido los parámetros "URL" o "FOLLOWING_NUMBER" en el archivo .env, el programa los solicitará. En caso contrario, este se pondrá a añadir los mensajes.
El tiempo de espera entre cada mensaje es de 30 segundos.


## Problemas
* El bot funciona a la perfección, pero Instagram restringe su uso a unos quince comentarios (detecta que es un bot y 
indica que esperes unos cuantos segundos antes de continuar), por lo que en realidad no es de mucha utilidad.
* Las imágenes antiguas no parecen ser encontradas por el bot, por lo que estas deben ser "recientes" (el link de la imagen debe ser https://www.instagram.com/p/sdfGdfnH0oe/
y no https://www.instagram.com/p/BRjcwm9Ai6G_sUWd133fuNXguX-bxz8LXFHwbE0/).
