<template>
  <section class="hero">
    <div class="hero-body">
      <div class="content">
        <h1 class="title">Oops...</h1>
        <h2 class="subtitle is-4">Página não encontrada</h2>
        <router-link :to="{name: 'Home'}" class="button" data-test="voltar"><i class="fas fa-arrow-left"></i> Voltar para a página principal</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound"
};
</script>