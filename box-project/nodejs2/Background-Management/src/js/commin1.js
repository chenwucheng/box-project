$(function () {



        var user = localStorage.getItem('user')
        var gl = localStorage.getItem('gl')


        $('.usname').html(user)
        $('.Jurisdiction').html(gl)

        $('.signout').on('click', function () {
                localStorage.clear();

        })


        var str = $('.Jurisdiction').text()

        $('.userlist').on('click', function () {
                if (str == '超级管理员') {
                        location.href = './userlist.html'
                } else {
                        alert('您不是超级管理员，无权查看')
                }


        })


        $('.adduser').on('click', function () {
                if (str == '超级管理员') {
                        location.href = './user.html'
                } else {
                        alert('您不是超级管理员，无权添加')
                }




        })



         layui.use('element', function () {
            var element = layui.element;

        });

        layui.use('form', function () {
            var form = layui.form;

            //监听提交
            form.on('submit(formDemo)', function (data) {
                layer.msg(JSON.stringify(data.field));
                return false;
            });
        });


})