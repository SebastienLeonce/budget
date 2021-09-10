<template>
    <h1>Edit</h1>
    <ui-table 
        :data="data" 
        :thead="thead" 
        :tbody="tbody"
        fullwidth>

        <template #in="{ data }">
            <ui-icon>{{data.in == true ? "trending_up" : "trending_down"}}</ui-icon>
        </template>

        <ui-pagination
            v-model="page"
            :total="total"
            show-total
            :page-size="8"
            @click="onPage"
        ></ui-pagination>
    </ui-table>
</template>

<script>
    export default {
        data() {
            return {
                depenses : [],
                data: [],
                thead: [
                    'Catégorie',
                    'Description',
                    'Prix',
                    'Date',
                    'Entree'
                ],
                tbody: ['categorie', 'description', 'prix', 'date', { slot: 'in'}],
                page: 1,
                total: 20
            }
        },
        mounted()  {
            var that = this;
            var d = new Date();
            that.axios.get('/api',{
                params: {
                    period: (d.getMonth() + 1) + "/" + d.getFullYear()
                }
            }).then(function (response) {
                that.depenses = response.data;
                that.data = that.depenses.slice((that.page - 1)*8, (that.page - 1)*8 + 8)
            }).catch(function (error) {
                console.log(error);
            });
        },
        methods: {
            onPage() {
                this.data = this.depenses.slice((this.page - 1)*8, (this.page - 1)*8 + 8)
            }
        }
    };
</script>