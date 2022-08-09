const numero = Number(prompt("Digíte um número!"));

if (numero % 2 === 0) {
  if (numero % 3 === 0) {
    console.log("Número divisivel por dois e três");
  } else {
    console.log("Número não é divisivel");
  }
}
console.log(`Número digitado ${numero}`);

if (numero % 2 === 0 && numero % 3 === 0) {
  console.log("É divisivel por dois e por três ");
  numero === 30
    ? console.log("Ufa acertei!!")
    : console.log("Não foi dessa vez, porque o número não é 30");
  switch (numero) {
    case 6:
      console.log("Você digitou seis");
      break;
    case 12:
      console.log("Você digitou doze");
      break;
    case 18:
      console.log("Você digitou dezoito");
      break;
    case 30:
      console.log("Você digitou trinta");
      break;
    default:
      console.log("Número maior que 30 ou menor que 6");
  }
} else {
  console.log("Não é divisivel por dois ou por três");
}

//if ternario
