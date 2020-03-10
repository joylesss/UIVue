<template>
    <div class="hold-transition login-page">

        <div class="login-box">
            <div class="login-logo">
                <a href="#"><b>Supervisor</b>ICON</a>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form @submit.prevent="submit">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" name="fb_id" v-model="form.fb_id" placeholder="Email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <!--                        <input type="password" class="form-control" name="password" v-model="form.password" placeholder="Password">-->
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="remember">
                                    <label for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                    <div class="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="#" class="btn btn-block btn-primary">
                            <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                        </a>
                        <a href="#" class="btn btn-block btn-danger">
                            <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                        </a>
                    </div>
                    <!-- /.social-auth-links -->

                    <p class="mb-1">
                        <a href="forgot-password.html">I forgot my password</a>
                    </p>
                    <p class="mb-0">
                        <a href="register.html" class="text-center">Register a new membership</a>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
    </div>
</template>
<script>
    // import adminlte from 'src';
    import "../../assets/admin/js/jquery.min";
    import "../../assets/admin/js/bootstrap.bundle.min";
    // import "../../assets/admin/js/adminlte.min;

    import { mapActions } from 'vuex';

    export default {
        name: 'login',
        components: {

        },

        data () {
            return {
                form: {
                    fb_id: '',
                }
            }
        },

        methods: {
            ...mapActions({
                login: 'login'
            }),

            submit() {
                this.login(this.form)
                    .then(() => {
                        this.$router.replace({
                            name: 'home',
                        })
                    })
                    .catch(() => {
                        console.log('Error!')
                    })
            }
        }

    }

</script>
<style>
    .login-box {
        color: red;
    }
    /*@import "src/assets/admin/css/adminlte.min.css";*/
</style>
