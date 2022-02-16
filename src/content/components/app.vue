<template>
  <div class="container">
    <div class="desc-container">
      <div class="sub-title"><span>概述</span></div>
      <div class="desc-info-container">
        <div class="desc-info-item">
          <div class="grey-text">本页产品总数量</div>
          <span class="info">{{productsCount}}</span>
        </div>
        <div class="desc-info-item">
          <div class="grey-text">本页产品中最高价格</div>
          <span class="info">{{minPrice}}</span>
        </div>
        <div class="desc-info-item">
          <div class="grey-text">本页产品中最低价格</div>
          <span class="info">{{maxPrice}}</span>
        </div>
      </div>

      <div class="sub-title mt-30"><span>详情</span></div>
      <div class="products-container">
        <template v-if="minPriceProduct.name">
          <div class="grey-text">本页产品中价格最高的产品</div>
          <div class="product-item-container">
            <img :src="minPriceProduct.img" class="img" />
            <div class="product-desc-container">
              <div class="dark-text"><span>{{minPriceProduct.name}}</span></div>
              <div>
                <span class="grey-text">Price({{currency}})</span>
                <span class="ml-20">{{minPriceProduct.price}}</span>
              </div>
            </div>
          </div>
        </template>

        <template v-if="maxPriceProduct.name">
          <div class="grey-text mt-20">本页产品中价格最低的产品</div>
          <div class="product-item-container">
            <img :src="maxPriceProduct.img" class="img" />
            <div class="product-desc-container">
              <div class="dark-text"><span>{{maxPriceProduct.name}}</span></div>
              <div>
                <span class="grey-text">Price(USD)</span>
                <span class="ml-20">{{maxPriceProduct.price}}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";

export default {
  setup() {
    const productsCount = ref(0)
    const minPrice = ref('')
    const maxPrice = ref('')
    const currency = ref('USD')

    const minPriceProduct = reactive({
      name: 'Deep 1',
      img: '//cdn.shopify.com/s/files/1/0293/9277/products/02-01-22Studio3_CE_14-27-09_31_JR2737_Tan_0088_PB_360x.jpg?v=1643998182',
      price: '19'
    })
    const maxPriceProduct = reactive({
      name: 'Deep 2',
      img: '//cdn.shopify.com/s/files/1/0293/9277/products/02-01-22Studio3_CE_14-27-09_31_JR2737_Tan_0088_PB_360x.jpg?v=1643998182',
      price: '199'
    })
    currency.value = document.querySelector('.page-container .currency-selector__option').dataset.value

    onMounted(() => {
      const productEles = document.querySelectorAll('.page-container .collection-list__product-tile .product-tile')
      productsCount.value = productEles.length
      console.log('productEles =', productEles)
    })


    // 根据 productEles 取出 dataset 中存放的数据, 计算 minPrice、maxPrice、minPriceProduct、maxPriceProduct

    minPrice.value = 10
    maxPrice.value = 20

    return {
      productsCount,
      minPrice,
      maxPrice,
      currency,
      minPriceProduct,
      maxPriceProduct
    }
  },
}
</script>

<style lang="less" scoped>
.container {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  width: 600px;
  background: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;

  .grey-text {
    color: #aeaeae;
    font-size: 12px;
  }

  .dark-texxt {
    font-size: 14px;
    font-weight: bold;
  }

  .mt-30 {
    margin-top: 30px;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .ml-20 {
    margin-left: 20px;
  }

  .desc-container {

    .sub-title {
      font-size: 20px;
      font-weight: bold;
    }
    .desc-info-container {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      .desc-info-item {
        display: flex;
        flex-direction: column;
      }
    }

    .products-container {
      margin-top: 20px;
      display: flex;
      flex-direction: column;

      .product-item-container {
        width: 520px;
        height: 150px;
        margin-top: 5px;
        border: 1px solid #000;
        display: flex;

        .img {
          height: 148px;
        }

        .product-desc-container {
          margin-left: 10px;
          padding-top: 20px;
        }
      }
    }
  }
}
</style>
