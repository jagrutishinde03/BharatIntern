document.getElementById('celsiusToFahrenheitBtn').addEventListener('click', function() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var resultDiv = document.getElementById('result');
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
  
    fahrenheitInput.value = fahrenheit.toFixed(2);
    resultDiv.innerHTML = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
  });
  
  document.getElementById('fahrenheitToCelsiusBtn').addEventListener('click', function() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var resultDiv = document.getElementById('result');
  
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5/9;
  
    celsiusInput.value = celsius.toFixed(2);
    resultDiv.innerHTML = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C";
  });
  