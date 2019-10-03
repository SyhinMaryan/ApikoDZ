function createTeg(){
	let fragment = new DocumentFragment ();
	divElement = document.createElement('div');
	divElement.id='header';
	divHello=document.createElement('div');
	divHello.innerHTML='Привіт';
	divElement.appendChild(divHello);
	contentElement=document.createElement('div');
	contentElement.innerHTML=' Базовий приклад SPA без використання сторонніх бібліотек.';
	divElement.appendChild(contentElement);
	aTegElementOne=document.createElement('a');
	aTegElementOne.href='#';
	aTegElementOne.innerHTML='Перейти на привітання';
	divElement.appendChild(aTegElementOne);
	aTegElementTwo=document.createElement('a');
	aTegElementTwo.href='#';
	aTegElementTwo.innerHTML='Перейти назад';
	divElement.appendChild(aTegElementTwo);
	fragment.appendChild(divElement);
	return fragment;
};
document.body.prepend(createTeg())


let email = document.getElementById("email");
email.onchange = function (){ 
    let Standard = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!Standard.test(email.value))
    {
        alert("НЕ правильно напиний логін. Спробуйте ще раз!!!");
        email.value = "";
    };
};
let submitForm= document.getElementById('formSubmit');


submitForm.onsubmit=function(){
	    event.preventDefault();
	console.log(password.value+'     '+email.value);
}
let password= document.getElementById('password');
password.onchange=function(){
	if(password.value.length>8){
		if(password.value.length<30){
			if(/[a-zA-Z]/.test(password.value)){
				if(/[0-9]/.test(password.value)){
					
				}else alert('Пароль ге містить цифр')
				
			}else alert('Пароль не містить букв')
			
		}else alert('За довгий пароль')
		
	}else alert('Занатто короткий пароль')
}

