<template>
  <!-- <v-chip
    dark
    :small="small"
    :color="color"
  >
    {{ items[value] }}
  </v-chip> -->
  <v-chip
    :size="size"
  >
    {{ items[value] }}
  <!-- :size="size" -->
    <!-- test -->
  </v-chip>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ColorChipComponent',

  props: {
    size: { type: String, default: 'default' },
    items: { type: Object, required: true },
    value: { type: String, required: true }
  },
})

// @Component
// export default class ColoChip extends Vue {
//   @Prop() private readonly items: object;
//   @Prop() private readonly value: string;
//   @Prop() private readonly small: boolean;

//   private get color() {
//     const index = Object.keys(this.items).indexOf(this.value);
//     const colors = [
//       'deep-purple lighten-2',
//       'blue lighten-2',
//       'green lighten-2',
//       'amber',
//       'teal lighten-2',
//       'deep-orange lighten-2'
//     ];

//     return colors[index];
//   }

// }
</script>
