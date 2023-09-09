const hora = 19.00

if(hora >= 17.00 && hora < 19.00){
    console.log('Está quase na hora do remédio!')
}else if(hora >= 19.01 && hora <= 19.59){
    console.log('Está na hora do remédio!')
}else{
    console.log('Tente prestar mais atenção nas coisas! A hora do remédio já passou.')
}