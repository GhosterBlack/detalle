/**
 * @typedef meta
 * @prop {string} imagen
 * @prop {string} sonido
 * @prop {string} nombre
 * @prop {string} mensaje
 */

/**
 * @type {meta[]}
 */
const galeria = [
    {
        imagen: "mariaTeran.jpg",
        sonido: "mariaTeran.opus",
        nombre: "Maria Teran",
        mensaje: `Hermana Maria, le agradezco tanto por su amor y cariño.
        Su forma de tratarnos a los jovenes de la congregacion es conmovedora.
        Con usted uno siempre tiene un tema de conversacion.`
    },
    {
        imagen: "segundo.jpg",
        sonido: "segundo.opus",
        nombre: "Segundo",
        mensaje: `Hermano Segundo, le agradezco sus muy buenos comentarios y sus amorosos consejos.
        Pasar esta escuela con usted fue una bendicion de Jehova, que sepa que su ejemplo de constancia
        y determinacion es un ejemplo para todos en la congregacion.`
    },
    {
        imagen: "berta.jpg",
        sonido: "berta.opus",
        nombre: "Berta",
        mensaje: `Querida hermana, usted y su esposo hacen una muy linda pareja. Fue una de las 
        que mas comentarios anote, me parecio que se preparo muy bien para esta escuela, la felicito
        que Jehova la siga bendiciendo con una amistad muy estrecha con el.`
    },
    {
        imagen: "mileida.jpg",
        sonido: "mileida.opus",
        nombre: "Mileida",
        mensaje: `Mi querida amiga, es usted una matica de sinceridad, je, je.
        Hablando en serio, fue un gran privilegio pasar esta escuela codo a codo con usted.
        Escuchar sus experiencias me toco el corazon y hasta me hizo llorar.
        Continue esforzandose por hacer la voluntad de Jehova, que nadie la haga sentir menos.
        Es usted un ejemplo.`
    },
    {
        imagen: "mariaSantiago.jpg",
        sonido: "mariaSantiago.opus",
        nombre: "Maria Santiago",
        mensaje: `Mi querida hermana Santiago, es un placer compartir con usted esta escuela.
        su aguante es una muestra de su fe y la esperanza que tiene en ver cumplida la promesa de Jehova.
        Me alegra tenerla de amiga y hermana en la fe.`
    },
    {
        imagen: "diannis.jpg",
        sonido: "diannis.opus",
        nombre: "Diannis",
        mensaje: `Eres como mi hermana mayor, Diannis, eres un apoyo para la congregacion y para 
        todos tus amigos, sigue esforzandote en pulir tu personalidad para hacerla mas 
        parecida a la de Cristo cada vez mas, lo estas haciendo muy bien.`
    },
    {
        imagen: "jiseth.jpg",
        sonido: "jiseth.opus",
        nombre: "Jiseth",
        mensaje: `Hermana, se nota su esfuerzo por mejorar cada dia, cuidar su familia y a los hermanos
        Tiene una bonita personalidad que seguro agrada a Jehova y a Jesus.`
    },
    {
        imagen: "beatriz.jpg",
        sonido: "beatriz.opus",
        nombre: "Beatriz",
        mensaje: `Hermanita, me parece que es un gran ejemplo de perscistencia
        y dedicacion cristiana, me alegra haber compartido esta escuela con usted.`
    },
    {
        imagen: "carlos.jpg",
        sonido: "carlos.opus",
        nombre: "Carlos",
        mensaje: `Ey, viejo Carlos, gracias por ayudarme a hacer todo esto, eres un gran ejemplo
        en sentido espiritual, sigue esforzandote por perseguir esa meta que te propusiste. Que
        nadie menosprecie jamas tu juventud y tus decisiones por servir a Jehova`
    },
    {
        imagen: "kevin.jpg",
        sonido: "kevin.opus",
        nombre: "Kevin",
        mensaje: `Hola tocayo, como estas, Ja, ja, ja.
        Amigo, eres un muy buen hermano, gracias por los consejos, se nota que te esfuerzas
        por hablar con tacto, gracias por poner en practica el que su habla sea con gracia
        y sazonada con sal. Te felicito amigo, espero verte pronto.`
    },
    {
        imagen: "mara.jpg",
        sonido: "mara.opus",
        nombre: "Mara",
        mensaje: `Hermanita Mara, su agradable actitud y carisma me hizo agarrarle mucho aprecio.
        Escuchar su experiencia y sus comentarios fue una bendicion y un apoyo.`
    },
    {
        imagen: "ramon.jpg",
        sonido: "ramon.opus",
        nombre: "Ramon",
        mensaje: `Querido hermano Ramon, su sonrisa es una muestra de su personalidad tan alegre
        y reconfortante, sus comentarios llenos de conocimiento y preparacion me sirvieron
        para mejorar en mi ministerio, gracias por compartir esta escuela conmigo.`
    },
    {
        imagen: "jonatan.jpg",
        sonido: "jonatan.opus",
        nombre: "Jonatan",
        mensaje: `Manito querido, usted fue muy aplicado con el aseo del salon, eso me hizo llevarme
        una muy buena impresion de usted, compartir el tiempo que compartimos fue muy agradable.
        Siga asi, hermano, creciendo espiritualmente junto con su familia.`
    },
    {
        imagen: "jose.jpg",
        sonido: "jose.opus",
        nombre: "Jose",
        mensaje: `Hombre, hermano, ¿Que le puedo decir a usted? Sin duda es uno de los que mas a aplicado
        esta escuela, ha sido una persona muy obserbadora, se dio cuenta de los puntos buenos de cada
        hermano que conocio en el curso, fue perspicaz al tratar con todos, supo como llegarles al corazon.
        Que Jehova lo siga bendiciendo a usted y a su familia.`
    },
    
    {
        imagen: "leonardo.jpg",
        sonido: "leonardo.opus",
        nombre: "Leonardo",
        mensaje: `Hermano, eres un ejemplo de que aun siendo joven un hermano puede llegar a tener
        responsabilidades importantes en la congregacion, aunque estas no miden tu espiritualidad,
        nadie puede negar que te has esforzado por tenerlas, te animo a que sigas progresando y
        siendo un ejemplo en tu congregacion o en donde sea que Jehova te use.`
    },
    {
        imagen: "milton.jpg",
        sonido: "milton.opus",
        nombre: "Milton",
        mensaje: `Hermano, tu fe, tu bonda y tu amor se vieron evidenciadas en esta escuela.
        Puedo destacar de ti, tu cariño y apacibilidad, fue muy agradable participar contigo
        en esta escuela, espero que tu amistad con Jehova siga creciendo como hasta ahora.`
    },
    {
        imagen: "josue.jpg",
        sonido: "josue.opus",
        nombre: "Josue",
        mensaje: `Amigo Josue, me han hablado muy bien de ti, eres un ejemplo para todos los jovenes como yo.
        Continua en ese camino en el que estas andando, sigue con integridad.
        No perdamos el contacto, amigo, ojala podamos hacer planes para salir a predicar pronto.`
    },
    {
        imagen: "delva.jpg",
        sonido: "delva.opus",
        nombre: "Delva",
        mensaje: `Hermanita, me sorprendio mucho su determinacion por aprender y cumplirle a Jehova.
        Decidio venir a la escuela a pesar de las dificultades que significaba.
        La admiro por su abnegacion y su valor.`
    },
    {
        imagen: "milena.jpg",
        sonido: "milena.opus",
        nombre: "Milena",
        mensaje: `Hermanita, no tuvimos la oportunidad de conversar mucho, pero al escuchar sus comentarios
        notaba su preparacion, su dedicacion y amor por Jehova en cada comentario, espero que haya
        disfrutado mi compañia tanto como yo disfrute la suya en esta escuela.`
    },
    {
        imagen: "coral.jpg",
        sonido: "amira.opus",
        nombre: "Amira",
        mensaje: `Coraaaal... Digo, digo, je, je Amira. Hermaita, fuera de la broma, algo que pude apreciar
        de usted es su aguante y felicidad, si, felicidad, la sonrisa que siempre muestra a los demas
        es algo reconfortante. Gracias por contarnos tus experiencias, fue algo muy agradable y 
        fortalecedor. Seguro su ejemplo animara a toda su familia a seguir sus pasos.`
    },
    {
        imagen: "adria.jpg",
        sonido: "adria.opus",
        nombre: "Adria",
        mensaje: `Querida hermana, sus comentarios y compañia fue fortalecedor, algo que aprendi de usted
        fue a orar mas seguido y tener fe en dichas oraciones, siga orando mucho a Jehova el la escucha
        y la ayudara en todo lo que necesite.`
    },
    {
        imagen: "majo.jpg",
        sonido: "majo.opus",
        nombre: "Maria Jose",
        mensaje: `Hola Majo, te sere sincero, estuve toda la escuela tratando de saber cual era tu 
        representate, ese dato sobre tu edad me sorprendio muchisimo, pero a pesar de que fisicamente
        no aparentas tu edad, se nota que eres una muchacha madura en sentido espiritual, que Jehova
        te siga bendiciendo, hermanita`
    },
    {
        imagen: "lina.jpg",
        sonido: "lina.opus",
        nombre: "Lina",
        mensaje: `Hermanita Lina, fue un autentico placer compartir con usted estos dias.
        su ejemplo me ayudara a seguir creciendo como precursor y como cristiano.
        Siga dandolo todo para Jehova, la queremos mucho.`
    },

    {
        imagen: "georgina.jpg",
        sonido: "georgina.opus",
        nombre: "Georgina",
        mensaje: `Hermanita la felicito por su perseverancia, su fe y su aguante, Jehova la seguira
        protegiendo, usted esta en los brazos de su padre celestial, ¿Quien podria hacerle daño?
        Siga andando con su padre Jehova.`
    },

    {
        imagen: "silvia.jpg",
        sonido: "silvia.opus",
        nombre: "Silvia",
        mensaje: `Manita, la foto es del ultimo dia, se te notan mas los cachetes, ja, ja, ja.
        No ya en serio, que privilegio conocer a una jovencita que se esfuerza por seguir el
        ejemplo de sus padres, sigue asi amiga, que Jehova te siga bendiciendo.`
    },

    {
        imagen: "marlene.jpg",
        sonido: "marlene.opus",
        nombre: "Marlene",
        mensaje: `Hermana, precursoras como usted, dedicadas, fuertes y decididas, son ejemplo
        para todos nosotros los que queremos imitar la actitud del Cristo, Jehova la bendiga
        mi querida hermana.`
    },

    {
        imagen: "rita.jpg",
        sonido: "natividad.opus",
        nombre: "Natividad",
        mensaje: `Hermana Natividad, fue un gusto participar en esta escuela junto a usted,
        le confiezo que la mayor parte de la escuela estuve convencido de que Elizabeth era
        su hija, tal vez por esas vibras de madre amorosa que transmite, siga participando
        en la mision que nuestro Gran Maestro nos dejo.
        
        
        Pd: Su foto esta guardada como rita.jpg`
    },

    {
        imagen: "elizabeth.jpg",
        sonido: "elizabeth.opus",
        nombre: "Elizabeth",
        mensaje: `Hermanita Elizabeth, se te noto tranquilita y callada en la escuela,
        pero me conto un pajarito que tu no eras asi tranquilita... Ja, ja, ja.
        Hermanita, te destacaste en la escuela por dar comentarios concretos que iban al punto,
        te felicito, que Jehova te siga guiando y bendiciendo.
        
        Te manda saludos Hanny, mi prima`
    },
    {
        imagen: "elvira.jpg",
        sonido: "elvira.opus",
        nombre: "Elvira",
        mensaje: `Hola hermanita Elvira, su experiencia fue algo conmovedor, se que Jehova la escucha
        y la protege de todo mal que pueda acontecerle, le quiero decir que es usted una precursora
        ejemplar, siga asi hermana, Jehova y la congregacion la amamos.`
    },
    {
        imagen: "harold.jpg",
        sonido: "harold.opus",
        nombre: "Harold",
        mensaje: `Querido amigo Harold, es usted un gran hermano, un gran amigo y un gran precursor,
        espero poder compartir nuevamente experiencias con usted, algun dia ire por alla con mi familia,
        a su congregacion, siga esforzandose por dar lo mejor de usted a Jehova, sea cual sea su asignacion.`
    },
    {
        imagen: "johana.jpg",
        sonido: "johana.opus",
        nombre: "Johana",
        mensaje: `Johana, hermana, gracias por contarme sus historias, son interesantes y animadoras,
        voy a extrañar escuchar sus comentarios llenos de sentimiento y amor por la verdad.
        Espero que su familia siga creciendo espiritualmente al igual que usted querida hermana.`
    },
    {
        imagen: "brayan.jpg",
        sonido: "brayan.opus",
        nombre: "Brayan",
        mensaje: `Compae, eres un gran amigo, siempre estas dispuesto a escuchar y charlar con los demas,
        tu carisma y tus ocurrencias fueron muy agradables, sin duda eres un hermano en el que se puede
        confiar plenamente.`
    },
    {
        imagen: "diana.jpg",
        sonido: "diana.opus",
        nombre: "Diana",
        mensaje: `Diana, hermana, gracias por tus comentarios y por los buenos ratos que comparti contigo
        y tu esposo, son una familia muy bonita, espero que sigan creciendo espiritualmente, estoy
        agradecido de haberlos conocido.`
    }
    
];
window.onload = ()=> {
    const hoverhill = document.getElementById("hoverhill");
    const equis = document.getElementById("equis");
    const nombre = document.getElementById("nombre");
    const fotos = document.getElementById("fotos");
    const foto = document.getElementById("foto");
    const audio = document.getElementById("audio");
    const parrafo = document.getElementById("parrafo");
    
    equis.onclick = ()=> {
        hoverhill.classList.add("hidden");
        document.body.style.overflow = "";
    }

    galeria.sort(()=> Math.random() - Math.random())

    for (let i = 0; i < galeria.length; i++) {
        const element = galeria[i];
        const nodo = document.createElement("div");
        const nodoImge = document.createElement("nav");
        const img = document.createElement("img");
        const name = document.createElement("p");

        nodoImge.appendChild(img);
        nodo.append(nodoImge, name);

        img.src = "resource/"+element.imagen;
        name.textContent = element.nombre;

        fotos.append(nodo);

        nodo.onclick = ()=> {
            hoverhill.classList.remove("hidden");
            nombre.textContent = element.nombre;
            foto.src = "resource/"+element.imagen;
            audio.src = "resource/"+element.sonido;
            parrafo.innerText = element.mensaje;
            document.body.style.overflow = "hidden";
        }
        
    }

    
}
