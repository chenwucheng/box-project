$(function () {

    //JavaScript代码区域


    var ttr = decodeURI(window.location.search)
    var ttr1 = ttr.split('?')[1]
    var ttr2 = ttr1.split('=')[1]



    $.ajax({
        type: "get",
        url: "/bianjigoods",
        data: {
            user: ttr2
        },

        success: function (response) {
            console.log(response)
            var show = response.map(function (item) {

                return ` <h2>商品编辑</h2>
                <form class="layui-form " action="" style="margin-top:50px;">
                    <div class="layui-form-item">
                        <label class="layui-form-label">商品名称</label>
                        <div class="layui-input-block">
                            <input type="text" name="title" required lay-verify="required" placeholder="请输入标题"
                                autocomplete="off" class="layui-input user" value="${item.user}">
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">分类</label>
                        <div class="layui-input-block">
                            <input type="text" name="title" required lay-verify="required" placeholder="请输入标题"
                                autocomplete="off" class="layui-input fl" value="${item.fl}">
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">商品状态</label>
                        <div class="layui-input-block">
                            <input type="text" name="title" required lay-verify="required" placeholder="请输入标题"
                                autocomplete="off" class="layui-input zt" value="${item.zt}">
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">商品价格</label>
                        <div class="layui-input-inline">
                            <input type="text" placeholder="请输入价格" class="layui-input priced" value="${item.priced}">
                        </div>
                        <label class="layui-form-label" style="padding:9px 15px 9px 0px">出售价格</label>
                        <div class="layui-input-inline">
                            <input type="text" placeholder="请输入价格" class="layui-input price" value="${item.price}">
                        </div>
                    </div>
                    
                    <div class="layui-form-item">
                        <label class="layui-form-label">库存</label>
                        <div class="layui-input-inline">
                            <input type="text" class="layui-input kq" value="${item.kq}">
                        </div>
                    </div>
                    <div class="layui-form-item layui-form-text">
                        <label class="layui-form-label">添加时间</label>
                        <div class="layui-input-block">
                            <textarea name="desc" placeholder="请输入内容" class="layui-textarea addtime">${item.addtime}</textarea>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <div class="layui-input-block">
                            <button class="layui-btn btn" lay-submit lay-filter="formDemo">立即提交</button>
                            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                        </div>
                    </div>
                </form>`
            })

            $('.xxk').html(show)

        }

    });


    $('.xxk').on('click', '.btn', function () {



        var user = $('.layui-input-block .user').val()
        var fl = $('.layui-input-block .fl').val()     
        var zt = $('.layui-input-block .zt').val()
        var priced = $('.layui-input-inline .priced').val()
        var price = $('.layui-input-inline .price').val()
        var kq = $('.layui-input-inline .kq').val()
        var addtime = $('.layui-input-block .addtime').val()
        

        
        let udata = `user=${user}&fl=${fl}&zt=${zt}&priced=${priced}&price=${price}&kq=${kq}&addtime=${addtime}`

        let xhr = new XMLHttpRequest();
        xhr.open('post', '/bianjigoods', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(udata)
console.log(222)


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