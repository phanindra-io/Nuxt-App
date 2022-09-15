<template>
  <v-row align="center">
    <v-col
      class="d-flex"
      cols="12"
      sm="4"
    >
      <p>Choose an appliance to configure</p>
    </v-col>
    <v-col
      class="d-flex"
      cols="12"
      sm="4"
    >
      <v-select
        v-model="selectedItem"
        :items="menuItems"
        item-text="text"
        item-value="value"
        label="Select"
        persistent-hint
        return-object
        single-line
      ></v-select>
    </v-col>
    <v-col
      class="d-flex"
      cols="12"
      sm="4"
    >
      <v-btn
        depressed
        color="primary"
        @click="load"
      >
        Load
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MyForm',
  data() {
    return {
      selectedItem: null,
    }
  },
  computed: {
    ...mapGetters({
      appliances: 'general/getAppliances'
    }),
    menuItems() {
      return this.appliances.map(el => { return { id: el.id, text: `${el.brand} ${el["model#"]}` } })
    },
  },
  methods: {
    load() {
      this.$emit('configure', this.selectedItem.id)
    }
  }
}
</script>

<style scoped>
  
</style>