<template>
  <q-page padding>
    <div class="q-pa-lg doc-container bg-grey-1">
      <div class="row q-mb-xl q-gutter-md" style>
        <div class="col-xs-12 ol-sm-6 col-md-3 trackStatus">
          <q-item-label class="q-mt-md q-ml-xs headline1 float-left">
            <strong> Status </strong>
          </q-item-label>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 searchBox">
          <q-input square outlined v-model="searchText">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-5 col-md-3">
          <q-btn no-caps class="createProject" @click="newProject">
            <q-icon left size="2.3em" name="post_add" />
            Create a New Project
          </q-btn>
        </div>
      </div>

      <div class="q-mb-xl row q-gutter-xl">
        <div
          class="inProgress shadow-4"
          id="0"
          @click="showTableData($event)"
          style="width: 20vw"
        >
          <q-card
            :class="{ clicked: blockClicked === '0' }"
            class="bg-grey-4 my-card"
          >
            <q-card-section>
              <div class="text-center">Inprogress</div>
            </q-card-section>

            <q-separator dark inset />

            <q-card-section class="text-center">{{ pcount }}</q-card-section>
            <q-card-section
              class="text-center"
              v-if="pcount === '0'"
            ></q-card-section>
          </q-card>
        </div>

        <div
          class="inProgress shadow-4"
          id="1"
          @click="showTableData($event)"
          style="width: 20vw"
        >
          <q-card
            :class="{ clicked: blockClicked === '1' }"
            class="bg-grey-4 my-card shadow-4"
          >
            <q-card-section class>
              <div class="text-center">Completed</div>
            </q-card-section>

            <q-separator dark inset />

            <q-card-section class="text-center">
              {{ ccount }}
            </q-card-section>
          </q-card>
        </div>
      </div>
      <br />

      <div>
        <q-table
          class="my-sticky-header-table"
          v-if="data.length"
          virtual-scroll
          :pagination="pagination"
          :rows-per-page-options="[0]"
          :virtual-scroll-sticky-start="48"
          :rows="data"
          :columns="columns"
          :filter="searchText"
          row-key="Serial"
          flat
          dense
          bordered
        >
          <template v-slot:top-right>
            <q-input
              outlined
              dense
              debounce="100"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
      </div>
    </div>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center text-h6">
          {{ $t('ivalue.deletionOfProject') }}

          <span id="deleteProjId" style="display: none" />
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            class="tblDashBtnCancl"
            no-caps
            flat
            size="sm"
            label="Cancel"
            v-close-popup
          />
          <q-btn
            class="tblDashBtnDel"
            no-caps
            flat
            size="sm"
            label="delete"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
