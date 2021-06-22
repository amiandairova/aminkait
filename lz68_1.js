function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Родители разрешили?');
}
}
var age = prompt('Ваш возраст?');
if (checkAge(age)) {
alert('Доступ разрешен');
} else {
alert ('В доступе отказано');
}
//не будет return завершает работу функции , если age > 18 то вернет истину и все , если нет то пропустит if и попадает на return confirm
