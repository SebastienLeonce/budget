<template>
    <ui-textfield 
        :attrs="{inputmode: 'numeric'}"
        :fullwidth="true"
        v-model="displayValue" 
        @blur="isInputActive = false"
        @focus="isInputActive = true">
    </ui-textfield>
</template>

<script>
export default {
    name: 'CurrencyInput',
    props: ["modelValue"],
    emits: ['update:modelValue'],
    data: function() {
        return {
            isInputActive: false,
        }
    },
    computed: {
        displayValue: {
            get: function() {
                if (this.isInputActive) {
                    return this.modelValue.toString()
                } else {
                    return this.modelValue.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,") + " €"
                }
            },
            set: function(modifiedValue) {
                let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""))

                if (isNaN(newValue)) {
                    newValue = 0
                }
                this.$emit('update:modelValue', newValue)
            }
        }
    }
}
</script>