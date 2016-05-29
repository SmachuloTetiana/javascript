var age = Number(prompt('Enter your age'));
var message = "You are " + getAge(age) ;
alert(message);

function getAge(age){
    var result;
    if(age < 18){
        result = 'young';
    }
    if(age > 60){
        result = 'old';
    }else{
        result = 'edalt';
    }
    
    return result;
}