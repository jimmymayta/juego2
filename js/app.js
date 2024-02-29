const buttonleft = document.querySelector("#button-left");
const buttonright = document.querySelector("#button-right");
const textquestion = document.querySelector("#text-question");
const buttonresponse = document.querySelector("#button-response");
const textresponse1 = document.querySelector("#text-response-1");
const textresponse2 = document.querySelector("#text-response-2");

const data = [
  {
    question:
      "¿Cómo se llamaba la primera mujer que ha existido sobre la tierra?",
    response: "Eva",
    reference: "Génesis 3:20",
  },
  {
    question: "¿Dónde vivían Adán y Eva?",
    response: "En el Jardín del Edén",
    reference: "Génesis 2:8",
  },
  {
    question: "¿Cuál era el nombre de la esposa de Abraham?",
    response: "Sara",
    reference: "Génesis 17:15",
  },
  {
    question:
      "¿Cómo reaccionó Sara cuando el ángel le dijo a Abraham que tendrían un hijo?",
    response: "Ella se rió",
    reference: "Génesis 18:13",
  },
  {
    question: "¿Cuál fue el profeta al que se tragó un pez grande?",
    response: "Jonás",
    reference: "Jonás 1:17",
  },
  {
    question: "¿Quién dirigió al pueblo para derribar la muralla de Jericó?",
    response: "Josué",
    reference: "Josué 6:8 y 20",
  },
  {
    question: "¿En cuántos días creó Dios todas las cosas?",
    response: "En 6 días y descansó en el séptimo",
    reference: "Génesis 1:31; Génesis 2:1-2",
  },
  {
    question:
      "¿Cómo se le llama al momento en el que el mundo quedó cubierto por agua?",
    response: "El diluvio",
    reference: "Génesis 7:6",
  },
  {
    question: "¿A quién se considera el hombre más fuerte de la Biblia?",
    response: "Sansón",
    reference: "Jueces 14:5-6",
  },
  {
    question: "¿Cuál era el nombre del gigante que David derribó?",
    response: "Goliat",
    reference: "1 Samuel 17:4 y 1 Samuel 17:50",
  },
  {
    question: "¿Dónde clavaron a Jesús?",
    response: "En una cruz",
    reference: "Marcos 15:32",
  },
  {
    question: "¿Cuántos discípulos tenía Jesús?",
    response: "12",
    reference: "Mateo 10:1",
  },
  {
    question: "¿Quién no era un discípulo de Jesús?",
    response: "José",
    reference: "Mateo 10:2-4",
  },
  {
    question: "¿Cómo venció David a Goliat?",
    response: "David hirió a Goliat en la frente con una piedra",
    reference: "1 Samuel 17:49-50",
  },
  {
    question: "¿Qué hizo Jonás y por qué se lo tragó un pez?",
    response: "Por que desobedeció a Dios",
    reference: "Jonás 1",
  },
  {
    question: "¿Dónde colocó Noé a los animales?",
    response: "En un arca",
    reference: "Génesis 7:7-9",
  },
  {
    question: "¿Cuántos animales entraron en el arca de Noé?",
    response: "Una pareja de cada especie",
    reference: "Génesis 7:15-16",
  },
  {
    question:
      "¿Dónde se encuentra en la Biblia 'En el principio creó Dios los cielos y la tierra'?",
    response: "Génesis 1",
    reference: "Génesis 1:1",
  },
  {
    question: "¿Cómo se llamaba la mamá de Jesús?",
    response: "María",
    reference: "Mateo 2:11",
  },
  {
    question: "¿Cómo logró salir de Egipto el pueblo de Israel?",
    response: "El mar se abrió y el pueblo pasó",
    reference: "Éxodo 14:21-23",
  },
  {
    question:
      "¿Qué siguieron los magos de Oriente para encontrar al niño Jesús?",
    response: "Una estrella",
    reference: "Mateo 2:9-11",
  },
  {
    question: "¿Qué quiere decir el nombre Emanuel?",
    response: "Dios con nosotros",
    reference: "Mateo 1:23",
  },
  {
    question: "¿Cómo llamaban al líder de Egipto?",
    response: "Faraón",
    reference: "Génesis 41:14",
  },
  {
    question:
      "¿Cómo se llamaba el líder que liberó a Israel de las manos del Faraón?",
    response: "Moisés",
    reference: "Hebreos 11:23-29",
  },
  {
    question: "¿Cómo se llamaba el hermano de Abel?",
    response: "Caín",
    reference: "Génesis 4:1-2",
  },
  {
    question: "¿Quién es el hombre más viejo mencionado en la Biblia?",
    response: "Matusalén",
    reference: "Génesis 5:27",
  },
  {
    question: "¿Cuántos mandamientos le dio Dios a Moisés?",
    response: "10 mandamientos",
    reference: "Éxodo 20:1-17",
  },
  {
    question: "¿A quién llamaron el 'rey de los judíos'?",
    response: "A Jesús",
    reference: "Mateo 27:37",
  },
  {
    question: "¿Quién avisó a María que ella tendría un hijo?",
    response: "Un ángel",
    reference: "Lucas 1:28-31",
  },
  {
    question:
      "¿Cuáles fueron los regalos que le llevaron los magos del Oriente a Jesús cuando él nació?",
    response: "Oro, incienso y mirra",
    reference: "Mateo 2:11",
  },
  {
    question:
      "¿A quién lo vendieron como esclavo sus hermanos, y luego llegó a ser gobernador de Egipto?",
    response: "José",
    reference: "Génesis 37:23-27, Génesis 41:41-43",
  },
  {
    question: "¿Qué hacía David antes de ser rey?",
    response: "Era pastor de ovejas",
    reference: "1 Samuel 16:11-13",
  },
  {
    question: "¿Cuándo fue que Sansón perdió su fuerza?",
    response: "Cuando le cortaron el cabello",
    reference: "Jueces 16:18-19",
  },
  {
    question: "¿Quién caminó sobre el agua con Jesús?",
    response: "Pedro",
    reference: "Mateo 14:29",
  },
  {
    question: "¿Después de cuántos días Jesús resucitó?",
    response: "3 días",
    reference: "Hechos 10:39-40",
  },
  {
    question: "¿Cuál es el nombre del primer libro de la Biblia?",
    response: "Génesis",
    reference: "",
  },
  {
    question: "¿Cuál es el nombre del último libro de la Biblia?",
    response: "Apocalipsis",
    reference: "",
  },
  {
    question: "¿Dónde nació Jesús?",
    response: "En Belén",
    reference: "Mateo 2:1-2",
  },
  {
    question: "¿Quién era considerado el hombre más sabio del mundo?",
    response: "Salomón",
    reference: "1 Reyes 4:29-30",
  },
  {
    question: "¿Quién fue «el padre de una nación grande»?",
    response: "Abraham",
    reference: "Génesis 18:18",
  },
  {
    question:
      "En la parábola de la oveja perdida,¿qué hizo el pastor cuando una de las ovejas se perdió?",
    response: "Dejó las 99 y fue a buscar a la oveja perdida",
    reference: "Mateo 18:12",
  },
  {
    question: "¿Cómo se llamaba el ángel que se le apareció a María?",
    response: "Gabriel",
    reference: "Lucas 1:26-27",
  },
  {
    question:
      "¿Qué soltó Noé desde el arca para saber si las aguas del diluvio se habían retirado?",
    response: "Una paloma",
    reference: "Génesis 8:8",
  },
  {
    question: "¿Cuándo resucitó Jesús?",
    response: "Al tercer día después de su crucifixión",
    reference: "Hechos 10:39-40",
  },
  {
    question: "¿Cuál animal tentó a Eva en el Jardín del Edén?",
    response: "Una serpiente",
    reference: "Génesis 3:1-5",
  },
  {
    question:
      "¿Qué personaje de la Biblia sufrió mucho, pero nunca negó a Dios?",
    response: "Job",
    reference: "Job 2:9-10",
  },
  {
    question:
      "¿Por qué arrojaron a Sadrac, Mesac y Abednego al horno de fuego?",
    response: "Porque se negaron a adorar a otros dioses",
    reference: "Daniel 3:12",
  },
  {
    question: "¿A quién creó Dios primero, a Adán o a Eva?",
    response: "A Adán",
    reference: "Génesis 2:7-8",
  },
  {
    question: "¿Por qué Adán y Eva se dieron cuenta de que estaban desnudos?",
    response: "Porque comieron del fruto prohibido",
    reference: "Génesis 3:10-11",
  },
  {
    question:
      "En la parábola del hijo pródigo,¿qué le pidió el hijo a su padre?",
    response: "Que le diera su parte de la herencia",
    reference: "Lucas 15:11-12",
  },
  {
    question:
      "¿Cuál fue la reacción del papá cuando el hijo pródigo regresó a casa?",
    response: "Se puso muy alegre con el regreso de su hijo",
    reference: "Lucas 15:11-24",
  },
  {
    question: "¿Qué le pidió Jesús a la mujer samaritana?",
    response: "Agua para beber",
    reference: "Juan 4:4-10",
  },
  {
    question:
      "¿Cuántos panes y peces habían antes de que Jesús los multiplicara?",
    response: "5 panes y 2 pescados",
    reference: "Mateo 14:14-20",
  },
  {
    question:
      "Jacob tenía un cariño especial por su hijo José y por eso le regaló..",
    response: "Una túnica",
    reference: "Génesis 37:3",
  },
  {
    question:
      "¿Qué usaron los hermanos de José para convencer al papá de que a José lo había atacado un animal?",
    response: "Le mostraron una túnica ensangrentada",
    reference: "Génesis 37:31-33",
  },
  {
    question:
      "¿A quién lo colocaron en una cesta y lo dejaron a la orilla de un río cuando era bebé?",
    response: "A Moisés",
    reference: "Éxodo 2:1-3",
  },
  {
    question: "¿Cuál fue el profeta al que arrojaron al foso de los leones?",
    response: "A Daniel",
    reference: "Daniel 6:14-16",
  },
  {
    question:
      "¿Cómo se llama el mar por donde pasaron Moisés y el pueblo de Israel?",
    response: "Mar Rojo",
    reference: "Éxodo 14:21-23 y Éxodo 15:4",
  },
  {
    question: "¿Qué sucedió cuando lanzaron a Daniel al foso de los leones?",
    response: "Un ángel del Señor cerró la boca de los leones",
    reference: "Daniel 6:22",
  },
  {
    question:
      "¿Qué capítulo de la Biblia comienza con la frase 'El Señor es mi pastor'?",
    response: "Salmo 23",
    reference: "Salmo 23",
  },
  {
    question: "¿Cuál fue el discípulo que negó a Jesús 3 veces?",
    response: "Pedro",
    reference: "Juan 18:27",
  },
  {
    question:
      "¿Qué instrumentos usaron Josué y el pueblo para derrumbar las murallas de Jericó?",
    response: "trompetas",
    reference: "Josué 6:20",
  },
  {
    question: "¿Qué sucedió después que Pedro negó a Jesús 3 veces?",
    response: "El gallo cantó",
    reference: "Juan 18:27",
  },
  {
    question: "¿Cuál de estos 3 hombres fue obediente a Dios?",
    response: "Samuel",
    reference: "1 Samuel 2:26",
  },
  {
    question: "¿Cuál era el oficio de Pedro?",
    response: "Pescador",
    reference: "Lucas 5:1-10",
  },
  {
    question: "¿A qué se dedicaba José, el papá terrenal de Jesús?",
    response: "Carpintero",
    reference: "Mateo 13:55",
  },
  {
    question: "¿Jesús dijo que regresará?",
    response: "Sí",
    reference: "Apocalipsis 22:12",
  },
  {
    question: "¿Quién fue el papá de Salomón?",
    response: "David",
    reference: "1 Reyes 11:41-43",
  },
  {
    question: "¿Cuál de estos no fue profeta?",
    response: "Zaqueo",
    reference: "Lucas 19:2",
  },
  {
    question:
      "¿Cuál fue la señal que usó Dios después del diluvio como símbolo de la promesa de que no volvería a destruir al mundo con lluvia?",
    response: "Un arco iris",
    reference: "Génesis 9:15-16",
  },
  {
    question:
      "¿Cómo se llamaba el hombre bajito que se subió a un árbol para poder ver a Jesús?",
    response: "Zaqueo. ",
    reference: "Lucas 19:4-5",
  },
  {
    question:
      "Jesús le untó en los ojos a un ciego barro con saliva y lo envió a lavarse en el estanque de Siloé.¿Qué sucedió después?",
    response: "Pudo ver todo. ",
    reference: "Juan 9:6-7",
  },
  {
    question: "En la entrada triunfal, Jesús entró a Jerusalén montado sobre:",
    response: "un burrito",
    reference: "Mateo 21:5-7",
  },
  {
    question:
      "Cuando Judas traicionó a Jesús,¿cuál fue la señal para que los soldados supieran quién era Jesús?",
    response: "un beso",
    reference: "Mateo 26:48",
  },
  {
    question: "Según dijo Jesús,¿a quiénes pertenece el reino de los cielos?",
    response: "a los niños y los que son como ellos",
    reference: "Mateo 19:14",
  },
  {
    question: "¿Cómo se llamaba el hijo de Abraham, el hijo de la promesa?",
    response: "Isaac",
    reference: "Génesis 17:19",
  },
  {
    question: "¿Cuántas eran las tribus de Israel?",
    response: "12",
    reference: "Éxodo 1:1-4, los 12 hijos de Jacob (Israel)",
  },
  {
    question: "¿Cuántas veces dijo Jesús que debemos perdonar?",
    response: "70 veces 7",
    reference: "Mateo 18:21-22",
  },
  {
    question:
      "¿Cuál era el nombre de la ciudad donde Dios quería que Jonás fuera a predicar?",
    response: "Nínive",
    reference: "Jonás 3:1-2",
  },
  {
    question: "¿Dónde estaba Jesús cuando fue tentado por el diablo?",
    response: "En el desierto",
    reference: "Mateo 4:1",
  },
  {
    question:
      "Cuando uno de los discípulos le cortó la oreja al siervo del sumo sacerdote,¿qué hizo Jesús?",
    response: "Tocó la oreja y lo sanó",
    reference: "Lucas 22:50-51",
  },
  {
    question: "David fue el rey de la nación de..",
    response: "Israel",
    reference: "2 Samuel 5:1-4",
  },
  {
    question: "¿Cómo se llamaba el rey de Babilonia?",
    response: "Nabucodonosor",
    reference: "2 Reyes 24:1",
  },
  {
    question: "¿Cuál era el nombre del rey que perseguía a David?",
    response: "Saúl",
    reference: "1 Samuel 19:1",
  },
  {
    question: "¿Quién mató a Abel?",
    response: "Su hermano",
    reference: "Génesis 4:8",
  },
  {
    question: "¿Quién no murió, sino que Dios se lo llevó?",
    response: "Enoc",
    reference: "Génesis 5:23-24",
  },
  {
    question: "Jesús fue crucificado al lado de cuantas personas",
    response: "2 personas",
    reference: "Mateo 27:38",
  },
  {
    question: "¿Cuál libro escribió Salomón?",
    response: "Proverbios",
    reference: "Proverbios 1:1",
  },
  {
    question: "¿Quién escribió los 10 mandamientos?",
    response: "Dios",
    reference: "Éxodo 24:12",
  },
  {
    question: "Dios es..",
    response: "Padre, Hijo y Espíritu Santo",
    reference: "Mateo 28:19",
  },
  {
    question: "Jesús dijo que el que crea en él y sea bautizado será...",
    response: "salvo",
    reference: "Marcos 16:16",
  },
  {
    question:
      "¿Cuál era el nombre del grupo de religiosos que perseguía a Jesús?",
    response: "Fariseos",
    reference: "Mateo 3:7",
  },
  {
    question:
      "Cuando los discípulos se encontraron en medio de una gran tempestad,¿qué hizo Jesús?",
    response: "Calmó la tempestad",
    reference: "Marcos 4:39",
  },
  {
    question: "¿Cómo se llamaba la suegra de Rut?",
    response: "Noemí",
    reference: "Rut 1:3-4",
  },
];

