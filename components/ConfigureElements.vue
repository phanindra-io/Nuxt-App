<template>
  <v-card style="padding: 30px">
    <v-row align="center" v-for="(attr, index) in attrs" :key="index">         
      <v-col
        class="d-flex"
        cols="12"
        sm="8"
      >
        <v-text-field
          v-if="isTextField(attr)"
          :label="attr"
          v-model="form[attr]"
          outlined
          dense
        ></v-text-field>
        <v-range-slider
          v-else-if="isRangeField(attr)"
          v-model="form[attr]"
          :max="selectedItem[attr]['max']"
          :min="selectedItem[attr]['min']"
          hide-details
          :label="attr"
          class="align-center"
        >
          <template v-slot:prepend>
            <v-text-field
              :value="form[attr][0]"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
              @change="$set(form[attr], 0, $event)"
            ></v-text-field>
          </template>
          <template v-slot:append>
          <v-text-field
            :value="form[attr][1]"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 60px"
            @change="$set(form[attr], 1, $event)"
          ></v-text-field>
        </template>
        </v-range-slider>
        <v-combobox
          v-else-if="isMultiValueField(attr)"
          v-model="form[attr]"
          :items="selectedItem[attr]"
          label="I use chips"
          multiple
          chips
        ></v-combobox>
        <v-checkbox
          v-else-if="isBooleanField(attr)"
          v-model="form[attr]"
          :label="attr"
        ></v-checkbox>
        <v-slider
          v-else-if="isNumberField(attr)"
          v-model="form[attr]"
          :label="attr"
          thumb-color="#1f03D0"
          thumb-label="always"
        ></v-slider>
      </v-col>
    </v-row>
    <v-btn
      depressed
      color="success"
      @click="save"
    >
      Save
    </v-btn>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ConfigureElements',
  data() {
    return {
      form: {}
    }
  }, 
  computed: {
    ...mapGetters({
      appliances: 'general/getAppliances'
    }),
    selectedItem() {
      return this.appliances.filter(el => el.id === this.id)[0]
    },
    attrs() {
      const names = Object.keys(this.selectedItem)
      return names
    },
  },
  mounted() {
    this.formHygrate()
  },
  watch: {
    id(oldVal, newVal) {
      this.formHygrate()
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    isTextField(attr) {
      return typeof this.selectedItem[attr] === 'string'
    },
    isBooleanField(attr) {
      return typeof this.selectedItem[attr] === 'boolean'
    },
    isRangeField(attr) {
      return this.selectedItem[attr].min && this.selectedItem[attr].max
    },
    isMultiValueField(attr) {
      return Array.isArray(this.selectedItem[attr])
    },
    isNumberField(attr) {
      return typeof this.selectedItem[attr] === 'number' && attr !== 'id'
    },
    save() {
      alert(JSON.stringify(this.form))
    },
    formHygrate() {
      this.form = {}
      Object.keys(this.selectedItem).forEach(attr => {
      if(this.isTextField(attr) || this.isBooleanField(attr) || 
        this.isMultiValueField(attr) || this.isNumberField(attr)) {
        this.form[attr] = this.selectedItem[attr]
      }
      else if(this.isRangeField(attr)) {
        this.form[attr] = [this.selectedItem[attr].min, this.selectedItem[attr].max]
      }
    })
    }
  }
}
</script>
