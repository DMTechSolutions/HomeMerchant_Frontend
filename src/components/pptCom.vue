<template>
  <q-btn
    label="Export PPT Report"
    type="button"
    flat
    dense
    no-caps
    @click="renderPptReprt"
  />
</template>

<script lang="ts">
import _ from 'lodash';
import PptxGenJS from 'pptxgenjs';
import {
  defineComponent,
  // PropType,
  // computed,
  // ref,
  toRef,
  // Ref,
} from 'vue';

function demo(): void {
  window.location.assign(
    'https://raceuploadimages.s3.ap-south-1.amazonaws.com/ppt+output.pptx'
  );
}

export default defineComponent({
  name: 'pptCom',
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    let pChartData = toRef(props, 'chartData');
    function renderPptReprt(): void {
      console.log('render ppt', pChartData);
      // 1. Create a new Presentation
      let pptx = new PptxGenJS();
      pptx.author = 'PK';
      pptx.company = 'McKinsey';
      pptx.revision = '15';
      pptx.subject = 'LPP SUMMARY SHEET';
      pptx.title = 'LLP Sample Presentation';
      // Define new layout for the Presentation

      pptx.layout = 'LAYOUT_WIDE';
      // let partName = 'Project Name';
      let prDateStart = pChartData.value.prDateStart;
      let prDateEnd = pChartData.value.prDateEnd;

      let gDemoTitleText = {
        x: 0.5,
        y: 0.3,
        w: '60%',
        h: 1.0,
        fontSize: 22,
        fontFace: 'Georgia (Headings)',
        color: '051c2c',
        bold: true,
        border: [0, 0, { pt: '1', color: '051c2c' }, 0],
      };
      let gDemoTitleText2 = {
        x: 0.5,
        y: 0.3,
        w: '95%',
        h: 1.0,
        fontSize: 22,
        fontFace: 'Georgia (Headings)',
        color: '051c2c',
        bold: true,
      };
      let top7Contri = (pChartData.value.top7Contri * 100).toFixed(2);

      let headers = pChartData.value;
      let colarry: [string|any] = headers.tblSum.map((x: Record<string, any>) => x.name);
      let colValarry: [number|string|any] = headers.tblSum.map((x: Record<string, any>) => x.amount);
      let colValPerarry: [number|string|any] = headers.tblSum.map((x: Record<string, any>) => x.per);
      let colValDiffarry: [number|string|any] = headers.tblSum.map((x: Record<string, any>) => x.diff);

      let arrTabRows1: PptxGenJS.TableRow[] = [
        [
          {
            text: 'Head',
            options: { valign: 'middle', align: 'left', fontFace: 'Arial' },
          },
          {
            text: 'Amount in INR',
            options: { valign: 'middle', align: 'left', fontFace: 'Arial' },
          },
          {
            text: 'Difference',
            options: { valign: 'middle', align: 'left', fontFace: 'Arial' },
          },
          {
            text: '% Diff',
            options: { valign: 'middle', align: 'left', fontFace: 'Arial' },
          },
        ],
        [
          {
            text: colarry[0] || '',
            options: { valign: 'middle', align: 'left', fontFace: 'Arial' },
          },
          {
            text: colValarry[0].toString(),
            options: { valign: 'middle', align: 'left', fontFace: 'Arial' },
          },
          {
            text: colValDiffarry[0].toString(),
            options: { valign: 'middle', align: 'left', fontFace: 'Arial' },
          },
          {
            text: colValPerarry[0].toString(),
            options: { valign: 'middle', align: 'left', fontFace: 'Arial' },
          },
        ],
        [
          { text: colarry[1], options: { valign: 'middle', align: 'left' } },
          {
            text: (colValarry[1] || '').toString(),
            options: { valign: 'middle', align: 'left' },
          },
          {
            text: (colValDiffarry[1] || '').toString(),
            options: { valign: 'middle', align: 'left' },
          },
          {
            text: colValPerarry[1].toString(),
            options: { valign: 'middle', align: 'left' },
          },
        ],
        [
          { text: colarry[2], options: { valign: 'middle', align: 'left' } },
          {
            text: colValarry[2].toString(),
            options: { valign: 'middle', align: 'left' },
          },
          {
            text: colValDiffarry[2].toString(),
            options: { valign: 'middle', align: 'left' },
          },
          {
            text: colValPerarry[2].toString(),
            options: { valign: 'middle', align: 'left' },
          },
        ],
        [
          { text: colarry[3], options: { valign: 'middle', align: 'left' } },
          {
            text: colValarry[3].toString(),
            options: { valign: 'middle', align: 'left' },
          },
          {
            text: '-',
            options: { valign: 'middle', align: 'left' },
          },
          {
            text: '-',
            options: { valign: 'middle', align: 'left' },
          },
        ],
      ];

      // TABLE 3: Formatting at a cell level
      // - use this to selectively override the table's cell options
      //slide 1
      pptx.defineSlideMaster({
        title: 'VendorView',
        objects: [
          {
            text: {
              text: 'LLP Summary ',
              options: {
                ...gDemoTitleText2,
                line: {
                  color: '051c2c',
                  width: 0.5,
                },
              },
            },
          },
          {
            text: {
              text: 'Source: LLP',
              options: {
                x: 0.5,
                y: 6.95,
                w: 1.5,
                h: 0.5,
                align: 'left',
                fontSize: 9,
                color: '051c2c',
              },
            },
          },
          {
            line: {
              x: 0.5,
              y: 6.95,
              w: '90%',
              h: 0.0,
              fill: pptx.colors.BACKGROUND2,
              line: {
                color: '051c2c',
                width: 0.8,
              },
            },
          },

          {
            text: {
              text: 'McKinesy & Company',
              options: {
                x: 9.5,
                y: 6.98,
                w: '25%',
                h: 0.5,
                align: 'right',
                fontSize: 8,
                color: '051c2c',
              },
            },
          },

          {
            image: { x: 11.5, y: 0.25, w: 1.5, h: 0.5, data: '' },
          },
        ],
        slideNumber: { x: 0.25, y: 6.98, fontSize: 10 },
      });
      let VendorViewslide = pptx.addSlide({
        masterName: 'VendorView',
        sectionTitle: 'Tables',
      });
      VendorViewslide.addTable(arrTabRows1, {
        x: 0.5,
        y: 1.8,
        w: '90%',
        rowH: 0.5,

        align: 'left',
        valign: 'middle',
        fontFace: 'Arial (Body)',
        fontSize: 14,
        bold: true,
        color: '051c2c',
        border: [
          { type: 'none', pt: 0.5 },
          { type: 'none', pt: 0.5 },
          { type: 'solid', pt: 0.5 },
          { type: 'none', pt: 0.5 },
        ],
      });
      VendorViewslide.addShape(pptx.ShapeType.rect, {
        x: 9.3,
        y: 1.8,
        w: 1.2,
        h: 3.0,
        fill: { color: 'c3e4e8', transparency: 70 },
      });

      let headerRow: any = [
        ['Name', '# of orders', 'Value Rs crore', 'Min.', 'Max.', 'Avg.'],
      ];
      // let headerRow2: any = [
      //   [
      //     'Name',
      //     '# of orders',
      //     'Value Rs crore',
      //     'Min.',
      //     'Max.',
      //     {
      //       text: 'Diff.',
      //       Option: {
      //         fill: { color: '0088CC', transparency: 50 },
      //       },
      //     },
      //   ],
      // ];
      let top7Sup = pChartData.value.top7Vendor;
      let totalSpend = pChartData.value.totalSpend.toFixed(2);

      let venPOmin = pChartData.value.venPOmin;
      let venPOmax = pChartData.value.venPOmax;
      let rows: any = [];
      _.forEach(top7Sup, (x: any) => {
        rows.push([x.name, x.noOrders, x.SupValue, x.min, x.max, x.avg]);
      });
      let sumTblRow: any = [
        [
          'Total',
          _.sumBy(top7Sup, 'noOrders'),
          _.sumBy(top7Sup, 'SupValue').toFixed(2),
          '',
          '',
          '',
        ],
      ];
      pptx.defineSlideMaster({
        title: 'MASTER_SLIDE',
        bkgd: 'FFFFFF',
        objects: [
          {
            text: {
              text: `Top 7 vendors contribute about ${top7Contri}% of total spend for the period ${prDateEnd} - ${prDateStart}`,
              options: gDemoTitleText,
            },
          },

          {
            text: {
              text: 'Source: LLP',
              options: {
                x: 0.5,
                y: 6.95,
                w: 1.5,
                h: 0.5,
                align: 'left',
                fontSize: 9,
                color: '051c2c',
              },
            },
          },
          {
            line: {
              x: 0.5,
              y: 6.95,
              w: 8.5,
              h: 0.0,
              fill: pptx.colors.BACKGROUND2,
              line: {
                color: '051c2c',
                width: 0.8,
              },
            },
          },

          {
            text: {
              text: 'McKinesy & Company',
              options: {
                x: 9.5,
                y: 6.98,
                w: '25%',
                h: 0.5,
                align: 'right',
                fontSize: 8,
                color: '051c2c',
              },
            },
          },

          {
            image: { x: 11.5, y: 0.25, w: 1.5, h: 0.5, data: '' },
          },
        ],
        slideNumber: { x: 0.25, y: 6.98, fontSize: 10 },
      });

      // Set presentation to use new layout
      //
      // 2. Add a Slide

      // Row One: cells will be formatted according to any options provided to `addTable()`
      let slide = pptx.addSlide({
        masterName: 'MASTER_SLIDE',
        sectionTitle: 'Tables',
      });
      slide.addShape(pptx.ShapeType.rect, {
        x: 9.1,
        y: 0.0,
        w: 4.2,
        h: 7.5,
        fill: pptx.colors.BACKGROUND2,
      });

      slide.addShape(pptx.shapes.LINE, {
        x: 9.1,
        y: 2.3,
        w: 4.2,
        h: 0.0,
        line: {
          color: '051c2c',
          width: 1,
        },
      });

      slide.addText('Key Observations', {
        x: 9.1,
        y: 1.5,
        h: 1.0,
        fontSize: 16,
        fontFace: 'Arial (Body)',
        bold: false,
        color: '051c2c',

        outline: { size: 1.5, color: '051c2c' },
      });

      slide.addText('McKinesy & Company', {
        x: 9.5,
        y: 6.98,
        w: '25%',
        h: 0.5,
        align: 'right',
        fontSize: 8,
        color: '051c2c',
      }),
        slide.addShape(pptx.shapes.LINE, {
          x: 9.1,
          y: 1.5,
          w: 4.2,
          h: 0.0,
          fill: pptx.colors.BACKGROUND2,
          line: {
            color: '051c2c',
            width: 1,
          },
        });
      slide.addShape(pptx.shapes.LINE, {
        x: 9.3,
        y: 6.98,
        w: 4.0,
        h: 0.0,
        fill: pptx.colors.BACKGROUND2,
        line: {
          color: '051c2c',
          width: 0.8,
        },
      });

      slide.addTable(headerRow, {
        x: 0.5,
        y: 1.8,
        w: 8,
        rowH: 0.5,
        colW: [3, 1, 1, 1, 1, 1],

        align: 'left',
        valign: 'middle',
        fontFace: 'Arial (Body)',
        fontSize: 14,
        bold: true,
        color: '051c2c',
        border: [
          { type: 'none', pt: 0.5 },
          { type: 'none', pt: 0.5 },
          { type: 'solid', pt: 0.5 },
          { type: 'none', pt: 0.5 },
        ],
      });
      slide.addTable(rows, {
        x: 0.5,
        y: 2.4,
        w: 8,
        rowH: 0.53,
        colW: [3, 1, 1, 1, 1, 1],
        align: 'left',
        valign: 'middle',
        fontFace: 'Arial (Body)',
        fontSize: 14,
        color: '051c2c',
        border: [
          { type: 'none', pt: 0.5 },
          { type: 'none', pt: 0.5 },
          { type: 'solid', pt: 0.5 },
          { type: 'none', pt: 0.5 },
        ],
      });
      slide.addTable(sumTblRow, {
        x: 0.5,
        y: 6.2,
        w: 8,
        rowH: 0.7,
        colW: [3, 1, 1, 1, 1, 1],
        align: 'left',
        valign: 'middle',
        fontFace: 'Arial (Body)',
        fontSize: 14,
        bold: true,
        color: '051c2c',
        border: [
          { type: 'none', pt: 0.5 },
          { type: 'none', pt: 0.5 },
          { type: 'none', pt: 1.0 },
          { type: 'none', pt: 0.5 },
        ],
      });

      // add key observation
      slide.addText(
        [
          {
            text: `Total spend without xx for the year 2020- YTD is INR ${totalSpend} Cr`,
            options: { bullet: true, breakLine: true },
          },
          { text: '', options: { bullet: true, breakLine: true } },
          {
            text: `Vendors have worked on single PO’s ranging from ${
              venPOmin.netvalue / 100000
            } lakhs to ${venPOmax.netvalue / 10000000} cr`,
            options: { bullet: true },
          },
          { text: '', options: { bullet: true, breakLine: true } },
          {
            text: 'Engage with vendors to understand capacity and location preference',
            options: { bullet: true, breakLine: true },
          },
        ],
        {
          x: 9.1,
          y: 2.4,
          w: 4.2,
          h: 4.5,
          fontSize: 16,
          fontFace: 'Arial (Body)',
          bold: false,
          color: '051c2c',
          valign: 'top',
          lineSpacing: 20,
        }
      );

      // 4. Save the Presentation
      pptx.writeFile({ fileName: 'LPP_PPT_REPORT' });
      // demo();
      //let reportName = `LPP_PPT_Report`;
    }
    return {
      demo,
      pChartData,
      renderPptReprt,
    };
  },
});
</script>
