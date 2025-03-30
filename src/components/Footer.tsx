import React from 'react';

interface FooterProps {
  isArabic: boolean;
}

export function Footer({ isArabic }: FooterProps) {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="transform hover:scale-105 transition-transform duration-300">
          © 2025 {isArabic ? 'فريق التطوير. جميع الحقوق محفوظة' : 'Dev Team. All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}