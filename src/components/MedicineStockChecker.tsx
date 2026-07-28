import { useState, useMemo } from 'react';
import { Search, Info, CheckCircle, AlertTriangle, XCircle, ShoppingCart, Filter, RefreshCw } from 'lucide-react';
import medicineStockData from '../data/medicineStock.json';

interface Medicine {
  id: number;
  medicineName: string;
  brand: string;
  category: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: string;
}

export default function MedicineStockChecker() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Available categories in our JSON
  const categories = useMemo(() => {
    const cats = new Set(medicineStockData.map(item => item.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filtered medicines
  const filteredMedicines = useMemo(() => {
    return (medicineStockData as Medicine[]).filter(med => {
      const matchesSearch = med.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            med.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || med.status === selectedStatus;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  // Reset all filters
  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedStatus('All');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
            <CheckCircle size={12} />
            <span>In Stock</span>
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50">
            <AlertTriangle size={12} className="animate-pulse" />
            <span>Limited Stock</span>
          </span>
        );
      case 'Out of Stock':
      default:
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800/50">
            <XCircle size={12} />
            <span>Out of Stock</span>
          </span>
        );
    }
  };

  const handleQuickOrder = (medicineName: string) => {
    const businessNumber = '07091951834';
    const textMessage = `Hello Sai Medical, I checked your online medicine inventory and want to order:
- Medicine: ${medicineName}
Please let me know the availability of additional healthcare supplies and total billing. Thank you!`;
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden" id="medicine-stock-checker">
      
      {/* Dynamic Header */}
      <div className="bg-slate-900 dark:bg-slate-950 p-6 text-white border-b border-slate-800">
        <h3 className="text-lg md:text-xl font-bold tracking-tight">Real-Time Medicine Stock Checker</h3>
        <p className="text-xs md:text-sm text-slate-400 mt-1">
          Check live medicine and surgical stocks at our Gaya store. No registration required!
        </p>
      </div>

      <div className="p-6">
        
        {/* Search & Filter Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
          
          {/* Text Search Box */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3 top-3.5 text-slate-400 dark:text-slate-500" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Medicine Name or Brand..."
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-900 transition-all text-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="md:col-span-3 relative">
            <div className="absolute left-3 top-3.5 text-slate-400 dark:text-slate-500">
              <Filter size={16} />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-900 transition-all text-sm appearance-none cursor-pointer"
            >
              <option value="All">All Categories</option>
              {categories.filter(c => c !== 'All').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Stock Status Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-900 transition-all text-sm appearance-none cursor-pointer"
            >
              <option value="All">All Stock Status</option>
              <option value="Available">In Stock Only</option>
              <option value="Limited Stock">Limited Stock Only</option>
              <option value="Out of Stock">Out of Stock Only</option>
            </select>
          </div>

          {/* Reset Action */}
          <div className="md:col-span-1">
            <button
              onClick={handleReset}
              title="Reset Filters"
              className="w-full h-full py-2.5 md:py-0 border border-slate-200 dark:border-slate-700 hover:border-[#0A8F6A] dark:hover:border-emerald-500 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-emerald-400 hover:bg-emerald-50/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw size={16} />
              <span className="md:hidden text-sm">Reset</span>
            </button>
          </div>

        </div>

        {/* Informative Note */}
        <div className="flex items-start space-x-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 p-3 rounded-xl mb-6 text-xs text-slate-700 dark:text-slate-300">
          <Info size={16} className="shrink-0 mt-0.5 text-[#0A8F6A]" />
          <p>
            This checker updates in real-time. If a medicine shows <strong>Limited Stock</strong>, we advise you to place a reservation order via WhatsApp or Call immediately to secure the medicine before visiting the pharmacy.
          </p>
        </div>

        {/* Medicines Result Grid */}
        {filteredMedicines.length > 0 ? (
          <div className="overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px] font-bold border-b border-slate-100 dark:border-slate-800">
                  <th className="px-4 py-3">Medicine/Product</th>
                  <th className="px-4 py-3">Brand</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3 text-right">MRP (Rs)</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-center">Expiry</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-sm">
                {filteredMedicines.map(med => (
                  <tr 
                    key={med.id} 
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="px-4 py-4.5 font-semibold text-slate-800 dark:text-slate-100">
                      {med.medicineName}
                    </td>
                    <td className="px-4 py-4.5 text-slate-500 dark:text-slate-400 text-xs">
                      {med.brand}
                    </td>
                    <td className="px-4 py-4.5">
                      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded text-xs font-medium">
                        {med.category}
                      </span>
                    </td>
                    <td className="px-4 py-4.5 text-right font-medium text-slate-800 dark:text-slate-100">
                      ₹{med.mrp.toFixed(2)}
                    </td>
                    <td className="px-4 py-4.5 text-center">
                      {getStatusBadge(med.status)}
                    </td>
                    <td className="px-4 py-4.5 text-center text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {med.expiry}
                    </td>
                    <td className="px-4 py-4.5 text-right">
                      <button
                        onClick={() => handleQuickOrder(med.medicineName)}
                        disabled={med.status === 'Out of Stock'}
                        className={`inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer ${
                          med.status === 'Out of Stock'
                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed border border-transparent'
                            : 'bg-[#0A8F6A] text-white hover:bg-[#077053] active:scale-95 border border-transparent'
                        }`}
                      >
                        <ShoppingCart size={12} />
                        <span>Order</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12 px-4 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
            <XCircle size={36} className="text-slate-300 mx-auto mb-3" />
            <p className="text-slate-700 dark:text-slate-300 font-bold">No Medicines Found</p>
            <p className="text-slate-400 text-xs mt-1 max-w-sm mx-auto">
              We couldn't find matches for "{searchTerm}". You can order customized medicines directly by submitting a WhatsApp prescription!
            </p>
            <button 
              onClick={handleReset}
              className="mt-4 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-[#0A8F6A] dark:bg-emerald-950/40 dark:text-emerald-400 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Future API integration guidelines */}
        <p className="text-[10px] text-slate-400 mt-4 text-center">
          * Sai Medical Inventory System v1.2 (Connected Offline). For special orders, rare medication, and direct queries, contact us at +91 70919 51834.
        </p>

      </div>
    </div>
  );
}
