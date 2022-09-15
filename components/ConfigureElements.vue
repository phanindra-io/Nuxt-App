<template>
  <v-card>
    
  </v-card>
</template>

<script>
import { stringLiteral } from '@babel/types';
import { mapGetters } from 'vuex'

export default {
  name: 'ConfigureElements',
  computed: {
    ...mapGetters({
      appliances: 'general/getAppliances'
    }),
    selectedItem() {
      return this.appliances.filter(el => el.id === this.id)
    },
    attrs() {
      const names = Object.keys(this.selectedItem)
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  }
}
</script>
