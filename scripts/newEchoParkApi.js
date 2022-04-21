// Scenario: Scenario_1 (executor: ramping-vus)

import { sleep, group } from 'k6'
import http from 'k6/http'
import { check } from 'k6'

import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

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
    response = http.get(
      'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://cdn.optimizely.com/js/20473601091.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://new.echopark.com/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.googletagmanager.com/gtm.js?id=GTM-5XM9K64', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxK.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fBBc4.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/1a61ddb400a84b9d880874723bbb61af.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/2f73e2eda9bb410481c0d78ad0c63891.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/061da8af97724ff19c6cfa4180f0305e.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/b7edc4a1a81a4e8a808d79ae82435402.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fBBc4.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBBc4.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/03dbf8e8b71f48c18e34e40aa350322f.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/ab6779d73b33496aa2460869d898ebff.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/cc2a18d7c01446df9b497e2ced1c19c6.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/e1759feb2f3d46bfbfef9c1a60dc6e7a.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/7d862941074c4c0a925782f83907c896.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/f0e3c81d456d4f3e80425ff2e234530b.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/cfd5236f3d4a43b6846300079f61ed8b.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/658a4e01d3a0431896225e9575026521.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/3628abd23b8743b283c3d5861c90030d.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/d9684a4b1daf410aaf117ce6412ea818.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/67a3905f4d194892ae6d30e44908793e.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/a6770f343b9a46daa0ba89406d806060.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/a9edbeae19ca4588bbc069c1c3e91955.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/aaf3a954815d416280cf63b9b957cbd7.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/cfbecf7ae0124bad8a79189314b2bc45.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/a41281a56db94fddbed5396b6905442c.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/44f495b55c0a440496ed7d8ad676c4ca.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/2c87e726271d437da079c12ecd672387.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/0d3d256930e441928c9a6ecd5bec7c5b.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/c1d3ab6420d7477b9e1e7a741f0437d1.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/c87b2d23deef4e2b8bb47290cc53ad9a.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.googletagmanager.com/gtag/js?id=G-QY8WNQN5HH&l=dataLayer&cx=c',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://wsmcdn.audioeye.com/aem.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.google-analytics.com/analytics.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://t.contentsquare.net/uxa/ec72e90a3ce3a.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://ai.autoid.com/ai.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://app.carnow.com/dealers/carnow_plugin.js?key=ACJbgfKDxsfki3pDgKup5IvnFBtyxrLKb7slKitut5JltfJb',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://wsv3cdn.audioeye.com/bootstrap.js?h=5e3fc2ac7eaa50810496576798659a1f',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/j/collect?v=1&_v=j96&a=1541248173&t=pageview&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2F&ul=pt-br&de=UTF-8&dt=Buy%20Used%20Cars%20%7C%20Pre-Owned%20Cars%20for%20Sale%20%7C%20EchoPark&sd=24-bit&sr=1366x768&vp=1349x590&je=0&_u=QACAAEABAAAAAC~&jid=1403249586&gjid=1765817282&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&_r=1&gtm=2wg4d05XM9K64&cd1=false&cd2=0.5518828369223046_1650292069811&z=1971533630',
      null,
      {
        headers: {
          'content-type': 'text/plain',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1541248173&t=event&ni=0&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2F&ul=pt-br&de=UTF-8&dt=Buy%20Used%20Cars%20%7C%20Pre-Owned%20Cars%20for%20Sale%20%7C%20EchoPark&sd=24-bit&sr=1366x768&vp=1349x590&je=0&ec=Page%20Load&ea=undefined&el=28211%20-%20EchoPark%20Charlotte&ev=0&_u=QACAAEABAAAAAC~&jid=&gjid=&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&gtm=2wg4d05XM9K64&cd1=false&cd2=0.5518828369223046_1650292069811&cd4=0&cd5=EchoPark%20Charlotte&z=1362580649',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/pageview?pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&lv=1650291951&lhd=1650291951&hd=1650293106&pn=11&dw=1349&dh=4528&ww=1366&wh=590&sw=1366&sh=768&dr=&url=https%3A%2F%2Fnew.echopark.com%2F&uc=0&la=pt-BR&v=11.19.4&r=275879',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/dvar?v=11.19.4&pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&pn=11&dv=N4IgxgzgsghgLmAFgSwHYHMDSBTAniALhAAYA6AVnIEYAOGgJhoGYA2ATnvqeIBYWB9Ki3LF6HYuxpUqIAL5AA%3D%3D&r=666878',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://stats.g.doubleclick.net/j/collect?t=dc&aip=1&_r=3&v=1&_v=j96&tid=UA-48247646-7&cid=134380896.1650052052&jid=1403249586&gjid=1765817282&_gid=150771212.1650241250&_u=QACAAEAAAAAAAC~&z=1252724192',
      null,
      {
        headers: {
          'content-type': 'text/plain',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://wsv3cdn.audioeye.com/v2/scripts/loader.js?h=5e3fc2ac7eaa50810496576798659a1f&lang=en&cb=7fce7ce',
      {
        headers: {
          origin: 'https://new.echopark.com',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/jquery.bundle.js?cb=7fce7ce', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/startup.bundle.js?cb=7fce7ce', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://d29f71cuc8ityh.cloudfront.net/js2/cn-client-z3-20220417065251.js.gz',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/smartrems.bundle.7fce7ce.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://cdn.optimizely.com/js/20473601091.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://logx.optimizely.com/v1/events',
      '{"account_id":"20473601091","anonymize_ip":true,"client_name":"js","client_version":"0.174.0","enrich_decisions":true,"project_id":"20473601091","revision":"68","visitors":[{"visitor_id":"oeu1650277261619r0.5778353934160176","session_id":"AUTO","attributes":[{"e":null,"k":"","t":"browserId","v":"gc"},{"e":null,"k":"","t":"device","v":"desktop"},{"e":null,"k":"","t":"device_type","v":"desktop_laptop"},{"e":null,"k":"","t":"source_type","v":"direct"},{"e":null,"k":"","t":"currentTimestamp","v":1650293105660},{"e":null,"k":"","t":"offset","v":180}],"snapshots":[{"activationTimestamp":1650293105631,"decisions":[{"c":"21000884603","x":"21043080974","v":"21040020036","h":false}],"events":[{"e":null,"y":"client_activation","u":"b7fd2df1-79a4-40bb-8420-060ddc1a0c33","t":1650293105653}]},{"activationTimestamp":1650293105631,"decisions":[{"c":"21000884603","x":"21043080974","v":"21040020036","h":false}],"events":[{"e":"21000884603","y":"campaign_activated","u":"d3aca213-88b9-4865-9dda-38dd795c7d16","t":1650293105663}]}]}]}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://www.googletagmanager.com/gtm.js?id=GTM-5XM9K64', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fBBc4.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxK.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fBBc4.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBBc4.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://www.googletagmanager.com/gtag/js?id=G-QY8WNQN5HH&l=dataLayer&cx=c',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://wsmcdn.audioeye.com/aem.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.google-analytics.com/analytics.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://t.contentsquare.net/uxa/ec72e90a3ce3a.js', {
      headers: {
        'if-modified-since': 'Mon, 18 Apr 2022 13:36:01 GMT',
        'if-none-match': '"1e744dad562901ff58043874e8413c01"',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://ai.autoid.com/ai.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=2100862713&t=pageview&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2F&ul=pt-br&de=UTF-8&dt=Buy%20Used%20Cars%20%7C%20Pre-Owned%20Cars%20for%20Sale%20%7C%20EchoPark&sd=24-bit&sr=1366x768&vp=1366x635&je=0&_u=QACAAEAB~&jid=&gjid=&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&gtm=2wg4d05XM9K64&cd1=false&cd2=0.5518828369223046_1650292069811&z=748588064',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/1a61ddb400a84b9d880874723bbb61af.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/2f73e2eda9bb410481c0d78ad0c63891.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/061da8af97724ff19c6cfa4180f0305e.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/b7edc4a1a81a4e8a808d79ae82435402.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/03dbf8e8b71f48c18e34e40aa350322f.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/ab6779d73b33496aa2460869d898ebff.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/cc2a18d7c01446df9b497e2ced1c19c6.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/e1759feb2f3d46bfbfef9c1a60dc6e7a.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/7d862941074c4c0a925782f83907c896.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/f0e3c81d456d4f3e80425ff2e234530b.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/cfd5236f3d4a43b6846300079f61ed8b.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/658a4e01d3a0431896225e9575026521.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/3628abd23b8743b283c3d5861c90030d.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/d9684a4b1daf410aaf117ce6412ea818.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/67a3905f4d194892ae6d30e44908793e.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/a6770f343b9a46daa0ba89406d806060.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/a9edbeae19ca4588bbc069c1c3e91955.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/aaf3a954815d416280cf63b9b957cbd7.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/cfbecf7ae0124bad8a79189314b2bc45.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/a41281a56db94fddbed5396b6905442c.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/44f495b55c0a440496ed7d8ad676c4ca.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/2c87e726271d437da079c12ecd672387.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/0d3d256930e441928c9a6ecd5bec7c5b.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/c1d3ab6420d7477b9e1e7a741f0437d1.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/c87b2d23deef4e2b8bb47290cc53ad9a.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/pageview?pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&lv=1650291951&lhd=1650291951&hd=1650293107&pn=12&dw=1349&dh=3165&ww=1366&wh=635&sw=1366&sh=768&dr=&url=https%3A%2F%2Fnew.echopark.com%2F&uc=0&la=pt-BR&v=11.19.4&r=798704',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://app.carnow.com/dealers/carnow_plugin.js?key=ACJbgfKDxsfki3pDgKup5IvnFBtyxrLKb7slKitut5JltfJb',
      {
        headers: {
          'if-none-match': 'W/"eef20056d5348cfb097ae4f94a112650"',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://wsv3cdn.audioeye.com/bootstrap.js?h=5e3fc2ac7eaa50810496576798659a1f',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://wsv3cdn.audioeye.com/v2/scripts/loader.js?h=5e3fc2ac7eaa50810496576798659a1f&lang=en&cb=7fce7ce',
      {
        headers: {
          origin: 'https://new.echopark.com',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/jquery.bundle.js?cb=7fce7ce', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/startup.bundle.js?cb=7fce7ce', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://c.contentsquare.net/dvar?v=11.19.4&pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&pn=12&dv=N4IgxgzgsghgLmAFgSwHYHMDSBTAniALhAAYA6AVnIEYAOGgJhoGYA2ATnvqeIBYWB9Ki3LF6HYuxpUqIAL5AA%3D%3D&r=171885',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=2100862713&t=event&ni=0&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2F&ul=pt-br&de=UTF-8&dt=Buy%20Used%20Cars%20%7C%20Pre-Owned%20Cars%20for%20Sale%20%7C%20EchoPark&sd=24-bit&sr=1366x768&vp=1349x590&je=0&ec=Page%20Load&ea=undefined&el=28211%20-%20EchoPark%20Charlotte&ev=0&_u=SDCAAEAB~&jid=&gjid=&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&gtm=2wg4d05XM9K64&cd1=134380896.1650052052&cd2=0.5518828369223046_1650292069811&cd4=0&cd5=EchoPark%20Charlotte&z=1138233412',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://wsv3cdn.audioeye.com/v2/scripts/loader.js?h=5e3fc2ac7eaa50810496576798659a1f&lang=en&cb=7fce7ce',
      {
        headers: {
          origin: 'https://new.echopark.com',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/dvar?v=11.19.4&pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&pn=12&dv=N4IgxgzgsghgLmAFgSwHYHMDSBTAniALhAAYA6AVnIEYAOGgJhoGYA2ATnvqeIBYWB9Ki3LF6HYuxpUqIAL5AA%3D%3D&r=223989',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://d29f71cuc8ityh.cloudfront.net/js2/cn-client-z3-20220417065251.js.gz',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://app.carnow.com/dealers/widgets?id=41505&vstid=e9922422-ef7c-4591-b901-c3a71c9c23aa',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    vars['visitor_id1'] = jsonpath.query(response.json(), '$.visitor_id')[0]

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/smartrems.bundle.7fce7ce.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://c.contentsquare.net/dvar?v=11.19.4&pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&pn=12&dv=N4IgggQg%2Bg8gClAjAOgAwAIC06wHozoAmAhgC7HoBqxANgJYml0D2AdiAFwgwBOdA5nVa0QAXyAAAA%3D%3D&r=581987',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://analytics.audioeye.com/air/v0/send',
      '{"aeaid":"b6d2575c-05f2-4287-9905-72c4801c7f54","sid":"509b2e3f-79ea-4261-8ad0-05604a8d05df","pg":"https://new.echopark.com/","lang":"en","cat":"Mobile User","evt":"Page View","inm":"none","h":"5e3fc2ac7eaa50810496576798659a1f","is":"gtm-1.2"}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://d2dhoetkfll74o.cloudfront.net/p/41505/wI0Hb0vv4BJkG4Fq26JefxkdJK1EudB5-20220417065251.css?_=20220417065251',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://app.carnow.com/dealers/track_visitor',
      {
        vstid: 'e9922422-ef7c-4591-b901-c3a71c9c23aa',
        url: 'https%3A%2F%2Fnew.echopark.com%2F',
        title: 'Buy%20Used%20Cars%20%7C%20Pre-Owned%20Cars%20for%20Sale%20%7C%20EchoPark',
        desc:
          'Find%20and%20buy%20used%20cars%20at%20EchoPark.%20Financing%2C%20loans%20and%20protection%20plans%20available%20at%20the%20best%20prices.%20Browse%20our%20collection%20of%20used%20cars%20now.',
        vins: '',
        'orig-ref': 'https%3A%2F%2Fnew.echopark.com%2F',
        stage: 'INIT',
      },
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://logx.optimizely.com/v1/events',
      '{"account_id":"20473601091","anonymize_ip":true,"client_name":"js","client_version":"0.174.0","enrich_decisions":true,"project_id":"20473601091","revision":"68","visitors":[{"visitor_id":"oeu1650277261619r0.5778353934160176","session_id":"AUTO","attributes":[{"e":null,"k":"","t":"browserId","v":"gc"},{"e":null,"k":"","t":"device","v":"desktop"},{"e":null,"k":"","t":"device_type","v":"desktop_laptop"},{"e":null,"k":"","t":"source_type","v":"direct"},{"e":null,"k":"","t":"currentTimestamp","v":1650293105660},{"e":null,"k":"","t":"offset","v":180}],"snapshots":[{"activationTimestamp":1650293107185,"decisions":[{"c":"21000884603","x":"21043080974","v":"21040020036","h":false}],"events":[{"e":"21014390949-21410250147","k":"20473601091_01__homepage-20473601091_011__hybrid_homepages","t":1650293106671,"u":"8053badb-44db-41a3-9507-9a2870608d5a","y":"view_activated","a":{}}]}]},{"visitor_id":"oeu1650277261619r0.5778353934160176","session_id":"AUTO","attributes":[{"e":null,"k":"","t":"browserId","v":"gc"},{"e":null,"k":"","t":"device","v":"desktop"},{"e":null,"k":"","t":"device_type","v":"desktop_laptop"},{"e":null,"k":"","t":"source_type","v":"direct"},{"e":null,"k":"","t":"currentTimestamp","v":1650293107205},{"e":null,"k":"","t":"offset","v":180}],"snapshots":[{"activationTimestamp":1650293107185,"decisions":[{"c":"21000884603","x":"21043080974","v":"21040020036","h":false}],"events":[{"e":null,"y":"client_activation","u":"47594b05-b8df-43f6-b49b-1411af1af4ae","t":1650293107204}]},{"activationTimestamp":1650293107185,"decisions":[{"c":"21000884603","x":"21043080974","v":"21040020036","h":false}],"events":[{"e":"21000884603","y":"campaign_activated","u":"126d080b-663b-4293-882d-c5820456d4df","t":1650293107206}]}]}]}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://ai.autoid.com/ai',
      '{"build_date":" 2022-04-11 14:37:29","raw":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36###768x1366x24###180###true###true###","wid":"echopark.com","protocol":"https:","href":"https://new.echopark.com/","path":"/","search":"","hash":"","uuid":"7e28a7a9-260c-4f4b-aeb9-ff7ce55c294a","sid":"0849c1de-52b8-4238-bf9f-801ed1ab26e2","pid":null,"gid":"11d2f4973b1445549a718fbae32833da","width":1366,"height":635,"ref":"","host":"new.echopark.com","number":"{\\"num_1\\":\\"2047360109\\",\\"num_2\\":\\"3808961650\\",\\"num_3\\":\\"7047192163\\",\\"num_4\\":\\"6846300079\\",\\"num_5\\":\\"9575026521\\",\\"num_6\\":\\"5081049657\\"}","dleu":true,"ddc_sess":null,"gutm_source":null,"gutm_medium":null,"gutm_term":null,"gutm_content":null,"gutm_name":null,"gutm_gclid":null,"gclid":"","utm_source":"","utm_medium":"","utm_term":"","utm_keyword":"","utm_content":"","utm_campaign":"","adobe_id":null,"i_type":0,"i_image_url":"","i_vin":0,"i_year":"","i_make":"","i_model":"","i_price":0,"i_stock_no":"","i_trim":"","i_int_color":"","i_ext_color":"","i_mileage":0,"hosted_by":"","fp":"11d2f4973b1445549a718fbae32833da","ga_cookie":"134380896.1650052052"}',
      {
        headers: {
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options('https://ai.autoid.com/ai', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'access-control-allow-origin,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://new.echopark.com',
        'sec-fetch-mode': 'cors',
      },
    })

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=2100862713&t=event&ni=0&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2F&ul=pt-br&de=UTF-8&dt=Buy%20Used%20Cars%20%7C%20Pre-Owned%20Cars%20for%20Sale%20%7C%20EchoPark&sd=24-bit&sr=1366x768&vp=1349x590&je=0&ec=Global%20Links%20Clicks&ea=%20-&_u=SDCAAEAB~&jid=&gjid=&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&gtm=2wg4d05XM9K64&cd1=134380896.1650052052&cd2=0.5518828369223046_1650292069811&cd4=0&cd5=EchoPark%20Charlotte&z=576437054',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/dvar?v=11.19.4&pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&pn=12&dv=N4IgxgzgsghgLmAFgSwHYHMDSBTAniALhAAYA6AVnIEYAOGgJhoGYA2ATnvqeIBYWB9Ki3LF6HYuxpUqIAL5AA%3D%3D&r=072128',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://js-agent.newrelic.com/nr-spa-1215.min.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://bam.nr-data.net/1/NRJS-c2bd56d8b578b43e50f?a=1339723442&v=1215.1253ab8&to=MQEDNRFXDUdVUREIVwhLLDcgGTBdQFcGDkoDJw4PF0QMWFhXF05xCAAEGQ%3D%3D&rst=3154&ck=1&ref=https://new.echopark.com/&ap=1024&be=1631&fe=3100&dc=1972&af=err,xhr,stn,ins,spa&perf=%7B%22timing%22:%7B%22of%22:1650293105517,%22n%22:0,%22u%22:1584,%22ue%22:1584,%22f%22:26,%22dn%22:26,%22dne%22:26,%22c%22:26,%22ce%22:26,%22rq%22:44,%22rp%22:1555,%22rpe%22:1579,%22dl%22:1590,%22di%22:1971,%22ds%22:1972,%22de%22:2020,%22dc%22:3099,%22l%22:3099,%22le%22:3113%7D,%22navigation%22:%7B%22ty%22:1%7D%7D&fp=1705&fcp=1705&jsonp=NREUM.setToken',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://bam.nr-data.net/resources/1/NRJS-c2bd56d8b578b43e50f?a=1339723442&v=1215.1253ab8&to=MQEDNRFXDUdVUREIVwhLLDcgGTBdQFcGDkoDJw4PF0QMWFhXF05xCAAEGQ%3D%3D&rst=3297&ck=1&ref=https://new.echopark.com/&st=1650293105517',
      '{"res":[{"n":"navigationStart","s":0,"e":0,"o":"document","t":"timing"},{"n":"unloadEventStart","s":1584,"e":1584,"o":"document","t":"timing"},{"n":"unloadEventEnd","s":1584,"e":1584,"o":"document","t":"timing"},{"n":"fetchStart","s":26,"e":26,"o":"document","t":"timing"},{"n":"domainLookupStart","s":26,"e":26,"o":"document","t":"timing"},{"n":"domainLookupEnd","s":26,"e":26,"o":"document","t":"timing"},{"n":"connectStart","s":26,"e":26,"o":"document","t":"timing"},{"n":"connectEnd","s":26,"e":26,"o":"document","t":"timing"},{"n":"requestStart","s":44,"e":44,"o":"document","t":"timing"},{"n":"responseStart","s":1555,"e":1555,"o":"document","t":"timing"},{"n":"responseEnd","s":1579,"e":1579,"o":"document","t":"timing"},{"n":"domLoading","s":1590,"e":1590,"o":"document","t":"timing"},{"n":"domInteractive","s":1971,"e":1971,"o":"document","t":"timing"},{"n":"domContentLoadedEventStart","s":1972,"e":1972,"o":"document","t":"timing"},{"n":"domContentLoadedEventEnd","s":2020,"e":2020,"o":"document","t":"timing"},{"n":"domComplete","s":3099,"e":3099,"o":"document","t":"timing"},{"n":"loadEventStart","s":3099,"e":3099,"o":"document","t":"timing"},{"n":"loadEventEnd","s":3113,"e":3113,"o":"document","t":"timing"}]}',
      {
        headers: {
          'content-type': 'text/plain',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://logx.optimizely.com/v1/events',
      '{"account_id":"20473601091","anonymize_ip":true,"client_name":"js","client_version":"0.174.0","enrich_decisions":true,"project_id":"20473601091","revision":"68","visitors":[{"visitor_id":"oeu1650277261619r0.5778353934160176","session_id":"AUTO","attributes":[{"e":null,"k":"","t":"browserId","v":"gc"},{"e":null,"k":"","t":"device","v":"desktop"},{"e":null,"k":"","t":"device_type","v":"desktop_laptop"},{"e":null,"k":"","t":"source_type","v":"direct"},{"e":null,"k":"","t":"currentTimestamp","v":1650293107205},{"e":null,"k":"","t":"offset","v":180}],"snapshots":[{"activationTimestamp":1650293107185,"decisions":[{"c":"21000884603","x":"21043080974","v":"21040020036","h":false}],"events":[{"e":"21014390949-21410250147","k":"20473601091_01__homepage-20473601091_011__hybrid_homepages","t":1650293108215,"u":"0455587b-6c5e-41a9-afdc-7fabbeebf32c","y":"view_activated","a":{}}]}]}]}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://app.carnow.com/dealers/visitor_info?vstid=e9922422-ef7c-4591-b901-c3a71c9c23aa&g=0',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.5)

    response = http.post(
      'https://bam.nr-data.net/events/1/NRJS-c2bd56d8b578b43e50f?a=1339723442&v=1215.1253ab8&to=MQEDNRFXDUdVUREIVwhLLDcgGTBdQFcGDkoDJw4PF0QMWFhXF05xCAAEGQ%3D%3D&rst=4659&ck=1&ref=https://new.echopark.com/&ptid=be32d5f9-0001-bcf3-fdb1-01803d226b48',
      "bel.7;1,7,,3l1,2et,8x,'initialPageLoad,'https://new.echopark.com/,1,1,,,,sg,!!'84cb9fa6-95a7-4c4f-8fe4-b7a25014ab3a,'1,1bd,1bd;2,,1a9,4c,1,3,'POST,5o,'logx.optimizely.com:443,'/v1/events,sk,,,'5,!!!;2,,1sp,5j,,,4,5k,'k-aus1.contentsquare.net:443,'/v2/recording,dvg,0,1,'10,!!!;2,,1sr,5i,,,4,5k,8,9,3jg,0,1,'11,!!!;2,1,1se,8m,1k1,f,'GET,5k,'app.carnow.com:443,'/dealers/widgets,,fjv,,'9,!!!;2,,218,bj,1,1,4,5k,d,'/dealers/track_visitor,dy,,,'13,!!!;2,,22r,3x,1,1,4,5o,5,6,1c9,,,'16,!!!;2,,202,7x,,,4,5k,8,9,1bs0,0,1,'12,!!!;2,,26a,vv,9,9,4,5k,'ai.autoid.com:443,'/ai,x2,e0,1,'17,!!!;b,180,!,!-17a,,,,!,i,15z,o,b,al,1,1c,tz,,e",
      {
        headers: {
          'content-type': 'text/plain',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.8)

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/launcher.bundle.7fce7ce.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/compliance.bundle.7fce7ce.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/lato/v22/S6uyw4BMUTPHjx4wXiWtFCc.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(1.2)

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-QY8WNQN5HH&gtm=2oe4d0&_p=2100862713&sr=1366x768&_z=ccd.MCB&ul=pt-br&cid=134380896.1650052052&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2F&dt=Buy%20Used%20Cars%20%7C%20Pre-Owned%20Cars%20for%20Sale%20%7C%20EchoPark&sid=1650292053&sct=3&seg=1&en=page_view',
      null,
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://analytics.audioeye.com/air/report',
      '{"url":"https://new.echopark.com/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36","hash":"5e3fc2ac7eaa50810496576798659a1f","installSource":"gtm-1.2","data":{"tests":[{"name":"imgTextAlt","results":[{"name":"imgTextAltFound","total":18},{"name":"imgTextAltNotFound","total":1},{"name":"imgTextAltFoundDecorative","total":1}],"testTime":11.1},{"name":"imgAdjacent","results":[],"testTime":5.1},{"name":"inputImageTextAlt","results":[],"testTime":0.4},{"name":"mapAreaTextAlt","results":[],"testTime":0.9},{"name":"appletEquivalent","results":[],"testTime":0.3},{"name":"embedEquivalent","results":[],"testTime":0.3},{"name":"objectEquivalent","results":[],"testTime":0.3},{"name":"svgEquivalent","results":[],"testTime":0.7},{"name":"mediaTranscript","results":[],"testTime":4.1},{"name":"videoCaption","results":[{"name":"videoCaptionReview","total":1}],"testTime":7.5},{"name":"videoTextAlternative","results":[{"name":"videoTextAlternativeReview","total":1}],"testTime":7.3},{"name":"htmlSemantics","results":[{"name":"htmlSemanticsFound","total":35},{"name":"htmlSemanticsUseHeader","total":6},{"name":"htmlSemanticsBadUL","total":1},{"name":"htmlSemanticsNoscript","total":1}],"testTime":28.6},{"name":"tableSemantics","results":[],"testTime":1.1},{"name":"htmlDocumentStructure","results":[{"name":"htmlDocumentStructureLogical","total":19}],"testTime":13.6},{"name":"scriptKeyboardEvents","results":[{"name":"scriptKeyboardEventsOnClick","total":15},{"name":"scriptKeyboardEventsMouseOnly","total":14}],"testTime":4.9},{"name":"scriptKeyboardTrap","results":[{"name":"scriptKeyboardTrapReview","total":2}],"testTime":1.5},{"name":"scriptExtendTimeLimit","results":[],"testTime":0.8},{"name":"scriptPauseUpdates","results":[],"testTime":0.9},{"name":"mediaFlashing","results":[{"name":"mediaFlashingFoundScript","total":1}],"testTime":0.8},{"name":"htmlSkipToMain","results":[{"name":"htmlSkipToMainNotFound","total":1}],"testTime":1.8},{"name":"htmlTitle","results":[{"name":"htmlTitleFound","total":1}],"testTime":0.3},{"name":"frameTitle","results":[{"name":"frameTitleFound","total":2},{"name":"frameTitleNotFound","total":1}],"testTime":0.7},{"name":"linkTextContent","results":[{"name":"linkTextContentFound","total":54},{"name":"linkTextContentNotDescriptive","total":5}],"testTime":8.2},{"name":"linkImgTextAlt","results":[{"name":"linkImgTextAltFound","total":12}],"testTime":4.4},{"name":"linkDownloadableDocument","results":[],"testTime":7.9},{"name":"formContextChange","results":[{"name":"formContextChangeSubmitButton","total":3}],"testTime":1.1},{"name":"formFieldGroup","results":[],"testTime":2.9},{"name":"formFieldLabel","results":[{"name":"formFieldLabelFound","total":2},{"name":"formFieldLabelEmpty","total":12},{"name":"formFieldLabelOnlyPlaceholderAttribute","total":1},{"name":"formFieldLabelOrphan","total":1}],"testTime":8.8},{"name":"htmlLandmarks","results":[{"name":"htmlLandmarksFound","total":4}],"testTime":2.9},{"name":"linkSamePageNotButton","results":[{"name":"linkSamePageOrButtonIsValidLink","total":55},{"name":"linkSamePageOrButtonShouldBeButton","total":14},{"name":"linkSamePageOrButtonIsValidSamePageLink","total":16}],"testTime":3.2},{"name":"linkSamePageAnchor","results":[],"testTime":3.3},{"name":"buttonTextContent","results":[{"name":"buttonTextContentFound","total":13},{"name":"buttonTextContentNotFound","total":1},{"name":"buttonTextContentRedundant","total":13}],"testTime":3.7},{"name":"buttonAccessKey","results":[],"testTime":0.4},{"name":"mediaLiveCaptions","results":[],"testTime":2.9},{"name":"videoDescriptionTrack","results":[{"name":"videoDescriptionTrackReview","total":1}],"testTime":5.4},{"name":"formFieldRequiredIndicator","results":[],"testTime":4.4},{"name":"fieldRequiredSelector","results":[{"name":"fieldRequiredSelectorNotNeeded","total":2}],"testTime":10.3},{"name":"fieldsetLegend","results":[],"testTime":0.4},{"name":"selectOptgroup","results":[],"testTime":0.6},{"name":"formErrorPrevention","results":[{"name":"formErrorPreventionReview","total":7}],"testTime":0.5},{"name":"scriptCharacterKey","results":[{"name":"scriptCharacterKeyReview","total":1}],"testTime":0.1},{"name":"scriptPointerGesture","results":[{"name":"scriptPointerGestureReview","total":1}],"testTime":0.1},{"name":"htmlAccessibleName","results":[{"name":"htmlAccessibleNameMatches","total":4},{"name":"htmlAccessibleNameMismatch","total":1}],"testTime":1.6},{"name":"scriptDeviceSensor","results":[{"name":"scriptDeviceSensorReview","total":1}],"testTime":0.1},{"name":"scriptAvoidAccidental","results":[],"testTime":0.6},{"name":"htmlColorCues","results":[{"name":"htmlColorCuesLinkNoDecoration","total":3},{"name":"htmlColorCuesReview","total":1}],"testTime":8.5},{"name":"interactiveElementKeyboardActivation","results":[{"name":"interactiveElementKeyboardActivationNotFound","total":10}],"testTime":0.7},{"name":"linkAdjacent","results":[{"name":"linkAdjacentMakesSenseInContext","total":1}],"testTime":5},{"name":"linkHref","results":[{"name":"linkHrefExists","total":83},{"name":"linkHrefNone","total":2}],"testTime":4.8},{"name":"htmlDocumentLang","results":[{"name":"htmlDocumentLangFound","total":1}],"testTime":0.3},{"name":"htmlElementLang","results":[],"testTime":0.5},{"name":"htmlDoctype","results":[{"name":"htmlDoctypeFound","total":1}],"testTime":0.2},{"name":"htmlElementId","results":[{"name":"htmlElementIdUnique","total":33}],"testTime":3.6},{"name":"htmlAriaRoles","results":[{"name":"htmlAriaRolesFound","total":111}],"testTime":12.2},{"name":"imgLongDesc","results":[],"testTime":0.4},{"name":"htmlSensoryTextAlternative","results":[{"name":"htmlSensoryTextAlternativeReview","total":19}],"testTime":19.4},{"name":"audioControls","results":[],"testTime":0.3},{"name":"htmlTextResize","results":[{"name":"htmlTextResizeReview","total":14},{"name":"htmlTextResizeSmallFont","total":44}],"testTime":29.3},{"name":"htmlStyledText","results":[{"name":"htmlStyledTextReview","total":19}],"testTime":13.9},{"name":"htmlFocusSequence","results":[{"name":"htmlFocusSequenceInOrder","total":44}],"testTime":11.2},{"name":"htmlSitemap","results":[],"testTime":4.2},{"name":"headingSequence","results":[{"name":"headingSequenceInOrder","total":8}],"testTime":1},{"name":"firstHeader","results":[{"name":"firstHeaderLevelNot1or2","total":1}],"testTime":1.3},{"name":"headingLevelOneCount","results":[{"name":"headingLevelOneCountSingle","total":1}],"testTime":0.8},{"name":"htmlFocusVisible","results":[{"name":"htmlFocusVisibleReview","total":1}],"testTime":9},{"name":"htmlFocusContext","results":[],"testTime":2.9},{"name":"htmlComponentConsistency","results":[{"name":"htmlComponentConsistencyReview","total":20}],"testTime":12.6},{"name":"formFieldErrors","results":[{"name":"formFieldErrorsReview","total":7}],"testTime":0.4},{"name":"htmlContentReflow","results":[{"name":"htmlContentReflowRestrictsZoom","total":1}],"testTime":0.3},{"name":"formFieldMetadata","results":[{"name":"formFieldMetadataReviewExpectation","total":2},{"name":"formFieldMetadataReview","total":11},{"name":"formFieldMetadataValidAutocomplete","total":1},{"name":"formFieldMetadataInvalidTokenOrder","total":1}],"testTime":8},{"name":"cssComponentContrast","results":[{"name":"cssComponentContrastSufficient","total":101},{"name":"cssComponentContrastTooLow","total":24}],"testTime":12.1},{"name":"htmlHoverVisibility","results":[],"testTime":66.4},{"name":"scriptAnimation","results":[],"testTime":0.5},{"name":"scriptInputMechanisms","results":[],"testTime":0.5},{"name":"scriptDeviceOrientationLock","results":[],"testTime":5.4}],"testStartTime":5602.20000000298,"testEndTime":6893.79999999702,"remediationStartTime":null,"remediationEndTime":null,"remediationsEnabled":true,"remediations":{},"hasToolbar":true,"beforeRemediations":true}}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(1.9)

    response = http.post(
      'https://analytics.audioeye.com/air/report',
      '{"url":"https://new.echopark.com/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36","hash":"5e3fc2ac7eaa50810496576798659a1f","installSource":"gtm-1.2","data":{"tests":[{"name":"imgTextAlt","results":[{"name":"imgTextAltFound","total":18},{"name":"imgTextAltNotFound","total":1},{"name":"imgTextAltFoundDecorative","total":1}],"testTime":4.4},{"name":"imgAdjacent","results":[],"testTime":2.7},{"name":"inputImageTextAlt","results":[],"testTime":0.2},{"name":"mapAreaTextAlt","results":[],"testTime":0.2},{"name":"appletEquivalent","results":[],"testTime":0.3},{"name":"embedEquivalent","results":[],"testTime":0.3},{"name":"objectEquivalent","results":[],"testTime":0.3},{"name":"svgEquivalent","results":[],"testTime":0.3},{"name":"mediaTranscript","results":[],"testTime":3.7},{"name":"videoCaption","results":[{"name":"videoCaptionReview","total":1}],"testTime":4.8},{"name":"videoTextAlternative","results":[{"name":"videoTextAlternativeReview","total":1}],"testTime":5.6},{"name":"htmlSemantics","results":[{"name":"htmlSemanticsFound","total":35},{"name":"htmlSemanticsUseHeader","total":6},{"name":"htmlSemanticsBadUL","total":1},{"name":"htmlSemanticsNoscript","total":1}],"testTime":15.2},{"name":"tableSemantics","results":[],"testTime":0.5},{"name":"htmlDocumentStructure","results":[{"name":"htmlDocumentStructureLogical","total":19}],"testTime":14.9},{"name":"scriptKeyboardEvents","results":[{"name":"scriptKeyboardEventsOnClick","total":15},{"name":"scriptKeyboardEventsFound","total":14}],"testTime":4.3},{"name":"scriptKeyboardTrap","results":[{"name":"scriptKeyboardTrapReview","total":31}],"testTime":4.5},{"name":"scriptExtendTimeLimit","results":[],"testTime":0.7},{"name":"scriptPauseUpdates","results":[],"testTime":0.7},{"name":"mediaFlashing","results":[{"name":"mediaFlashingFoundScript","total":1}],"testTime":0.7},{"name":"htmlSkipToMain","results":[{"name":"htmlSkipToMainFound","total":1}],"testTime":1.1},{"name":"htmlTitle","results":[{"name":"htmlTitleFound","total":1}],"testTime":0.2},{"name":"frameTitle","results":[{"name":"frameTitleFound","total":3}],"testTime":0.5},{"name":"linkTextContent","results":[{"name":"linkTextContentFound","total":46},{"name":"linkTextContentNotDescriptive","total":3}],"testTime":5.5},{"name":"linkImgTextAlt","results":[{"name":"linkImgTextAltFound","total":11},{"name":"linkImgTextAltBlank","total":1}],"testTime":3.3},{"name":"linkDownloadableDocument","results":[],"testTime":6.5},{"name":"formContextChange","results":[{"name":"formContextChangeSubmitButton","total":3}],"testTime":1.1},{"name":"formFieldGroup","results":[],"testTime":2.6},{"name":"formFieldLabel","results":[{"name":"formFieldLabelFound","total":3},{"name":"formFieldLabelEmpty","total":12},{"name":"formFieldLabelOrphan","total":1}],"testTime":9.6},{"name":"htmlLandmarks","results":[{"name":"htmlLandmarksFound","total":4}],"testTime":2.7},{"name":"linkSamePageNotButton","results":[{"name":"linkSamePageOrButtonIsValidSamePageLink","total":30},{"name":"linkSamePageOrButtonIsValidLink","total":55},{"name":"linkSamePageOrButtonShouldBeButton","total":1}],"testTime":3},{"name":"linkSamePageAnchor","results":[{"name":"linkSamePageAnchorFound","total":1}],"testTime":2.7},{"name":"buttonTextContent","results":[{"name":"buttonTextContentFound","total":29},{"name":"buttonTextContentRedundant","total":11}],"testTime":4.9},{"name":"buttonAccessKey","results":[],"testTime":0.5},{"name":"mediaLiveCaptions","results":[],"testTime":2.7},{"name":"videoDescriptionTrack","results":[{"name":"videoDescriptionTrackReview","total":1}],"testTime":4.6},{"name":"formFieldRequiredIndicator","results":[],"testTime":3.7},{"name":"fieldRequiredSelector","results":[{"name":"fieldRequiredSelectorNotNeeded","total":3}],"testTime":8.8},{"name":"fieldsetLegend","results":[],"testTime":0.3},{"name":"selectOptgroup","results":[],"testTime":0.6},{"name":"formErrorPrevention","results":[{"name":"formErrorPreventionReview","total":7}],"testTime":0.5},{"name":"scriptCharacterKey","results":[{"name":"scriptCharacterKeyReview","total":1}],"testTime":0.1},{"name":"scriptPointerGesture","results":[{"name":"scriptPointerGestureReview","total":1}],"testTime":0},{"name":"htmlAccessibleName","results":[{"name":"htmlAccessibleNameMatches","total":4}],"testTime":1.7},{"name":"scriptDeviceSensor","results":[{"name":"scriptDeviceSensorReview","total":1}],"testTime":0.1},{"name":"scriptAvoidAccidental","results":[],"testTime":0.5},{"name":"htmlColorCues","results":[{"name":"htmlColorCuesLinkNoDecoration","total":3},{"name":"htmlColorCuesReview","total":1}],"testTime":4.3},{"name":"interactiveElementKeyboardActivation","results":[{"name":"interactiveElementKeyboardActivationNotFound","total":10}],"testTime":0.7},{"name":"linkAdjacent","results":[{"name":"linkAdjacentMakesSenseInContext","total":1}],"testTime":3.6},{"name":"linkHref","results":[{"name":"linkHrefExists","total":86}],"testTime":6.1},{"name":"htmlDocumentLang","results":[{"name":"htmlDocumentLangFound","total":1}],"testTime":0},{"name":"htmlElementLang","results":[],"testTime":0.5},{"name":"htmlDoctype","results":[{"name":"htmlDoctypeFound","total":1}],"testTime":0.1},{"name":"htmlElementId","results":[{"name":"htmlElementIdUnique","total":33}],"testTime":3},{"name":"htmlAriaRoles","results":[{"name":"htmlAriaRolesFound","total":113}],"testTime":11.8},{"name":"imgLongDesc","results":[],"testTime":0.2},{"name":"htmlSensoryTextAlternative","results":[{"name":"htmlSensoryTextAlternativeReview","total":19}],"testTime":16.6},{"name":"audioControls","results":[],"testTime":0.1},{"name":"htmlTextResize","results":[{"name":"htmlTextResizeReview","total":14},{"name":"htmlTextResizeSmallFont","total":44}],"testTime":22},{"name":"htmlStyledText","results":[{"name":"htmlStyledTextReview","total":19}],"testTime":12.4},{"name":"htmlFocusSequence","results":[{"name":"htmlFocusSequenceInOrder","total":29}],"testTime":10},{"name":"htmlSitemap","results":[],"testTime":3.9},{"name":"headingSequence","results":[{"name":"headingSequenceInOrder","total":8}],"testTime":0.6},{"name":"firstHeader","results":[{"name":"firstHeaderCorrect","total":1}],"testTime":1.3},{"name":"headingLevelOneCount","results":[{"name":"headingLevelOneCountMultiple","total":1}],"testTime":0.8},{"name":"htmlFocusVisible","results":[{"name":"htmlFocusVisibleReview","total":1}],"testTime":8.2},{"name":"htmlFocusContext","results":[],"testTime":2.8},{"name":"htmlComponentConsistency","results":[{"name":"htmlComponentConsistencyReview","total":20}],"testTime":12.4},{"name":"formFieldErrors","results":[{"name":"formFieldErrorsReview","total":7}],"testTime":0.3},{"name":"htmlContentReflow","results":[{"name":"htmlContentReflowRestrictsZoom","total":1}],"testTime":0.1},{"name":"formFieldMetadata","results":[{"name":"formFieldMetadataReviewExpectation","total":2},{"name":"formFieldMetadataValidAutocomplete","total":6},{"name":"formFieldMetadataReview","total":5},{"name":"formFieldMetadataInvalidTokenOrder","total":1},{"name":"formFieldMetadataInvalidFieldType","total":1}],"testTime":4.2},{"name":"cssComponentContrast","results":[{"name":"cssComponentContrastSufficient","total":97},{"name":"cssComponentContrastTooLow","total":17}],"testTime":10.4},{"name":"htmlHoverVisibility","results":[],"testTime":64.9},{"name":"scriptAnimation","results":[],"testTime":0.5},{"name":"scriptInputMechanisms","results":[],"testTime":0.3},{"name":"scriptDeviceOrientationLock","results":[],"testTime":3}],"testStartTime":7510.79999999702,"testEndTime":8793.59999999404,"remediationStartTime":1650293112459,"remediationEndTime":1650293112943,"remediationsEnabled":true,"remediations":{"auto|1bf99651-81c3-4364-892f-dc74b62a33bb":{"effectCount":0,"timing":0.8999999910593033},"auto|1230ac50-4ff5-4e10-a473-833d4fc07547":{"effectCount":1,"timing":4.399999991059303},"auto|71e8780b-7016-4437-8e82-0dfa03402402":{"effectCount":0,"timing":2.5999999940395355},"auto|fddd96c5-fc8e-4b21-8d58-937c3b884485":{"effectCount":0,"timing":0.5},"auto|49e4b614-f42c-4549-a541-319be71d9319":{"effectCount":0,"timing":1.0999999940395355},"auto|9d2f4be0-78f8-4302-b796-eb05d0d1a82f":{"effectCount":9,"timing":0.6000000089406967},"auto|a92e1c01-60f5-4214-865c-e56689ab0bf5":{"effectCount":0,"timing":0},"auto|7bb1ae9a-e3a6-45dc-be25-1bc3935774bd":{"effectCount":24,"timing":17.400000005960464},"auto|c2036ccf-7730-41c9-9225-45b741a3d586":{"effectCount":0,"timing":0.20000000298023224},"auto|963ed818-5ac8-4322-a9cf-dec78c0bc59a":{"effectCount":7,"timing":3.5999999940395355},"auto|9a58cd96-e42b-41bc-a12d-0d01fef75534":{"effectCount":35,"timing":1},"auto|c137404a-7cfb-437a-a3d2-be775303e665":{"effectCount":0,"timing":0.09999999403953552},"auto|855b9dbf-ddde-4ec6-9b28-d63191c2789c":{"effectCount":0,"timing":0.3999999910593033},"auto|a1aef2e7-f3f2-4970-b02a-29a955253bd9":{"effectCount":0,"timing":0},"auto|4eba52e0-e197-42f0-9df9-7e5c80aa9838":{"effectCount":0,"timing":1.5},"auto|3d6351ce-7255-4211-ae4d-500e8562dfd5":{"effectCount":1,"timing":0.5999999940395355},"auto|6b32a4fd-3258-4e6c-ac72-1c06f1130201":{"effectCount":73,"timing":0.9000000059604645},"auto|86d27710-0051-4c5c-bf46-880bf42a009f":{"effectCount":0,"timing":0.10000000894069672},"auto|64e8dbc2-daf9-491f-8dbd-97ca6126ec7f":{"effectCount":2,"timing":0.9000000059604645},"auto|3ea3b133-c167-4810-bfcb-055d96f4cacb":{"effectCount":0,"timing":0.10000000894069672},"auto|8e701b41-34c8-4571-aa19-20cca21ce7ac":{"effectCount":0,"timing":3.7000000029802322},"auto|93a3a862-c771-444d-a861-2ab0f6b4db54":{"effectCount":0,"timing":3.7999999970197678},"auto|168969a7-5ed8-4715-a866-dcdfb72de4d2":{"effectCount":0,"timing":0.20000000298023224},"auto|e64f1f6c-fa2d-4b7c-a92b-b6127fb10e64":{"effectCount":6,"timing":1.7000000029802322},"auto|3f662668-47a6-42d8-9fe8-c65709eec077":{"effectCount":2,"timing":0.5},"auto|e2859013-88c6-487f-b5d5-7160a6f33fc4":{"effectCount":0,"timing":0.4000000059604645},"auto|d5da97cc-0812-4e12-95b2-919c004fca98":{"effectCount":0,"timing":1},"auto|df69c1c4-a65e-490b-9099-3d88c4f78bd5":{"effectCount":0,"timing":0},"auto|e62fa39c-9484-41a3-8e54-e05cb8c1d568":{"effectCount":0,"timing":1.8999999910593033},"auto|fdc9e3fc-c9c9-4bc3-a7e1-68b91e8daff1":{"effectCount":0,"timing":0.4000000059604645},"auto|d77ac868-154c-433e-9124-8480a7697dc3":{"effectCount":1,"timing":0.7000000029802322},"auto|2eede58e-44a9-41aa-a6a6-b52a917cf068":{"effectCount":0,"timing":1.5},"auto|1c5f4a0a-f219-4461-96be-00e9bb47fc83":{"effectCount":0,"timing":0.4000000059604645},"auto|0adb8517-1ff3-4d08-b85a-ec47c0901f8f":{"effectCount":0,"timing":0.8999999910593033},"auto|ccd959cd-a786-4045-a7c0-4bfb5802fa3b":{"effectCount":0,"timing":0.800000011920929},"auto|68c50f4c-db0b-4d79-85a9-26ac801444ab":{"effectCount":0,"timing":0.09999999403953552},"auto|5dd26c46-49b5-4a6d-b3e5-bfa5cb0a800b":{"effectCount":0,"timing":0.3999999910593033},"auto|7d704101-b76f-474c-b79c-85a22495c5a6":{"effectCount":0,"timing":0.10000000894069672},"auto|02f7a6ca-0512-44ba-a481-3ebf30b54fc4":{"effectCount":2,"timing":0.5999999940395355},"auto|e39c68ad-5cfa-484a-9569-e3cde074c885":{"effectCount":0,"timing":0},"auto|ccbb2128-41d4-4d1f-85d6-c44510756853":{"effectCount":0,"timing":4},"auto|fc27d863-7b74-45d2-9d74-11f2cc6881b1":{"effectCount":0,"timing":0.09999999403953552},"auto|815eb380-971a-4c7a-a934-19ab2db8de52":{"effectCount":0,"timing":0.3999999910593033},"auto|bb99a06a-aa9c-4616-a895-0e014d540424":{"effectCount":0,"timing":0.4000000059604645},"auto|3ad1762a-aff7-429c-b04a-3d4cf845a911":{"effectCount":0,"timing":0.5999999940395355},"auto|20a98bcc-260b-45f6-91d0-4090ecb240c5":{"effectCount":0,"timing":0.29999999701976776},"auto|ea0fd339-88d7-4a32-a5f9-3131682cdf21":{"effectCount":0,"timing":0},"auto|44d10d89-d92d-4d3f-a0e6-c9afeafc3f3d":{"effectCount":0,"timing":0},"auto|974e7875-8806-4468-9f17-35a9fa4587a5":{"effectCount":0,"timing":0.5},"auto|bdff90f6-7ffc-40ea-bb54-55446af794c8":{"effectCount":0,"timing":0.3999999910593033},"auto|64edf3da-2cde-4c0f-b889-115804ac9d15":{"effectCount":7,"timing":0.7000000029802322},"auto|6cd791b4-7410-4dec-b805-dd7348159898":{"effectCount":0,"timing":0.09999999403953552},"auto|6e3a7b1c-09c3-4874-a0ad-44d047f5d98c":{"effectCount":9,"timing":0.3999999910593033},"auto|9c7eb109-1b6b-4906-bfb7-e432db72e918":{"effectCount":6,"timing":3.5},"auto|7106be8d-3b89-48a8-91a3-7fdb2d3e3608":{"effectCount":0,"timing":0.20000000298023224},"auto|3ad650ea-50e6-487a-855b-cafa13cb3421":{"effectCount":0,"timing":0.20000000298023224},"auto|9aca0732-f038-48cf-92c4-91b671810139":{"effectCount":0,"timing":0.4000000059604645},"auto|e769aaae-261e-4881-86c7-59669e1fcb72":{"effectCount":0,"timing":0.09999999403953552},"auto|a983f858-4039-4e2d-a227-78f34ca38051":{"effectCount":0,"timing":0.20000000298023224},"auto|67b5f753-1573-4422-8f82-dc4eb80d93b5":{"effectCount":0,"timing":0.09999999403953552}},"hasToolbar":true,"beforeRemediations":false}}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

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
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6ImEwYmEzNTNhOTMyMTgxZDUiLCJ0ciI6ImI0MWRjMzAxM2I2ZTMxNGViMGM5Mjk0YzBhNjZiNGQwIiwidGkiOjE2NTAyOTMxMTQ3MzYsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-b41dc3013b6e314eb0c9294c0a66b4d0-a0ba353a932181d5-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-a0ba353a932181d5----1650293114736',
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
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjJjNWIwNDQ2ZjUzOWMxOGEiLCJ0ciI6Ijk4MzM4YTU3ZmRiMGUyNjJiMTliNjRkZTUzYTBjOTgwIiwidGkiOjE2NTAyOTMxMTQ5MDIsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-98338a57fdb0e262b19b64de53a0c980-2c5b0446f539c18a-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-2c5b0446f539c18a----1650293114902',
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
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6ImE5MTkwMzAwYWI3M2FmZjkiLCJ0ciI6IjU0ZDlhZDMwZGMwMmE1NTdiYjhlODY0NDlmMGYxY2MwIiwidGkiOjE2NTAyOTMxMTUwMTEsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-54d9ad30dc02a557bb8e86449f0f1cc0-a9190300ab73aff9-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-a9190300ab73aff9----1650293115011',
        },
      }
    )

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
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6Ijg0ZWI5Yzk2ODBlYzU5N2MiLCJ0ciI6ImI5NTI4MGZlYjVhYzE4NzM1OTU2ZTdmNzYxNjBiNGYwIiwidGkiOjE2NTAyOTMxMTUxNDAsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-b95280feb5ac18735956e7f76160b4f0-84eb9c9680ec597c-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-84eb9c9680ec597c----1650293115140',
        },
      }
    )
    sleep(0.8)

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
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjliYzlmM2M3NjcwNTI1MmMiLCJ0ciI6IjdiZjllYTliMGU3MWUxZjRiMGU2NzZiODQ4MGIwM2YwIiwidGkiOjE2NTAyOTMxMTU5ODAsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-7bf9ea9b0e71e1f4b0e676b8480b03f0-9bc9f3c76705252c-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-9bc9f3c76705252c----1650293115980',
        },
      }
    )
    sleep(0.9)

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
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjA4NmUyZTMxMzRkNWU0MjMiLCJ0ciI6IjM3NTY5MTZmNTA4NmFhMmJmZjVlZTQ0ZjlkZjljNmIwIiwidGkiOjE2NTAyOTMxMTY4ODMsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-3756916f5086aa2bff5ee44f9df9c6b0-086e2e3134d5e423-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-086e2e3134d5e423----1650293116883',
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
    sleep(1.7)

    response = http.get(
      'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fBBc4.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxK.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fBBc4.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBBc4.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://cdn.optimizely.com/js/20473601091.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.googletagmanager.com/gtm.js?id=GTM-5XM9K64', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://www.googletagmanager.com/gtag/js?id=G-QY8WNQN5HH&l=dataLayer&cx=c',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://wsmcdn.audioeye.com/aem.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.google-analytics.com/analytics.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://t.contentsquare.net/uxa/ec72e90a3ce3a.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://ai.autoid.com/ai.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=268632810&t=pageview&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2Fused-cars%2Fcivic&ul=pt-br&de=UTF-8&dt=Used%20Civic%7CEchoPark&sd=24-bit&sr=1366x768&vp=1349x590&je=0&_u=QACAAEAB~&jid=&gjid=&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&gtm=2wg4d05XM9K64&cd1=false&cd2=0.5518828369223046_1650292069811&z=923577509',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/pageview?pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&lv=1650291951&lhd=1650291951&hd=1650293119&pn=13&dw=1349&dh=1093&ww=1366&wh=590&sw=1366&sh=768&dr=https%3A%2F%2Fnew.echopark.com%2F&url=https%3A%2F%2Fnew.echopark.com%2Fused-cars%2Fcivic&uc=0&la=pt-BR&v=11.19.4&r=998787',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://app.carnow.com/dealers/carnow_plugin.js?key=ACJbgfKDxsfki3pDgKup5IvnFBtyxrLKb7slKitut5JltfJb',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://wsv3cdn.audioeye.com/bootstrap.js?h=5e3fc2ac7eaa50810496576798659a1f',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://new.echopark.com/api/sitecore/vehicleslisting/getfilterfacets', {
      headers: {
        accept: '*/*',
        'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
        'x-requested-with': 'XMLHttpRequest',
        newrelic:
          'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6ImNjN2U1MDM1MGMxM2U2YjAiLCJ0ciI6IjBlZmZjNTBjZmI4ZTk4MzI1ZjczMGM0ZWUyMTM2ZDUwIiwidGkiOjE2NTAyOTMxMTkzNDMsInRrIjoiMTMyNTcwNyJ9fQ==',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        traceparent: '00-0effc50cfb8e98325f730c4ee2136d50-cc7e50350c13e6b0-01',
        tracestate: '1325707@nr=0-1-3153172-1385894706-cc7e50350c13e6b0----1650293119343',
      },
    })

    vars['Value1'] = jsonpath.query(response.json(), '$.Data.SortOptions[8].Value')[0]

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=268632810&t=event&ni=0&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2Fused-cars%2Fcivic&ul=pt-br&de=UTF-8&dt=Used%20Civic%7CEchoPark&sd=24-bit&sr=1366x768&vp=1349x590&je=0&ec=Page%20Load&ea=undefined&el=28211%20-%20EchoPark%20Charlotte&ev=0&_u=SDCAAEAB~&jid=&gjid=&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&gtm=2wg4d05XM9K64&cd1=134380896.1650052052&cd2=0.5518828369223046_1650292069811&cd4=0&cd5=EchoPark%20Charlotte&z=2141868323',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/dvar?v=11.19.4&pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&pn=13&dv=N4IgxgzgsghgLmAFgSwHYHMDSBTAniALhAAYA6AVnIEYAOGgJhoGYA2ATnvqeIBYWB9Ki3LF6HYuxpUqIAL5AA%3D%3D&r=262248',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://wsv3cdn.audioeye.com/v2/scripts/loader.js?h=5e3fc2ac7eaa50810496576798659a1f&lang=en&cb=7fce7ce',
      {
        headers: {
          origin: 'https://new.echopark.com',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/jquery.bundle.js?cb=7fce7ce', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/startup.bundle.js?cb=7fce7ce', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://d29f71cuc8ityh.cloudfront.net/js2/cn-client-z3-20220417065251.js.gz',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://wsv3cdn.audioeye.com/v2/scripts/loader.js?h=5e3fc2ac7eaa50810496576798659a1f&lang=en&cb=7fce7ce',
      {
        headers: {
          origin: 'https://new.echopark.com',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://app.carnow.com/dealers/widgets?id=41505&vstid=e9922422-ef7c-4591-b901-c3a71c9c23aa',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    vars['visitor_id2'] = jsonpath.query(response.json(), '$.visitor_id')[0]

    response = http.get('https://js-agent.newrelic.com/nr-spa-1215.min.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://bam.nr-data.net/1/NRJS-c2bd56d8b578b43e50f?a=1339723442&v=1215.1253ab8&to=MQEDNRFXDUdVUREIVwhLLDcgGTBdQFcGDkoDJw4PF0QMWFhXF05xCAAEGQ%3D%3D&rst=2474&ck=1&ref=https://new.echopark.com/used-cars/civic&ap=675&be=1724&fe=2459&dc=2214&af=err,xhr,stn,ins,spa&perf=%7B%22timing%22:%7B%22of%22:1650293117056,%22n%22:0,%22u%22:1681,%22ue%22:1682,%22f%22:2,%22dn%22:2,%22dne%22:2,%22c%22:2,%22ce%22:2,%22rq%22:9,%22rp%22:1648,%22rpe%22:1668,%22dl%22:1686,%22di%22:2213,%22ds%22:2214,%22de%22:2253,%22dc%22:2458,%22l%22:2459,%22le%22:2468%7D,%22navigation%22:%7B%7D%7D&fp=1879&fcp=1879&jsonp=NREUM.setToken',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=268632810&t=event&ni=0&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2Fused-cars%2Fcivic&ul=pt-br&de=UTF-8&dt=Used%20Civic%7CEchoPark&sd=24-bit&sr=1366x768&vp=1349x590&je=0&ec=Scroll%20Depth%20on%20Page&ea=%2Fused-cars%2Fcivic&el=25&_u=SDCAAEAB~&jid=&gjid=&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&gtm=2wg4d05XM9K64&cd1=134380896.1650052052&cd2=0.5518828369223046_1650292069811&cd4=0&cd5=EchoPark%20Charlotte&z=1166517732',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=268632810&t=event&ni=0&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2Fused-cars%2Fcivic&ul=pt-br&de=UTF-8&dt=Used%20Civic%7CEchoPark&sd=24-bit&sr=1366x768&vp=1349x590&je=0&ec=Scroll%20Depth%20on%20Page&ea=%2Fused-cars%2Fcivic&el=50&_u=SDCAAEAB~&jid=&gjid=&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&gtm=2wg4d05XM9K64&cd1=134380896.1650052052&cd2=0.5518828369223046_1650292069811&cd4=0&cd5=EchoPark%20Charlotte&z=820028391',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/dvar?v=11.19.4&pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&pn=13&dv=N4IgxgzgsghgLmAFgSwHYHMDSBTAniALhAAYA6AVnIEYAOGgJhoGYA2ATnvqeIBYWB9Ki3LF6HYuxpUqIAL5AA%3D%3D&r=133185',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/smartrems.bundle.7fce7ce.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://analytics.audioeye.com/air/v0/send',
      '{"aeaid":"b6d2575c-05f2-4287-9905-72c4801c7f54","sid":"509b2e3f-79ea-4261-8ad0-05604a8d05df","pg":"https://new.echopark.com/used-cars/civic","lang":"en","cat":"Mobile User","evt":"Page View","inm":"none","h":"5e3fc2ac7eaa50810496576798659a1f","is":"gtm-1.2"}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://fonts.gstatic.com/s/lato/v22/S6uyw4BMUTPHjx4wXiWtFCc.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://d2dhoetkfll74o.cloudfront.net/p/41505/wI0Hb0vv4BJkG4Fq26JefxkdJK1EudB5-20220417065251.css?_=20220417065251',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://app.carnow.com/dealers/track_visitor',
      {
        vstid: `${vars['visitor_id1']}`,
        url: 'https%3A%2F%2Fnew.echopark.com%2Fused-cars%2Fcivic',
        title: 'Used%20Civic%7CEchoPark',
        vins: '',
        referrer: 'https%3A%2F%2Fnew.echopark.com%2F',
        'orig-ref': 'https%3A%2F%2Fnew.echopark.com%2F',
        stage: 'INIT',
      },
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://logx.optimizely.com/v1/events',
      '{"account_id":"20473601091","anonymize_ip":true,"client_name":"js","client_version":"0.174.0","enrich_decisions":true,"project_id":"20473601091","revision":"68","visitors":[{"visitor_id":"oeu1650277261619r0.5778353934160176","session_id":"AUTO","attributes":[{"e":null,"k":"","t":"browserId","v":"gc"},{"e":null,"k":"","t":"device","v":"desktop"},{"e":null,"k":"","t":"device_type","v":"desktop_laptop"},{"e":null,"k":"","t":"source_type","v":"direct"},{"e":null,"k":"","t":"currentTimestamp","v":1650293118909},{"e":null,"k":"","t":"offset","v":180}],"snapshots":[{"activationTimestamp":1650293118895,"decisions":[{"c":"21000884603","x":"21043080974","v":"21040020036","h":false}],"events":[{"e":null,"y":"client_activation","u":"49d5b9cd-deec-4b5a-a6f3-f7ae567dfed0","t":1650293118909}]}]}]}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://ai.autoid.com/ai',
      '{"build_date":" 2022-04-11 14:37:29","raw":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36###768x1366x24###180###true###true###","wid":"echopark.com","protocol":"https:","href":"https://new.echopark.com/used-cars/civic","path":"/used-cars/civic","search":"","hash":"","uuid":"7e28a7a9-260c-4f4b-aeb9-ff7ce55c294a","sid":"0849c1de-52b8-4238-bf9f-801ed1ab26e2","pid":null,"gid":"11d2f4973b1445549a718fbae32833da","width":1366,"height":590,"ref":"https://new.echopark.com/","host":"new.echopark.com","number":"{\\"num_1\\":\\"2047360109\\",\\"num_2\\":\\"3808961650\\",\\"num_3\\":\\"7047192163\\",\\"num_4\\":\\"5081049657\\"}","dleu":true,"ddc_sess":null,"gutm_source":null,"gutm_medium":null,"gutm_term":null,"gutm_content":null,"gutm_name":null,"gutm_gclid":null,"gclid":"","utm_source":"","utm_medium":"","utm_term":"","utm_keyword":"","utm_content":"","utm_campaign":"","adobe_id":null,"i_type":0,"i_image_url":"","i_vin":0,"i_year":"","i_make":"","i_model":"","i_price":0,"i_stock_no":"","i_trim":"","i_int_color":"","i_ext_color":"","i_mileage":0,"hosted_by":"","fp":"11d2f4973b1445549a718fbae32833da","ga_cookie":"134380896.1650052052"}',
      {
        headers: {
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options('https://ai.autoid.com/ai', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'access-control-allow-origin,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://new.echopark.com',
        'sec-fetch-mode': 'cors',
      },
    })

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
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjNmMjYzN2E4NGYyZTRiNTQiLCJ0ciI6ImFkNTRjOGZjZjFkMjhhMjc5MmE5MDM2NGNiMGRlMzMwIiwidGkiOjE2NTAyOTMxMjAwNTAsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-ad54c8fcf1d28a2792a90364cb0de330-3f2637a84f2e4b54-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-3f2637a84f2e4b54----1650293120050',
        },
      }
    )

    response = http.post(
      'https://new.echopark.com/api/sitecore/VehiclesListing/GetVehicles',
      '{"options":{"FilteredFacets":[{"Key":"modeldisplay","QueryStringKey":"ml","AccordionTitle":"Model","FilterType":"Exact","SitecoreItemId":"d217184d-1e1f-4d5e-874d-ea92778323da","Options":null,"IncludeInSRPHashTable":false,"HashTablePriorityOrder":0,"Value":["Civic"]},{"Key":"dealerid","FilterType":"Exact","Value":["EchoParkCharlotte","EchoParkGreensboroDeliveryCenter","EchoparkGreenvilleDeliveryCenter","EchoParkJohnsonCity","EchoParkRaleigh","EchoparkAugustaDeliveryCenter","EchoParkCharlestonDeliveryCenter","EchoParkKnoxvilleDeliveryCenter","EchoParkAtlanta","EchoParkMarietta","EchoparkChattanoogaDeliveryCenter"]}],"Sort":[{"Key":"Distance","Direction":"asc"},{"Key":"dateinstockticks","Direction":"asc"},{"Key":"sellingprice","Direction":"asc"}],"PageSize":"24","PageNumber":1,"Query":"","RecordCountOnly":false,"IncludeShipping":true,"IsAutoSuggestion":null,"TotalRecords":"0","IsShippableDataLoading":false,"CurrentShippableStoreId":null,"CurrentShippableStoreLoadedCount":null}}',
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjE4OTk4NzFhM2I2NWE0MjMiLCJ0ciI6IjM3ZWIyOGNhNzRkNzI2MTI2YjY0N2I4YjQ0YjA4NGEwIiwidGkiOjE2NTAyOTMxMjAyMTMsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-37eb28ca74d726126b647b8b44b084a0-1899871a3b65a423-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-1899871a3b65a423----1650293120213',
        },
      }
    )

    vars['VDPURL1'] = jsonpath.query(response.json(), '$.Data.Vehicles[7].VDPURL')[0]

    sleep(0.7)

    response = http.post(
      'https://logx.optimizely.com/v1/events',
      '{"account_id":"20473601091","anonymize_ip":true,"client_name":"js","client_version":"0.174.0","enrich_decisions":true,"project_id":"20473601091","revision":"68","visitors":[{"visitor_id":"oeu1650277261619r0.5778353934160176","session_id":"AUTO","attributes":[{"e":null,"k":"","t":"browserId","v":"gc"},{"e":null,"k":"","t":"device","v":"desktop"},{"e":null,"k":"","t":"device_type","v":"desktop_laptop"},{"e":null,"k":"","t":"source_type","v":"direct"},{"e":null,"k":"","t":"currentTimestamp","v":1650293118909},{"e":null,"k":"","t":"offset","v":180}],"snapshots":[{"activationTimestamp":1650293118895,"decisions":[{"c":"21000884603","x":"21043080974","v":"21040020036","h":false}],"events":[{"e":"21372550639","k":"20473601091_02__vlpsrp","t":1650293119914,"u":"8bf62794-ffbf-4007-8824-90a8041f48a3","y":"view_activated","a":{}}]}]}]}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(1.1)

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/f58c5ebf54414748b9c77a59c364eb91.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/11c64dd561cc4ca5803760a428d3df5a.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/cbb0cb28aa1f48e581ea3de8c8199f27.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/8c764853d9da40a0857fa36a6b8a5dcc.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/415bc36bbf8b424b85e9354161e0bec8.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/3a966c09b8b249558896f4de63b7f4e6.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/a414564d0eea4404b63c13c1e45fa407.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/2e1e6741628642aea0a903bc91e6b49a.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/7c404dc4aa38461d9af73363fa7c0903.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/5b887819f2da4bd6953ba38149c3d001.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/8414e621201347449e1f3b96d8120312.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/af8b3206112f4876b5f98fd967ba6794.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/044216e30ad34fd9b0d418274a8f7a79.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/3bede57f6bbe446d825085815f06df00.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/fe5fc1fabadb43dda523b6bf459feebb.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/f403e174c7ef448f8e05a84f1b6c4462.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/9ff6997fa2ba46aeb585038657b6c145.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/bbd7bee192ed49daa629a17326e55ac3.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/f0ac718ad8fb4e279946c46312a0b0d8.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/7225fb9674e14065b456c709111dc112.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/7f2fe1a1e2e04ceb83b7b915b3c02d42.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/6fcf40f10ccb4d8c95cfce93bb1473f2.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/abad37494bbd49a99f2c91d68b5f4ae2.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/cd5a013c74bb48668de00d11c2a80405.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/6be782956c8f400e8db8084fc0799775.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/f32caccb50d040d68ecd159444cbd552.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/e39f089aabf349a3ade43aa070b94137.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/e82db1ac6ae34c709c72177106f3ea1d.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/e0e63ffd36fc49afbf61cc55dfa491a4.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/0ff1c74d940c4405a368bde111762553.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/db5b496a0141453b885037d57ede84f2.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/c534f0c0ecdc4eaaa0870b9f216d0740.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/15a7015f7dd0426184051b70c90656ac.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/4d2a74a9c9e94f39a1f05d2826f5bda1.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/e70ad06d5bea4fdbb37a97359b80ece3.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/78ff6887d6a74ea3903d1c91b8d63a50.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/f1cba517c10a457994926928ed664012.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/2376468360bd46a8b7a2a92ae8c92161.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/5f3dc31e222a4a5993e3db9a49e9fd6e.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/401d1376d5ca4c91950cbab237ce5d99.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/20ad1e9697e74ce7a06dcc3491b89dfb.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/9d361adf109b43fda05359551388d27d.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/78ea67a436254f28891493a764a41906.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/da31361679c04238a25f5e885cd68fc5.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/f5c88ea621554b849c4e42ef57c06511.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/c10aab1d60584fd79468371bbfbebc7a.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/7dc91edc171e47de9ba79fe5b093aea0.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/ccd4fe1619ac464cad7cc9c010afb006.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/32048f70747046f9aafbe2ab4a6cc7d7.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/917260915aca4a4b939f72d687b75e18.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/7d827774dc3644f58db54d4af201d984.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/a6d4c4b68e7c492c9629dc01c4c05861.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/181907f588524342b32fc2b8a38d7260.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/54d5c66184314b348e9acb8db40e3aee.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/091ba22ca3334c47bc66b48ffa9fa98a.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/b91946454cac42f4957459bae5c5fb80.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/9980471bf7d24196bfccb21d9a1753ef.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/10267f7f874a49c59cea64fb37ada452.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/8358820bb445462c9ed98aa1b2a4eeef.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/bc5bee02e65e49618b6b76c0489078fb.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/554aafec77a14130a3d421aed4d60086.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/5c87ec20afbb4745bc478a232974ddc9.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/515f3eab7a4b43a5b4dbd1354c9fe8a7.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/508a6dd5280c4d5dadee7065084865ec.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/6be391ccc6024c84a1b7aae5f7825eba.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/02f9cd99bfe94efba080877c09652e58.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/daf249e4c1c24822ac38248c52dc08f7.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/ad6cc93159904e39b9465c5c9e599a7f.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/ff8e8056c2ef4c6197830e1aed0fa8c2.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/ad68e956195c4395b0cf30b0ae254a40.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/3a950c04e7cf4f66ad325e98cde47167.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/4bcaab28123742728d41294ece5c2a45.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/fd1f895fcee44de597316ac6d377d9ca.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/67609e385ea8453cb56d3e3e4b68dc23.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/61c95a571f6145f79bdbf73194cf3c49.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/aa280799922748178295a2fcdcc3f534.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/3ad3433cae3f4fd2b3bba28115f237fe.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/1800b02953c0426b84cd16dd5538dc79.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/67a3c2e00a5349b8accbbca683666f8e.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/dc7fb0dfd01542a0beacaa86ea85506c.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/3ae1598364f04bd79c9242cb86c21854.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/53c8266b2b8b447baf10e93b625a6cd8.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/165db49751f440f2851d5be743d1d897.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/25d5b3d47d8f476daa90a97c5fba4c77.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/8bc9b3cfb45a4bfd86fa0bae2b51d8bc.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/ac709768c3704a5eac4a03cee19ee5a0.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/0df2a2f21d4c495089f8dcae51bc9d71.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/2cded1936169431ab325ce8a057f4ebe.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/53bb7ecbcc084e0685f97e393a0ba947.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/682bf6c140f34189bd191b91821ac5fd.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/02b38a83adc547889f697c404477b165.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/ed999197b19842f099fc7d2fea23b64c.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/a43f918f99dc4e4593b3a64c5de7b0ba.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/6a30872908dc473db9c44546b3cb403a.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/577e640f7bfc471fb145c85d769f4e38.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/7a96b573436c43c0bd838ca646ec52ba.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/4fd6aba4d6bb497d8b24fbe0673cb520.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/ab862b808b594202898ea8f7953120b2.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/47b8fa54f14341b7bdd977afc076e871.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/1fb97f91de65487ba39934c608e708f9.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/6702c87eaf22409d991cca3253ed7d0d.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/da3662bb9fc2465093e75658aa743f56.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/c91234f8fa3b42c992acc04fefac482a.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/68b1e663356341978f1c587e7e56a166.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/285a283d02bb4650b85e2b1be92e42e7.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/cf9b274ee4294ed19251ee624e7a70be.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/8ac2f22059914bc9918afe4af7f34047.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/8c6a02dde5d44da3890036a5da361e4f.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/68d7f00b61db4685999c5de2e0d5338d.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/1d4cd99885d7481280fe727482056b88.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/499c7c34218c49f18b9bf7202a7b1ef0.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/d6e7e24893f048d0b09f6a3130188b5b.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/9a2a699670ca4058b1b4b6d0f74d79cc.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/698fcd80650d42018bce654af8b38bb5.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/844224e814444bfab392607fd7e6106c.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/bd015073cf6942c39a571df5d5e21daf.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/bfecc88229c24a5e98de4662652fc98c.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/4189ec97a51e4916b4cb7422ea339464.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/d13b7635ac2047feb8008234ab935082.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/2460b9bca2a3499d861aa8b383df9a1d.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/2ee33e817d2b440697783156d816479f.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/1d3a334a0b244c618003c5db05fd46c0.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/431af517e60c40d3bcb1c8222c180d0f.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/0ef48761f1a54b11b3930e2acf371a65.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/a1e941eb18d54cefa4dd7b7e8d33b31b.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/0faa5d488049417395a0999b5fa01688.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/6bdb64700d5d479ba00593259fddde0b.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/cb8c7353d3f44774a453c467d3ead9fe.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/05f19f94f48a4ccba5eef4262cf7e968.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/9fcc5df13ea04f8ab0e637479f6fba9e.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/91d4932e08684bbf8b51e837d372d624.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/12a702f659e24788a091d04667acc02f.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/b93c1d0e68804a3880bc48ac9eccce0c.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/7fdeb92e0ea04f2ea5161a3af4fab6b5.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/4f1bee72179f4967b7688da6f0c9c684.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/cb7193711aa9407599d1f0ae03043946.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/cf8214b20b734e06aaaf277c0ce68c6f.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/53b9c83f09ba4166845a9e529f103e20.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/fc365c73056a40e48e098a44142d7cce.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/0f32715f177b4a15a5c857ae9e34803b.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/e98319fd804c4e3eb7668c8962e51df5.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/4d357a3f63854fb99607cb79af05f7b1.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/58ef164dffad47ab8f3076e83e28fc48.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/8ed06ac8404f4149a830bd9cca85530b.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=268632810&t=event&ni=0&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2Fused-cars%2Fcivic&ul=pt-br&de=UTF-8&dt=Used%20Civic%7CEchoPark&sd=24-bit&sr=1366x768&vp=1349x590&je=0&ec=SRP%20Filter%20Applied&ea=Hub%20-%20modeldisplay%3ACivic&el=Shop%20all%20cars%20-%2026&_u=SDCAAEAB~&jid=&gjid=&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&gtm=2wg4d05XM9K64&cd1=134380896.1650052052&cd2=0.5518828369223046_1650292069811&cd4=0&cd5=EchoPark%20Charlotte&z=1242252114',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://app.carnow.com/dealers/visitor_info?vstid=e9922422-ef7c-4591-b901-c3a71c9c23aa&g=0',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/dvar?v=11.19.4&pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&pn=13&dv=N4IgxgzgsghgLmAFgSwHYHMDSBTAniALhAAYA6AVnIEYAOGgJhoGYA2ATnvqeIBYWB9Ki3LF6HYuxpUqIAL5AA%3D%3D&r=675641',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.5)

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/launcher.bundle.7fce7ce.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/compliance.bundle.7fce7ce.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://bam.nr-data.net/events/1/NRJS-c2bd56d8b578b43e50f?a=1339723442&v=1215.1253ab8&to=MQEDNRFXDUdVUREIVwhLLDcgGTBdQFcGDkoDJw4PF0QMWFhXF05xCAAEGQ%3D%3D&rst=5705&ck=1&ref=https://new.echopark.com/used-cars/civic',
      "bel.7;1,3,,4bj,22e,69,'initialPageLoad,'https://new.echopark.com/used-cars/civic,1,1,,,,ir,!!'45cd7624-4b8a-4b5a-8923-e77a17879d21,'1,1g7,1g7;2,,1sr,7a,,,'POST,5k,'k-aus1.contentsquare.net:443,'/v2/recording,3uk,0,1,'5,!!!;2,1,1vz,7w,27o,k,'GET,5k,'app.carnow.com:443,'/dealers/widgets,,fjv,,'8,!!!;2,,243,c4,1,1,4,5k,9,'/dealers/track_visitor,78,,,'9,!!!;2,2,1rj,jl,4z,4p,8,5k,'new.echopark.com:443,'/api/sitecore/vehicleslisting/getfilterfacets,,6sv,,'4,'cc7e50350c13e6b0,'0effc50cfb8e98325f730c4ee2136d50,l24twwhb;2,,2b7,46,4,4,4,5k,e,'/api/sitecore/vehicleslisting/GetFilters,1i,1d,,'10,'3f2637a84f2e4b54,'ad54c8fcf1d28a2792a90364cb0de330,l24twx0y;2,,2fp,qe,wi,ij,4,5k,e,'/api/sitecore/VehiclesListing/GetVehicles,rh,1t0v,,'11,'1899871a3b65a423,'37eb28ca74d726126b647b8b44b084a0,l24twx5h;b,1ap,!1,!-1ao,,,,!,7,19j,k,i,en,1,13,5p,1,9",
      {
        headers: {
          'content-type': 'text/plain',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(1.4)

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-QY8WNQN5HH&gtm=2oe4d0&_p=268632810&sr=1366x768&_z=ccd.MCB&ul=pt-br&cid=134380896.1650052052&dl=https%3A%2F%2Fnew.echopark.com%2Fused-cars%2Fcivic&dr=https%3A%2F%2Fnew.echopark.com%2F&dt=Used%20Civic%7CEchoPark&sid=1650292053&sct=3&seg=1&_s=1',
      'en=page_view\r\nen=SRP%20Filter%20Applied&_et=2546&ep.Nearest%20Store%20Type=Hub&ep.Filters%20Applied=modeldisplay%3ACivic&ep.Inventory%20Selection=Shop%20all%20cars&ep.Count%20of%20Results=26',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(6.5)

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=268632810&t=event&ni=0&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2Fused-cars%2Fcivic&ul=pt-br&de=UTF-8&dt=Used%20Civic%7CEchoPark&sd=24-bit&sr=1366x768&vp=1349x590&je=0&ec=Global%20Links%20Clicks&ea=%20-https%3A%2F%2Fcontent.homenetiol.com%2Fscaler%2F400%2F400%2F78ea67a436254f28891493a764a41906.jpg&_u=SDCAAEAB~&jid=&gjid=&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&gtm=2wg4d05XM9K64&cd1=134380896.1650052052&cd2=0.5518828369223046_1650292069811&cd4=0&cd5=EchoPark%20Charlotte&z=1540697279',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
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

    response = http.post(
      'https://bam.nr-data.net/events/1/NRJS-c2bd56d8b578b43e50f?a=1339723442&v=1215.1253ab8&to=MQEDNRFXDUdVUREIVwhLLDcgGTBdQFcGDkoDJw4PF0QMWFhXF05xCAAEGQ%3D%3D&rst=13678&ck=1&ref=https://new.echopark.com/used-cars/civic',
      "bel.6;e,'fp,1g7,1;6,'cls,0.;e,'fcp,1g7,1;6,1,0.;e,'load,1wb,1;6,1,0.;e,'fi,8pm,6;5,'type,'pointerdown;5,'net-etype,'4g;6,'net-rtt,50.;6,'net-dlink,10.;6,'fid,2345.;6,1,0.07594234361898333",
      {
        headers: {
          'content-type': 'text/plain',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/dvar?v=11.19.4&pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&pn=13&dv=N4IgxgzgsghgLmAFgSwHYHMDSBTAniALhAAYA6AVnIEYAOGgJhoGYA2ATnvqeIBYWB9Ki3LF6HYuxpUqIAL5AA%3D%3D&r=730067',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(2.5)

    response = http.get(
      'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://cdn.optimizely.com/js/20473601091.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fBBc4.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxK.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fBBc4.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBBc4.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.googletagmanager.com/gtm.js?id=GTM-5XM9K64', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://integrator.swipetospin.com/', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://www.googletagmanager.com/gtag/js?id=G-QY8WNQN5HH&l=dataLayer&cx=c',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://wsmcdn.audioeye.com/aem.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.google-analytics.com/analytics.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://t.contentsquare.net/uxa/ec72e90a3ce3a.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://ai.autoid.com/ai.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=873779237&t=pageview&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2Fcar%2F2HGFC4B86KH310519&ul=pt-br&de=UTF-8&dt=Used%202019%20Honda%20Civic%20Coupe%20%7C%20EchoPark&sd=24-bit&sr=1366x768&vp=1366x635&je=0&_u=QACAAEAB~&jid=&gjid=&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&gtm=2wg4d05XM9K64&cd1=false&cd2=0.5518828369223046_1650292069811&z=444993148',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/pageview?pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&lv=1650291951&lhd=1650291951&hd=1650293133&pn=14&dw=1366&dh=635&ww=1366&wh=635&sw=1366&sh=768&dr=https%3A%2F%2Fnew.echopark.com%2Fused-cars%2Fcivic&url=https%3A%2F%2Fnew.echopark.com%2Fcar%2F2HGFC4B86KH310519&uc=0&la=pt-BR&v=11.19.4&r=561403',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//78ea67a436254f28891493a764a41906.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/172/126//da31361679c04238a25f5e885cd68fc5.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/172/126//f5c88ea621554b849c4e42ef57c06511.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/172/126//c10aab1d60584fd79468371bbfbebc7a.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/172/126//7dc91edc171e47de9ba79fe5b093aea0.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/172/126//ccd4fe1619ac464cad7cc9c010afb006.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//da31361679c04238a25f5e885cd68fc5.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//0b7a321a1ffb4e2a936f956056b54358.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//f5c88ea621554b849c4e42ef57c06511.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//39894948c4e14959b329de082575a893.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//c10aab1d60584fd79468371bbfbebc7a.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//9f1dac3186074774aa15bf8d6eb7244c.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//ccd4fe1619ac464cad7cc9c010afb006.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//a63171368c2a453b97ba502f219778dc.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//7dc91edc171e47de9ba79fe5b093aea0.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//7a2a9b3b578846deb276e8115d1e9ad9.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//d70bc25318d2444baabaa8d24ea97d45.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//75df4be3cbd8457ebf7dc3383db511af.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//61cedf500cad49999c1dcf41ce509966.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//7d46632098be4ada90a2db7c14380473.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//bc118e94b2404b218b9a58fe190a35ce.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//23659154b54f40259e6f03dbd58a1bb9.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//db7cd9e0d4f14076bbca06f1bee5de47.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//82c7095337c64d6f9c9e09afb2c6104e.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//95cff26a66174ad58d152a1ea1b3106f.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//4ee5821bc58141e2bd0ef6077a945f50.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//e80ba4e6e31d442f9cdc204711f8bafd.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//b55168c2de63484b84f33759a7788072.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/1040/776//e85c0f8faa3e4baa83518b4881e7c664.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://cdn.spincar.com/spincar-static/20190909/i18n/walkaround.scss?_=12955eaa8fae8f',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://cdn.spincar.com/spincar-static/static_content_deployment.js?_=27504885',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://app.carnow.com/dealers/carnow_plugin.js?key=ACJbgfKDxsfki3pDgKup5IvnFBtyxrLKb7slKitut5JltfJb',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

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
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6ImE0YWE3ZDFjN2FlNmRlOGMiLCJ0ciI6IjA1MmFjYWRjNjkwNmQ0NWY3NjY2NzMzODdkMmY4YzQwIiwidGkiOjE2NTAyOTMxMzQxNjQsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-052acadc6906d45f766673387d2f8c40-a4aa7d1c7ae6de8c-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-a4aa7d1c7ae6de8c----1650293134164',
        },
      }
    )

    response = http.get(
      'https://wsv3cdn.audioeye.com/bootstrap.js?h=5e3fc2ac7eaa50810496576798659a1f',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
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
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6ImI5YTM1MGM0OTYyNmE3YjAiLCJ0ciI6IjBjMzQyMmYxNmM3NTY4OGZiZWM2ZjM0YTZhYzI4NmIwIiwidGkiOjE2NTAyOTMxMzQyNDIsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-0c3422f16c75688fbec6f34a6ac286b0-b9a350c49626a7b0-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-b9a350c49626a7b0----1650293134242',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/dvar?v=11.19.4&pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&pn=14&dv=N4IgxgzgsghgLmAFgSwHYHMDSBTAniALhAAYA6AVnIEYAOGgJhoGYA2ATnvqeIBYWB9Ki3LF6HYuxpUqIAL5AA%3D%3D&r=893908',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://new.echopark.com/api/sitecore/VehiclesListing/GetVehicles',
      `{"options":{"FilteredFacets":[{"Key":"bodystyle","FilterType":"Exact","Value":["Coupe"]},{"Key":"Distance","FilterType":"Distance","Value":[50]}],"Sort":[{"Key":"Distance","Direction":"ASC"},{"Key":"${vars['Value1']}","Direction":"DESC"}],"PageSize":"24","PageNumber":1}}`,
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwcCUldUChABV1JbAAMEUlAD',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6Ijk1M2Y1MDJlZWZjYmMxOTEiLCJ0ciI6IjYxMDIyOWM1OWZiNmEyZmJlZTYxYWY1ZjdlOTI4NTEwIiwidGkiOjE2NTAyOTMxMzQzNzQsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-610229c59fb6a2fbee61af5f7e928510-953f502eefcbc191-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-953f502eefcbc191----1650293134374',
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
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMxNTMxNzIiLCJhcCI6IjEzODU4OTQ3MDYiLCJpZCI6IjllZTRlODcyMThhYjE2ZWIiLCJ0ciI6IjE5ODQ2Njg5Yzk0MGNiNzkyNjQ2N2E2NGVjOWU0NTQwIiwidGkiOjE2NTAyOTMxMzQzNzcsInRrIjoiMTMyNTcwNyJ9fQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-19846689c940cb7926467a64ec9e4540-9ee4e87218ab16eb-01',
          tracestate: '1325707@nr=0-1-3153172-1385894706-9ee4e87218ab16eb----1650293134377',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=873779237&t=event&ni=0&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2Fcar%2F2HGFC4B86KH310519&ul=pt-br&de=UTF-8&dt=Used%202019%20Honda%20Civic%20Coupe%20%7C%20EchoPark&sd=24-bit&sr=1366x768&vp=1349x590&je=0&ec=Page%20Load&ea=undefined&el=28211%20-%20EchoPark%20Charlotte&ev=0&_u=SDCAAEAB~&jid=&gjid=&cid=134380896.1650052052&tid=UA-48247646-7&_gid=150771212.1650241250&gtm=2wg4d05XM9K64&cd1=134380896.1650052052&cd2=0.5518828369223046_1650292069811&cd4=0&cd5=EchoPark%20Charlotte&z=2018773581',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://logx.optimizely.com/v1/events',
      '{"account_id":"20473601091","anonymize_ip":true,"client_name":"js","client_version":"0.174.0","enrich_decisions":true,"project_id":"20473601091","revision":"68","visitors":[{"visitor_id":"oeu1650277261619r0.5778353934160176","session_id":"AUTO","attributes":[{"e":null,"k":"","t":"browserId","v":"gc"},{"e":null,"k":"","t":"device","v":"desktop"},{"e":null,"k":"","t":"device_type","v":"desktop_laptop"},{"e":null,"k":"","t":"source_type","v":"direct"},{"e":null,"k":"","t":"currentTimestamp","v":1650293133326},{"e":null,"k":"","t":"offset","v":180}],"snapshots":[{"activationTimestamp":1650293133309,"decisions":[{"c":"21000884603","x":"21043080974","v":"21040020036","h":false}],"events":[{"e":null,"y":"client_activation","u":"e2b535f4-67f6-49f8-9125-8fe6cf0052d3","t":1650293133327}]}]}]}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://c.contentsquare.net/dvar?v=11.19.4&pid=5865&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&pn=14&dv=N4IgxgzgsghgLmAFgSwHYHMDSBTAniALhAAYA6AVnIEYAOGgJhoGYA2ATnvqeIBYWB9Ki3LF6HYuxpUqIAL5AA%3D%3D&r=538281',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://cdn.spincar.com/spincar-static/integrate/new.echopark.com.js?_=cc054512',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://wsv3cdn.audioeye.com/v2/scripts/loader.js?h=5e3fc2ac7eaa50810496576798659a1f&lang=en&cb=7fce7ce',
      {
        headers: {
          origin: 'https://new.echopark.com',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/jquery.bundle.js?cb=7fce7ce', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/startup.bundle.js?cb=7fce7ce', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://d29f71cuc8ityh.cloudfront.net/js2/cn-client-z3-20220417065251.js.gz',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://regioner.spincar.com/echoparkmaster', {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://cdn.spincar.com/spincar-static/provider_scripts/bottlerocket.js?_=cc054512',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://wsv3cdn.audioeye.com/v2/scripts/loader.js?h=5e3fc2ac7eaa50810496576798659a1f&lang=en&cb=7fce7ce',
      {
        headers: {
          origin: 'https://new.echopark.com',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://app.carnow.com/dealers/widgets?id=41505&vstid=e9922422-ef7c-4591-b901-c3a71c9c23aa',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/smartrems.bundle.7fce7ce.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://analytics.audioeye.com/air/v0/send',
      '{"aeaid":"b6d2575c-05f2-4287-9905-72c4801c7f54","sid":"509b2e3f-79ea-4261-8ad0-05604a8d05df","pg":"https://new.echopark.com/car/2HGFC4B86KH310519","lang":"en","cat":"Mobile User","evt":"Page View","inm":"none","h":"5e3fc2ac7eaa50810496576798659a1f","is":"gtm-1.2"}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://fonts.gstatic.com/s/lato/v22/S6uyw4BMUTPHjx4wXiWtFCc.woff2', {
      headers: {
        origin: 'https://new.echopark.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://d2dhoetkfll74o.cloudfront.net/p/41505/wI0Hb0vv4BJkG4Fq26JefxkdJK1EudB5-20220417065251.css?_=20220417065251',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://app.carnow.com/dealers/track_visitor',
      {
        vstid: `${vars['visitor_id2']}`,
        url: 'https%3A%2F%2Fnew.echopark.com%2Fcar%2F2HGFC4B86KH310519',
        title: 'Used%202019%20Honda%20Civic%20Coupe%20%7C%20EchoPark',
        desc:
          'Are%20you%20looking%20for%20a%20used%202019%20Honda%20Civic%20Coupe%3F%20Check%20it%20out%20at%20EchoPark.%20Financing%20and%20protection%20plans%20available%20at%20the%20best%20prices.',
        vins: '',
        referrer: 'https%3A%2F%2Fnew.echopark.com%2Fused-cars%2Fcivic',
        'orig-ref': 'https%3A%2F%2Fnew.echopark.com%2F',
        stage: 'INIT',
      },
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://ai.autoid.com/ai',
      `{"build_date":" 2022-04-11 14:37:29","raw":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36###768x1366x24###180###true###true###","wid":"echopark.com","protocol":"https:","href":"https://new.echopark.com/car/2HGFC4B86KH310519","path":"${vars['VDPURL1']}","search":"","hash":"","uuid":"7e28a7a9-260c-4f4b-aeb9-ff7ce55c294a","sid":"0849c1de-52b8-4238-bf9f-801ed1ab26e2","pid":null,"gid":"11d2f4973b1445549a718fbae32833da","width":1366,"height":590,"ref":"https://new.echopark.com/used-cars/civic","host":"new.echopark.com","number":"{\\"num_1\\":\\"2047360109\\",\\"num_2\\":\\"2147483648\\",\\"num_3\\":\\"3186074774\\",\\"num_4\\":\\"3808961650\\",\\"num_5\\":\\"7047192163\\",\\"num_6\\":\\"6786714263\\",\\"num_7\\":\\"6782686107\\",\\"num_8\\":\\"5081049657\\"}","dleu":true,"ddc_sess":null,"gutm_source":null,"gutm_medium":null,"gutm_term":null,"gutm_content":null,"gutm_name":null,"gutm_gclid":null,"gclid":"","utm_source":"","utm_medium":"","utm_term":"","utm_keyword":"","utm_content":"","utm_campaign":"","adobe_id":null,"i_type":0,"i_image_url":"","i_vin":0,"i_year":"","i_make":"","i_model":"","i_price":0,"i_stock_no":"","i_trim":"","i_int_color":"","i_ext_color":"","i_mileage":0,"hosted_by":"","fp":"11d2f4973b1445549a718fbae32833da","ga_cookie":"134380896.1650052052"}`,
      {
        headers: {
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options('https://ai.autoid.com/ai', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'access-control-allow-origin,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://new.echopark.com',
        'sec-fetch-mode': 'cors',
      },
    })

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/a414564d0eea4404b63c13c1e45fa407.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://content.homenetiol.com/scaler/400/400/d01c7c2aeec748b5810643d8b05be896.jpg',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://cdn.spincar.com/spincar-static/hmac-sha256.min.js?_=12955eaa8fae8f',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://dynamodb.us-east-1.amazonaws.com/?',
      '{"Key":{"url":{"S":"//regioner.spincar.com/echoparkmaster"}},"ProjectionExpression":"code,content,updated","TableName":"prod_cache","ConsistentRead":false}',
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          authorization:
            'AWS4-HMAC-SHA256 Credential=AKIAJXVUVECILVNUQ5VQ/20220418/us-east-1/dynamodb/aws4_request,',
          'content-type': 'application/x-amz-json-1.0',
          'x-amz-date': '20220418T144535Z',
          'x-amz-target': 'DynamoDB_20120810.GetItem',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://sqs.us-east-1.amazonaws.com/505055843994/prod_analytics',
      {
        Action: 'SendMessage',
        MessageBody:
          'eyJ2IjozLCJjYXJvdXNlbF9jbGlja3MiOnt9LCJjbGllbnRfaWQiOiJzLUdOLU5IVlhHMkg2R0RrUk05U0hWOGowQU5oN2Y1OGlGa3I4S1B0ZmlmMWxNM2tZa3hEY0EiLCJwcmlkIjoicy1HTi1OSFY6MDAwMTY1MDI5MzEzNDIyMDoxMjgwNjQ6Mjc4MjU5MjQ5NyIsImxlYWQiOmZhbHNlLCJzcGluY2FyX2xlYWQiOmZhbHNlLCJudW1fY2xpY2tzX3ZkcCI6MCwibnVtX2NsaWNrc19zcGluIjowLCJudW1fY2xpY2tzXzM2MCI6MCwibnVtX2NsaWNrc19mZWF0dXJlIjowLCJkdXJhdGlvbiI6MTA3Niwic3Bpbl9sYXRlbmN5IjpudWxsLCJ2aW4iOiIyaGdmYzRiODZraDMxMDUxOSIsInMzX2ZvbGRlciI6ImVjaG9wYXJrbWFzdGVyIiwidXJsIjoiaHR0cHM6Ly9uZXcuZWNob3BhcmsuY29tL2Nhci8ySEdGQzRCODZLSDMxMDUxOSIsInNwaW4iOm51bGwsIm1pc3Npbmdfc2NyaXB0X2ludGVncmF0aW9uIjpmYWxzZSwiZmVhdHVyZXMiOnt9LCJjYW5vbmljYWxfaG9zdG5hbWUiOiJuZXcuZWNob3BhcmsuY29tIiwiZGV2aWNlIjoiV2luZG93cyBOVCIsIm1pc2MiOm51bGwsInBhZ2VfdHlwZSI6InZkcCIsImN1c3RvbWVyX2lkIjpudWxsLCJmdF9iYWNrX2J1dHRvbl9mZWF0dXJlcyI6bnVsbCwiZnRfY2xvc2VkX2xvY2F0aW9ucyI6bnVsbCwiZnRfZmVhdHVyZXMiOnt9LCJmdF92aWRlb19mZWF0dXJlcyI6e30sImZ0X21lbnVfY2xpY2tzIjpudWxsLCJmdF9wYXVzZWRfZmVhdHVyZXMiOm51bGwsImZ0X3ByZWZlcmVuY2VzIjpudWxsLCJmdF9za2lwcGVkX2ZlYXR1cmVzIjpudWxsLCJmdF90b3RhbF9kdXJhdGlvbiI6MCwiaXNfZnRfYXV0b3BsYXlfZW5hYmxlZCI6bnVsbCwibnVtX2NsaWNrc19mdCI6MCwibnVtX3ZpZXdzX2ZlYXR1cmVfdG91ciI6MCwibnVtX3ZpZXdzX3ZpZGVvX3RvdXIiOm51bGwsIm51bV92aWV3c19zdGlsbF9pbWFnZSI6bnVsbCwibnVtX3ZpZXdzX3NwaW4iOm51bGwsInZpZXdfdGltZV92aWRlb190b3VyIjpudWxsLCJ2aWV3X3RpbWVfc3BpbiI6MCwiY2FyZmF4X2xpbmtfY2xpY2tlZCI6ZmFsc2UsIm51bV9jbGlja3NfaG90c3BvdHMiOjAsInZpZXdfY2xpY2tzX2FuZF90aW1lcyI6e30sInRhYl9jbGlja3NfYW5kX3RpbWVzIjp7fSwiZmVhdHVyZV9jYXRlZ29yeV9jbGlja3MiOnt9LCJmZWF0dXJlX3ZpZXdzX2FuZF90aW1lcyI6e30sInRvdGFsX2ZlYXR1cmVfY2xpY2tzIjowLCJ0b3RhbF9mZWF0dXJlX3RpbWUiOjAsImZpX3ZpZXdzX2FuZF90aW1lcyI6e30sInRvdGFsX2ZpX2NsaWNrcyI6MCwidG90YWxfZmlfdGltZSI6MCwicGhvdG9fdmlld3NfYW5kX3RpbWVzIjp7fSwidG90YWxfcGhvdG9fY2xpY2tzIjowLCJ0b3RhbF9waG90b190aW1lIjowLCJ2aWRlb19jYXRlZ29yeV9jbGlja3MiOnt9LCJ2aWRlb192aWV3c19hbmRfdGltZXMiOnt9LCJ0b3RhbF92aWRlb19jbGlja3MiOjAsInRvdGFsX3ZpZGVvX3RpbWUiOjAsIm51bV9jbGlja3NfY3RhIjowLCJudW1fY2xpY2tzX2N0YV9pbnRlcnN0aXRpYWwiOjB9',
        Version: '2012-11-05',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://js-agent.newrelic.com/nr-spa-1215.min.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://logx.optimizely.com/v1/events',
      '{"account_id":"20473601091","anonymize_ip":true,"client_name":"js","client_version":"0.174.0","enrich_decisions":true,"project_id":"20473601091","revision":"68","visitors":[{"visitor_id":"oeu1650277261619r0.5778353934160176","session_id":"AUTO","attributes":[{"e":null,"k":"","t":"browserId","v":"gc"},{"e":null,"k":"","t":"device","v":"desktop"},{"e":null,"k":"","t":"device_type","v":"desktop_laptop"},{"e":null,"k":"","t":"source_type","v":"direct"},{"e":null,"k":"","t":"currentTimestamp","v":1650293133326},{"e":null,"k":"","t":"offset","v":180}],"snapshots":[{"activationTimestamp":1650293133309,"decisions":[{"c":"21000884603","x":"21043080974","v":"21040020036","h":false}],"events":[{"e":"21363912297","k":"20473601091_02__vdp_page","t":1650293134436,"u":"a0e6aa0b-3b44-4838-9b66-64bb490f4c83","y":"view_activated","a":{}}]}]}]}',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://bam.nr-data.net/1/NRJS-c2bd56d8b578b43e50f?a=1339723442&v=1215.1253ab8&to=MQEDNRFXDUdVUREIVwhLLDcgGTBdQFcGDkoDJw4PF0QMWFhXF05xCAAEGQ%3D%3D&rst=4747&ck=1&ref=https://new.echopark.com/car/2HGFC4B86KH310519&ap=1450&be=2506&fe=4683&dc=3443&af=err,xhr,stn,ins,spa&perf=%7B%22timing%22:%7B%22of%22:1650293130718,%22n%22:0,%22u%22:2451,%22ue%22:2451,%22f%22:3,%22dn%22:3,%22dne%22:3,%22c%22:3,%22ce%22:3,%22rq%22:18,%22rp%22:2430,%22rpe%22:2476,%22dl%22:2465,%22di%22:3443,%22ds%22:3443,%22de%22:3536,%22dc%22:4683,%22l%22:4683,%22le%22:4725%7D,%22navigation%22:%7B%7D%7D&fp=2658&fcp=2658&jsonp=NREUM.setToken',
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://sqs.us-east-1.amazonaws.com/505055843994/prod_analytics',
      {
        Action: 'SendMessage',
        MessageBody:
          'eyJ2IjozLCJjYXJvdXNlbF9jbGlja3MiOnt9LCJjbGllbnRfaWQiOiJzLUdOLU5IVlhHMkg2R0RrUk05U0hWOGowQU5oN2Y1OGlGa3I4S1B0ZmlmMWxNM2tZa3hEY0EiLCJwcmlkIjoicy1HTi1OSFY6MDAwMTY1MDI5MzEzNDIyMDoxMjgwNjQ6Mjc4MjU5MjQ5NyIsImxlYWQiOmZhbHNlLCJzcGluY2FyX2xlYWQiOmZhbHNlLCJudW1fY2xpY2tzX3ZkcCI6MCwibnVtX2NsaWNrc19zcGluIjowLCJudW1fY2xpY2tzXzM2MCI6MCwibnVtX2NsaWNrc19mZWF0dXJlIjowLCJkdXJhdGlvbiI6MTA3Niwic3Bpbl9sYXRlbmN5IjpudWxsLCJ2aW4iOiIyaGdmYzRiODZraDMxMDUxOSIsInMzX2ZvbGRlciI6ImVjaG9wYXJrbWFzdGVyIiwidXJsIjoiaHR0cHM6Ly9uZXcuZWNob3BhcmsuY29tL2Nhci8ySEdGQzRCODZLSDMxMDUxOSIsInNwaW4iOm51bGwsIm1pc3Npbmdfc2NyaXB0X2ludGVncmF0aW9uIjpmYWxzZSwiZmVhdHVyZXMiOnt9LCJjYW5vbmljYWxfaG9zdG5hbWUiOiJuZXcuZWNob3BhcmsuY29tIiwiZGV2aWNlIjoiV2luZG93cyBOVCIsIm1pc2MiOm51bGwsInBhZ2VfdHlwZSI6InZkcCIsImN1c3RvbWVyX2lkIjpudWxsLCJmdF9iYWNrX2J1dHRvbl9mZWF0dXJlcyI6bnVsbCwiZnRfY2xvc2VkX2xvY2F0aW9ucyI6bnVsbCwiZnRfZmVhdHVyZXMiOnt9LCJmdF92aWRlb19mZWF0dXJlcyI6e30sImZ0X21lbnVfY2xpY2tzIjpudWxsLCJmdF9wYXVzZWRfZmVhdHVyZXMiOm51bGwsImZ0X3ByZWZlcmVuY2VzIjpudWxsLCJmdF9za2lwcGVkX2ZlYXR1cmVzIjpudWxsLCJmdF90b3RhbF9kdXJhdGlvbiI6MCwiaXNfZnRfYXV0b3BsYXlfZW5hYmxlZCI6bnVsbCwibnVtX2NsaWNrc19mdCI6MCwibnVtX3ZpZXdzX2ZlYXR1cmVfdG91ciI6MCwibnVtX3ZpZXdzX3ZpZGVvX3RvdXIiOm51bGwsIm51bV92aWV3c19zdGlsbF9pbWFnZSI6bnVsbCwibnVtX3ZpZXdzX3NwaW4iOm51bGwsInZpZXdfdGltZV92aWRlb190b3VyIjpudWxsLCJ2aWV3X3RpbWVfc3BpbiI6MCwiY2FyZmF4X2xpbmtfY2xpY2tlZCI6ZmFsc2UsIm51bV9jbGlja3NfaG90c3BvdHMiOjAsInZpZXdfY2xpY2tzX2FuZF90aW1lcyI6e30sInRhYl9jbGlja3NfYW5kX3RpbWVzIjp7fSwiZmVhdHVyZV9jYXRlZ29yeV9jbGlja3MiOnt9LCJmZWF0dXJlX3ZpZXdzX2FuZF90aW1lcyI6e30sInRvdGFsX2ZlYXR1cmVfY2xpY2tzIjowLCJ0b3RhbF9mZWF0dXJlX3RpbWUiOjAsImZpX3ZpZXdzX2FuZF90aW1lcyI6e30sInRvdGFsX2ZpX2NsaWNrcyI6MCwidG90YWxfZmlfdGltZSI6MCwicGhvdG9fdmlld3NfYW5kX3RpbWVzIjp7fSwidG90YWxfcGhvdG9fY2xpY2tzIjowLCJ0b3RhbF9waG90b190aW1lIjowLCJ2aWRlb19jYXRlZ29yeV9jbGlja3MiOnt9LCJ2aWRlb192aWV3c19hbmRfdGltZXMiOnt9LCJ0b3RhbF92aWRlb19jbGlja3MiOjAsInRvdGFsX3ZpZGVvX3RpbWUiOjAsIm51bV9jbGlja3NfY3RhIjowLCJudW1fY2xpY2tzX2N0YV9pbnRlcnN0aXRpYWwiOjB9',
        Version: '2012-11-05',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.5)

    response = http.post(
      'https://sqs.us-east-1.amazonaws.com/505055843994/prod_analytics',
      {
        Action: 'SendMessage',
        MessageBody:
          'eyJ2IjozLCJjYXJvdXNlbF9jbGlja3MiOnt9LCJjbGllbnRfaWQiOiJzLUdOLU5IVlhHMkg2R0RrUk05U0hWOGowQU5oN2Y1OGlGa3I4S1B0ZmlmMWxNM2tZa3hEY0EiLCJwcmlkIjoicy1HTi1OSFY6MDAwMTY1MDI5MzEzNDIyMDoxMjgwNjQ6Mjc4MjU5MjQ5NyIsImxlYWQiOmZhbHNlLCJzcGluY2FyX2xlYWQiOmZhbHNlLCJudW1fY2xpY2tzX3ZkcCI6MCwibnVtX2NsaWNrc19zcGluIjowLCJudW1fY2xpY2tzXzM2MCI6MCwibnVtX2NsaWNrc19mZWF0dXJlIjowLCJkdXJhdGlvbiI6MjU0NSwic3Bpbl9sYXRlbmN5IjoyNTQ1LCJ2aW4iOiIyaGdmYzRiODZraDMxMDUxOSIsInMzX2ZvbGRlciI6ImVjaG9wYXJrbWFzdGVyIiwidXJsIjoiaHR0cHM6Ly9uZXcuZWNob3BhcmsuY29tL2Nhci8ySEdGQzRCODZLSDMxMDUxOSIsInNwaW4iOnRydWUsIm1pc3Npbmdfc2NyaXB0X2ludGVncmF0aW9uIjpmYWxzZSwiZmVhdHVyZXMiOnt9LCJjYW5vbmljYWxfaG9zdG5hbWUiOiJuZXcuZWNob3BhcmsuY29tIiwiZGV2aWNlIjoiV2luZG93cyBOVCIsIm1pc2MiOiJ2aWV3X2V4dGVyaW9yIiwicGFnZV90eXBlIjoidmRwIiwiY3VzdG9tZXJfaWQiOm51bGwsImZ0X2JhY2tfYnV0dG9uX2ZlYXR1cmVzIjpudWxsLCJmdF9jbG9zZWRfbG9jYXRpb25zIjpudWxsLCJmdF9mZWF0dXJlcyI6e30sImZ0X3ZpZGVvX2ZlYXR1cmVzIjp7fSwiZnRfbWVudV9jbGlja3MiOm51bGwsImZ0X3BhdXNlZF9mZWF0dXJlcyI6bnVsbCwiZnRfcHJlZmVyZW5jZXMiOm51bGwsImZ0X3NraXBwZWRfZmVhdHVyZXMiOm51bGwsImZ0X3RvdGFsX2R1cmF0aW9uIjowLCJpc19mdF9hdXRvcGxheV9lbmFibGVkIjpudWxsLCJudW1fY2xpY2tzX2Z0IjowLCJudW1fdmlld3NfZmVhdHVyZV90b3VyIjowLCJudW1fdmlld3NfdmlkZW9fdG91ciI6bnVsbCwibnVtX3ZpZXdzX3N0aWxsX2ltYWdlIjpudWxsLCJudW1fdmlld3Nfc3BpbiI6MCwidmlld190aW1lX3ZpZGVvX3RvdXIiOm51bGwsInZpZXdfdGltZV9zcGluIjowLCJjYXJmYXhfbGlua19jbGlja2VkIjpmYWxzZSwibnVtX2NsaWNrc19ob3RzcG90cyI6MCwidmlld19jbGlja3NfYW5kX3RpbWVzIjp7ImVjIjp7ImR1ciI6MCwidmlld3MiOjF9fSwidGFiX2NsaWNrc19hbmRfdGltZXMiOnt9LCJmZWF0dXJlX2NhdGVnb3J5X2NsaWNrcyI6e30sImZlYXR1cmVfdmlld3NfYW5kX3RpbWVzIjp7fSwidG90YWxfZmVhdHVyZV9jbGlja3MiOjAsInRvdGFsX2ZlYXR1cmVfdGltZSI6MCwiZmlfdmlld3NfYW5kX3RpbWVzIjp7fSwidG90YWxfZmlfY2xpY2tzIjowLCJ0b3RhbF9maV90aW1lIjowLCJwaG90b192aWV3c19hbmRfdGltZXMiOnt9LCJ0b3RhbF9waG90b19jbGlja3MiOjAsInRvdGFsX3Bob3RvX3RpbWUiOjAsInZpZGVvX2NhdGVnb3J5X2NsaWNrcyI6e30sInZpZGVvX3ZpZXdzX2FuZF90aW1lcyI6e30sInRvdGFsX3ZpZGVvX2NsaWNrcyI6MCwidG90YWxfdmlkZW9fdGltZSI6MCwibnVtX2NsaWNrc19jdGEiOjAsIm51bV9jbGlja3NfY3RhX2ludGVyc3RpdGlhbCI6MH0=',
        Version: '2012-11-05',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://app.carnow.com/dealers/visitor_info?vstid=e9922422-ef7c-4591-b901-c3a71c9c23aa&g=0',
      {
        headers: {
          accept: '*/*',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.6)

    response = http.post(
      'https://bam.nr-data.net/events/1/NRJS-c2bd56d8b578b43e50f?a=1339723442&v=1215.1253ab8&to=MQEDNRFXDUdVUREIVwhLLDcgGTBdQFcGDkoDJw4PF0QMWFhXF05xCAAEGQ%3D%3D&rst=6255&ck=1&ref=https://new.echopark.com/car/2HGFC4B86KH310519',
      "bel.7;1,e,,4tc,3nx,f1,'initialPageLoad,'https://new.echopark.com/car/2HGFC4B86KH310519,1,1,,,,14a,!!'9cc262f7-07e4-45c4-9ef5-1d40ca89b4b0,'1,21u,21u;2,,27l,bv,f,f,'GET,5k,'cdnjs.cloudflare.com:443,'/ajax/libs/jquery/2.2.4/jquery.min.js,,1u16,,'3,!!!;2,,2nq,6o,1,2,'POST,5k,'new.echopark.com:443,'/api/sitecore/Favorites/IsFavorite,x,1y,,'6,'a4aa7d1c7ae6de8c,'052acadc6906d45f766673387d2f8c40,l24tx7x0;2,,2qt,96,1,1,8,5k,'k-aus1.contentsquare.net:443,'/v2/recording,k8,0,1,'8,!!!;2,,2v8,8n,1,2,8,5o,'logx.optimizely.com:443,'/v1/events,m1,,,'13,!!!;2,,303,7d,,,8,5k,e,f,3vi,0,1,'18,!!!;2,1,2yy,96,1l8,k,4,5k,'app.carnow.com:443,'/dealers/widgets,,fjv,,'17,!!!;2,,38d,ac,1,1,8,5k,l,'/dealers/track_visitor,fn,,,'19,!!!;2,,2tj,gv,ee,o,8,5k,9,'/api/sitecore/VehiclesListing/GetVehicles,7k,294,,'9,'953f502eefcbc191,'610229c59fb6a2fbee61af5f7e928510,l24tx82u;2,,2xm,ev,,,4,5k,'regioner.spincar.com:443,'/echoparkmaster,,g,,'14,!!!;2,,3eu,5c,,,8,5k,e,f,ndc,0,1,'23,!!!;2,,39w,bb,k,j,8,5k,'ai.autoid.com:443,'/ai,10q,eo,1,'20,!!!;2,,3de,8g,,,8,5k,e,f,2ixg,0,1,'22,!!!;2,,3c3,h1,,,8,5k,'dynamodb.us-east-1.amazonaws.com:443,'/,4b,32,,'21,!!!;2,,2tn,139,3,2,8,5k,9,'/api/sitecore/VehicleDetails/GetPrice,2f,6w,,'10,'9ee4e87218ab16eb,'19846689c940cb7926467a64ec9e4540,l24tx82x;2,,2pw,1aq,1,1,4,5k,9,'/api/sitecore/Profile/GetCurrentUserTradeInDetails,,26,,'7,'b9a350c49626a7b0,'0c3422f16c75688fbec6f34a6ac286b0,l24tx7z6;b,1w3,!,!-1w0,,,,!,f,1v0,1a,-b,r6,,2l,vv,,16",
      {
        headers: {
          'content-type': 'text/plain',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://c.contentsquare.net/v2/events?v=11.19.4&sr=7&mdh=8390&pn=14&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&lv=1650291951&lhd=1650291951&hd=1650293133&pid=5865&str=2447&di=3425&dc=4665&fl=4707&ct=0',
      '[{"type":0,"ts":695,"x":1366,"y":590},{"type":19,"name":"FCP","val":2658.4000000059605,"ts":696},{"type":19,"name":"LCP","val":2658.5,"ts":723},{"type":19,"name":"LCP","val":2741.9,"ts":723},{"type":19,"name":"LCP","val":3138.799,"ts":723},{"type":19,"name":"CLS","val":0.0003306266938723483,"ts":828},{"type":19,"name":"TTFB","val":2429.9000000059605,"ts":1917},{"type":6,"ts":2991,"x":945,"y":119,"tgt":"input#searchbar"},{"type":7,"ts":3058,"x":1013,"y":61,"tgt":"input#searchbar"},{"type":2,"ts":3210,"x":1107,"y":2}]',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/launcher.bundle.7fce7ce.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://wsv3cdn.audioeye.com/v2/build/compliance.bundle.7fce7ce.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.7)

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-QY8WNQN5HH&gtm=2oe4d0&_p=873779237&sr=1366x768&_z=ccd.MCB&ul=pt-br&cid=134380896.1650052052&_s=1&dl=https%3A%2F%2Fnew.echopark.com%2Fcar%2F2HGFC4B86KH310519&dr=https%3A%2F%2Fnew.echopark.com%2Fused-cars%2Fcivic&dt=Used%202019%20Honda%20Civic%20Coupe%20%7C%20EchoPark&sid=1650292053&sct=3&seg=1&en=page_view',
      null,
      {
        headers: {
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.7)

    response = http.post(
      'https://c.contentsquare.net/v2/events?v=11.19.4&sr=7&mdh=8390&pn=14&uu=fec25382-5e63-acb4-e46f-7f98bbe7c4f9&sn=4&lv=1650291951&lhd=1650291951&hd=1650293133&pid=5865&str=2447&di=3425&dc=4665&fl=4707&ct=0',
      '[{"type":6,"ts":5637,"x":981,"y":122,"tgt":"input#searchbar"},{"type":2,"ts":5638,"x":981,"y":122}]',
      {
        headers: {
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })
}