var calculadora = {
	
	pantalla: document.getElementById("display"),
	valorDisplay: "0",
	operacion: "",
	primerValor: 0,
	segundoValor: 0,
	ultimoValor: 0,
	resultado: 0,
	teclaIgual: false,
	
	init: (function(){
		"use strict";
		this.asignarEventosFormatoBotones(".tecla");
		this.asignarEventosFuncion();
	}),
	
	
	asignarEventosFormatoBotones: function(selector){
		"use strict";
		var x = document.querySelectorAll(selector);
		for (var i = 0; i<x.length;i++) {
			x[i].onclick = this.eventoAchicaBoton;
			x[i].onmouseleave = this.eventoVuelveBoton;
		}
	},

	eventoAchicaBoton: function(event){
		"use strict";
		calculadora.AchicaBoton(event.target);
	},

	eventoVuelveBoton: function(event){
		"use strict";
		calculadora.AumentaBoton(event.target);
	},
	
	
	AchicaBoton: function(elemento){
		"use strict";
		var x = elemento.id;
		if (x==="1" || x==="2" || x==="3" || x==="0" || x==="punto" || x==="igual" ) {
			elemento.style="width:28%;";
			
		} else if(x==="mas") {
			elemento.style="width:88%;";
		
		} else {
		elemento.style="width:21%;";
		
		}
	},
	
	AumentaBoton: function(elemento){
		"use strict";
		var x = elemento.id;
		if (x==="1" || x==="2" || x==="3" || x==="0" || x==="punto" || x==="igual" ) {
			elemento.style="width:29%;";
			
		} else if(x==="mas") {
			elemento.style="width:100%;";
			
		} else {
		elemento.style="width:22%;";
		
		}
	},
	

	asignarEventosFuncion: function(){
		"use strict";
		document.getElementById("0").addEventListener("click", function() {calculadora.ingresoNumero("0");});
		document.getElementById("1").addEventListener("click", function() {calculadora.ingresoNumero("1");});
		document.getElementById("2").addEventListener("click", function() {calculadora.ingresoNumero("2");});
		document.getElementById("3").addEventListener("click", function() {calculadora.ingresoNumero("3");});
		document.getElementById("4").addEventListener("click", function() {calculadora.ingresoNumero("4");});
		document.getElementById("5").addEventListener("click", function() {calculadora.ingresoNumero("5");});
		document.getElementById("6").addEventListener("click", function() {calculadora.ingresoNumero("6");});
		document.getElementById("7").addEventListener("click", function() {calculadora.ingresoNumero("7");});
		document.getElementById("8").addEventListener("click", function() {calculadora.ingresoNumero("8");});
		document.getElementById("9").addEventListener("click", function() {calculadora.ingresoNumero("9");});
		document.getElementById("on").addEventListener("click", function() {calculadora.borrarDisplay();});
		document.getElementById("sign").addEventListener("click", function() {calculadora.cambiarSigno();});
		document.getElementById("punto").addEventListener("click", function() {calculadora.ingresoPunto();});
		document.getElementById("igual").addEventListener("click", function() {calculadora.verResultado();});
		document.getElementById("dividido").addEventListener("click", function() {calculadora.ingresoOperacion("/");});
		document.getElementById("por").addEventListener("click", function() {calculadora.ingresoOperacion("*");});
		document.getElementById("menos").addEventListener("click", function() {calculadora.ingresoOperacion("-");});
		document.getElementById("mas").addEventListener("click", function() {calculadora.ingresoOperacion("+");});
	},
	
	
	
	borrarDisplay: function() { 
		"use strict";
	    
	    this.valorDisplay = "0";
		this.operacion = "";
		this.primerValor = 0;
		this.segundoValor = 0;
		this.resultado = 0;
		this.Operación = "";
		this.teclaIgual = false;
		this.ultimoValor = 0;
		this.actualizarDisplay();
	},
	
	ingresoPunto: function(){
		"use strict";
		if (this.valorDisplay.indexOf(".")===-1) {
			if (this.valorDisplay === ""){
				this.valorDisplay = this.valorDisplay + "0.";
			} else {
				this.valorDisplay = this.valorDisplay + ".";
			}
			this.actualizarDisplay();
		}
	},
	
	cambiarSigno: function(){
		"use strict";
		if (this.valorDisplay !=="0") {
			var aux;
			if (this.valorDisplay.charAt(0)==="-") {
				aux = this.valorDisplay.slice(1);
			}	else {
				aux = "-" + this.valorDisplay;
			}
		this.valorDisplay = "";
		this.valorDisplay = aux;
		this.actualizarDisplay();
		}
	},
	
	ingresoNumero: function(valor){
		"use strict";
		if (this.valorDisplay.length < 8) {
		
			if (this.valorDisplay==="0") {
				this.valorDisplay = "";
				this.valorDisplay = this.valorDisplay + valor;
			} else {
				this.valorDisplay = this.valorDisplay + valor;
			}
		this.actualizarDisplay();
		}
	},
	
	ingresoOperacion: function(oper){
		"use strict";
		this.primerValor = parseFloat(this.valorDisplay);
		this.valorDisplay = "";
		this.operacion = oper;
		this.teclaIgual = false;
		this.actualizarDisplay();
	},
	
	verResultado: function(){
		
		"use strict";
		if(!this.teclaIgual){
			this.segundoValor = parseFloat(this.valorDisplay);
			this.ultimoValor = this.segundoValor;
		
			this.realizarOperacion(this.primerValor, this.segundoValor, this.operacion);
		
		} else {
		
		this.realizarOperacion(this.primerValor, this.ultimoValor, this.operacion);
		}
	
		this.primerValor = this.resultado;
	
		this.valorDisplay = "";
	

		if (this.resultado.toString().length < 9){
			this.valorDisplay = this.resultado.toString();
		} else {
			this.valorDisplay = this.resultado.toString().slice(0,8) + "...";
		}
	

		this.teclaIgual = true;		
		this.actualizarDisplay();
	
	},
	
	realizarOperacion: function(primerValor, segundoValor, operacion){
		"use strict";
		switch(operacion){
			case "+": 
				this.resultado = (primerValor + segundoValor);
			break;
			case "-": 
				this.resultado = (primerValor - segundoValor);
			break;
			case "*": 
				this.resultado = (primerValor * segundoValor);
			break;
			case "/": 
				this.resultado = (primerValor / segundoValor);
			
		}
	},
	
	actualizarDisplay: function(){
		"use strict";
		this.pantalla.innerHTML = this.valorDisplay;
	}
	
};

calculadora.init();







