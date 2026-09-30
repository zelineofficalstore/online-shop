document.addEventListener('alpine:init', () => {
 Alpine.data("products", () => ({
   items: [
     { id: 1, name: "Men's Shirts", img: "img-1.jpg", price: 320000 },
     { id: 2, name: "T-Shirts", img: "img-2.jpg", price: 182000 },
     { id: 3, name: "T-Shirts", img: "img-3.jpg", price: 275000 },
     { id: 4, name: "T-Shirt", img: "img-4.jpg", price: 200000 },
     { id: 5, name: "T-Shirts", img: "img-5.jpg", price: 200000 },
     { id: 6, name: "Sweater", img: "img-6.jpg", price: 325000 },
     { id: 7, name: "Sweater", img: "img-7.jpg", price: 325000 },
     { id: 8, name: "Sweater", img: "img-8.jpg", price: 275000 },
     { id: 9, name: "T-Shirts", img: "img-9.jpg", price: 200000 },
     { id: 10, name: "Trousers White", img: "img-10.jpg", price: 250000 },
     { id: 11, name: "Trousers Black", img: "img-11.jpg", price: 250000 },
     { id: 12, name: "Women's Shirt", img: "img-12.jpg", price: 350000 },
   ],
 }));   

Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
        // Cek apakah ada barang yang sama di cart
        const cartItem = this.items.find((item) => item.id === newItem.id);

        // Jika belum ada cart masih kosong
        if(!cartItem) {
            this.items.push({...newItem, quantity: 1, total: newItem.price});
            this.quantity++;
            this.total += newItem.price;
        } else {
            // Jika barangnya sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
            this.items = this.items.map((item) => {
                // Jika barang berbeda
                if (item.id !== newItem.id) {
                  return item;  
                } else {
                    // Jika barang sudah ada tambah 
                    item.quantity++;
                    item.total = item.price * item.quantity;
                    this.quantity++;
                    this.total += item.price;
                    return item;
                }
            });
        }
    },

    remove(id) {
       // item yang mau diremove berdasarkan id
       const cartItem = this.items.find((item) => item.id === id);

       // Jika item lebih dari satu
       if(cartItem.quantity > 1) {
        // Telurusi satu satu
        this.items = this.items.map((item) => {
        // Jika bukan barang yang diklik
        if (item.id !== id) {
            return item;
        } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
        }
        })
       } else if (cartItem.quantity === 1) {
        // Jika barangnya sisa 1
        this.items = this.item.filter((item) => item.id !== id)
        this.quantity--;
        this.total -= cartItem.price;
       }
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
    

