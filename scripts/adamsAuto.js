// Scenario: Scenario_1 (executor: ramping-vus)

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  ext: {
    loadimpact: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
      apm: [],
    },
  },
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 5, duration: '30s' },
        { target: 5, duration: '1m10s' },
        { target: 0, duration: '30s' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  group('home - http://www.adamsofcharlotte.com/', function () {
    response = http.get('http://www.adamsofcharlotte.com/', {
      headers: {
        'upgrade-insecure-requests': '1',
      },
    })
    sleep(6)
  })

  group('search - http://www.adamsofcharlotte.com/inventory?t=u&q=civic', function () {
    response = http.get('http://www.adamsofcharlotte.com/inventory?t=u&q=civic', {
      headers: {
        'upgrade-insecure-requests': '1',
      },
    })
    sleep(2.1)
    response = http.get(
      'http://www.adamsofcharlotte.com/used-cars-charlotte-nc?q=civic&mode=_ajax&_imod%5B%5D=Dfe_Components_InventoryListing_Component&_gmod%5B0%5D=Dfe_Modules_VehiclePrice_Module&_gmod%5B1%5D=Dfe_Modules_CustomizePayment_Module&_cmp=1&act=loadNextPage&page=2',
      {
        headers: {
          accept: '*/*',
          'x-requested-with': 'XMLHttpRequest',
        },
      }
    )
    sleep(2.1)
  })

  group(
    'carFound - http://www.adamsofcharlotte.com/vehicle-details/used-2019-honda-civic-si-4dr-sedan-6m-charlotte-nc-id-45384488',
    function () {
      response = http.get(
        'http://www.adamsofcharlotte.com/vehicle-details/used-2019-honda-civic-si-4dr-sedan-6m-charlotte-nc-id-45384488',
        {
          headers: {
            'upgrade-insecure-requests': '1',
          },
        }
      )
    }
  )
}
