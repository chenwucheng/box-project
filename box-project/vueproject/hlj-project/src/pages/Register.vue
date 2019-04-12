<template>
	<div class="reg-container">
		<Xheader :name='name' :link="link"></Xheader>
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  <el-form-item  prop="user">
		    <el-input id="tel" placeholder="手机号" v-model.number="ruleForm2.user" ></el-input>
		  </el-form-item>
		  <el-form-item prop="pass">
		    <el-input id="password" placeholder="密码" type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
		  </el-form-item>
		  <el-form-item  prop="checkPass">
		    <el-input placeholder="确认密码" type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
		  </el-form-item>
		  
		  <el-form-item>
		    <el-button id="btn-reg" type="primary" @click="submitForm('ruleForm2')">注册</el-button>
		  </el-form-item>
		</el-form>
		<span class="reg-foot1">点击注册，即表示你已同意
			<a href="##"><span class="reg-foot2">《河理家用户协议》</span></a>
		</span>
		<div>
			<img class="reg-bg" src="../assets/reg-bg.png" alt="" />
		</div>
	</div>
</template>

<script type="text/javascript">

import	Xheader from '../components/Xheader.vue';
	   export default {
	   	components:{
	   		Xheader
	   	},
    data() {
      var checkUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 11) {
              callback(new Error('请输入11位手机号码'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {	
				name:'注册',
				link: '/login',
        ruleForm2: {
          pass: '',
          checkPass: '',
          user: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          user: [
            { validator: checkUser, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
				this.$axios({
				method: "post",
				url: "http://39.97.101.232:3000/users/register",
				data: this.$qs.stringify({
					inputUser: this.ruleForm2.user,
					inputPass: this.ruleForm2.pass
					})
				}).then(res => {
						let fn = {
						success: () => {
							alert('注册成功');
							this.$router.push('/login');
						},
						fail: () => {
							alert('账号已存在，请更换');
						}
					};
					fn[res.data.status]();
				});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped type="text/css">
	.reg-container{
		background: #F7F7F7;
		height: 666px;
	}
	.reg-top{
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #000;
	}
	.reg-top-l{
		display: inline-block;
		color: #ccc;
		margin-left: 15px;
	}
		.reg-top-r{
		display: inline-block;
		color: #fff;
		margin-left: 120px;
	}
	.demo-ruleForm{
		margin-top: 30px;
		margin-left: -80px;
		width: 380px;
	}
	#btn-reg{
		width: 270px;
		background: #EEDCC0;
		margin-left: 10px;
		border: none;
	}
	.reg-foot1{
		display: inline-block;
		margin-left: 12px;
		font-size: 14px;
	}
	.reg-foot2{
		font-size: 14px;
		
		color: #EEDCC0;
	}
	.reg-bg{
		margin-left: 30%;
		margin-top: 15%;
	}
</style>