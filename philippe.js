const result = "LGGRGGLGGLGGGGGLGGGGRGGGGGG".split('').reduce(function(a, command) {
  return [ { 'R': a[0]
           , 'L': a[0]
           , 'G': { 'N': [a[0][0]    , a[0][1] + 1]
                  , 'E': [a[0][0] + 1, a[0][1]    ]
                  , 'S': [a[0][0]    , a[0][1] - 1]
                  , 'W': [a[0][0] - 1, a[0][1]    ]
                  }[a[1]]
           }[command]
         , { 'R': {'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N'}[a[1]]
           , 'L': {'N': 'W', 'W': 'S', 'S': 'E', 'E': 'N'}[a[1]]
           , 'G': a[1]
           }[command]
         ];
}, [[0, 0], 'N']);

console.log(result);