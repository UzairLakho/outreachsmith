import React, { useState, useEffect } from 'react';
import { Plus, Minus, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const OrderCalculator = ({ serviceData }) => {
  const [tierQuantities, setTierQuantities] = useState({});
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const initial = {};
    serviceData.tiers.forEach((tier) => {
      initial[tier.da] = 0;
    });
    setTierQuantities(initial);
  }, [serviceData]);

  const updateTierQuantity = (tierKey, nextValue) => {
    setTierQuantities((prev) => ({
      ...prev,
      [tierKey]: Math.max(0, nextValue)
    }));
  };

  const selectedTiers = serviceData.tiers.filter(
    (tier) => (tierQuantities[tier.da] || 0) > 0
  );

  const totalItems = selectedTiers.reduce(
    (sum, tier) => sum + (tierQuantities[tier.da] || 0),
    0
  );

  const subtotal = selectedTiers.reduce(
    (sum, tier) => sum + (tierQuantities[tier.da] || 0) * tier.price,
    0
  );

  const handleAddToCart = () => {
    if (selectedTiers.length === 0) return;

    selectedTiers.forEach((tier) => {
      addToCart({
        service: serviceData.title,
        tier: tier.da,
        price: tier.price,
        tat: tier.tat,
        quantity: tierQuantities[tier.da]
      });
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Side - Service Info & Tier Selection */}
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold uppercase tracking-wide">
            Service details
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">{serviceData.title}</h1>
          <p className="mt-3 text-lg text-slate-600">{serviceData.description}</p>

          {/* Tier Selection */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Select your tiers</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {serviceData.tiers.map((tier, index) => {
                const quantity = tierQuantities[tier.da] || 0;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl text-left border transition-all shadow-sm ${
                      quantity > 0
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-slate-200 hover:border-orange-300 hover:bg-orange-50/60'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{tier.da}</h3>
                        <div className="text-sm text-slate-500">Typical delivery: {tier.tat}</div>
                        <div className="text-sm text-slate-500">Traffic: {tier.traffic}</div>
                      </div>
                      {quantity > 0 && <Check className="h-5 w-5 text-orange-600" />}
                    </div>
                    <div className="text-3xl font-semibold text-slate-900 mb-4">${tier.price}</div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">Quantity</span>
                      <div className="flex items-center gap-2 bg-white rounded-full border border-slate-200 px-2 py-1">
                        <button
                          type="button"
                          onClick={() => updateTierQuantity(tier.da, quantity - 1)}
                          className="p-1.5 hover:bg-slate-100 rounded-full transition-colors"
                          aria-label={`Decrease ${tier.da} quantity`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold text-slate-900">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateTierQuantity(tier.da, quantity + 1)}
                          className="p-1.5 hover:bg-slate-100 rounded-full transition-colors"
                          aria-label={`Increase ${tier.da} quantity`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features */}
          <div className="mt-10 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">What is included</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Manual outreach and publisher vetting</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Contextual placements with editorial review</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Client-ready report with live URLs</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">White-label delivery and NDA-ready workflows</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Sticky Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Order summary</h3>

            {selectedTiers.length === 0 ? (
              <div className="text-center py-10 text-slate-500">
                Select quantities to get started
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-6">
                  {selectedTiers.map((tier) => (
                    <div key={tier.da} className="flex items-center justify-between text-sm text-slate-600">
                      <div>
                        <div className="font-semibold text-slate-900">{tier.da}</div>
                        <div className="text-xs text-slate-500">Qty: {tierQuantities[tier.da]}</div>
                        <div className="text-xs text-slate-500">Traffic: {tier.traffic}</div>
                      </div>
                      <div className="font-semibold text-slate-900">
                        ${(tierQuantities[tier.da] * tier.price).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Subtotal ({totalItems} items)</span>
                    <span className="text-2xl font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={added}
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    added
                      ? 'bg-green-600 text-white'
                      : 'bg-orange-600 text-white hover:bg-orange-700'
                  }`}
                >
                  {added ? (
                    <span className="flex items-center justify-center">
                      <Check className="h-5 w-5 mr-2" />
                      Added to cart
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add selected to cart
                    </span>
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center mt-3">
                  White-label delivery only. No retail clients.
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


