// Scenario: Scenario_1 (executor: ramping-vus)

import { sleep, group } from 'k6'
import http from 'k6/http'
import { check } from 'k6'

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
        { target: 5, duration: '30s' },
        { target: 0, duration: '30s' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  const vars = {}

  const res = http.get('https://new.echopark.com/');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  group('homePage - https://new.echopark.com/', function () {
    response = http.get('https://new.echopark.com/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(4.9)

    response = http.post(
      'https://new.echopark.com/api/sitecore/vehicleslisting/GetSuggestions',
      '{"FilteredFacets":null,"Query":"c"}',
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjM1ODJkMTRmOTk2OWY0MTUiLCJ0ciI6IjllOWNjZTg2YWE2Mjc4M2M5OWZhZjhlYzY0MjVlNzgwIiwidGkiOjE2NTAyOTIxNDgxOTYsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-9e9cce86aa62783c99faf8ec6425e780-3582d14f9969f415-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-3582d14f9969f415----1650292148196',
        },
      }
    )

    response = http.post(
      'https://new.echopark.com/api/sitecore/vehicleslisting/GetSuggestions',
      '{"FilteredFacets":null,"Query":"ci"}',
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjNmZGJiOTliNmM4NDY2MWEiLCJ0ciI6IjE4YzkzYjA0MzM5YzJlNWU4MWE3MDczZTVmYTlhZTIwIiwidGkiOjE2NTAyOTIxNDgzNDQsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-18c93b04339c2e5e81a7073e5fa9ae20-3fdbb99b6c84661a-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-3fdbb99b6c84661a----1650292148344',
        },
      }
    )

    response = http.post(
      'https://new.echopark.com/api/sitecore/vehicleslisting/GetSuggestions',
      '{"FilteredFacets":null,"Query":"civ"}',
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjRlM2NiMzBjYzM4N2MxODAiLCJ0ciI6Ijg0M2NlYTBlODQ4MWQ4NTI2NjBlNzk2ZTg1YzNjZjkwIiwidGkiOjE2NTAyOTIxNDg1NDcsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-843cea0e8481d852660e796e85c3cf90-4e3cb30cc387c180-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-4e3cb30cc387c180----1650292148547',
        },
      }
    )
    sleep(0.5)

    response = http.post(
      'https://new.echopark.com/api/sitecore/vehicleslisting/GetSuggestions',
      '{"FilteredFacets":null,"Query":"civi"}',
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjFmOTNmNmUwOGUwZWFhNzYiLCJ0ciI6IjI4ZjVmNzJkODk5ZWU5Yzg3Y2VjYmEwMGFmOTNhNGIwIiwidGkiOjE2NTAyOTIxNDkwNDcsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-28f5f72d899ee9c87cecba00af93a4b0-1f93f6e08e0eaa76-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-1f93f6e08e0eaa76----1650292149047',
        },
      }
    )

    response = http.post(
      'https://new.echopark.com/api/sitecore/vehicleslisting/GetSuggestions',
      '{"FilteredFacets":null,"Query":"civic"}',
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6ImZiMDNiYTA0NzYzNGM4ZmUiLCJ0ciI6IjY2ZjFiYWI0NzZhZTk2NGFmMjU3ZjZiNzU3MmFmOWUwIiwidGkiOjE2NTAyOTIxNDkyNTYsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-66f1bab476ae964af257f6b7572af9e0-fb03ba047634c8fe-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-fb03ba047634c8fe----1650292149256',
        },
      }
    )
    sleep(0.5)

    response = http.post(
      'https://new.echopark.com/api/sitecore/vehicleslisting/GetSrpRelativeUrlForSearchKeywords',
      {
        keywords: 'civic',
      },
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjMzNjI2ODhmNWNmM2ZmOWEiLCJ0ciI6IjEzODUxNjJiZjYzNzA2NGVhNDg0ZmQ3ZTc4NDM3MWEwIiwidGkiOjE2NTAyOTIxNDk3NzcsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-1385162bf637064ea484fd7e784371a0-3362688f5cf3ff9a-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-3362688f5cf3ff9a----1650292149777',
        },
      }
    )
  })

  group('searchPage - https://new.echopark.com/used-cars/civic', function () {
    response = http.get('https://new.echopark.com/used-cars/civic', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    vars['hdnIsShopLocalCarsSelected1'] = response
      .html()
      .find('input[name=hdnIsShopLocalCarsSelected]')
      .first()
      .attr('value')

    sleep(1.8)

    response = http.get('https://new.echopark.com/api/sitecore/vehicleslisting/getfilterfacets', {
      headers: {
        accept: '*/*',
        'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
        'x-requested-with': 'XMLHttpRequest',
        newrelic:
          'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjU4ZjM5MTIwZWE2MzRjMTgiLCJ0ciI6IjdhNWVhMzFmZDEwYmE3ZTEzMTY4MTZiZGYwNzc5NDEwIiwidGkiOjE2NTAyOTIxNTE3MjUsInRrIjoiMTMyNTcwNyJ9fQ==',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        traceparent: '00-7a5ea31fd10ba7e1316816bdf0779410-58f39120ea634c18-01',
        tracestate: '1325707@nr=0-1-3153172-1385894706-58f39120ea634c18----1650292151725',
      },
    })
    sleep(0.7)

    response = http.post(
      'https://new.echopark.com/api/sitecore/vehicleslisting/GetFilters',
      {
        url: 'https://new.echopark.com/used-cars/civic',
      },
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6Ijg3NmIwMWIyZGNhYTEyOTAiLCJ0ciI6IjY4ZTlhYWJkYjlhODMzYzFiOGQyM2M1MWFmNmEzNWUwIiwidGkiOjE2NTAyOTIxNTI0MDcsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-68e9aabdb9a833c1b8d23c51af6a35e0-876b01b2dcaa1290-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-876b01b2dcaa1290----1650292152407',
        },
      }
    )

    response = http.post(
      'https://new.echopark.com/api/sitecore/VehiclesListing/GetVehicles',
      `{"options":{"FilteredFacets":[{"Key":"modeldisplay","QueryStringKey":"ml","AccordionTitle":"Model","FilterType":"Exact","SitecoreItemId":"d217184d-1e1f-4d5e-874d-ea92778323da","Options":null,"IncludeInSRPHashTable":false,"HashTablePriorityOrder":0,"Value":["Civic"]},{"Key":"dealerid","FilterType":"Exact","Value":["EchoParkCharlotte","EchoParkGreensboroDeliveryCenter","EchoparkGreenvilleDeliveryCenter","EchoParkJohnsonCity","EchoParkRaleigh","EchoparkAugustaDeliveryCenter","EchoParkCharlestonDeliveryCenter","EchoParkKnoxvilleDeliveryCenter","EchoParkAtlanta","EchoParkMarietta","EchoparkChattanoogaDeliveryCenter"]}],"Sort":[{"Key":"Distance","Direction":"asc"},{"Key":"dateinstockticks","Direction":"asc"},{"Key":"sellingprice","Direction":"asc"}],"PageSize":"24","PageNumber":1,"Query":"${vars['hdnIsShopLocalCarsSelected1']}","RecordCountOnly":false,"IncludeShipping":true,"IsAutoSuggestion":null,"TotalRecords":"0","IsShippableDataLoading":false,"CurrentShippableStoreId":null,"CurrentShippableStoreLoadedCount":null}}`,
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjkwNDczYWNiOWYyMDMyZWIiLCJ0ciI6Ijk5MjgwYzMzYWJkN2UyNjBmMGE5NDdmZWExYzBlMmQwIiwidGkiOjE2NTAyOTIxNTI1ODUsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-99280c33abd7e260f0a947fea1c0e2d0-90473acb9f2032eb-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-90473acb9f2032eb----1650292152585',
        },
      }
    )
    sleep(10.1)
  })

  group('vehiclePage - https://new.echopark.com/car/2HGFC4B86KH310519', function () {
    response = http.get('https://new.echopark.com/car/2HGFC4B86KH310519', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(3)

    response = http.post(
      'https://new.echopark.com/api/sitecore/Favorites/IsFavorite',
      '{"productId":"2HGFC4B86KH310519"}',
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjM3MWIzOTliZDIzZGU5YmEiLCJ0ciI6IjZkNjdiNjdhOWZkMDk4OGVkMTliN2E5NDZiMDgxMDEwIiwidGkiOjE2NTAyOTIxNjU3MTksInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-6d67b67a9fd0988ed19b7a946b081010-371b399bd23de9ba-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-371b399bd23de9ba----1650292165719',
        },
      }
    )

    response = http.get(
      'https://new.echopark.com/api/sitecore/Profile/GetCurrentUserTradeInDetails',
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/json; charset=utf-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjYwYWNjY2VjMTUxNGY1MTkiLCJ0ciI6IjQ5ZDBjMzA4MTBmMjgyODQ1MjM4YjMwODFmOTQ2ZTYwIiwidGkiOjE2NTAyOTIxNjU3OTAsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-49d0c30810f282845238b3081f946e60-60acccec1514f519-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-60acccec1514f519----1650292165790',
        },
      }
    )

    response = http.post(
      'https://new.echopark.com/api/sitecore/VehiclesListing/GetVehicles',
      '{"options":{"FilteredFacets":[{"Key":"bodystyle","FilterType":"Exact","Value":["Coupe"]},{"Key":"Distance","FilterType":"Distance","Value":[50]}],"Sort":[{"Key":"Distance","Direction":"ASC"},{"Key":"kbbvaluepercentage","Direction":"DESC"}],"PageSize":"24","PageNumber":1}}',
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjdiMTY1MzkwYTFlNDdhNzYiLCJ0ciI6IjZlMmYyMzE2ODI2ZmJmMTI4NzcwN2ZkN2M3MGVlYWQwIiwidGkiOjE2NTAyOTIxNjU4OTYsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-6e2f2316826fbf1287707fd7c70eead0-7b165390a1e47a76-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-7b165390a1e47a76----1650292165896',
        },
      }
    )

    response = http.post(
      'https://new.echopark.com/api/sitecore/VehicleDetails/GetPrice',
      '{"DownPayment":1000,"Term":60,"CreditTier":"GOOD","APR":0.06,"VIN":"2HGFC4B86KH310519"}',
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6ImUwMGQzNjc4NDQxZmEyMzgiLCJ0ciI6ImQzM2FmNmEyODZmOGQ2YmJiYzMxZThiZjA4YWM3ZmQwIiwidGkiOjE2NTAyOTIxNjU5MDIsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-d33af6a286f8d6bbbc31e8bf08ac7fd0-e00d3678441fa238-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-e00d3678441fa238----1650292165902',
        },
      }
    )
  })
}