<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const logo = "# UMS Portal"
const moto = "start your journey";
const heading = "Login to UMS Portal"
const email = ref("");
const password = ref("");

const router = useRouter();

const handleLogin = () => {
    console.log("Login Details : ",email.value,password.value);
}

const handleSignUp = () => {
    router.push('/signup');
}
</script>

<template>
  <div class="main-container">
    <div class="left-container">
        <h3 v-once class="logo">{{ logo }}</h3>
        <div class="main">
            <div v-once class="moto"> {{ moto }} </div>
            <h3 v-once class="heading">{{ heading }} </h3>
            <div class="email">
                <input type="email" v-model="email" placeholder="example@gmail.com" />
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password" />
            </div>
            <button type="submit" v-once class="btn" @click="handleLogin"> Login </button>
        </div>
        <div class="border-line">
            <hr v-once/>
        </div>
        <div class="btn-group">
            <button class="btn-primary"> Facebook </button>
            <button class="btn-primary"> Google </button>
            <button class="btn-primary"> Apple </button>
        </div>
        <div class="login-footer">
            <p>Don't have an account? <span @click="handleSignUp">Sign up</span></p>
        </div>
    </div>
    <div class="right-container">
        <img src="/logo.png" alt="Logo"/>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  border: 1px solid #ddd;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);
  margin: 50px 200px;
  height: 600px;
  display: flex;
}
.left-container {
  padding: 20px;
  width: 50%;
}
.right-container {
  width:50%;
}
.main {
  margin: 50px 100px;
}
img {
  width: 100%;
  height: 100%;
}
.heading {
    margin-top: 0px;
    margin-bottom: 40px;
}
.email, .password {
  margin-bottom: 25px;
  border-radius: 5px;
  position: relative;
}
.email::before, .password::before {
    content: "E-mail";
    position: absolute;
    top: -10px; /* Move text above the border */
    left: 15%;
    transform: translateX(-50%);
    background-color: white;
    padding: 0 10px;
    font-size: 12px;
    z-index: 1;
}
.password::before {
    content: "Password";
}
.email:focus-within::before, .password:focus-within::before {
    color: #4285F4;
}
hr {
    margin: -10px 90px -10px 100px;
}
.border-line {
    position: relative;
}
.border-line::before {
     content: "or sign up with";
     position: absolute;
     top: -10px; /* Move text above the border */
     left: 50%;
     transform: translateX(-50%);
     background-color: white;
     padding: 0 10px;
     font-size: 12px;
     z-index: 1;
     color: grey;
}
.btn-group {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.btn-primary {
    padding: 5px 10px;
    margin: 5px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 5px;
    color: #4285F4;
}
.btn-primary:hover, .btn-primary:active, .btn-primary:focus {
    background-color: #4285F4;
    color: white;
}
.login-footer p {
   font-size: 10px
}
.login-footer p span {
    color: #4285F4;
}
</style>
