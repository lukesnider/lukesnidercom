<template>
  <div class="form-field-text flex flex-col">
      <label :for="field.fieldHtml.id">{{field.label}}<span class="text-red" v-if="field.fieldHtml.required">*</span></label>
      <input class="h-2 px-2 py-4 text-black" :id="field.fieldHtml.id" :name="field.name" :required="field.fieldHtml.required" :type="field.fieldHtml.type" v-model="field_value">
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'FormFieldText',
  props: ['field','default_value'],
  data: () => {
      return {
      }
  },
  watch: {
      field_value(val) {
          this.$emit('update:field',{
              name: this.field.name,
              value: val,
          })
      },
  },
  setup(props) {
      const field_value = ref(props.default_value)

      return {
          field_value
      }
  },
}
</script>

<style scoped>
</style>
