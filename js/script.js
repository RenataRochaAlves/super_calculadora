var numberA = document.getElementById('numberA');
var numberB = document.getElementById('numberB');

numberA.addEventListener('keyup', makeCalc);
numberB.addEventListener('keyup', makeCalc);

var form = document.querySelector('form');
form.addEventListener('submit', preventFormDefault);

function preventFormDefault(event) {
  event.preventDefault();
}

function makeCalc() {
  var sum = document.getElementById('soma');
  var sub1 = document.getElementById('sub1');
  var sub2 = document.getElementById('sub2');
  var mult = document.getElementById('mult');
  var div1 = document.getElementById('div1');
  var div2 = document.getElementById('div2');
  var quadA = document.getElementById('quadA');
  var quadB = document.getElementById('quadB');
  var divIntA = document.getElementById('divIntA');
  var divIntB = document.getElementById('divIntB');
  var fatA = document.getElementById('fatA');
  var fatB = document.getElementById('fatB');

  function soma(a, b) {
    return formatNumber(a + b);
  }
  function subtracao(a, b) {
    return formatNumber(a - b);
  }
  function divisao(a, b) {
    if (b === 0) {
      return 'Divisão por 0';
    } else {
      return formatNumber(a / b);
    }
  }
  function multiplicacao(a, b) {
    return formatNumber(a * b);
  }
  function quadrado(a) {
    return formatNumber(a * a);
  }
  function divisoresInteiros(a) {
    var divisores = [];

    for (let i = 1; i <= a; i++) {
      if (a % i === 0) {
        divisores.push(i);
      }
    }
    return divisores.join([(separador = ', ')]) + ' (' + divisores.length + ')';
  }
  function fatorial(a) {
    var result = a;
    if (a > 21) {
      return 'Número muito grande';
    } else {
      for (let i = 1; i < a; i++) {
        result = result * i;
      }
      return formatNumber(result);
    }
  }

  function formatNumber(number) {
    return new Intl.NumberFormat('pt-BR').format(number.toFixed(2));
  }

  if (numberA.value && numberB.value) {
    var intA = parseInt(numberA.value, 10);
    var intB = parseInt(numberB.value, 10);

    sum.innerText = soma(intA, intB);
    sub1.innerText = subtracao(intA, intB);
    sub2.innerText = subtracao(intB, intA);
    mult.innerText = multiplicacao(intB, intA);
    div1.innerText = divisao(intA, intB);
    div2.innerText = divisao(intB, intA);
    quadA.innerText = quadrado(intA);
    quadB.innerText = quadrado(intB);
    divIntA.innerText = divisoresInteiros(intA);
    divIntB.innerText = divisoresInteiros(intB);
    fatA.innerText = fatorial(intA);
    fatB.innerText = fatorial(intB);
  }
}
