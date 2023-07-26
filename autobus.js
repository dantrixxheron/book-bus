            var array=[]; //lugares vacíos se guardan como: undefined
            function siReserva() {
                /* ----- Función que verifique si ya está ocupado o almacene EN EL ARRAY ---- */
                    var idreserva=Number(document.getElementById("numreserva").value) -1;
                    let idnombre=(document.getElementById("nreserva")).value;
                    if( idnombre==""|| idnombre == null || /^\s+$/.test(idnombre) || idnombre==Number || idreserva<=-1||idreserva>=45) {
                       alert("Ha introducido parámetros incorrectos, favor de ingresar parámetros reales");
                       var idnreserva=document.getElementById("numreserva");
                       let nombrereserva=document.getElementById("nreserva");
                       nombrereserva.removeAttribute("disabled");
                       idnreserva.removeAttribute("disabled"); 
                       limpiar();
                    } else{
                        if (array[idreserva]==undefined) {
                            alert(`Se ha registrado con el nombre de ${idnombre} en el asiento número ${idreserva+1}`);
                            array_add(); //función que agrega al array
                            recuperar_tabla(); //debería agregarlo visualmente
                            limpiar();
                        } else {
                            alert(`Ese lugar ya está reservado por ${array[idreserva]}`);
                        }
                    }
            }
            function modificar() {
//Rectificar que los parámetros ingresadis sean valores reales y después agregarlos al arreglo y tabla
                var idnreserva=Number(document.getElementById("numreserva").value);
                let nomreserva=((document.getElementById("nreserva")).value);
                if( nomreserva=="" || nomreserva == null || /^\s+$/.test(nomreserva) || nomreserva==Number || idnreserva<=-1||idnreserva>=45) {
                       alert("Ha introducido parámetros incorrectos, favor de ingresar parámetros reales");
                       var idnreserva=document.getElementById("numreserva");
                       let nombrereserva=document.getElementById("nreserva");
                       nombrereserva.removeAttribute("disabled");
                       idnreserva.removeAttribute("disabled");
                       limpiar();
                    } else{
                        if (array[idnreserva-1]!=undefined) {
                            alert(`Se ha modificado correctamente al nombre de ${nomreserva} en el asiento número ${idnreserva}`);
                            array_add();
                            recuperar_tabla();
                        } else{
                            alert("Ese lugar no está reservado aún, haga clic a RESERVAR :)");
                        }
                    }
            }
            function array_add() {
/* ---------------- Funcion que agrega los valores al arreglo --------------- */
                var identificador=Number(document.getElementById("numreserva").value);
                let reserva=((document.getElementById("nreserva")).value);
                array[identificador-1]=reserva;
                
            }
            // Obtener la referencia del elemento body
            var body = document.getElementsByTagName("body")[0];
            var contenedor=document.getElementsByTagName("div")[0];
            // Crea un elemento <table> y un elemento <tbody>
                var tabla   = document.getElementById("tabla");
                var tblBody = document.getElementById("cuerpoT");
                
                function genera_tabla() {
/* ------------ función única, imprime la tabla de posibilidades ------------ */
                var idnreserva=document.getElementById("numreserva");
                let nombrereserva=document.getElementById("nreserva");
                // Crea las celdas
                var tabla=document.createElement("table");
                tabla.setAttribute("id", "tabla");
                var tblBody=document.createElement("tbody");
                tblBody.setAttribute("id", "cuerpoT");
                var thead=document.createElement("thead");
                var th1=document.createElement("th");
                var th1_content=document.createTextNode("Asiento");
                th1.appendChild(th1_content);
                var th2=document.createElement("th");
                var th2_content=document.createTextNode("nombre de la reservación:");
                th2.appendChild(th2_content);
                thead.appendChild(th1);
                thead.appendChild(th2);
                for (var i = 0; i < 44; i++) {
/* ---------------------- Crea las hileras de la tabla ---------------------- */
                    var hilera = document.createElement("tr");
                    hilera.setAttribute("id", `tr${i+1}`);
                    var celda = document.createElement("td");
                    celda.setAttribute("id", `tdu${i+1}`);
                    var celda2 = document.createElement("td");
                    celda2.setAttribute("id", `tdd${i+1}`);
                    var textoCelda = ((i+1)<=9)? document.createTextNode(`0${i+1}`): document.createTextNode(i+1);
                    var textoCelda2=(array[i]==undefined)? document.createTextNode('Disponible'):document.createTextNode(array[i]);
                    if (textoCelda2==`${array[i]}`) {
                        celda2.setAttribute("class", "ocupado");
                        celda.setAttribute("class", "ocupado");
                    } else {
                        celda2.setAttribute("class", "disponible");
                        celda.setAttribute("class", "disponible");
                    }
                    celda.appendChild(textoCelda);
                    celda2.appendChild(textoCelda2);
                    hilera.appendChild(celda);
                    hilera.appendChild(celda2);
                    tblBody.appendChild(hilera);
                }
                tabla.appendChild(thead);
                tabla.appendChild(tblBody);
                contenedor.appendChild(tabla);
                body.appendChild(contenedor);
                var boton=document.getElementById("btnuniclic");
                boton.setAttribute("disabled", true);
                nombrereserva.removeAttribute("disabled");
                idnreserva.removeAttribute("disabled");
            }
            var idnreserva=Number(document.getElementById("numreserva").value);
            let nombrereserva=document.getElementById("nreserva");
            function buttonclick(){
/* ------------------ Desabilitar la segunda caja de texto ------------------ */
                    nombrereserva.setAttribute("disabled", true);
                    //Tomar elemento del boton y reemplazar por otro 
                    var btn2=document.createElement("button");
                    btn2.setAttribute("id", "boteliminar");
                    var btn2_cont=document.createTextNode("Borrar elemento");
                    btn2.appendChild(btn2_cont);
                    btn2.onclick=delete_darray;

                    var btn1=document.getElementById("boteliminar");
                    var btn1paret=btn1.parentNode;

                    btn1paret.replaceChild(btn2,btn1);
            }
            function delete_darray(event) {
/* ----- Tomar valores del numero y borrar el texto visual y en el array ---- */
                var identificador=Number((document.getElementById("numreserva").value));
                var id=identificador-1;
                if (identificador<=0||id>=45||array[id]==undefined) {
                    alert("Favor de ingresar un número correcto o que sí tenga reservación");
                    limpiar();
                } else{
                    alert(`¿Seguro desea eliminar la reservación número ${identificador}?`);
                    /*Eliminar del array*/
                    delete array[id];
                    /*Mostrar elementos actuales del arreglo*/
                    retornar();
                }
                }
                function retornar() {
/* -------------- Volver a activar la caja de texto y el botón -------------- */
                    nombrereserva.removeAttribute("disabled");
                    //Volver a tener el botón de eliminar
                    //Tomar elemento del boton y reemplazar por otro 
                        var btnreturn=document.createElement("button");
                        btnreturn.setAttribute("id", "boteliminar");
                        var btn2_cont=document.createTextNode("Eliminar");
                        btnreturn.appendChild(btn2_cont);
                        btnreturn.onclick=buttonclick;
    
                        var btn1=document.getElementById("boteliminar");
                        var btn1paret=btn1.parentNode;
                        btn1paret.replaceChild(btnreturn,btn1);
                        limpiar();
                        recuperar_tabla();
                }
                function recuperar_tabla() {
/* ---- Aquí vamos a reemplazar toda la tabla de la parte de los nombres ---- */
                for (let i = 0; i <=44; i++) {
                //info del remplazador: id, elemento y texto de reemplazo
                var ncelda2 = document.createElement("td");
                ncelda2.setAttribute("id", `tdd${i+1}`);
                var ncelda=document.getElementById(`tdu${i+1}`);
                var textoCelda2=(array[i]==undefined)? document.createTextNode('Disponible'):document.createTextNode(array[i]);
                if (array[i]==undefined) {
                    ncelda2.setAttribute("class", "disponible");
                    ncelda.setAttribute("class", "disponible");
                } else {
                    ncelda2.setAttribute("class", "ocupado");
                    ncelda.setAttribute("class", "ocupado");
                }
                ncelda2.appendChild(textoCelda2);
                //Info del reemplazado: id y parendnode
                var remcelda2 =document.getElementById(`tdd${i+1}`);
                var pars=remcelda2.parentNode;
                pars.replaceChild(ncelda2,remcelda2);
                limpiar();
            }
            }
            function limpiar() {
/* ------------------------ Limpia las cajas de texto ----------------------- */
                document.getElementById("numreserva").value="";
                document.getElementById("nreserva").value="";
                document.getElementById("numreserva").focus();
            }