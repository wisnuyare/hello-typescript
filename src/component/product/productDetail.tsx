import React, {Component} from 'react';
import { ProductDataType, responseJSONDetail } from "./productTypes";
import fetchProductDetail from "../../api_calls/productDetail";

export default class ProductDetail extends Component<any, ProductDataType>{
    state: ProductDataType = {
        advanced_pricing_rules: '',
        attachment: '',
        brand: '',
        category_ids: [],
        color: '',
        created_at: '',
        cross_tags: [],
        currency: '',
        custom_attribute1: '',
        custom_attribute2: '',
        custom_attribute3: '',
        custom_attribute4: '',
        custom_attribute5: '',
        custom_attribute_1: '',
        custom_attribute_2: '',
        decoration: '',
        description: '',
        detailed_images: [],
        detailed_variants: [],
        fid: '',
        friendly_id: '',
        general_options: [],
        id: 0,
        images: [],
        is_active: true,
        is_backorder: false,
        is_featured: false,
        is_ignore_stock: false,
        is_in_stock: false,
        is_new: false,
        label: '',
        label_fid: '',
        link: '',
        meta_description: '',
        meta_keywords: '',
        meta_title: '',
        options: [],
        origin_specification: '',
        price: '',
        price_raw: 0,
        prices_by_color: [],
        product_code: '',
        short_description: '',
        size: '',
        sold_stock: 0,
        specification: '',
        stock: 0,
        title: '',
        type: '',
        variants: [],
        weight: 0,
        wish_count: 0,      
    }

    async componentDidMount(){
        let id = this.props.match.params.product_id;
        try {
            let result = await fetchProductDetail(id)
            let resultJSON: responseJSONDetail = await result.json()
            if (result.ok) {
              this.setState({ 
                images: resultJSON.product.images,
                id: resultJSON.product.id,
                title: resultJSON.product.title,
                price: resultJSON.product.price,
                origin_specification: resultJSON.product.origin_specification
              })
            } else {
              // Handle your error here
            }
          } catch(err) {
            // Handle your error here
          }
    }

    render(){
        const check = this.state.id ? (
            <div className="row">
                <div className="row"></div>
                <div className="col s6">
                    <img src={this.state.images[0]} alt="Product" className="responsive-img"/>    
                </div>
                <div className="col s6">
                    <div className="card-panel">
                        <h4>{this.state.title}</h4>
                        <p>{this.state.price}</p>
                        <p dangerouslySetInnerHTML={{ __html: this.state.origin_specification }} />
                    </div>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        );
        return (
            <div className="container">
                {check}
            </div>
        )
    }
}