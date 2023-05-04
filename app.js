const app = Vue.createApp({
  // template: '<h1>Hello World</h1>',
  data() {
    return {
      id: '3643aad7-6a82-4767-b52a-9542f1456439',
      name: 'Keyboard',
      description: 'Gamer Kayboard',
      price: '59.99',
      category: 'Peripheral',
      picture: 'https://images.tcdn.com.br/img/img_prod/740836/teclado_mecanico_razer_blackwidow_v3_tenkeyless_razer_chroma_rgb_us_switch_yellow_12535_1_10e721931a23430dae9288fe66c122bb.jpg',
    }
  },
  methods: {
    async getProduct() {
      const res = await fetch('http://localhost:8080/api/products')
      const data = await res.json()
      const firstProduct = data[0]

      console.log(data)
      console.log(firstProduct)

      this.id = firstProduct.id
      this.name = firstProduct.name
      this.description = firstProduct.description
      this.price = firstProduct.price
      this.category = firstProduct.category.name
      this.image = 'http://localhost:8080' + firstProduct.image

      console.log(this.image)
    },
  },
})

app.mount('#app')