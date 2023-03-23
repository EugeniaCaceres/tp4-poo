do {
  let eleccion_jugador = parseInt(
    prompt("Elija el numero 1 para tijeras, 2 para pierdras y 3 para papel. ")
  );

  let num_aleatorio = Math.floor(Math.random() * 3) + 1;

  let resultados = [
    // tijeras (1)
    [0, -1, 1],
    // piedra (2)
    [1, 0, -1],
    // papel (3)
    [-1, 1, 0],
  ];

  let cosas = ["tijeras", "piedras", "papel"];

  let resultado = resultados[eleccion_jugador - 1][num_aleatorio - 1];
  if (resultado === 1) {
    alert("¡GANASTE! La pc saco: " + cosas[num_aleatorio - 1]);
  } else if (resultado === 0) {
    alert("Empate. La pc saco: " + cosas[num_aleatorio - 1]);
  } else {
    alert(
      "Perdiste. ¿Vuelves a jugar? La pc saco: " + cosas[num_aleatorio - 1]
    );
  }
} while (confirm("¿Quiere seguir jugando"));
