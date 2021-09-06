<template>
    <h1>Edit</h1>
    <ui-table 
        :data="depenses" 
        :thead="thead" 
        :tbody="tbody"
        fullwidth>
        <template #in="{ data }">
            <ui-icon>{{data.in == true ? "trending_up" : "trending_down"}}</ui-icon>
        </template>

        <ui-pagination
            v-model="page"
            :total="total"
            show-total>
        </ui-pagination>
    </ui-table>
    
</template>

<script>
    export default {
        data() {
            return {
                depenses : [],
                thead: [
                    'Catégorie',
                    'Description',
                    'Prix',
                    'Date',
                    'Entree'
                ],
                tbody: ['categorie', 'description', 'prix', 'date', { slot: 'in'}],
                page: 2,
                total: 5
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
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
</script>