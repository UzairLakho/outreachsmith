import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const OrderCalculator = ({ serviceData, slug }) => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedTier) return;

    addToCart({
      service: serviceData.title,
      tier: selectedTier.da,
      price: selectedTier.price,
      tat: selectedTier.tat,
      quantity: quantity
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const total = selectedTier ? selectedTier.price * quantity : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side - Service Info & Tier Selection */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{serviceData.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{serviceData.description}</p>

          {/* Tier Selection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Your Tier</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {serviceData.tiers.map((tier, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTier(tier)}
                  className={`p-6 border-2 rounded-lg text-left transition-all ${
                    selectedTier?.da === tier.da
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{tier.da}</h3>
                    {selectedTier?.da === tier.da && (
                      <Check className="h-6 w-6 text-blue-600" />
                    )}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">${tier.price}</div>
                  <div className="text-sm text-gray-500">TAT: {tier.tat}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">What's Included:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">100% Manual Outreach - No automation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">White-label Reports - Client-ready</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Direct Admin Access - No middlemen</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Anti-Poaching Guarantee - Your clients stay yours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Sticky Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>

            {!selectedTier ? (
              <div className="text-center py-8 text-gray-500">
                Select a tier to get started
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-1">Selected Tier</div>
                  <div className="text-lg font-bold text-gray-900">{selectedTier.da}</div>
                  <div className="text-sm text-gray-500">TAT: {selectedTier.tat}</div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="text-sm text-gray-600 mb-2 block">Quantity</label>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-xl font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={added}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    added
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {added ? (
                    <span className="flex items-center justify-center">
                      <Check className="h-5 w-5 mr-2" />
                      Added to Cart!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </span>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  Agency-only pricing • No retail clients
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCalculator;