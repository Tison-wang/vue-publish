<template>
  <div class="user">
    <el-container>
      <el-header>Element-ui</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <el-card class="box-card" shadow="always">
              <div slot="header" class="clearfix">
                <span>请提交</span>
              </div>
              <div>
                <el-col :span="18">
                  <el-input type="text" v-model="val"></el-input>
                </el-col>
                <el-col :span="6">
                  <el-button type="primary"  icon="el-icon-edit" circle @click="account"></el-button>
                </el-col>
              </div>
            </el-card>
          </el-main>
          <!--<el-footer>Footer</el-footer>-->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import api from "@/api";
  import { MessageBox } from 'element-ui'

    export default {
        name: "User",
      data() {
          return {
            val: "001",
            value: "",
            msg: "提交"
          }
      },
      methods: {
          account() {
            let param = {
              id: this.val
            };
            api.get(this.val)
              .then(data => {

              });
            api.post(param)
              .then(data => {
                this.$notify({
                  title: '后台返回',
                  message: data.data,
                  type: 'success',
                  duration: 0
                });
              });
          },
      }
    }
</script>

<style scoped>

  .box-card {
    height: 150px;
    width: 480px;
  }

  .user .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    /*line-height: 60px;*/
  }

  .user .el-aside {
    background-color: #D3DCE6;
    color: #333;
    height:100%;
    text-align: center;
    line-height: 200px;
  }

  .user .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }

  .user .el-container {
    height: 500px;
    /*margin-bottom: 40px;*/
  }

  .user .el-container:nth-child(5) .el-aside,
  .user .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .user .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
