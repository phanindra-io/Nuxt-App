/* eslint-disable */
export const state = () => ({
  appliances: [
    {
      "id": 1,
      "location": "kitchen",
      "model#": "abc-xyz-200",
      "name":"test name",
      "brand": "lg",
      "features": [
        {
          "freezor": {
            "temp": {
              "min": -15,
              "max": -4
            }
          },
          "ice_maker": {
            "capacity": {
              "cubes": "2kgs",
              "curshed": "1kg"
            }
          }
        }
      ]
    },
    {
      "id": 2,
      "model#": "ssm-xyz-xp-100",
      "kitchen": "garage",
      "brand": "Samsung",
      "capacity": "10kgs",
      "detergent": [
        "cold",
        "hot"
      ],
      "water_temp": {
        "min": 10,
        "max": 80
      }
    },
    {
      "id": 3,
      "location": "kitchen",
      "model#": "abc-xyz-100",
      "name":"test name",
      "brand": "lg",
      "features": [
        {
          "freezor": {
            "temp": {
              "min": -15,
              "max": -4
            }
          },
          "ice_maker": {
            "capacity": {
              "cubes": "2kgs",
              "curshed": "1kg"
            }
          }
        }
      ]
    },
    {
      "id": 4,
      "kitchen": "garage",
      "model#": "sssm-xyz-200",
      "brand": "Samsung",
      "features": [
        {
          "freezor": {
            "temp_range": {
              "min": -10,
              "max": -5
            }
          },
          "water_dispensor": {
            "present": true,
            "type": [
              {
                "hotwater": {
                  "temp": 100
                }
              },
              {
                "cold": {
                  "temp": 4
                }
              }
            ]
          }
        }
      ]
    }
  ]
})

export const actions = {
  updateAppliances ({ commit }, { appliances }) {
    commit('setAppliances', appliances)
  },
}

export const getters = {
  getAppliances: (state) => {
    return state.appliances
  },
}

export const mutations = {
  setAppliances: (state, data) => {
    state.appliances = data
  },
}