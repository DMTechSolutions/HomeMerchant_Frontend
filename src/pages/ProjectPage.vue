<template>
  <q-page padding>
    <div class="q-pa-md bg-grey-1">
      <form @submit="addPart">
        <div class="row q-ml-sm">
          <div class="col-xs-12 col-sm-3 col-md-3 text-subtitle1 q-ml-sm">
            <div>
              <q-badge color="secondary" class="text-bold text-h6">
                PR Date: {{ prdate }}
              </q-badge>

              <q-btn icon="event" class="q-ml-sm" round flat color="primary">
                <q-popup-proxy
                  @before-show="updateProxy"
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="proxyDate" mask="DD-MM-YYYY">
                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                    <q-btn
                      label="OK"
                      color="primary"
                      flat
                      @click="save"
                      v-close-popup
                    />
                  </q-date>
                </q-popup-proxy>
              </q-btn>
            </div>
            <div>
              <div class="q-mt-sm q-pa-sm">
                <q-select
                  dense
                  v-model="day4pr"
                  :options="dayprOpts"
                  label="Days Considered 4 PR"
                >
                  <template v-slot:append>
                    <q-item-label class="text-caption"
                      >Days Since PR : 322</q-item-label
                    >
                  </template>
                </q-select>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row q-gutter-sm q-pa-sm">
              <div class="col-xs-12 col-sm-3 col-md-3">
                <q-input dense v-model="projectName" label="Project Name" />
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4">
                <q-select
                  dense
                  use-input
                  style="width: 350px"
                  v-model="location"
                  option-value="district"
                  option-label="district"
                  label="Plant Location"
                  :options="optLocation"
                  @filter="filterFn"
                  behavior="menu"
                >
                  <template v-if="location" v-slot:after>
                    <q-chip
                      dense
                      square
                      color="white"
                      text-color="secondary"
                      class="q-ma-none"
                    >
                      {{ location.Zone }}
                    </q-chip>
                  </template>
                </q-select>
              </div>
              <q-space />
              <div class="col-xs-6 col-sm-3 col-md-3">
                <q-btn
                  :loading="progress[0].loading"
                  :percentage="progress[0].percentage"
                  no-caps
                  class="marksAsComplete"
                  size="lg"
                  icon="video_settings"
                  label="Calculate"
                  @click="calculateLLP(), startComputing(0)"
                >
                  <template v-slot:loading>
                    <q-spinner-gears class="on-left" />
                    Computing...
                  </template>
                </q-btn>
              </div>
            </div>

            <div class="row q-gutter-xs q-pl-xs">
              <div class="col-xs-6 col-sm-2 col-md-2">
                <div class="cursor-pointer">
                  <q-chip square>
                    <q-icon size="sm" name="local_gas_station" />

                    {{ fuel }}
                  </q-chip>
                  <q-icon name="currency_rupee" />
                  <q-popup-edit
                    dense
                    v-model="fuel"
                    :validate="(val) => val.length > 2"
                  >
                    <template v-slot="scope">
                      <q-input
                        autofocus
                        dense
                        type="number"
                        v-model="scope.value"
                        :model-value="scope.value"
                        hint="Today's Diesel Price"
                        :rules="[
                          (val) =>
                            scope.validate(val) || 'More than 5 chars required',
                        ]"
                      >
                        <template v-slot:before>
                          <q-icon name="local_gas_station" />
                        </template>
                        <template v-slot:after>
                          <q-icon name="currency_rupee" />
                          <q-btn
                            flat
                            dense
                            color="negative"
                            icon="cancel"
                            @click.stop="scope.cancel"
                          />

                          <q-btn
                            flat
                            dense
                            color="positive"
                            icon="check_circle"
                            @click.stop="scope.set"
                            :disable="
                              scope.validate(scope.value) === false ||
                              scope.initialValue === scope.value
                            "
                          />
                        </template>
                      </q-input>
                    </template>
                  </q-popup-edit>
                </div>
              </div>
              <div class="col-xs-6 col-sm-2 col-md-2">
                <div class="cursor-pointer">
                  <q-chip square>
                    <q-avatar>
                      <img :src="cementImage" />
                    </q-avatar>

                    {{ cement }}
                  </q-chip>
                  <q-icon name="currency_rupee" />
                  <q-popup-edit
                    v-model="cement"
                    dense
                    :validate="(val) => val.length > 2"
                  >
                    <template v-slot="scope">
                      <q-input
                        autofocus
                        dense
                        type="number"
                        v-model="scope.value"
                        :model-value="scope.value"
                        hint="Today's Cement Price"
                        :rules="[
                          (val) =>
                            scope.validate(val) || 'More than 5 chars required',
                        ]"
                      >
                        <template v-slot:before>
                          <q-avatar>
                            <img :src="cementImage" />
                          </q-avatar>
                        </template>
                        <template v-slot:after>
                          <q-icon name="currency_rupee" />
                          <q-btn
                            flat
                            dense
                            color="negative"
                            icon="cancel"
                            @click.stop="scope.cancel"
                          />

                          <q-btn
                            flat
                            dense
                            color="positive"
                            icon="check_circle"
                            @click.stop="scope.set"
                            :disable="
                              scope.validate(scope.value) === false ||
                              scope.initialValue === scope.value
                            "
                          />
                        </template>
                      </q-input>
                    </template>
                  </q-popup-edit>
                </div>
              </div>
              <div class="col-xs-6 col-sm-2 col-md-2">
                <div class="cursor-pointer">
                  <q-chip square>
                    <q-avatar>
                      <img :src="steelImage" />
                    </q-avatar>
                    {{ steel }}
                  </q-chip>

                  <q-icon name="currency_rupee" />
                  <q-popup-edit
                    v-model="steel"
                    dense
                    :validate="(val) => val.length > 2"
                  >
                    <template v-slot="scope">
                      <q-input
                        autofocus
                        dense
                        type="number"
                        v-model="scope.value"
                        :model-value="scope.value"
                        hint="Today's Steel Price"
                        :rules="[
                          (val) =>
                            scope.validate(val) || 'More than 5 chars required',
                        ]"
                      >
                        <template v-slot:before>
                          <q-avatar>
                            <img :src="steelImage" />
                          </q-avatar>
                        </template>
                        <template v-slot:after>
                          <q-icon name="currency_rupee" />
                          <q-btn
                            flat
                            dense
                            color="negative"
                            icon="cancel"
                            @click.stop="scope.cancel"
                          />

                          <q-btn
                            flat
                            dense
                            color="positive"
                            icon="check_circle"
                            @click.stop="scope.set"
                            :disable="
                              scope.validate(scope.value) === false ||
                              scope.initialValue === scope.value
                            "
                          />
                        </template>
                      </q-input>
                    </template>
                  </q-popup-edit>
                </div>
              </div>
              <div class="col-xs-6 col-sm-2 col-md-2">
                <div class="cursor-pointer">
                  <q-chip square>
                    CPI
                    {{ cpi }}
                  </q-chip>

                  <q-popup-edit
                    v-model="cpi"
                    :validate="(val) => val.length > 2"
                    dense
                  >
                    <template v-slot="scope">
                      <q-input
                        autofocus
                        dense
                        type="number"
                        v-model="scope.value"
                        :model-value="scope.value"
                        hint="Today's CPI"
                        :rules="[
                          (val) =>
                            scope.validate(val) || 'More than 5 chars required',
                        ]"
                      >
                        <template v-slot:before>
                          <q-chip>CPI</q-chip>
                        </template>
                        <template v-slot:after>
                          <q-btn
                            flat
                            dense
                            color="negative"
                            icon="cancel"
                            @click.stop="scope.cancel"
                          />

                          <q-btn
                            flat
                            dense
                            color="positive"
                            icon="check_circle"
                            @click.stop="scope.set"
                            :disable="
                              scope.validate(scope.value) === false ||
                              scope.initialValue === scope.value
                            "
                          />
                        </template>
                      </q-input>
                    </template>
                  </q-popup-edit>
                </div>
              </div>
              <div class="col-xs-6 col-sm-2 col-md-2">
                <div class="cursor-pointer">
                  <q-chip square>
                    WPI

                    {{ wpi }}
                  </q-chip>

                  <q-popup-edit
                    v-model="wpi"
                    :validate="(val) => val.length > 2"
                  >
                    <template v-slot="scope">
                      <q-input
                        autofocus
                        dense
                        type="number"
                        v-model="scope.value"
                        :model-value="scope.value"
                        hint="Today's wpi"
                        :rules="[
                          (val) =>
                            scope.validate(val) || 'More than 5 chars required',
                        ]"
                      >
                        <template v-slot:before>
                          <q-chip>WPI </q-chip>
                        </template>
                        <template v-slot:after>
                          <q-btn
                            flat
                            dense
                            color="negative"
                            icon="cancel"
                            @click.stop="scope.cancel"
                          />

                          <q-btn
                            flat
                            dense
                            color="positive"
                            icon="check_circle"
                            @click.stop="scope.set"
                            :disable="
                              scope.validate(scope.value) === false ||
                              scope.initialValue === scope.value
                            "
                          />
                        </template>
                      </q-input>
                    </template>
                  </q-popup-edit>
                </div>
              </div>
            </div>
          </div>
          <div>
            <q-space></q-space>
            <div class="col text-bold">
              <q-table
                dense
                :rows="results"
                :columns="resultHeader"
                row-key="name"
                hide-bottom
              >
                <template v-slot:body-cell-name="props">
                  <q-td :props="props">
                    <div>
                      <q-badge color="purple" :label="props.value" />
                    </div>
                  </q-td>
                </template>
              </q-table>
            </div>
          </div>
        </div>
      </form>
      <div style="border: 1px solid lightgrey" class="q-pa-sm q-ml-md">
        <div class="row q-mt-SM">
          <div class="col-xs-12 col-sm-5 col-md-5">
            <div class="row">
              <q-item-label
                class="col-xs-12 col-sm-4 col-md-4 q-ml-xs q-pt-md text-subtitle1"
              >
                <strong> BOQ </strong>
              </q-item-label>
              <q-item-label
                class="col-xs-12 col-sm-6 col-md-6 q-ml-xs q-pt-md text-subtitle1"
              >
                <strong> Project Cost : {{ projectCost }} </strong>
                <q-icon name="currency_rupee" />
              </q-item-label>
            </div>
          </div>

          <q-space />

          <div class="q-gutter-xs q-mt-none q-mb-xs row">
            <!-- <q-btn
              no-caps
              flat
              class="btnOutline"
              label="Add BOQ Item"
              @click="addPart"
            /> -->
            <pptCom :chartData="chartData" class="btnOutline q-ml-sm"></pptCom>

            <q-file
              use-chips
              outlined
              sqaure
              dense
              label-color="secondary"
              color="secondary"
              label="Uplaod BOQ"
              accept=".xlsx, csv/*"
              v-model="exceluploadinput"
              @input="handleClick"
            >
            </q-file>

            <q-btn
              class="btnOutline"
              size="md"
              flat
              @click="downloadBOMtemplate()"
              no-caps
              label="BOQ Template"
            ></q-btn>
            <q-btn
              no-caps
              flat
              class="marksAsComplete"
              icon="done_all"
              label="Mark As Complete"
              @click="markAsComplete()"
            />
          </div>
        </div>

        <div class="q-pt-xs">
          <q-table
            class="my-sticky-header-column-table"
            dense
            :rows="boqrows"
            :columns="columns"
            row-key="name"
            :separator="separator"
            binary-state-sort
            virtual-scroll
            :rows-per-page-options="[0]"
          >
            <template v-slot:header="props">
              <q-tr :props="props">
                <q-th
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                  class="thead bg-grey-3"
                >
                  {{ col.label }}
                </q-th>
              </q-tr>
            </template>
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="actNo" :props="props">
                  <q-badge color="purple">{{ props.row.actNo }}</q-badge>
                  <q-popup-edit v-model="props.row.actNo" v-slot="scope">
                    <q-input
                      v-model="scope.value"
                      dense
                      autofocus
                      counter
                      @keyup.enter="scope.set"
                    />
                  </q-popup-edit>
                </q-td>
                <q-td key="actName" :props="props">
                  <div
                    v-if="props.row.actName"
                    :class="
                      props.row.actName.length >= 35 ? 'read-more-option' : ''
                    "
                  >
                    {{ props.row.actName }}
                    <q-tooltip
                      max-height="100%"
                      max-width="40%"
                      v-if="
                        props.row.actName > 1 ||
                        (props.row.actName && props.row.actName.length >= 20)
                      "
                    >
                      <div class="tooltip-content">
                        {{ props.row.actName }}
                      </div>
                    </q-tooltip>
                  </div>

                  <q-popup-edit
                    buttons
                    v-model="props.row.actName"
                    v-slot="scope"
                  >
                    <q-editor
                      v-model="scope.value"
                      min-height="5rem"
                      autofocus
                      @keyup.enter.stop
                    />
                  </q-popup-edit>
                </q-td>

                <q-td key="uom" :props="props">
                  {{ props.row.uom }}
                  <q-popup-edit v-model="props.row.uom" v-slot="scope">
                    <q-input
                      v-model="scope.value"
                      dense
                      autofocus
                      @keyup.enter="scope.set"
                    />
                  </q-popup-edit>
                </q-td>

                <q-td key="qty" :props="props">
                  {{ props.row.qty }}
                  <q-popup-edit v-model.number="props.row.qty" v-slot="scope">
                    <q-input
                      type="number"
                      v-model.number="scope.value"
                      dense
                      autofocus
                      @keyup.enter="scope.set"
                    />
                  </q-popup-edit>
                </q-td>
                <q-td key="l1" :props="props">
                  {{ props.row.l1 }}
                  <q-popup-edit v-model.number="props.row.l1" v-slot="scope">
                    <q-input
                      type="number"
                      v-model.number="scope.value"
                      dense
                      autofocus
                      @keyup.enter="scope.set"
                    />
                  </q-popup-edit>
                </q-td>
                <q-td key="modifier" :props="props">
                  <div v-if="props.row.modifier?.length">
                      <!-- eslint-disable-next-line vue/no-parsing-error -->
                    {{ (props.row.modifier?.map((x: Record<string, any>) => {
                        y = x?.value + x?.wt * 10;
                        return y
                    })).toString() }}
                  </div>
                  <q-popup-edit v-model="props.row.modifier" v-slot="scope">
                    <q-select
                      filled
                      v-model="scope.value"
                      use-chips
                      multiple
                      options-selected-class="text-blue-9"
                      clearable
                      option-label="value"
                      :options="modifierOpts"
                      counter
                      hint="With counter"
                      style="width: 250px"
                      behavior="menu"
                      @update:model-value="
                        () => addModifier(props.rowIndex, scope)
                      "
                    >
                      <template v-slot:option="scope">
                        <q-item v-bind="scope.itemProps">
                          <q-item-section>
                            <q-slider
                              v-model="scope.opt.wt"
                              color="grey"
                              markers
                              size="xs"
                              class="text-caption"
                              :marker-labels="fnMarkerLabel"
                              :min="1"
                              :max="4"
                            />
                          </q-item-section>
                          <q-item-section class="q-ml-md">
                            <q-item-label class="q-ml-lg text-weight-bolder">{{
                              scope.opt.value
                            }}</q-item-label>
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>
                  </q-popup-edit>
                </q-td>
                <q-td key="avgllp" :props="props">
                  <q-badge color="purple">
                    {{ props.row.avgllp }}
                  </q-badge>
                </q-td>
                <q-td key="minllp" :props="props">
                  <q-badge color="amber">
                    {{ props.row.minllp }}
                  </q-badge>
                </q-td>
                <q-td key="minllpDate" :props="props">
                  <q-badge color="amber">
                    {{ props.row.minllpDate }}
                  </q-badge>
                </q-td>
                <q-td key="llp" :props="props">
                  <q-badge color="blue-grey-9">
                    {{ props.row.llp }}
                  </q-badge>
                </q-td>
                <q-td key="llpDate" :props="props">
                  <q-badge color="blue-grey-9">
                    {{ props.row.llpDate }}
                  </q-badge>
                </q-td>
                <q-td key="difflpp" :props="props">
                  <q-badge color="blue-grey-9">
                    {{
                      Math.sign(Number(props.row.difflpp)) === -1
                        ? `(${Math.abs(props.row.difflpp)})`
                        : props.row.difflpp
                    }}
                  </q-badge>
                </q-td>
                <q-td key="diffAvgLpp" :props="props">
                  <q-badge color="purple">
                    {{
                      Math.sign(Number(props.row.diffAvgLpp)) === -1
                        ? `(${Math.abs(props.row.diffAvgLpp)})`
                        : props.row.diffAvgLpp
                    }}
                  </q-badge>
                </q-td>
                <q-td key="perllp" :props="props">
                  <q-badge color="blue-grey-9">
                    {{
                      Math.sign(Number(props.row.perllp)) === -1
                        ? `(${Math.abs(props.row.perllp)})`
                        : props.row.perllp
                    }}
                  </q-badge>
                </q-td>
                <q-td key="perAvgllp" :props="props">
                  <q-badge color="purple">
                    {{
                      Math.sign(Number(props.row.perAvgllp)) === -1
                        ? `(${Math.abs(props.row.perAvgllp)})`
                        : props.row.perAvgllp
                    }}
                  </q-badge>
                </q-td>
                <q-td key="remark" :props="props">
                  <div
                    v-if="props.row.remark"
                    :class="
                      props.row.remark.length >= 35 ? 'read-more-option' : ''
                    "
                  >
                    {{ props.row.remark }}
                    <q-tooltip
                      max-height="100%"
                      max-width="40%"
                      v-if="
                        props.row.remark > 1 ||
                        (props.row.remark && props.row.remark.length >= 20)
                      "
                    >
                      <div class="tooltip-content">
                        {{ props.row.remark }}
                      </div>
                    </q-tooltip>
                  </div>

                  <q-popup-edit
                    buttons
                    v-model="props.row.remark"
                    v-slot="scope"
                  >
                    <q-input
                      v-model="scope.value"
                      min-height="5rem"
                      autofocus
                      @keyup.enter.stop
                    />
                  </q-popup-edit>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </div>
    </div>

    <div class="absolute-center z-max" v-if="loading">
      <q-spinner-cube size="5.5em" color="secondary" />
    </div>
    <q-dialog v-model="confirmD" persistent>
      <q-card>
        <q-card-section class="row items-center text-h6">
          {{ 'Are you sure, you want to Delete the record' }}
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            class="tblDashBtnCancl"
            no-caps
            size="sm"
            flat
            label="Cancel"
            v-close-popup
          />
          <q-btn
            class="tblDashBtnDel"
            no-caps
            flat
            size="sm"
            label="delete"
            @click="deleteConfirm()"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  onBeforeUnmount,
  defineAsyncComponent,
} from 'vue';
import * as _ from 'lodash';

