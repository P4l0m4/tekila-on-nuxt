<template>
  <div>
    <h2>{{ post.title }}</h2>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content(params.slug).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
      ],
    }
  },
}
</script>