// import fetchApi from 'src/feathers-client';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'DashboardPage',

  setup() {
    const router = useRouter();
    // const userId = ref(null);
    const searchText = ref('');
    const filter = ref('');
    const pcount = ref('1');
    const ccount = ref('0');
    const hidetable = ref(true);
    const blockClicked = ref('');
    const projectNumber = ref(null);
    const projectName = ref(null);
    const SrNo = ref(null);
    const count = ref(null);
    const projLastUpdatedDate = ref(null);
    const projcreatedDate = ref(null);
    const list = ref(null);
    const confirm = ref(false);
    const pagination = ref({ rowsPerPage: 0 });
    function newProject(): void {
      console.log('Project');
      router.push({
        name: 'Project',
      });
    }

    const columns = [
      {
        name: 'Serial',
        required: true,
        label: 'Sr.No',
        align: 'left',
        field: 'Serial',
        sortable: true,
      },
      {
        name: 'projectNumber',
        align: 'left',
        label: 'Project Number',
        field: 'projectNumber',
        sortable: true,
      },
      {
        name: 'projectName',
        align: 'left',
        label: 'Project Name',
        field: 'projectName',
        sortable: true,
      },
      {
        name: 'count',
        label: 'BOQ Count',
        align: 'left',
        field: 'count',
        sortable: true,
      },

      {
        name: 'projPrDate',
        align: 'left',
        label: 'PR DATE',
        field: 'projPrDate',
        sortable: true,
      },

      {
        name: 'prjcost',
        align: 'left',
        label: 'Project Cost',
        field: 'prjcost',
        sortable: true,
      },
      {
        name: 'LLP',
        align: 'left',
        label: 'LLP ',
        field: 'LLP',
        sortable: true,
      },
      {
        name: 'minLLP',
        align: 'left',
        label: 'minLLP',
        field: 'minLLP',
        sortable: true,
      },
      {
        name: 'avgLLP',
        align: 'left',
        label: 'AVG. LLP',
        field: 'avgLLP',
        sortable: true,
      },
      {
        name: 'avgDiffLLP',
        align: 'left',
        label: 'Diff. Avg. LLP',
        field: 'avgDiffLLP',
        sortable: true,
      },
    ];

    const data = ref([
      {
        Serial: 10,
        projectNumber: 'PRN202200001',
        projectName: 'Rajasthan bb Management Project',
        count: 24,
        prjcost: 1774611,
        projPrDate: '01/09/2019',
        LLP: 1687222,
        minLLP: 1658345,
        avgLLP: 1567431,
        avgDiffLLP: -234551,
      },
    ]);
    const msg = ref('');

    function showTableData(event: any) {
      // let projStatus = +event.currentTarget.id;

      blockClicked.value = event.currentTarget.id;
      //  blockClicked=blockClicked === undefined ? "0":blockClicked;
      // let UserId = userId;
      // fetchApi
      //   .service('dashboard')
      //   .get(40, {
      //     query: { projStatus },
      //   })
      //   .then(function (response: any) {
      //     // handle success

      //     const resData = JSON.parse(
      //       response.tblProjectDashboard[0].ProjData
      //     ).tblProject;
      //     console.log(' data.value', data.value);

      //     data.value = resData.map((x: any, index: number) => {
      //       x['rowIndex'] = index + 1;
      //       return x;
      //     });
      //   })
      //   .catch(function (error: Error) {
      //     // handle error
      //     console.log(error);
      //   })
      //   .finally(function () {
      //     // always executed
      //   });
    }

    function loadDashboardCount(): void {
      // const userId = 40;

      // fetchApi
      //   .service('dashboard')
      //   .find({ query: { userId } })
      //   .then(function (response: any) {
      //     console.log('dashboard', response);
      //     pcount.value = response.tblDashboard[0].projInProcessCount;
      //     ccount.value = response.tblDashboard[0].projCompletedCount;
      //   });
    }

    onMounted(() => {
      loadDashboardCount();
    });

    return {
      searchText,
      filter,
      hidetable,
      showTableData,
      blockClicked,
      columns,
      data,
      loadDashboardCount,
      msg,
      projectNumber,
      pagination,
      projectName,
      SrNo,
      count,
      projLastUpdatedDate,
      projcreatedDate,
      confirm,
      list,
      ccount,
      pcount,
      newProject,
    };
  },
});
</script>

<style lang="scss">
.my-card {
  height: 150px;
  width: 20vw;
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  transition-duration: 1s, 1s, 0.5s, 0.5s;
  transition-delay: 0s, 0.5s, 1s, 1.5s;
}

.my-card:hover {
  background-color: #051c2c !important;
  color: white;
}
.clicked {
  background-color: #051c2c !important;
  color: white;
}

@media screen and(max-width: 580px) {
  .trackStatus {
    width: 100%;
  }
  .searchBox {
    width: 97%;
  }
  .createProject {
    width: 97%;
  }
  .inProgress {
    width: 91%;
  }
}
@media screen and(max-width: 768px) {
  .createProject {
    width: 97%;
  }
}
</style>

<style lang="sass" scopped>
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #F5F5F5
    font-size : 18px


  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
