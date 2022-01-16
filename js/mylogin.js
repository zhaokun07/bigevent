$('.goRegister').on('click', () => {
    $('.form-register').show()
    $('.form-login').hide()
})

$('.goLogin').on('click', () => {
    $('.form-login').show()
    $('.form-register').hide()
})

let form = layui.form
let layer = layui.layer
form.verify({
    pwd: [/^[\S]{6,12}$/, '密码必须6-12位，且不能出现空格'],
    rePwd: function (value) {
        let pwd = $('.form-register [name=password]').val()
        if (value != pwd) return '密码不一致'
    }
})

$('.form-register').on('submit', (e) => {
    e.preventDefault()
    $.post(
        'http://www.liulongbin.top:3007/api/reguser', {
            username: $('.form-register [name=username]').val(),
            password: $('.form-register [name=password]').val()
        }, res => {
            if (res.status !== 0) return console.log(res.message);
            console.log('注册成功')
            layer.msg('注册成功')
            $('.goLogin').click()
        })
})

$('.form-login').on('submit', (e) => {
    console.log($('.form-login').serialize());
    e.preventDefault()
    $.ajax({
        method: 'POST',
        url: 'http://www.liulongbin.top:3007/api/login',
        data: {
            username: $('.form-login [name=username]').val(),
            password: $('.form-login [name=password]').val()
        },
        success: res => {
            console.log(res.token);
            location.href = 'index.html'
            localStorage.setItem('token',res.token)
        }



    })
})