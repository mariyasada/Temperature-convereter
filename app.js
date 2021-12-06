const CelsiusInput = document.querySelector("#celsius");
const fahrenheitInput =document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const rankineInput = document.querySelector("#rankine");
const inputs = document.querySelectorAll(".inputs");

for(let i=0; i< inputs.length;i++)
{
    var input = inputs[i];
    // console.log(input);
    input.addEventListener("input", (input) => {     //it points out a selected input element and takes that element's value, you can write e,k whatever instead of input enclosed with bracket
        var valueOfInput = parseFloat(input.target.value);
        var nameOfInput = input.target.name;
        // console.log(valueOfInput);
        // console.log(input.target.name);

        switch (nameOfInput) {

            case "celsius":
                fahrenheitInput.value = (valueOfInput * 1.8) + 32;
                kelvinInput.value = valueOfInput + 273.15 ;
                rankineInput.value =  (valueOfInput + 273.15) * 1.8 ;
                break;

            case "fahrenheit":
                 CelsiusInput.value = (valueOfInput - 32) / 1.8;
                 kelvinInput.value = ((valueOfInput - 32) / 1.8 )+ 273.15 ;
                 rankineInput.value =  (valueOfInput + 459.67);
                 break;

            case "kelvin":
                 CelsiusInput.value = (valueOfInput - 273.15);
                 kelvinInput.value = ((valueOfInput - 273.15) * 1.8) + 32 ;
                 rankineInput.value =  (valueOfInput * 1.8);
                 break;

            case "rankine":
                 CelsiusInput.value = (valueOfInput - 491.67)* (5/9);
                 kelvinInput.value = (valueOfInput - 459.67);
                 rankineInput.value =  (valueOfInput * (5/9));
                 break;
        
        }
    })
}

