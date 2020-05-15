<template>
  <section class="hero" :class="{ 'is-loading': isLoading }">
    <div v-for="thread in threads" :key="thread.id" >
      <section class="section">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="content is-medium" data-test="thread">
              <h1 class="title">{{ thread.title }}</h1>
              <h2 class="subtitle is-4">Por {{ thread.user.name }}</h2>
              <p>
                Postado em {{thread.formatedCreatedAt}}
                <span class="is-pulled-right">
                  {{thread.total_replies}}
                  <i class="fas fa-comment-dots"></i>
                </span>
              </p>

              <router-link
                :to="{name: 'Thread', params: { thread_slug: thread.slug}}"
                class="button"
                data-test="link"
              >
               Acessar Thread
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  </section>
</template>

<script>
import { getThreads } from "./services";

export default {
  data() {
    return {
      threads: [],
      isLoading: false
    };
  },
  created() {
    this.isLoading = true;
    getThreads().then(data => {
      this.threads = data;
      this.isLoading = false;
    });
  },
  name: "Home"
};
</script>

<style lang="scss" scoped>
.hero {
  min-height: 60vh;
}
</style>