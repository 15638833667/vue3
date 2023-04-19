
<template>
  <div class="box">
    <MksTable
      class="mks-table-box"
      :ref="MksTableRef"
      v-bind="tableConfig"
      @row-click="rowClick"
      @cell-click="cellClick"
      @size-change="handleCurrentChange"
      @current-change="handleCurrentChange"
      @currentpage-change="handleCurrentChange"
      @select-all="selectAll"
      @select="selectOne"
    >
    </MksTable>
  </div>
</template>

  <script>
import { reactive, toRefs, ref, getCurrentInstance } from "vue";
export default {
  name: "index",
  components: {},
  setup() {
    const state = reactive({
      tableConfig: {
        tableLoading: true,
        showCheckboxColumn: true,
        // showIndexColumn: true,
        // showExpandColumn: true,
        url: "/web/core/api/v1/grid/queryGridData",
        type: "remote",
        methods: "post",
        params: { sid: 401, params: { status: 1 } },
        defaultSort: { prop: "display_time", order: "descending" },
        pageSizes: [10, 16, 30, 50, 100, 200],
        columns: [
          {
            prop: "customerName",
            label: "客户名称",
            minWidth: "120px",
          },
          {
            prop: "customerTypeName",
            label: "客户类型",
            minWidth: "120px",
          },
          {
            prop: "shortName",
            label: "shortName",
            minWidth: "120px",
          },
          {
            prop: "telephone",
            label: "telephone",
            width: "120px",
            sortable: true,
          },
        ],
        actions: {
          columnBtn: {
            width: "200px",
            fixed: "right",
            btns: [
              {
                label: "编辑",
                type: "primary",
                link: true,
                event: eventHandle,
              },
              {
                label: "删除",
                type: "primary",
                link: true,
                event: eventHandle,
              },
              {
                label: "密码重置",
                type: "primary",
                link: true,
                event: eventHandle,
              },
            ],
          },
          batchBtn: {
            btns: [
              { label: "全选", type: "primary", event: handleSelectlAll },
              { label: "取消全选", type: "default", event: handleCancelAll },
            ],
          },
        },
        showPagination: true,
      },
    });
    function eventHandle(row) {
      console.log({ row });
    }
    function rowClick(row) {
      console.log(row);
    }
    function cellClick(row) {
      console.log(row);
    }
    function handleCurrentChange(pageIndex, pageSize) {
      console.log({ pageIndex, pageSize });
    }
    function selectAll(selection) {
      console.log({ selection });
    }
    function selectOne(selection, row) {
      console.log({ selection, row });
    }
    let mksTableDom = null;
    const MksTableRef = (el) => {
      // console.log(el);
      mksTableDom = el;
    };
    function handleSelectlAll() {
      // console.log(mksTableDom);
      // console.log("全选");
      mksTableDom.checkAll();
    }
    function handleCancelAll() {
      // console.log("取消全选");
      mksTableDom.clearSelection();
    }
    return {
      ...toRefs(state),
      rowClick,
      cellClick,
      handleCurrentChange,
      selectAll,
      selectOne,
      MksTableRef,
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  // :deep(.mks-table-box) {
  // .mks-table-box {
  :deep(.mks-table) {
    padding: 20px;
    .batch-parts {
      margin-bottom: 10px;
    }
  }
}
</style>
