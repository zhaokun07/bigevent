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
    $.ajax({
        method: 'POST',
        url: 'http://ajax.frontend.itheima.net/api/reguser',
        data: {
            name: $('.form-register [name=username]').val(),
            password: $('.form-register [name=password]').val()
        },
        success:res=>{
            console.log(res);
        }
    })
})