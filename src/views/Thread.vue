<template>
  <section class="hero" :class="{ 'is-loading': isLoading }">
    <div class="hero-body">
      <router-link :to="{name: 'Home'}" class="button" data-test="voltar">
        <i class="fas fa-arrow-left"></i> Voltar
      </router-link>
      <div class="container">
        <section class="section">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <div class="content is-medium">
                <h1 class="title">{{ thread.title }}</h1>
                <h2
                  class="subtitle is-6"
                  v-if="thread.user"
                >Por {{ thread.user.name }} - {{thread.formatedCreatedAt}}</h2>
                <div>{{thread.body}}</div>
                <hr />
                <h1 class="title">Respostas</h1>
                <div class="card has-margin" v-for="reply in thread.replies" :key="reply.id">
                  <div class="card-content" data-test="resposta">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-128x128">
                          <img
                            src="https://bulma.io/images/placeholders/128x128.png"
                            alt="Placeholder image"
                          />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">{{reply.user.name}}</p>
                        <p class="subtitle is-6">{{reply.user.email}}</p>
                        <p class="is-6">{{reply.body}}</p>
                        <p class="is-6">{{formatCreatedAt(reply.created_at)}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { getThread } from "./services";
import dayjs from "dayjs";

export default {
  props: {
    thread_slug: String
  },
  data() {
    return {
      isLoading: false,
      thread: {}
    };
  },
  created() {
    this.isLoading = true;
    getThread(this.thread_slug)
      .then(data => {
        this.thread = data;
      })
      .catch(() => {
        this.$router.push({ name: "NotFound" });
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
  methods: {
    formatCreatedAt(valor) {
      return dayjs(valor)
        .locale("pt_br")
        .format("DD/MM/YYYY, hh:mm:ss A");
    }
  },
  name: "Thread"
};
</script>

<style lang="scss" scoped>
.has-margin {
  margin: 10px;
}
</style>