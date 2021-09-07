<template>
    <ui-table
  v-model="selectedRows"
  fullwidth
  :data="data"
  :thead="thead"
  :tbody="tbody"
  :tfoot="tfoot"
  row-checkbox
  selected-key="id"
>
  <template #th-dessert>
    Dessert
    <ui-icon v-tooltip="'100g serving'" aria-describedby="th-cell-1">
      error_outline
    </ui-icon>
  </template>
  <template #dessert="{ data }">
    <div class="dessert">{{ data.dessert }}</div>
  </template>
  <template #actions="{ data }">
    <ui-icon @click="show(data)">description</ui-icon>
    <ui-icon @click="show(data)">edit</ui-icon>
    <ui-icon @click="show(data)">delete</ui-icon>
  </template>

  <ui-pagination
    v-model="page"
    :total="total"
    show-total
    @change="onPage"
  ></ui-pagination>
</ui-table>
</template>

<script>
export default {
  data() {
    return {
      data: [
  {
    "id": 1,
    "dessert": "Frozen yogurt",
    "calories": 159,
    "fat": 6,
    "carbs": 24,
    "protein": 4
  },
  {
    "id": 2,
    "dessert": "Ice cream sandwich",
    "calories": 237,
    "fat": 9,
    "carbs": 37,
    "protein": 4.3
  },
  {
    "id": 3,
    "dessert": "Eclair",
    "calories": 262,
    "fat": 16,
    "carbs": 24,
    "protein": 6
  },
  {
    "id": 4,
    "dessert": "Cupcake",
    "calories": 305,
    "fat": 3.7,
    "carbs": 67,
    "protein": 3.9
  },
  {
    "id": 5,
    "dessert": "Gingerbread",
    "calories": 356,
    "fat": 16,
    "carbs": 49,
    "protein": 0
  },
  {
    "id": 6,
    "dessert": "Jelly bean",
    "calories": 375,
    "fat": 0,
    "carbs": 94,
    "protein": 0
  },
  {
    "id": 7,
    "dessert": "Lollipop",
    "calories": 392,
    "fat": 0.2,
    "carbs": 98,
    "protein": 6.5
  },
  {
    "id": 8,
    "dessert": "Honeycomb",
    "calories": 408,
    "fat": 3.2,
    "carbs": 87,
    "protein": 4.9
  }
],
      thead: [
        {
          value: 'ID',
          sort: 'asc',
          columnId: 'id'
        },
        {
          slot: 'th-dessert',
          class: 'gg',
          sort: 'none',
          columnId: 'dessert'
        },
        'Calories',
        'Fat (g)',
        'Carbs (g)',
        'Protein (g)',
        'Actions',
      ],
      tbody: [
        'id',
        {
          slot: 'dessert'
        },
        {
          field: 'calories',
          numeric: true,
          class: 'test'
        },
        {
          field: 'fat',
          fn: data => {
            return data.fat.toFixed(1);
          }
        },
        'carbs',
        {
          field: 'protein',
          class: data => {
            return data.protein > 5 ? 'red' : 'green';
          }
        },
        {
          slot: 'actions'
        }
      ],
      tfoot: [
        {
          field: 'id',
          fnName: 'count'
        },
        null,
        {
          field: 'calories',
          fnName: 'sum',
          align: 'right',
          class: 'test'
        },
        {
          field: 'fat',
          fnName: 'avg'
        },
        {
          field: 'carbs',
          fnName: 'max'
        },
        {
          field: 'protein',
          fnName: 'min'
        }
      ],
      selectedRows: [1, 2, 4],
      page: 1,
      total: 12
    };
  },
};
</script>
