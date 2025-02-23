<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const logo = "# UMS Portal"
const moto = "start your journey";
const heading = "Sign Up to UMS Portal"
const email = ref("");
const password = ref("");

const router = useRouter();

const handleLogin = () => {
    router.push('/');
}

const handleSignUp = () => {
    console.log("Login Details : ",email.value,password.value);
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
        </div>
        <button type="submit" v-once class="btn" @click="handleSignUp"> Sign Up </button>
        <div class="login-footer">
            <p>Already have an account? <span @click="handleLogin">Login</span></p>
        </div>
    </div>
    <div class="right-container">
        <div class="username">
            <input type="email" v-model="email" placeholder="Username must be unique" />
        </div>
        <div class="age">
            <input type="number" v-model="age" placeholder="Enter your age" />
        </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  border: 1px solid #ddd;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);
  margin: 50px 250px;
  height: 540px;
  display: flex;
}
.left-container {
  padding: 20px;
  width: 50%;
}
.right-container {
  margin-top: 205px;
  padding: 20px;
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
.email, .password, .username, .age {
  margin-bottom: 25px;
  border-radius: 5px;
  position: relative;
}
.email::before, .password::before, .age::before, .username::before {
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
.age::before {
    content: "Age";
}
.username::before {
    content: "Username";
}
.username input, .age input {
    display: flex;
    justify-content: center;
    width: 60%;
}
.email:focus-within::before, .password:focus-within::before, .age:focus-within::before, .username:focus-within::before {
    color: #4285F4;
}
.btn {
    margin-top: -10px;
    margin-left: 220px;
}
.login-footer p {
   margin-top: 100px;
   font-size: 10px
}
.login-footer p span {
    color: #4285F4;
}
</style>
