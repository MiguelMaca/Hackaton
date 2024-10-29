// Diccionario de emociones con descripción y consejos
var emotionsInfo = {
    feliz: {
        description: "Estás sintiendo felicidad, lo cual es excelente. Disfruta el momento y compártelo con otros.",
        tips: ["Realiza actividades que disfrutas", "Comparte tu felicidad con amigos o familiares"]
    },
    triste: {
        description: "Es normal sentirse triste en ocasiones. Tómate el tiempo para procesar tus emociones.",
        tips: ["Habla con alguien de confianza", "Realiza alguna actividad que te relaje"]
    },
    ansioso: {
        description: "La ansiedad puede ser difícil, pero hay maneras de afrontarla.",
        tips: ["Practica ejercicios de respiración", "Evita la cafeína y el alcohol"]
    },
    estresado: {
        description: "El estrés es una respuesta natural, pero es importante manejarlo.",
        tips: ["Haz una pausa y descansa", "Practica algún ejercicio de relajación"]
    },
    enojado: {
        description: "El enojo puede ser intenso. Intenta calmarte antes de reaccionar.",
        tips: ["Respira profundamente", "Realiza alguna actividad física para liberar la tensión"]
    }
};
// Elementos del DOM
var saveMoodButton = document.getElementById("save-mood");
var moodSelect = document.getElementById("mood-select");
var moodInfoDiv = document.getElementById("mood-info");
saveMoodButton === null || saveMoodButton === void 0 ? void 0 : saveMoodButton.addEventListener("click", function () {
    var selectedMood = moodSelect.value;
    if (selectedMood && emotionsInfo[selectedMood]) {
        // Mostrar información y consejos
        var _a = emotionsInfo[selectedMood], description = _a.description, tips = _a.tips;
        moodInfoDiv.innerHTML = "\n      <p><strong>Emoci\u00F3n:</strong> ".concat(description, "</p>\n      <ul>\n        ").concat(tips.map(function (tip) { return "<li>".concat(tip, "</li>"); }).join(''), "\n      </ul>\n    ");
        alert("Estado emocional guardado.");
    }
    else {
        alert("Por favor selecciona una emoción.");
    }
});
// Enviar mensaje al chat anónimo
var sendMessageButton = document.getElementById("send-message");
var chatMessageInput = document.getElementById("chat-message");
sendMessageButton === null || sendMessageButton === void 0 ? void 0 : sendMessageButton.addEventListener("click", function () {
    alert("La funcionalidad de chat anónimo no está implementada aún. Estará disponible en una futura actualización.");
});
// Ejercicio de relajación básico
// Lista de ejercicios de relajación
var relaxationExercises = [
    "Inhala profundamente por 4 segundos, mantén el aire por 4 segundos, y exhala lentamente por 4 segundos. Repite 5 veces.",
    "Encuentra un lugar cómodo para sentarte. Cierra los ojos y concéntrate en tu respiración. Intenta despejar tu mente durante 5 minutos.",
    "Realiza estiramientos suaves: inclina la cabeza hacia un lado y sostén durante 10 segundos, luego cambia de lado.",
    "Relaja los hombros y haz movimientos circulares con ellos hacia adelante y hacia atrás. Repite durante un minuto.",
    "Visualiza un lugar tranquilo, como una playa o un bosque, y trata de imaginar los sonidos, aromas y sensaciones del lugar por unos minutos.",
    "Practica la respiración diafragmática: coloca una mano en el pecho y otra en el abdomen. Inhala profundamente, asegurándote de que solo se eleve el abdomen.",
    "Siéntate cómodamente y estira los brazos hacia adelante. Luego lleva los brazos hacia arriba y respira profundamente. Repite esto varias veces.",
    "Haz una pausa para meditar durante 3 minutos. Concéntrate solo en tu respiración y deja que los pensamientos vayan y vengan sin juzgar."
];
// Elementos del DOM
var relaxationExerciseElement = document.getElementById("relaxation-exercise");
var startRelaxationButton = document.getElementById("start-relaxation");
// Mostrar ejercicio de relajación aleatorio al hacer clic
startRelaxationButton === null || startRelaxationButton === void 0 ? void 0 : startRelaxationButton.addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * relaxationExercises.length);
    relaxationExerciseElement.textContent = relaxationExercises[randomIndex];
});
// Abrir la galería de memes en una nueva pestaña
function openMemeGallery() {
    window.open("meme_gallery.html", "_blank");
}
// Función para alternar el efecto de zoom en una imagen
function zoomImage(img) {
    img.classList.toggle("zoomed");
}
// Lista de mensajes aleatorios
var messages = [
    "Gary, this is a terrible idea, and you’re the only one who would think it’s a good one.",
    "Los momentos más oscuros siempre pueden iluminarse con una antorcha de esperanza",
    "Cree en tu creatividad, porque todo lo que imaginas puede convertirse en realidad.",
    "Construye algo más grande que tú mismo y deja una huella que inspire a otros",
    "El acero más fuerte se forja en las llamas más intensas.",
    "A veces, el valor significa seguir adelante, incluso cuando todo parece perdido",
    "En cada misión, hay un desafío que te hará más fuerte. Acepta el reto y evoluciona.",
    "Recuerda, cada derrota es solo una parte del juego. Aprende de ella y vuelve más poderoso.",
    "Cada gran héroe tiene un comienzo humilde.",
    "La verdadera fortaleza está en el corazón."
];
// Elementos del DOM
var randomMessageElement = document.getElementById("random-message");
var randomMessageTrigger = document.getElementById("random-message-trigger");
// Cambiar mensaje al hacer clic en la imagen
randomMessageTrigger === null || randomMessageTrigger === void 0 ? void 0 : randomMessageTrigger.addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * messages.length);
    randomMessageElement.textContent = messages[randomIndex];
});
