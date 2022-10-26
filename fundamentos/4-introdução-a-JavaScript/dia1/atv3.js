const currentHour = 8
let message = ''

if(currentHour>= 22){
    message = 'hora de dormir'
    console.log( message)
} else if (currentHour>= 18 && currentHour <22){
    message = 'hora do jantar'
    console.log( message)

} else if (currentHour>= 14 && currentHour<18){
    message = 'cafe da tarde'
    console.log( message)
} else {
    message = 'fim do texte'
    console.log( message)
}