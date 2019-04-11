<template>
        <el-card class="box">
            <el-form class="loginForm">
                <el-form-item label="账号">
                    <el-input v-model="form.userName" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "index.vue",
        data() {
            return {
                form: {
                    userName: "",
                    password: "",
                }
            }
        },
        methods: {
            onSubmit() {
                let params = {
                    userName: this.form.userName,
                    password: this.form.password
                };
                axios({
                    method: "post",
                    url: "/api/login",
                    data: {
                        ...params,
                    }
                }).then(response => {
                    window.console.log(response);
                    if(response.data == 0) {
                        this.$message({
                            message: '登陆成功~',
                            type: 'success'
                        });
                        this.$router.push({ path: '/chatroom', query: { id: this.form.userName }})
                    } else {
                        this.$message.error("用户名或密码错误！");
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .box {
        margin: {
            top: 100px;
            left: 15%;
            right: 15%;
        }
    }

    .app {
        padding: 0 20px 0 20px;
        background: url('../../../public/毛玻璃.jpg') no-repeat;
        height: 100%;
    }

    html {
        height: 100%;
        display: table;
        width: 100%;
    }

    body {
        display: table-cell;
        height: 100%;
    }
</style>