const validation = (userData)=>{
const errors = {}

if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
    errors.email = 'email no valido'
}

if(!userData.email){
    errors.email = 'ingrese un email'
}

if(userData.email.length > 35){
    errors.email = 'no debe superar los 35 caracteres'
}

if(! /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(userData.password)){
    errors.password = 'clave invalida'
}
if(userData.password.length < 6 && userData.password.length > 10){
    errors.password = 'la clave debe tener entre 6 y 10 caracteres'
}

return errors
}

export default validation