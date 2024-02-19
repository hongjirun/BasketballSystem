<!-- 留言板 -->
<template>
  <div id="message">
    <Layout>
      <!-- 插槽 -->
      <template #firstMain>
        <div class="messageContent">
          <MessageContent></MessageContent>
        </div>
      </template>
    </Layout> 
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import Layout from '../../components/Layout/Layout.vue';
import MessageContent from '../../components/MainContent/MessageComponent/MessageContent.vue';
export default defineComponent({
  setup() {
    const store = useStore();
    const isSelected = computed(() => store.state.isSelected);
    return {
      store,
      isSelected,
    }
   },
  components: {
    Layout,
    MessageContent

  },
  mounted() {

    this.selectList();
  },
  methods: {
    selectList() {
      this.store.commit('handleSelected', 4);
    },
  }
})
</script>

<style scoped lang="less">
  #message {
    width: 100%;
    height: 100%;
    .messageContent {
      width: 97%;
      height: 100%;
      background-color: white;
      padding: 5px;
      border-radius: 15px;
    }
  }
</style>