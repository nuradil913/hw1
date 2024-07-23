// const 

// 

// const regexTest = /@w+/gi

// const result = text.match(regexTest)



// let btn = document.getElementById('btn');
// let email = document.getElementById('email');
// let contain = document.getElementById('contain');

// btn.onclick = () => {    
//         alert('вы успешно прошли регистрацию')

// }
//  if () {
    
    

//  }

function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const errorMessage = document.getElementById('errorMessage');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(email)) {
        errorMessage.style.display = 'none';
        alert('Вы успешно прошли регистрацию');

    } else {
        errorMessage.style.display = 'block';
        alert('Неправильно')
    }
}