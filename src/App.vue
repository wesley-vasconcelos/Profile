<template>
  <div>
    <div class="hiper-links d-flex">
      <a href="/">Perfil</a> 
      <a href="/sobre-mim">Sobre mim</a>
      <a href="/experiencia">Experiência</a>
      <a href="/habilidade">Habilidades</a>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
a{
  color: #F5F5DC;
  padding-left: 25px;
  text-decoration: none;
}
a:hover {
  transform: scale(1.2);
}
  .hiper-links{
    color: #F5F5DC !important;
    top: 10px;
    position: absolute;
    right: 40% ;
  }
</style>


