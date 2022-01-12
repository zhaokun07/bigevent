$('.goRegister').on('click', () => {
    $('.form-register').show()
    $('.form-login').hide()
})

$('.goLogin').on('click', () => {
    $('.form-login').show()
    $('.form-register').hide()
})

// let form = layui.form
// form.verify({
//     pwd:[/^[\S]{6,12}$/,'密码必须6-12位，且不能出现空格']
// })