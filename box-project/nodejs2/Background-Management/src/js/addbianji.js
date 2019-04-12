$(function () {



    // //点击添加时将用户信息添加到数据库 
    $('.btn').on('click', function () {

        //获取输入框内容
        var user = $('.layui-input-block .user').val()
        var fl = $('.layui-input-block .fl').val()     
        var zt = $('.layui-input-block .zt').val()
        var priced = $('.layui-input-inline .priced').val()
        var price = $('.layui-input-inline .price').val()
        var kq = $('.layui-input-inline .kq').val()
        var addtime = $('.layui-input-block .addtime').val()

   





        let udata = `user=${user}&fl=${fl}&zt=${zt}&priced=${priced}&price=${price}&kq=${kq}&addtime=${addtime}`
       
        if (user && fl && zt && priced && price && kq && addtime) {
        	
            
                
                let xhr = new XMLHttpRequest();
                xhr.open('post', '/goodsname', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                xhr.send(udata)

                $('.layui-input-block .user').val()
                $('.layui-input-block .fl').val()
                
        		$('.layui-input-block .zt').val()
        		$('.layui-input-inline .priced').val()
         		$('.layui-input-inline .price').val()
        		$('.layui-input-inline .kq').val()
        		$('.layui-input-block .addtime').val()   
             


        } else {
            alert("不能为空")
        }

    })


})