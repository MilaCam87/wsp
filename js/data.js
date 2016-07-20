/* se crean los objetos y se accede a sus atributos, 
cuyos valores se insertan en el html para que existan distintas conversaciones

nombre va en class: name-contact
imagen va en class: panel-list-header  <img> (para grupal)
mensajes va en = 
    nombre en name-author (excepto en grupal)
    contenido en text-author
    fecha en chat-hour

yo está vacio porque recibe los parametros del input, donde pondremos los mensajes

*/




var datos=[
    {
        "nombre": "Laboratoria Chile",
        "imagen": "",
      "mensajes":[
            {"contenido":"El 12 es la graduación",
             "fecha":"14:23"},
            {"contenido":"Cómo van con el portafolio?",
             "fecha":"14:24"},
            {"contenido":"holiwi",
             "fecha":"14:25"},
            {"contenido":"No he hecho nada! ",
             "fecha":"14:25"}],
             "yo":[
            {"contenido":"Las voy a extrañar",
             "fecha":"11:23"},
            {"contenido":"Bien, estoy avanzando",
             "fecha":"09:25"}],
        "tipo": "grupo",
        "integrantes":"Cami, Belén, Aurea, Cote, Laura, +56965676790"
    },
    {
        "nombre": "Doris",
        "imagen": "doris.jpg",
        "mensajes":[
            {"contenido":"Te llevo el cactus mañana",
             "fecha":"11:22"},
            {"contenido":"De qué tipo quieres?",
             "fecha":"11:24"},
            {"contenido":"Tengo varios...",
             "fecha":"11:25"}],
              "yo" :[],
        "tipo":"persona",
        "integrantes": "Doris"
    },
     {
        "nombre": "Blanca",
        "imagen": "blanca.jpg",
        "mensajes":[
            {"contenido":"El trabajo es para mañana",
             "fecha":"11:23"},
            {"contenido":"Lo pueden entregar a las 00",
             "fecha":"09:25"}],
             "yo" :[],
        "tipo":"persona",
        "integrantes": "Blanca"
    },
     {
        "nombre": "Aury",
        "imagen": "aury.jpg",
        "mensajes":[
            {"contenido":"A qué hora hay que entregar el trabajo?",
             "fecha":"Ayer"},
            {"contenido":"No sé si alcanzaré :(",
             "fecha":"Ayer"}],
             "yo" :[],
        "tipo":"persona",
        "integrantes": "Aury"
    },
     {
        "nombre": "Vane",
        "imagen": "vane.jpg",
        "mensajes":[
            {"contenido":"Baja!",
             "fecha":"Miércoles"},
            {"contenido":"¿Vienes?!",
             "fecha":"Martes"}],
             "yo" :[],
        "tipo":"persona",
        "integrantes": "Vane"
    },
     {
        "nombre": "Coni",
        "imagen": "coni.jpg",
        "mensajes":[
            {"contenido":"No te olvides apuntarte al Meetup de Proin! ",
             "fecha":"Lunes"},
            {"contenido":"Es el jueves!",
             "fecha":"Lunes"}],
             "yo" :[],
        "tipo":"persona",
        "integrantes": "Coni"
    },
     {
        "nombre": "Ally",
        "imagen": "ally.jpg",
        "mensajes":[
            {"contenido":"Cómo vas con el trabajo?",
             "fecha":"01/06/16"},
            {"contenido":"No vamos a alcanzar!! :/",
             "fecha":"02/06/16"}],
             "yo" :[],
        "tipo":"persona",
        "integrantes": "Ally"
    },
     {
        "nombre": "Camila",
        "imagen": "camila.jpg",
        "mensajes":[
            {"contenido":"Dale, yo lo hago",
             "fecha":"01/06/16"},
            {"contenido":"Ya está listo!!",
             "fecha":"01/06/16"}],
             "yo" :[],
        "tipo":"persona",
        "integrantes": "Camila"
    },
     {
        "nombre": "Laura",
        "imagen": "laura.jpg",
        "mensajes":[
            {"contenido":"Puse agua para el té!",
             "fecha":"01/06/16"},
            {"contenido":"Está listoooooo!",
             "fecha":"31/05/16"}],
             "yo" :[],
        "tipo":"persona",
        "integrantes": "Laura"
    },
     {
        "nombre": "Cami",
        "imagen": "cami.jpg",
        "mensajes":[
            {"contenido":"Voy bajando!",
             "fecha":"29/05/16"},

        {"contenido":"Dónde estás?",
        "fecha":"29/05/16"}],

             "yo" :[],
        "tipo":"persona",
        "integrantes": "Cami"
    },
      {
        "nombre": "Mitzy",
        "imagen": "mitzy.jpg",
        "mensajes":[
              {"contenido":"Hay agua en la cocina",
             "fecha":"28/05/16"},
             {"contenido":"Corraaaaaaan!",
             "fecha":"28/05/16"}],
                "yo" :[],
             "tipo":"persona",
             "integrantes": "Mitzy"
    }
]






















