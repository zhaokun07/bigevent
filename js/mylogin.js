$('.goRegister').on('click', () => {
    $('.form-register').show()
    $('.form-login').hide()
})

$('.goLogin').on('click', () => {
    $('.form-login').show()
    $('.form-register').hide()
})

let form = layui.form
form.verify({
    pwd: [/^[\S]{6,12}$/, '密码必须6-12位，且不能出现空格'],
    rePwd: function (value) {
        let pwd = $('.form-register [name=password]').val()
        if (value != pwd) return '密码不一致'
    }
})

$('.form-register').on('submit', (e) => {
    e.preventDefault()
    console.log(1111);
    $.post(
        'http://ajax.frontend.itheima.net/api/reguser', {
            username: $('.form-register [name=username]').val(),
            password: $('.form-register [name=password]').val()
        }, res => {
            if (res.status !== 0) return console.log(res.message);
            console.log('注册成功');
        })
})