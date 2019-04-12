<template>
  <div class="reg-container">
    <Xheader :name="name" :link="link"></Xheader>

    <div class="log-top">
      <span class="log-top-l">账号登录</span>
      <span class="log-top-r">手机快捷登录></span>
    </div>
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item prop="user">
        <el-input id="tel" placeholder="手机号" v-model.number="ruleForm2.user"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          id="password"
          placeholder="密码"
          type="password"
          v-model="ruleForm2.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button id="btn-reg" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="log-foot">
      <router-link to="/register">
        <span class="log-foot-l">注册账号</span>
      </router-link>
      <span class="log-foot-r">忘记密码？</span>
    </div>

    <div>
      <img class="reg-bg" src="../assets/reg-bg.png" alt>
    </div>
  </div>
</template>

<script type="text/javascript">
import Xheader from "../components/Xheader.vue";
export default {
  components: {
    Xheader
  },
  data() {
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 11) {
            callback(new Error("请输入11位手机号码"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      name: "登录",
      link: '/mine',
      ruleForm2: {
        pass: "",
        user: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        user: [{ validator: checkUser, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
					//发送请求验证
          this.$axios({
            method: "post",
            url: "http://39.97.101.232:3000/users/login",
            data: this.$qs.stringify({
              inputUser: this.ruleForm2.user,
              inputPass: this.ruleForm2.pass
            })
          }).then(res => {
              let fn = {
              success: () => {
                localStorage.setItem("token", res.data.token);
                this.$router.push('/index');
              },
              fail: () => {
                alert('账号或密码错误');
              }
            };
            fn[res.data.status]();
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped type="text/css">
.log-top {
}
.log-top-l {
  color: #c59435;
  display: inline-block;
  font-size: 16px;
  margin-left: 14px;
  margin-top: 20px;
}
.log-top-r {
  display: inline-block;
  margin-left: 140px;
  font-size: 14px;
}
.reg-container {
  background: #f7f7f7;
  height: 666px;
}
.reg-top {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #000;
}
.reg-top-l {
  display: inline-block;
  color: #ccc;
  margin-left: 15px;
}
.reg-top-r {
  display: inline-block;
  color: #fff;
  margin-left: 135px;
}
.demo-ruleForm {
  margin-top: 30px;
  margin-left: -80px;
  width: 380px;
}
#btn-reg {
  width: 270px;
  background: #eedcc0;
  margin-left: 10px;
  border: none;
}

.reg-bg {
  margin-left: 30%;
  margin-top: 15%;
}
.log-foot {
  font-size: 12px;
}
.log-foot-l {
  display: inline-block;
  margin-left: 30px;
}
.log-foot-r {
  display: inline-block;
  margin-left: 160px;
  color: #999999;
}
</style>