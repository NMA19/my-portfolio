import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600">
            © 2025 Mohamed Anis Nedjem.
          </p>
          <p className="text-neutral-500 text-sm">
            Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;