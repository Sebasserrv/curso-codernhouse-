 let root = 'admin'
 let password = '120113'

 const usario_creado = prompt('ingrese un nombre de usuario')
 const contraseña_creada = prompt('ingrese una contraseña')



if (usario_creado == root, contraseña_creada == password) {
    admin()
} else if (usario_creado == '', contraseña_creada == '') {
    alert ('Usted no ingreso alguno de los datos')
}else {
    Usuario_Comun()
}

function Usuario_Comun() {
    alert('Bienvenido '+ usario_creado)
    
    let valor = 1;
    switch (valor) {
      case 1:
        console.log("Valor 1");
        break;
      case 2:
        console.log("Valor 2");
        break;
      case 3:
        console.log("Valor 3");
        break;
      default:
        console.log("Valor Default")
        break;
    }
    
    let seleccionUsuario = parseInt(
      prompt(
        "Que desea comer: \n 1.Una Hamburguesa \n 2.Un Taco \n 3.Un Hot dog \n 4.Unos Nachos"
      )
    );
    if (seleccionUsuario === 1) {
      alert("ya le traeran su Hamburguesa");
    } else if (seleccionUsuario === 2) {
      alert("ya le traeran su Taco");
    } else if (seleccionUsuario === 3) {
      alert("ya le traeran su Hot dog");
    } else if (seleccionUsuario === 4) {
      alert("ya le traeran su Hot dog");
    }
    
    switch (seleccionUsuario) {
      case 1:
        alert("Usted selecciono una Hamburguesa");
        break;
      case 2:
        alert("Usted selecciono un Taco");
        break;
      case 3:
        alert("Usted selecciono un Hot dog");
        break;
      case 4:
        alert("Usted selecciono un Hot dog");
        break;
      default:
        alert("Opción inválida");
        break;
    }
    
}

function admin() {
    alert('Bienvenido de nuevo administrador')
 }
 
