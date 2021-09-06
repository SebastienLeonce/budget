<template>
    <h1>Add</h1>
    <ui-form class="conditions-form" nowrap action-align="center">
        <template #default="{ itemClass, actionClass }">
            <ui-grid>
                <ui-grid-cell>
                    <ui-form-field :class="[itemClass, 'required']">
                        <ui-textfield v-model="description" fullwidth placeholder="Description" maxlength="40" with-counter>
                        </ui-textfield>
                    </ui-form-field>
                </ui-grid-cell>
                <ui-grid-cell>
                    <ui-form-field :class="itemClass">
                        <ui-select v-model="categorie" :options="options" :fullwidth="true">
                            Catégorie
                        </ui-select>
                    </ui-form-field>
                </ui-grid-cell>
                <ui-grid-cell>
                    <ui-form-field :class="itemClass">
                        <CurrencyInput v-model="prix"/>
                    </ui-form-field>
                </ui-grid-cell>
                <ui-grid-cell>
                    <ui-form-field :class="itemClass">
                        <ui-datepicker v-model="date" :config="config" placeholder="Select Date.." toggle clear :fullwidth="true">
                        </ui-datepicker>
                    </ui-form-field>
                </ui-grid-cell>
                <ui-grid-cell>
                    <ui-form-field :class="itemClass">
                        <ui-chips v-model="entree" type="choice" :options="optionss"></ui-chips>
                    </ui-form-field>
                </ui-grid-cell>
            </ui-grid>
            <ui-form-field :class="actionClass">
                <ui-button raised @click="Submit">Submit</ui-button>
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
    import CurrencyInput from '@/components/CurrencyInput.vue'

    const options = [{
            label: 'Salaire',
            value: 'Salaire'
        },
        {
            label: 'CAF',
            value: 'CAF'
        },
        {
            label: 'Tabac',
            value: 'Tabac'
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
        {
            label: 'Epargne',
            value: 'Epargne'
        },
        {
            label: 'Autre',
            value: 'Autre'
        },
    ];

    export default {
        components: {
            CurrencyInput
        },
        data() {
            return {
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
                    defaultDate: 'today',
                    dateFormat: "d/m/Y"
                },
                date: '',
                options,
                categorie: '',
                prix: 0,
                description: '',
                entree: ''
            };
        },
        methods: {
            Submit() {
                let that = this;
                this.axios.post('/api', {
                    description: this.description,
                    categorie  : this.categorie  ,
                    prix       : this.prix       ,
                    date       : this.date       ,
                    in         : this.entree
                })
                .then(function (response) {
                    that.$alert({
                        message: 'Dépense ajoutée avec succès',
                        state: 'success',
                        stateOutlined: true
                    });
                    that.description = "";
                    that.categorie = "";
                    that.prix = 0;
                    that.date = "";
                    that.entree = "";
                })
                .catch(function (error) {
                    that.$alert({
                        message: 'Vérifier les informations ou la connexion internet',
                        state: 'error',
                        stateOutlined: true
                    });
                });
            }
        }
    };
</script>