let question = "";
let response = "";
let reference = "";

const numberrandom = () => {
  return Math.floor(Math.random() * data.length);
};

const clearclass = () => {
  setTimeout(function () {
    textquestion.classList.remove("animate__animated");
    textquestion.classList.remove("animate__bounceIn");

    buttonresponse.classList.remove("animate__animated");
    buttonresponse.classList.remove("animate__slideInUp");
    
    textresponse1.classList.remove("animate__animated");
    textresponse1.classList.remove("animate__zoomIn");
    textresponse2.classList.remove("animate__animated");
    textresponse2.classList.remove("animate__zoomIn");
  }, 1000);
};

const newquestion = () => {
  const dataquestion = numberrandom();
  question = data[dataquestion]["question"];
  response = data[dataquestion]["response"];
  reference = data[dataquestion]["reference"];

  textquestion.textContent = question;
  textresponse1.textContent = response;
  textresponse2.textContent = reference;
};

document.addEventListener("DOMContentLoaded", () => {
  newquestion();

  textresponse1.style.display = "none";
  textresponse2.style.display = "none";
});

buttonleft.addEventListener("click", () => {
  newquestion();

  textquestion.classList.add("animate__animated");
  textquestion.classList.add("animate__bounceIn");

  buttonresponse.classList.add("animate__animated");
  buttonresponse.classList.add("animate__slideInUp");

  textresponse1.style.display = "none";
  textresponse2.style.display = "none";
  buttonresponse.style.display = "block";

  clearclass();
});

buttonright.addEventListener("click", () => {
  newquestion();

  textquestion.classList.add("animate__animated");
  textquestion.classList.add("animate__bounceIn");

  buttonresponse.classList.add("animate__animated");
  buttonresponse.classList.add("animate__slideInUp");

  textresponse1.style.display = "none";
  textresponse2.style.display = "none";
  buttonresponse.style.display = "block";

  clearclass();
});

buttonresponse.addEventListener("click", () => {
  buttonresponse.style.display = "none";
  textresponse1.style.display = "block";
  textresponse2.style.display = "block";

  textresponse1.classList.add("animate__animated");
  textresponse1.classList.add("animate__zoomIn");
 
  textresponse2.classList.add("animate__animated");
  textresponse2.classList.add("animate__zoomIn");
});
