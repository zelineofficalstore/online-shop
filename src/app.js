document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Men's Shirts", img: "img-1.jpg", price: 320000, oldPrice: 350000 },
      { id: 2, name: "T-Shirts", img: "img-2.jpg", price: 182000, oldPrice: 200000 },
      { id: 3, name: "T-Shirts", img: "img-3.jpg", price: 275000, oldPrice: 300000 },
      { id: 4, name: "T-Shirt", img: "img-4.jpg", price: 200000, oldPrice: 250000 },
      { id: 5, name: "T-Shirts", img: "img-5.jpg", price: 200000, oldPrice: 250000 },
      { id: 6, name: "Sweater", img: "img-6.jpg", price: 325000, oldPrice: 350000 },
      { id: 7, name: "Sweater", img: "img-7.jpg", price: 325000, oldPrice: 350000 },
      { id: 8, name: "Sweater", img: "img-8.jpg", price: 275000, oldPrice: 300000 },
      { id: 9, name: "T-Shirts", img: "img-9.jpg", price: 200000, oldPrice: 220000 },
      { id: 10, name: "Trousers White", img: "img-10.jpg", price: 200000, oldPrice: 250000 },
      { id: 11, name: "Trousers Black", img: "img-11.jpg", price: 250000, oldPrice: 300000 },
      { id: 12, name: "Women's Shirt", img: "img-12.jpg", price: 350000, oldPrice: 400000 },
    ],
  }));
  
Alpine.store('cart', {
  items: [],
  total: 0,
  quantity: 0,
  add(newItem) {
    this.items.push(newItem);
    this.quantity++;
    this.total += newItem.price;

    console.log(this.total);

  },
});
});

 // Konverrsi ke Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigitas:0
    }).format(number);
};


