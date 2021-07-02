// выполнить сложение различных типов (string+boolean, string+number, number+boolean)
flag = true;
str = "Hello!"
console.log(flag+str); // output: string 
console.log(str+123); // output: string
console.log (123+true+'\n'); // output: number 

//Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
console.log(flag*str); // NaN
console.log(str*123); // NaN
console.log (123*true+'\n'); // number 

//Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

console.log(flag/str); // NaN
console.log(str/123); // NaN
console.log (123/true+'\n'); //number

//Выполнить явное преобразование(number, string, boolean)

console.log (Number("123"));
console.log(String(1443));
console.log (Boolean(000));

