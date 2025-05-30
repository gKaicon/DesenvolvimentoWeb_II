import './bootstrap';

document.getElementById('eyeSlash').style.display = 'none';
document.getElementById('togglePassword').addEventListener('click', () => {
    let password = document.getElementById('password');

    if (password.type === 'password') {
        password.type = 'text';
        document.getElementById('eye').style.display = 'none'
        document.getElementById('eyeSlash').style.display = 'block'
    } else {
        password.type = 'password';
        document.getElementById('eye').style.display = 'block'
        document.getElementById('eyeSlash').style.display = 'none'
    }
})