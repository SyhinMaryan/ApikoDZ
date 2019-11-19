const password=document.getElementById('password');
const button=document.getElementById('button');
//Асинхронна функція
button.addEventListener('click',()=>{
	let myPromise = new Promise((resore,reject)=>{
		setTimeout(()=>
		{if(password.value.length>8){
			if(password.value.length<30){
				if(/[a-zA-Z]/.test(password.value)){
					if(/[0-9]/.test(password.value)){
						resore();
					}else alert('Пароль не містить цифр')
					
				}else alert('Пароль не містить букв')
				
			}else alert('За довгий пароль')
			
		}else alert('Занатто короткий пароль')
		reject();
		}
	,500)}).then(()=>{
		alert(".then-->Хороший пароль");
	}).catch(()=>{
		alert('.catch-->error')
	})
})

const arrayPassword=[];
function createPassword(){
const charPassword='1234567890qwertyuioplkjhgfdsazxcvbnm';
let password='';
for(let i=0;i<10;i++){
password+=charPassword[Math.floor(Math.random() * charPassword.length)]
}
arrayPassword.push(password);
}

// Створення десяти паролів
for(let i=0;i<10;i++)
createPassword();
console.table(arrayPassword);

function checkPassword (pas){
	
	if(pas.length>8){
		if(pas.length<30){
			if(/[a-zA-Z]/.test(password.value)){
				if(/[0-9]/.test(password.value)){
					return 'Пароль підходить!!!';
				}else  console.log('Пароль не містить цифр')
				
			}else  console.log('Пароль не містить букв')
			
		}else  console.log('За довгий пароль')
		
	}else console.log('Занатто короткий пароль')

}
document.getElementById('tenpassbutton')
    .addEventListener('click', () => {
        console.time('Promise.all');
        let prom1 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[0]));
        });
        let prom2 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[1]));
        });
        let prom3 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[2]));
        });
        let prom4 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000,checkPassword (arrayPassword[3]));
        });
        let prom5 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[4]));
        });
        let prom6 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[5]));
        });
        let prom7 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[6]));
        });
        let prom8 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[7]));
        });
        let prom9 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000,checkPassword (arrayPassword[8]));
        });
        let prom10 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[9]));
        });

        Promise.all([prom1, prom2, prom3, prom4, prom5, prom6, prom7, prom8, prom9, prom10]).then(values => {
            console.log(values);
            console.timeEnd('Promise.all');
        });
    });

	document.getElementById('tenpassbutton')
    .addEventListener('click', async () => {
        console.time('async/await');
		let prom1 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[0]));
        });
        let prom2 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[1]));
        });
        let prom3 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[2]));
        });
        let prom4 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000,checkPassword (arrayPassword[3]));
        });
        let prom5 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[4]));
        });
        let prom6 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[5]));
        });
        let prom7 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[6]));
        });
        let prom8 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[7]));
        });
        let prom9 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000,checkPassword (arrayPassword[8]));
        });
        let prom10 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, checkPassword (arrayPassword[9]));
        });

        try {
            const result1 = await prom1;
            const result2 = await prom2;
            const result3 = await prom3;
            const result4 = await prom4;
            const result5 = await prom5;
            const result6 = await prom6;
            const result7 = await prom7;
            const result8 = await prom8;
            const result9 = await prom9;
            const result10 = await prom10;

            let newarr = [result1, result2, result3, result4, result5, result6, result7, result8, result9, result10];
            console.log(newarr);

        } catch (err) {
            console.log(err);
        }
        console.timeEnd('async/await');
    });




