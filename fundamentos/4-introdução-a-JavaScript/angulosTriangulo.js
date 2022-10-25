function trinagulo (){
    const x = 60
    const z =60
    const y =-60
    let outros = '';

    if (x + z + y === 180){
        return true
    } else if ( x + z + y !== 180){ 
        return false

    } else if (x <0 || y <0 || z <0) {
        return outros = 'Erro angulo invalido'
    } else {
        return outros = 'nao sei oq aconteceu'
    }

} console.log(trinagulo())