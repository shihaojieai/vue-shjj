<template>
  <div class="login_box">
    <!-- 头部图标 -->
    <div class="login_box2">
      <div class="log_box3">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 表单领域 -->
      <el-form label-width="0" class="login_from">
        <!-- 账号 -->
        <el-form-item>
          <el-input  prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input  prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <!-- 登录 -->
        <el-form-item class="login_btn"> 
             <el-button type="primary">登录</el-button>
             <el-button type="info">重设</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.login_box {
  background-color: #2b4b6b;
  height: 100%;
  .login_box2 {
    width: 450px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .log_box3 {
      width: 130px;
      height: 130px;
      border: 1px solid green;
      box-shadow: 0 0 10px yellow;
      border-radius: 50%;
      padding: 10px;
      background-color: yellowgreen;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
        background-color: greenyellow;
        border-radius: 50%;
      }
    }
  }
}
.login_from {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    .login_btn {
        display: flex;
        justify-content: flex-end;
    }
}
</style>