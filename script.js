function solve(val) {
  var v = document.getElementById('df');
  v.value += val;
}

function result() {
  var num1 = document.getElementById('df').value;
  var num2 = eval(num1);
  document.getElementById('df').value = num2;
}

function AC() {
  var inp = document.getElementById('df');
  inp.value = '';
}

function DEL() {
  var ev = document.getElementById('df');
  ev.value = ev.value.slice(0, -1);
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn input[type="button"]');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const value = this.value;
      if (value === '=') {
        result();
      } else if (value === 'AC') {
        AC();
      } else if (value === 'DEL') {
        DEL();
      } else {
        solve(value);
      }
    });
  });
});
