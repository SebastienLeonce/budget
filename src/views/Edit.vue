<template>
    <h1>Edit</h1>
    <ui-table :data="depenses" :thead="thead" :tbody="tbody"></ui-table>
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
                tbody: ['categorie', 'description', 'prix', 'date', 'in']
            }
        },
        mounted()  {
            var that = this;
            that.axios.get('/api')
                .then(function (response) {
                    that.depenses = response.data;
                }).catch(function (error) {
                    console.log(error);
                });
        }
        
    };
</script>