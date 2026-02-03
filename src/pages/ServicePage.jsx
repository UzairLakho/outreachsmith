import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import OrderCalculator from '../components/OrderCalculator';
import { pricingData } from '../data/pricing';

const ServicePage = () => {
  const location = useLocation();
  const slug = location.pathname.substring(1); // Remove leading slash
  const serviceData = pricingData[slug];

  if (!serviceData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      <OrderCalculator serviceData={serviceData} slug={slug} />
    </div>
  );
};

export default ServicePage;


