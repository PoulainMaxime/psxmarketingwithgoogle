export const shippingPhpExport = [
  {
    collection: "carriers",
    id: "1",
    properties: {
      id_carrier: "1",
      id_reference: "1",
      name: "free carrier",
      carrier_taxes_rates_group_id: "1",
      url: "",
      active: true,
      deleted: false,
      shipping_handling: 0,
      free_shipping_starts_at_price: 5,
      free_shipping_starts_at_weight: 50,
      disable_carrier_when_out_of_range: false,
      is_module: false,
      is_free: true,
      shipping_external: false,
      need_range: false,
      external_module_name: "",
      max_width: 0,
      max_height: 0,
      max_depth: 0,
      max_weight: 0,
      grade: 0,
      delay: "Free shipping!",
      currency: "EUR",
      weight_unit: "kg",
      country_ids: "FR,IT",
    },
  },
  {
    collection: "carriers",
    id: "2",
    properties: {
      id_carrier: "3",
      id_reference: "2",
      name: "basic carrier",
      carrier_taxes_rates_group_id: "1",
      url: "",
      active: true,
      deleted: false,
      shipping_handling: 0,
      free_shipping_starts_at_price: 5,
      free_shipping_starts_at_weight: 50,
      disable_carrier_when_out_of_range: false,
      is_module: false,
      is_free: true,
      shipping_external: false,
      need_range: false,
      external_module_name: "",
      max_width: 0,
      max_height: 0,
      max_depth: 0,
      max_weight: 0,
      grade: 0,
      delay: "delivery in one day!",
      currency: "EUR",
      weight_unit: "kg",
      country_ids: "FR,IT,US",
    },
  },
  {
    collection: "carrier_details",
    id: "2-1-1-1",
    properties: {
      id_reference: "2",
      id_carrier_detail: "1",
      shipping_method: "range_price",
      delimiter1: 0,
      delimiter2: 100,
      country_ids: "FR",
      state_ids: "",
      price: 5,
    },
  },
  {
    collection: "carrier_taxes",
    id: "2-1",
    properties: {
      id_reference: "2",
      id_carrier_tax: "1",
      country_id: "FR",
      state_ids: "",
      tax_rate: 21,
    },
  },
  {
    collection: "carriers",
    id: "7",
    properties: {
      id_carrier: "8",
      id_reference: "7",
      name: "test carrier",
      carrier_taxes_rates_group_id: "1",
      url: "",
      active: true,
      deleted: false,
      shipping_handling: 2,
      free_shipping_starts_at_price: 0,
      free_shipping_starts_at_weight: 0,
      disable_carrier_when_out_of_range: false,
      is_module: false,
      is_free: false,
      shipping_external: false,
      need_range: false,
      external_module_name: "",
      max_width: 0,
      max_height: 0,
      max_depth: 0,
      max_weight: 0,
      grade: 5,
      delay: "delivery in 5 days",
      currency: "EUR",
      weight_unit: "kg",
      country_ids: "FR,IT,US",
    },
  },
  {
    collection: "carrier_details",
    id: "7-1-1-4",
    properties: {
      id_reference: "7",
      id_carrier_detail: "4",
      shipping_method: "range_price",
      delimiter1: 0,
      delimiter2: 100,
      country_ids: "FR,LT",
      state_ids: "",
      price: 5,
    },
  },
  {
    collection: "carrier_details",
    id: "7-1-1-5",
    properties: {
      id_reference: "7",
      id_carrier_detail: "5",
      shipping_method: "range_price",
      delimiter1: 100,
      delimiter2: 500,
      country_ids: "FR,LT",
      state_ids: "",
      price: 10,
    },
  },
  {
    collection: "carrier_taxes",
    id: "7-1",
    properties: {
      id_reference: "7",
      id_carrier_tax: "1",
      country_id: "FR",
      state_ids: "",
      tax_rate: 21,
    },
  },
  {
    collection: "carrier_taxes",
    id: "7-1",
    properties: {
      id_reference: "7",
      id_carrier_tax: "1",
      country_id: "FR",
      state_ids: "",
      tax_rate: 21,
    },
  },
  {
    collection: "carriers",
    id: "9",
    properties: {
      id_carrier: "11",
      id_reference: "9",
      name: "disabled carrier",
      carrier_taxes_rates_group_id: "1",
      url: "",
      active: false,
      deleted: false,
      shipping_handling: 2,
      free_shipping_starts_at_price: 0,
      free_shipping_starts_at_weight: 0,
      disable_carrier_when_out_of_range: false,
      is_module: false,
      is_free: false,
      shipping_external: false,
      need_range: false,
      external_module_name: "",
      max_width: 0,
      max_height: 0,
      max_depth: 0,
      max_weight: 0,
      grade: 5,
      delay: "delivery in 5 days",
      currency: "EUR",
      weight_unit: "kg",
      country_ids: "FR,IT,US",
    },
  },
  {
    collection: "carriers",
    id: "12",
    properties: {
      id_carrier: "12",
      id_reference: "12",
      name: "deleted carrier",
      carrier_taxes_rates_group_id: "1",
      url: "",
      active: true,
      deleted: true,
      shipping_handling: 2,
      free_shipping_starts_at_price: 0,
      free_shipping_starts_at_weight: 0,
      disable_carrier_when_out_of_range: false,
      is_module: false,
      is_free: false,
      shipping_external: false,
      need_range: false,
      external_module_name: "",
      max_width: 0,
      max_height: 0,
      max_depth: 0,
      max_weight: 0,
      grade: 5,
      delay: "delivery in 5 days",
      currency: "EUR",
      weight_unit: "kg",
      country_ids: "FR,IT,US",
    },
  },
];
