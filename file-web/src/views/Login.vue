<template>
    <div class="loginWrapper" id="loginBackground">
        <div class="formWrapper">
            <h1 class="loginTitle">登录</h1>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
                hide-required-asterisk>
                <el-form-item prop="telephone">
                    <el-input prefix-icon="el-icon-mobile-phone" v-model="ruleForm.telephone"
                        placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input prefix-icon="el-icon-lock" v-model="ruleForm.password" placeholder="密码"
                        show-password></el-input>
                </el-form-item>
                <el-form-item class="loginButtonWrapper">
                    <el-button class="loginButton" type="primary" @click="submitForm('ruleForm')">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            ruleForm: {
                telephone: "",
                password: "",
            },
            rules: {
                telephone: [
                    { required: true, message: "请输入手机号", trigger: "blur" },
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    {
                        min: 5,
                        max: 20,
                        message: "长度在 5 到 20 个字符",
                        trigger: "blur",
                    },
                ],
            },
        };
    },
    methods: {
        //  登录按钮-点击事件
        submitForm() { },
    },
};
</script>

<style lang="stylus" scoped>
  .loginWrapper {
    height: 550px !important;
    min-height: 550px !important;
    padding-top: 50px;
  
    .formWrapper {
      width: 375px;
      margin: 0 auto;
      text-align: center;
  
      .loginTitle {
        margin-bottom: 10px;
        font-weight: 300;
        font-size: 30px;
        color: #000;
      }
  
      .demo-ruleForm {
        width: 100%;
        margin-top: 20px;
  
        >>> .el-form-item__content {
          margin-left: 0 !important;
        }
  
        &>>> .el-input__inner {
          font-size: 16px;
        }
  
        .forgetPassword {
          text-align: right;
          margin: -22px 0 0 0;
        }
  
        .loginButtonWrapper {
          .loginButton {
            width: 100%;
          }
  
          &>>> .el-button {
            padding: 10px 90px;
            font-size: 16px;
          }
        }
      }
  
      .tip {
        width: 70%;
        margin-left: 86px;
      }
    }
  }
</style>