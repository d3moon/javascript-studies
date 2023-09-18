//1° - Não pode começar com: números, letras maiúsculas e símbolos.
//2° - Deve começar com letras no padrão camelCase

//Atividade 1
function mensagem(){
  console.log('Olá Mundo')
}

mensagem()

//Atividade 2
const novaMensagem = ()=> {
  console.log('Prazer em te conhecer!')
}

novaMensagem()

//Atividade 3
const data = () => {
  return new Date().getHours()
}

console.log(`Agora são: ${data()}h`)