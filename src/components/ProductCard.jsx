const ProductCard = ({ product, dark = false }) => {
  const addToCart = () => {
    try {
      const savedCart = localStorage.getItem("cart");

      const cart = savedCart ? JSON.parse(savedCart) : [];

      const existingProduct = cart.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingProduct) {
        updatedCart = cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: Number(item.quantity || 0) + 1,
              }
            : item
        );
      } else {
        updatedCart = [
          ...cart,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };

  return (
    <div
      className={`group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? "border-gray-700 bg-gray-800 hover:border-green-500 hover:shadow-xl"
          : "border-gray-100 bg-white hover:border-green-100 hover:shadow-lg"
      }`}
    >
      {/* IMAGE */}
      <div
        className={`relative flex h-48 items-center justify-center overflow-hidden md:h-52 ${
          dark ? "bg-gray-700" : "bg-gray-50"
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
        />

        {/* NEW BADGE */}
        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-green-600 px-2.5 py-1 text-[10px] font-bold text-white">
            NEW
          </span>
        )}

        {/* SOON BADGE */}
        {product.future && (
          <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-2.5 py-1 text-[10px] font-bold text-white">
            SOON
          </span>
        )}

        {/* WISHLIST */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition ${
            dark
              ? "bg-gray-800 text-gray-300 hover:bg-green-600 hover:text-white"
              : "bg-white text-gray-500 hover:bg-green-600 hover:text-white"
          }`}
        >
          <FaHeart className="text-xs" />
        </button>

        {/* QUICK VIEW */}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-black/60 py-2.5 transition duration-300 group-hover:translate-y-0">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 transition hover:bg-green-600 hover:text-white"
          >
            <FaEye />
            Quick View
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3.5">

        {/* CATEGORY */}
        <p
          className={`mb-1 text-[10px] font-bold uppercase tracking-wider ${
            dark ? "text-green-400" : "text-green-600"
          }`}
        >
          {product.category}
        </p>

        {/* NAME */}
        <h3
          className={`truncate text-sm font-bold ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          {product.name}
        </h3>

        {/* RATING */}
        <div className="mt-1.5 flex items-center gap-1">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`text-[10px] ${
                  star <= product.rating
                    ? "text-yellow-400"
                    : dark
                    ? "text-gray-600"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <span
            className={`text-[10px] ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            ({product.rating}.0)
          </span>
        </div>

        {/* PRICE */}
        <div className="mt-2 flex items-center gap-2">
          <span
            className={`text-base font-extrabold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            ৳{product.price}
          </span>

          <span
            className={`text-xs line-through ${
              dark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            ৳{product.oldPrice}
          </span>
        </div>

        {/* ADD TO CART */}
        <button
          type="button"
          onClick={addToCart}
          className={`mt-3 flex w-full items-center justify-center gap-2 rounded-lg py-2 text-xs font-bold transition ${
            dark
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-900 text-white hover:bg-green-600"
          }`}
        >
          <FaShoppingCart className="text-xs" />
          Add to Cart
        </button>

      </div>
    </div>
  );
};