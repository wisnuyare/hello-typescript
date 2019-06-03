
export type DetailedImagesDataType = {
    color: any
    file_basename: string
    prod: string
    url: string
  }
  
  export type DetailedVariantsDataType = {
    friendly_id: string
    id: number
    price: number
    product_code: string
    stock: number
  }
  
  export type GeneralOptionsDataType = {
    options: string[]
    title: string
    value: string
  }
  
  export type ProductDataType = {
    advanced_pricing_rules: any
    attachment: any
    brand: string
    category_ids: number[]
    color: string
    created_at: string
    cross_tags: any[]
    currency: string
    custom_attribute1: string
    custom_attribute2: string
    custom_attribute3: string
    custom_attribute4: string
    custom_attribute5: string
    custom_attribute_1: string
    custom_attribute_2: string
    decoration: any
    description: string
    detailed_images: DetailedImagesDataType[]
    detailed_variants: DetailedVariantsDataType[]
    fid: string
    friendly_id: string
    general_options: GeneralOptionsDataType[]
    id: number
    images: string[]
    is_active: boolean
    is_backorder: boolean
    is_featured: boolean
    is_ignore_stock: boolean
    is_in_stock: boolean
    is_new: boolean
    label: any
    label_fid: any
    link: string
    meta_description: string
    meta_keywords: string
    meta_title: string
    options: []
    origin_specification: string
    price: string
    price_raw: number
    prices_by_color: []
    product_code: string
    short_description: string
    size: string
    sold_stock: number
    specification: string
    stock: number
    title: string
    type: string
    variants: []
    weight: number
    wish_count: number
  }
  
  export type ProductListStateType = {
    page: number
    perPage: number
    totalProducts: number
    productList: ProductDataType[]
    searchQuery: string
  }
  
  export type responseJSONType = {
    paging: {
      next: string
      page: number
      total: number
      total_in_page: number
    }
    products: ProductDataType[]
    status: number
  }

  export type responseJSONDetail = {
      status: string
      product: ProductDataType
  }
  