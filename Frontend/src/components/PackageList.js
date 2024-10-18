import React from 'react';
import PackageItem from './PackageItem';

export default function PackageList({ packages }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <PackageItem key={pkg.id} package={pkg} />
      ))}
    </div>
  );
}