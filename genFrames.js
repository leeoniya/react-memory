function genFrames() {
  const ts = Array(2_000);
  const vals = Array(2_000);

  for (let i = 0; i < 2_000; i++) {
    ts[i] = 1773554800346 + i;
    vals[i] = Math.random() * 100
  }

  const data = Array(2_000);

  for (let i = 0; i < 2_000; i++) {
    // data[i] = [
    //   ts.slice(),
    //   vals.slice(),
    // ];

    data[i] = genFrame(ts, vals);
  }

  return data;
}

function genFrame(ts, vals) {
  return {
    refId: 'A',
    meta: {
      type: 'timeseries-multi',
      typeVersion: [0, 1],
      custom: {
        calculatedMinStep: 3600000,
        resultType: 'matrix',
      },
      executedQueryString:
        'Expr: avg(avg_over_time(fe_perf_used_js_heap_size_bytes{instance="fsperfbaseline.grafana-dev.net"}[1h]))\nStep: 1h0m0s',
      preferredVisualisationType: 'graph',
    },
    fields: [
      {
        name: 'Time',
        type: 'time',
        typeInfo: {
          frame: 'time.Time',
        },
        config: {
          interval: 3600000,
          custom: {
            drawStyle: 'line',
            lineInterpolation: 'linear',
            barAlignment: 0,
            barWidthFactor: 0.6,
            lineWidth: 1,
            fillOpacity: 0,
            gradientMode: 'none',
            showPoints: 'auto',
            showValues: false,
            pointSize: 5,
            axisPlacement: 'auto',
            axisColorMode: 'text',
            axisBorderShow: false,
            axisCenteredZero: false,
            hideFrom: {
              tooltip: false,
              viz: false,
              legend: false,
            },
            thresholdsStyle: {
              mode: 'off',
            },
          },
          unit: 'bytes',
          color: {
            mode: 'palette-classic',
          },
          thresholds: {
            mode: 'absolute',
            steps: [
              {
                value: null,
                color: 'green',
              },
              {
                value: 80,
                color: 'red',
              },
            ],
          },
        },
        values: ts.slice(),
        entities: {},
        state: {
          displayName: 'Time',
          seriesIndex: 0,
          multipleFrames: false,
          nullThresholdApplied: true,
          origin: {
            frameIndex: 0,
            fieldIndex: 0,
          },
        },
      },
      {
        name: 'Value',
        type: 'number',
        typeInfo: {
          frame: 'float64',
        },
        labels: {
          channel: `fast-${Math.floor(Math.random() * 100)}`,
          plan: "advanced",
          version: "13.0.0-23651619436"
        },
        config: {
          displayNameFromDS: 'fe_perf_used_js_heap_size_bytes',
          custom: {
            drawStyle: 'line',
            lineInterpolation: 'linear',
            barAlignment: 0,
            barWidthFactor: 0.6,
            lineWidth: 1,
            fillOpacity: 0,
            gradientMode: 'none',
            spanNulls: true,
            insertNulls: false,
            showPoints: 'auto',
            showValues: false,
            pointSize: 5,
            stacking: {
              mode: 'none',
              group: 'A',
            },
            axisPlacement: 'auto',
            axisLabel: '',
            axisColorMode: 'text',
            axisBorderShow: false,
            scaleDistribution: {
              type: 'linear',
            },
            axisCenteredZero: false,
            hideFrom: {
              tooltip: false,
              viz: false,
              legend: false,
            },
            thresholdsStyle: {
              mode: 'off',
            },
          },
          unit: 'bytes',
          min: 0,
          color: {
            mode: 'palette-classic',
          },
          mappings: [],
          thresholds: {
            mode: 'absolute',
            steps: [
              {
                value: null,
                color: 'green',
              },
              {
                value: 80,
                color: 'red',
              },
            ],
          },
        },
        values: vals.slice(),
        entities: {},
        state: {
          displayName: 'fe_perf_used_js_heap_size_bytes',
          seriesIndex: 0,
          range: {
            min: 0,
            max: 59075032,
            delta: 59075032,
          },
          multipleFrames: false,
        },
      },
    ],
    length: ts.length,
  };
}

