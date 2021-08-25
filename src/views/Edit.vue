<template>
    <ui-form class="conditions-form" nowrap action-align="center">
        <template #default="{ itemClass, actionClass }">
            <ui-grid>
                <ui-grid-cell>
                    <ui-form-field :class="[itemClass, 'required']">
                        <ui-textfield v-model="title" fullwidth placeholder="Description" maxlength="40" with-counter>
                        </ui-textfield>
                    </ui-form-field>
                </ui-grid-cell>
                <ui-grid-cell>
                    <ui-form-field :class="itemClass">
                        <ui-select v-model="selected" :options="options" @selected="onSelected($event)">
                            Catégorie
                        </ui-select>
                    </ui-form-field>
                </ui-grid-cell>
                <ui-grid-cell>
                    <ui-form-field :class="itemClass">
                        <ui-textfield v-model="value" type="number"> Prix </ui-textfield>
                    </ui-form-field>
                </ui-grid-cell>
                <ui-grid-cell>
                    <ui-form-field :class="itemClass">
                        <ui-datepicker v-model="date" :config="config" placeholder="Select Date.." toggle clear>
                        </ui-datepicker>
                    </ui-form-field>
                </ui-grid-cell>
                <ui-grid-cell>
                    <ui-form-field :class="itemClass">
                        <ui-chips v-model="selectedValue" type="choice" :options="optionss"></ui-chips>

                    </ui-form-field>
                </ui-grid-cell>
            </ui-grid>
            <ui-form-field :class="actionClass">
                <ui-button raised>Submit</ui-button>
            </ui-form-field>
        </template>
    </ui-form>
</template>

<style scoped>
    .conditions-form {
        .mdc-form__item>label {
            flex-basis: 80px;
            margin-right: 10px;
            text-align: right;
        }

        .mdc-text-field,
        .mdc-select {
            min-width: 200px;
        }
    }
</style>

<script>
    const options = [{
            label: 'Salaire',
            value: 'Salaire'
        },
        {
            label: 'CAF',
            value: 'CAF'
        },
        {
            label: 'Loyer',
            value: 'Loyer'
        },
        {
            label: 'Alimentaire',
            value: 'Alimentaire'
        },
        {
            label: 'Santé',
            value: 'Santé'
        },
        {
            label: 'Transport',
            value: 'Transport'
        },
        {
            label: 'Electricité',
            value: 'Electricité'
        },
        {
            label: 'Loisir',
            value: 'Loisir'
        },
    ];

    export default {
        data() {
            return {
                selectedValue: 3,
                optionss: [{
                        label: 'Entrée',
                        value: true
                    },
                    {
                        label: 'Sortie',
                        value: false
                    }
                ],
                config: {
                    defaultDate: 'today'
                },
                date: '',
                options,
                selected: ''
            };
        },
        methods: {
            onSelected(selected) {
                this.selected = selected.value;
            }
        }
    };
</script>