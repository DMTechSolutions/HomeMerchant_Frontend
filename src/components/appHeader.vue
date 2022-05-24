<template>
  <div v-if="appHeader" class="row absolute-center" style="">
    <q-list class="text-grey-8 btnList">
      <q-btn
        flat
        label="Project Detail"
        to="/ProjectDetail"
        no-caps
        :class="{ btn: activeBtn === 'Project Detail' }"
        @click="activeBtn = 'Project Detail'"
      />
      <q-btn
        flat
        :class="{ btn: activeBtn === 'Part Detail' }"
        label="Part Detail"
        to="/PartDetail"
        no-caps
        @click="activeBtn = 'Part Detail'"
      />

      <q-btn-dropdown
        flat
        auto-close
        no-caps
        :class="{ btn: activeBtn === 'Analysis' }"
        clickable
        label="Analysis"
        @click="updateAnalysisHeader()"
      >
        <q-list link>
          <q-item clickable to="/Analysis" @click="updateAppheaderName">
            <q-item-section>Waterfall Chart</q-item-section>
          </q-item>

          <q-item clickable to="/AnalysisParato" @click="updateAppheaderName">
            <q-item-section>Pareto Chart</q-item-section>
          </q-item>
          <q-item clickable to="/Analysiscopy" @click="updateAppheaderName">
            <q-item-section>Test</q-item-section>
          </q-item>
          <q-item
            clickable
            to="/AnalysisUploadBOM"
            @click="updateAppheaderName"
          >
            <q-item-section>UploadBOM</q-item-section>
          </q-item>

          <q-item clickable to="/AnalysisExcel" @click="updateAppheaderName">
            <q-item-section>ExcelUI</q-item-section>
          </q-item>
          <q-item
            clickable
            to="/AnalysisTreeTable"
            @click="updateAppheaderName"
          >
            <q-item-section>TreeUI</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-list>
  </div>
</template>

<script>
import { EventBus } from '../event-bus';

export default {
  data() {
    return {
      appHeader: false,
      activeBtn: false,
    };
  },

  methods: {
    updateAnalysisHeader() {
      //  console.log(name);
      this.activeBtn = 'Analysis';

      EventBus.$emit('headerName', 'Analysis');
    },
    updateAppheaderName(name) {
      // console.log("bale",name );
      //  this.activeBtn =this.label;
      //  this.$store.dispatch("appStateStore/updateHeaderName", name);
    },
  },

  // mounted() {
  //   this.appHeader = this.$store.getters["appStateStore/getAppHeader"];

  //   console.log("mounted", this.appHeader);
  // },
  mounted() {
    EventBus.$on('headeData', (headerstate) => {
      this.appHeader = headerstate;
    });
    EventBus.$on('headerActive', (headerstate) => {
      this.activeBtn = headerstate;
    });
  },
  // watch: {

  //   appHeader: function (newAppstate, oldAppState) {
  //     // Our fancy notification (2).

  //    var newAppstate = this.$store.getters["appStateStore/getAppHeader"];
  //    this.appHeader = newAppstate;
  //     console.log("watch", newAppstate, oldAppState);
  //   }
  // }
};
</script>

<style scoped>
.btnList :hover {
  color: #1f40e6;
}
</style>