import cementImage from 'src/assets/cement-sack.png';
import steelImage from 'src/assets/steel.png';
import { locationOpts } from 'src/utils/location';
import { podb_1 } from 'src/utils/db/podb_1';
import { useQuasar } from 'quasar';

import { date } from 'quasar';
import * as XLSX from 'xlsx';
import { isUndefined } from 'lodash';

const pptCom = defineAsyncComponent(() => import('components/pptCom.vue'));
const qDate = date;
const po1db = podb_1;

export default defineComponent({
  name: 'ProjectPage',
  components: { pptCom },

  setup() {
    const $q = useQuasar();
    const location = ref();
    const optLocationData = locationOpts;

    const modifier = ref(null);
    const boqrows = ref<any[]>([]);

    let actRows = reactive([{}]);
    const modifierOpts = [
      {
        id: 1,
        value: 'Diesel',
        wt: 10,
      },
      {
        id: 2,
        value: 'Cement',
        wt: 20,
      },
      {
        id: 3,
        value: 'Steel',
        wt: 30,
      },
    ];
    const columns = [
      {
        name: 'actNo',
        required: true,
        label: 'PO activity no',
        align: 'left',
        field: 'actNo',
        sortable: true,
      },
      {
        name: 'actName',
        align: 'left',
        label: 'Acitivity name',
        field: 'actName',
        style: 'width:200px',
        sortable: true,
      },
      { name: 'uom', label: 'UOM', field: 'uom', sortable: true },
      { name: 'qty', label: 'Qty', field: 'qty' },
      { name: 'l1', label: 'L1(unit)', field: 'l1', align: 'left' },
      {
        name: 'modifier',
        label: 'Star Items',
        field: 'modifier',
        align: 'left',
      },
      { name: 'avgllp', label: 'Avg LPP', field: 'avgllp' },
      { name: 'minllp', label: 'Min. LPP', field: 'minllp' },
      { name: 'minllpDate', label: 'Min LPP Date', field: 'minllpDate' },
      { name: 'llp', label: 'LPP', field: 'llp' },
      { name: 'llpDate', label: 'LPP Date', field: 'llpDate' },

      { name: 'difflpp', label: 'Diff LPP', field: 'difflpp' },
      { name: 'diffAvgLpp', label: 'Diff Avg LPP', field: 'diffAvgLpp' },

      { name: 'perllp', label: '% Lpp', field: 'perllp' },
      { name: 'perAvgllp', label: '% Avg Lpp', field: 'perAvgllp' },
      { name: 'remark', label: 'Remark', field: 'remark', align: 'left' },
    ];
    const resultHeader = [
      { name: 'name', label: 'Name', field: 'name', sortable: true },
      { name: 'amount', label: 'Amount', field: 'amount', sortable: true },
      { name: 'per', label: '%', field: 'per', sortable: true },
      { name: 'diff', label: 'Diff', field: 'diff', sortable: true },
    ];
    let results = reactive([
      { name: 'Average LPP', amount: 0, per: 0, diff: 0 },
      { name: 'Minimum LPP', amount: 0, per: 0, diff: 0 },
      { name: 'LPP', amount: 0, per: 0, diff: 0 },
      { name: 'L1', amount: 0, per: 0, diff: 0 },
    ]);
    const refreshData = [
      { name: 'Average LPP', amount: 0, per: 0, diff: 0 },
      { name: 'Minimum LPP', amount: 0, per: 0, diff: 0 },
      { name: 'LPP', amount: 0, per: 0, diff: 0 },
      { name: 'L1', amount: 0, per: 0, diff: 0 },
    ];

    const filter = ref('');
    const confirmD = ref(false);

    function saveAssmName(): void {
      console.log('test');
    }
    function saveAssmNumber(): void {
      console.log('test');
    }
    function markAsComplete(): void {
      console.log('test');
    }
    function addPart(): void {
      console.log('test');
    }

    // function handleUpload(): any {
    //   exceluploadinput.value.onclick();
    // }
    function handleClick(e: any): any {
      const files = e.target.files;
      const rawFile = files[0]; // only use files[0]

      if (!rawFile) return;
      upload(rawFile);
    }

    function upload(rawFile: any): any {
      exceluploadinput.value = null; // fix can't select the same excel

      readerData(rawFile);
    }
    function readerData(rawFile: any) {
      return new Promise((resolve: any) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const data = e.target.result;

          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          // const attributes = getHeaderRow(worksheet);
          boqrows.value = XLSX.utils.sheet_to_json(worksheet);
          resolve();
        };
        reader.readAsArrayBuffer(rawFile);
      });
    }
    function getHeaderRow(sheet: any) {
      const headers = [];
      const range = XLSX.utils.decode_range(sheet['!ref']);
      let C;
      const R = range.s.r;
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C; // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
      return headers;
    }
    function isExcel(file: any) {
      return /\.(xlsx|xls|csv)$/.test(file.name);
    }

    function downloadBOMtemplate(): any {
      window.location.assign(
        'https://raceuploadimages.s3.ap-south-1.amazonaws.com/BOQ+Template+250322.xlsx'
      );
    }
    function deleteConfirm(): any {
      console.log('test');
    }
    function addModifier(index: any, data: any): any {
      console.log('mdf', index, data.value.length);
      boqrows.value[index]['modifier'] = data.value;
    }
    function calculateLLP(): void {
      console.log('calculate LLP');
      actRows = boqrows.value;
      const dateString: string[] = prdate.value.split('-');
      const start = new Date(
        parseFloat(dateString[2]),
        parseFloat(dateString[1]) - 1,
        parseFloat(dateString[0])
      );
      const serailday = Number(JSDateToExcelDate(start));
      console.log(serailday);
      // for each activityNo
      // find LLP value and date
      // find Avg LLP
      // filter by date first
      // pass state district
      const prateFilter = serailday - day4pr.value;
      const endPRDate = ExcelDateToJSDate(prateFilter);

      let dateDb = _.filter(po1db, (x: any) => {
        return x.podate >= prateFilter;
      });
      if (dateDb.length === 0) {
        $q.notify({
          type: 'negative',
          message:
            '`No data avaialble for the selected PR date range, please extend Days considered for PR date',
        });

        results = refreshData;
        const pickKeys = columns.map((x) => x.name).slice(0, 6);
        boqrows.value = _.map(boqrows.value, (x) => _.pick(x, pickKeys));
      }

      let zoneData: any = [];
      let VenReport: any = [];

      if (!isUndefined(location.value)) {
        zoneData = _.filter(dateDb, (x: any) => {
          return (x.Zone = location.value.Zone);
        });
        VenReport = _.uniqBy(zoneData, 'prdoc');
        // debugger;
        // vendataReport2 = _.orderBy(
        //   _.groupBy(zoneData, 'sup'),
        //   values,
        //   'desc'
        // ).slice(0, 5); // top 5 vendors
        // _.forEach(vendataReport2, (x, key) => {
        //   let keyVen: any[] = _.orderBy(
        //     _.groupBy(x, 'actityNo'),
        //     values,
        //     'desc'
        //   ).slice(0, 6);
        //   _.forEach(keyVen, (x, index) => {
        //     let top5items = _.orderBy(
        //       _.groupBy(x, 'Plnt'),
        //       values,
        //       'desc'
        //     ).slice(0, 5);
        //     _.forEach((x: any) => {

        //     });
        //  });
        //  });
      } else {
        VenReport = _.uniqBy(dateDb, 'prdoc');
      }

      let venPOmin = _.minBy(VenReport, 'netvalue');
      let venPOmax = _.maxBy(VenReport, 'netvalue');

      let supAgg = _.groupBy(VenReport, 'sup');
      let supreportData: any = [];
      _.forEach(supAgg, (x: any, key) => {
        console.log(x, key);
        let minSupval: any = _.minBy(x.map((p: any) => p.netvalue));
        let maxSupval: any = _.maxBy(x.map((p: any) => p.netvalue));

        _.maxBy(x.map((p: any) => p.netvalue)),
          supreportData.push({
            name: key,
            SupValue: parseFloat(
              (_.sumBy(x, 'netvalue') / 10000000).toFixed(2)
            ),
            noOrders: x.length,
            min: parseFloat((minSupval / 10000000).toFixed(2)),
            max: parseFloat((maxSupval / 10000000).toFixed(2)),
            avg: parseFloat((_.meanBy(x, 'netvalue') / 10000000).toFixed(2)),
          });
      });
      const totalSpend = _.sumBy(supreportData, 'SupValue');

      const top7Ven = _.slice(
        _.orderBy(supreportData, 'SupValue', 'desc'),
        0,
        7
      );
      console.log(top7Ven);
      const totalofTop7 = _.sumBy(top7Ven, 'SupValue');
      const top7Contri = totalofTop7 / totalSpend;

      _.forEach(actRows, (x: Record<string, any>) => {
        let accdb = _.filter(
          _.cloneDeep(dateDb),
          { actityNo: x.actNo } // check within city if not then within state then within zone
        );

        const selActivity = accdb.map((x: any) => Number(x.rate));
        const llpact: any = _.head(_.orderBy(accdb, 'podate', 'desc'));

        if (selActivity.length) {
          const llpVal = _.sortBy(selActivity, ['rate']);
          const avgllpVal = _.meanBy(llpVal);
          const minllpVal = _.minBy(llpVal);

          let llpDate: any = 0;
          let llpDate1: any = 0;
          let minllpDate: any = 0;
          let minllpDate1: any = 0;
          const llpVal1 = llpact.rate;
          if (minllpVal) {
            minllpDate1 = _.find(accdb, { rate: minllpVal.toString() })?.podate; // first match?
            minllpDate = ExcelDateToJSDate(minllpDate1);
          }
          if (llpVal1) {
            llpDate1 = llpact?.podate; // first match?
            llpDate = ExcelDateToJSDate(llpDate1);
          }
          x['avgllp'] = isNaN(Number(avgllpVal))
            ? '-'
            : Number(avgllpVal).toFixed(2);
          x['minllp'] = isNaN(Number(minllpVal))
            ? '-'
            : Number(minllpVal).toFixed(2);
          x['avgllp'] = isNaN(Number(avgllpVal))
            ? '-'
            : Number(avgllpVal).toFixed(2);
          x['llp'] = isNaN(Number(llpVal1)) ? '-' : Number(llpVal1).toFixed(2);

          x['difflpp'] = isNaN(Number(llpVal1) - Number(x.l1))
            ? '-'
            : ((Number(llpVal1) - Number(x.l1)) * Number(x.qty)).toFixed(2);
          x['diffAvgLpp'] = isNaN(Number(avgllpVal) - Number(x.l1))
            ? '-'
            : ((Number(avgllpVal) - Number(x.l1)) * Number(x.qty)).toFixed(2);

          x['perllp'] =
            x['difflpp'] === '-'
              ? '-'
              : (
                  (Number(x['difflpp']) * 100) /
                  (Number(x['llp']) * Number(x.qty))
                ).toFixed(2);
          x['perAvgllp'] =
            x['diffAvgLpp'] === '-'
              ? '-'
              : (
                  (Number(x['diffAvgLpp']) * 100) /
                  (Number(x['avgllp']) * Number(x.qty))
                ).toFixed(2);
          const mllpdate = new Date(minllpDate);
          const llpDateStr = new Date(llpDate);
          x['llpDate'] =
            llpDate === 0
              ? '-'
              : llpDateStr.getDate() +
                1 +
                '/' +
                llpDateStr.getMonth() +
                '/' +
                llpDateStr.getFullYear();

          x['minllpDate'] =
            minllpDate === 0
              ? '-'
              : mllpdate.getDate() +
                1 +
                '/' +
                mllpdate.getMonth() +
                '/' +
                mllpdate.getFullYear();

          x['productAvgllp'] = Number(x.avgllp) * Number(x.qty);
          x['productminllp'] = Number(x.minllp) * Number(x.qty);
          x['productllp'] = Number(x.llp) * Number(x.qty);
          x['productl1'] = Number(x.l1) * Number(x.qty);
          x['repeatCount'] = selActivity.length;
        }
      });

      const sumAvgLlp = _.sumBy(
        _.compact(actRows.map((x: Record<string, any>) => x.productAvgllp))
      ).toFixed(0);
      const sumLlp = _.sumBy(
        _.compact(actRows.map((x: Record<string, any>) => x.productllp))
      ).toFixed(0);

      const sumMinLlp = _.sumBy(
        _.compact(actRows.map((x: Record<string, any>) => x.productminllp))
      ).toFixed(0);

      const sumprCost = _.sumBy(
        _.compact(actRows.map((x: Record<string, any>) => Number(x.l1) * Number(x.qty)))
      ).toFixed(0);
      const sumL1 = _.sumBy(_.compact(actRows.map((x: Record<string, any>) => x.productl1))).toFixed(
        0
      );
      console.log(actRows);
      projectCost.value = Number(sumprCost);

      const sumAvgPer =
        ((Number(sumAvgLlp) - Number(sumL1)) * 100) / Number(sumL1);
      const sumAvgdiff = Number(sumAvgLlp) - Number(sumL1);
      const sumMinllper =
        ((Number(sumMinLlp) - Number(sumL1)) * 100) / Number(sumL1);
      const sumMinllpdiff = Number(sumMinLlp) - Number(sumL1);
      const sumllper = ((Number(sumLlp) - Number(sumL1)) * 100) / Number(sumL1);
      const sumllpdiff = Number(sumLlp) - Number(sumL1);

      const llpOutput = [
        {
          name: 'Average LPP',
          amount: sumAvgLlp,
          per: sumAvgPer.toFixed(0),
          diff: sumAvgdiff.toFixed(0),
        },
        {
          name: 'Minimum LPP',
          amount: sumMinLlp,
          per: sumMinllper.toFixed(0),
          diff: sumMinllpdiff.toFixed(0),
        },
        {
          name: 'LPP',
          amount: sumLlp,
          per: sumllper.toFixed(0),
          diff: sumllpdiff.toFixed(0),
        },
        { name: 'L1', amount: sumL1, per: 0, diff: 0 },
      ];
      _.forEach(results, (x: Record<string, any>, i: number) => {
        x.amount = llpOutput[i].amount;
        x.per = llpOutput[i].per;
        x.diff = llpOutput[i].diff;
      });
      chartData.title = 'LLP Report';
      chartData.tblSum = results;
      chartData.top7Vendor = top7Ven;
      chartData.totalSpend = totalSpend;
      chartData.venPOmin = venPOmin;
      chartData.venPOmax = venPOmax;
      chartData.top7Contri = top7Contri;
      chartData.prDateStart = `${start.toDateString().split(' ')[1]}-${
        start.toDateString().split(' ')[3]
      }`;
      chartData.prDateEnd = `${endPRDate.toDateString().split(' ')[1]}-${
        endPRDate.toDateString().split(' ')[3]
      }`;
    }
    function JSDateToExcelDate(inDate: Date): any {
      var returnDateTime =
        25569.0 +
        (inDate.getTime() - inDate.getTimezoneOffset() * 60 * 1000) /
          (1000 * 60 * 60 * 24);
      return returnDateTime.toString().substr(0, 5);
    }
    function ExcelDateToJSDate(serial: number) {
      var utc_days = Math.floor(serial - 25569);
      var utc_value = utc_days * 86400;
      var date_info = new Date(utc_value * 1000);

      // var fractional_day = serial - Math.floor(serial) + 0.0000001;

      // var total_seconds = Math.floor(86400 * fractional_day);

      // var seconds = total_seconds % 60;

      // total_seconds -= seconds;

      // var hours = Math.floor(total_seconds / (60 * 60));
      // var minutes = Math.floor(total_seconds / 60) % 60;

      return new Date(
        date_info.getFullYear(),
        date_info.getMonth(),
        date_info.getDate()
      );
    }
    const exceluploadinput = ref(null);
    let projectCost = ref(0);
    let chartData: any = reactive({});

    let dateToday = Date.now();
    const prdate = ref(qDate.formatDate(dateToday, 'DD-MM-YYYY'));
    const optLocation = ref(optLocationData);
    const projectName = ref('');
    const assemblyNumber = ref('');

    const proxyDate = ref(qDate.formatDate(dateToday, 'DD-MM-YYYY'));
    const fuel = ref(85.71);
    const cement = ref(377.81);
    const steel = ref(58.62);
    const cpi = ref(128.3);
    const wpi = ref(119.6);
    const day4pr = ref(0);
    const dayprOpts = [180, 365, 650, 730];
    const progress = ref([
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 },
    ]);
    const intervals: any[] = [null, null, null];

    function startComputing(id: any) {
      progress.value[id].loading = true;
      progress.value[id].percentage = 0;

      intervals[id] = setInterval(() => {
        progress.value[id].percentage += Math.floor(Math.random() * 8 + 10);
        if (progress.value[id].percentage >= 100) {
          clearInterval(intervals[id]);
          progress.value[id].loading = false;
        }
      }, 100);
    }

    function onRejected(rejectedEntries: any) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      $q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) is not in xlsx or csv format`,
      });
    }

    onBeforeUnmount(() => {
      intervals.forEach((val: any) => {
        clearInterval(val);
      });
    });

    return {
      $q,
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx',
      loading: false,
      excelData: {
        header: null,
        results: null,
      },
      day4pr,
      dayprOpts,
      onRejected,
      JSDateToExcelDate,
      ExcelDateToJSDate,
      addModifier,
      fnMarkerLabel: (val: number) => `${10 * val}%`,
      fuel,
      cement,
      steel,
      cpi,
      wpi,
      columns,
      actRows,
      boqrows,
      projectName,
      assemblyNumber,
      filter,
      confirmD,
      location,
      optLocation,
      saveAssmName,
      saveAssmNumber,
      markAsComplete,
      addPart,
      handleClick,
      upload,
      readerData,
      isExcel,
      getHeaderRow,
      exceluploadinput,
      downloadBOMtemplate,
      deleteConfirm,
      calculateLLP,
      prdate,
      results,
      resultHeader,
      proxyDate,
      nickname: ref(1211),
      cementImage,
      steelImage,
      modifier,
      modifierOpts,
      po1db,
      separator: ref('vertical'),
      progress,
      startComputing,
      projectCost,
      chartData,

      updateProxy() {
        proxyDate.value = prdate.value;
      },

      save() {
        prdate.value = proxyDate.value;
      },

      filterFn(val: any, update: any) {
        if (val === '') {
          update(() => {
            optLocation.value = optLocationData;
          });
          return;
        }

        update(() => {
          const needle = val.toLowerCase();
          optLocation.value = optLocationData.filter(
            (v: any) => v.district.toLowerCase().indexOf(needle) > -1
          );
        });
      },
    };
  },
});
</script>

<style lang="css" scoped>
.marksAsComplete:hover {
  background-color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  color: #1f40e6;
  border: 1px solid #1f40e6;
  border-radius: 0;
}
.marksAsComplete {
  background-color: #1f40e6;
  color: #ffffff;
  border-radius: 0;
  height: 24px important!;
}
.thead {
  font-weight: bolder !important;
  font-size: medium !important;
}
.read-more-option {
  max-width: 250px;

  overflow: hidden;

  white-space: nowrap !important;

  text-overflow: ellipsis;

  width: 220px;

  display: inline-block;

  height: unset;
}

@media screen and(max-width: 580px) {
  .addbtn {
    width: 100%;
  }
  .importbtn {
    width: 100%;
  }
  .clrbtn {
    width: 100%;
  }
}
</style>
