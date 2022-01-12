$('.enter').on('click', () => {
    if ($('.enter').html() == '去注册账号') {
        $('.register-pwd2').show()
        $('.enter').html('去登录')
    } else {
        $('.register-pwd2').hide()
        $('.enter').html('去注册账号')
    }
})