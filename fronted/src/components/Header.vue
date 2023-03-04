<template>
    <div>
    <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/faq">FAQs</a></router-link></router-link>
    <router-link to="/about">About</router-link>
    </div>
    
<img class="logo1" src="../assets/logo1.png" /><b>THE PREDICTIVE PRODIGIES</b>

    </div>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<style scoped>

.nav{
    background-color:#333;
    overflow: hidden;
    justify-content: space-evenly
}
img{
    width: 100px;
    height: 100px;
}
.nav a {
    float: left;
    color: #f2f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background:#ddd;
    color:#333
}
</style>