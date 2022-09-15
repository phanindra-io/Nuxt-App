<template>
  <div class="i-container">
    <MyForm @configure="configure" />
    <ConfigureElements v-if="isItemSelected" :id="selectedItem" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      selectedItem: null
    }
  },
  methods: {
    configure(id) {
      this.selectedItem = id
    }
  },
  computed: {
    isItemSelected() {
      return this.selectedItem ?? null
    }
  }
}
</script>

<style scoped>
  .i-container {
    width: 800px;
  }
</style>