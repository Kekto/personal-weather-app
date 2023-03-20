<template>
  <div class="about">
    <SearchLocationComponent/>
  </div>
</template>

<script>
import SearchLocationComponent from '@/components/SearchLocationComponent.vue';

export default {
  name: 'AboutView',
  components: {
    SearchLocationComponent
  },
  data() {
    return {
    }
  },
}
</script>