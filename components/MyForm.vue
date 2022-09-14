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
export default {
  name: 'MyForm',
  data() {
    return {
      menuItems: [
        { text: 'fridge lg', value: 'fridge lg.json' },
        { text: 'fridge samsung 100', value: 'fridge samsung 100.json' },
        { text: 'fridge samsung 200', value: 'fridge samsung 200.json' },
        { text: 'washer samsung', value: 'washer samsung.json' },
      ]
    }
  },
  methods: {
    load() {
      alert()
    }
  }
}
</script>

<style scoped>
  
</style>