//Inicializamos la red neuronal
var network = new brain.NeuralNetwork();
//Introducimos los datos de entrenamiento
network.train([
    { input: { LarguraSepalo: 5.1, AnchuraSepalo: 3.5, LarguraPetalo: 1.4, AnchuraPetalo: 0.2 }, output: { setosa: 1, versi: 0, virgi:0 } },
    { input: { LarguraSepalo: 4.9, AnchuraSepalo: 3.0, LarguraPetalo: 1.4, AnchuraPetalo: 0.2 }, output: { setosa: 1, versi: 0, virgi:0 } },
    { input: { LarguraSepalo: 4.7, AnchuraSepalo: 3.2, LarguraPetalo: 1.3, AnchuraPetalo: 0.2 }, output: { setosa: 1, versi: 0, virgi:0 } },
    { input: { LarguraSepalo: 4.6, AnchuraSepalo: 3.2, LarguraPetalo: 1.4, AnchuraPetalo: 0.2 }, output: { setosa: 1, versi: 0, virgi:0 } },
    { input: { LarguraSepalo: 7.0, AnchuraSepalo: 3.2, LarguraPetalo: 4.7, AnchuraPetalo: 1.4 }, output: { setosa: 0, versi: 1, virgi:0 } },
    { input: { LarguraSepalo: 6.4, AnchuraSepalo: 3.2, LarguraPetalo: 4.5, AnchuraPetalo: 1.5 }, output: { setosa: 0, versi: 1, virgi:0 } },
    { input: { LarguraSepalo: 6.9, AnchuraSepalo: 3.1, LarguraPetalo: 4.9, AnchuraPetalo: 1.5 }, output: { setosa: 0, versi: 1, virgi:0 } },
    { input: { LarguraSepalo: 5.5, AnchuraSepalo: 2.3, LarguraPetalo: 4.0, AnchuraPetalo: 1.3 }, output: { setosa: 0, versi: 1, virgi:0 } },
    { input: { LarguraSepalo: 6.3, AnchuraSepalo: 3.3, LarguraPetalo: 6.0, AnchuraPetalo: 2.5 }, output: { setosa: 0, versi: 0, virgi:1 } },
    { input: { LarguraSepalo: 5.8, AnchuraSepalo: 2.7, LarguraPetalo: 5.1, AnchuraPetalo: 1.9 }, output: { setosa: 0, versi: 0, virgi:1 } },
    { input: { LarguraSepalo: 7.1, AnchuraSepalo: 3.0, LarguraPetalo: 5.9, AnchuraPetalo: 2.1 }, output: { setosa: 0, versi: 0, virgi:1 } },
    { input: { LarguraSepalo: 6.3, AnchuraSepalo: 2.9, LarguraPetalo: 5.6, AnchuraPetalo: 1.8 }, output: { setosa: 0, versi: 0, virgi:1 } },
])
//Creamos la funcion que actualizara el resultado
function update() {
    //Cogemos los resultados de los inputs
    var entrada = {
        larSepalo: document.getElementById("larSepalo").value,
        anSepalo: document.getElementById("anSepalo").value,
        larPetalo: document.getElementById("larPetalo").value,
        anPetalo: document.getElementById("anPetalo").value
    }
    //La red neuronal trabaja con los datos
    var resultado = network.run(entrada);
    //Mostramos el resultado
    document.getElementById("result").innerHTML  = "Setosa = " + resultado.setosa + "%" +  "<br/>Versicolor= " + resultado.versi + "%" +  "<br/>Virginica= " + resultado.virgi + "%";
}