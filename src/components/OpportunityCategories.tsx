import React, { useState } from 'react';
import { CATEGORIES, ALL_OPPORTUNITIES, BusinessOpportunity } from '../data/blueprintData';
import { 
  Zap, 
  Building2, 
  Sprout, 
  Globe, 
  Laptop, 
  Cpu, 
  ArrowRight, 
  Check, 
  Search, 
  X, 
  Filter,
  DollarSign,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Building2,
  Sprout,
  Globe,
  Laptop,
  Cpu
};

export const OpportunityCategories: React.FC = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<BusinessOpportunity | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isIndexOpen, setIsIndexOpen] = useState<boolean>(false);

  const filteredOpportunities = ALL_OPPORTUNITIES.filter((opp) => {
    const matchesCategory = activeFilter === 'all' || opp.category.toLowerCase().includes(activeFilter.toLowerCase());
    const matchesSearch = 
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      opp.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.revenueModel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="inside" className="py-20 md:py-28 bg-[#F7F3E9] border-b border-[#123C2E]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-[#8C6D37] uppercase block mb-3">
              Comprehensive Sector Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif leading-[1.18] text-[#0B281F] font-normal">
              Explore 75 Business Opportunities <br className="hidden sm:inline" />
              <span className="italic">Across Major Industries</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <button
              onClick={() => setIsIndexOpen(!isIndexOpen)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F2] hover:bg-[#FAF8F2]/80 text-[#0B281F] border border-[#123C2E]/20 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs hover:border-[#123C2E]"
            >
              <Search className="w-3.5 h-3.5 text-[#123C2E]" />
              <span>{isIndexOpen ? "Hide 75 Opportunity Index" : "Search All 75 Opportunities"}</span>
              <span className="text-[10px] bg-[#123C2E]/10 text-[#123C2E] px-2 py-0.5 rounded-full font-mono font-bold">
                75 TOTAL
              </span>
            </button>
            <span className="text-[11px] text-[#171717]/60 mt-1.5">
              Filtered by capital range & revenue model
            </span>
          </div>
        </div>

        {/* 6 Editorial Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {CATEGORIES.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Zap;
            const isFeatured = idx === 0 || idx === 3;

            return (
              <div
                key={cat.id}
                className={`bg-[#FAF8F2] p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:shadow-md ${
                  isFeatured
                    ? 'border-[#123C2E]/30 relative'
                    : 'border-[#123C2E]/12'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#123C2E]/5 border border-[#123C2E]/15 flex items-center justify-center text-[#123C2E] group-hover:bg-[#123C2E] group-hover:text-[#FAF8F2] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-[#8C6D37] uppercase font-bold">
                      CAT 0{idx + 1} · {cat.opportunitiesCount} OPP
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-[#0B281F] mb-1.5 group-hover:text-[#123C2E] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#8C6D37] font-medium tracking-tight mb-3">
                    {cat.tagline}
                  </p>
                  <p className="text-xs text-[#171717]/70 leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Representative Examples */}
                  <div className="pt-4 border-t border-[#123C2E]/10">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#171717]/50 block mb-2.5">
                      Selected Chapter Opportunities:
                    </span>
                    <ul className="space-y-1.5">
                      {cat.highlightedExamples.slice(0, 5).map((example, i) => (
                        <li key={i} className="text-xs text-[#0B281F] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#123C2E]/40 shrink-0"></span>
                          <span className="font-medium">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Capital Spectrum */}
                <div className="mt-6 pt-4 border-t border-[#123C2E]/10 flex items-center justify-between text-[11px]">
                  <span className="text-[#171717]/60">Capital Range:</span>
                  <span className="font-semibold text-[#123C2E] font-mono">
                    {cat.capitalSpectrum}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Examples Small Note */}
        <div className="p-4 bg-[#FAF8F2] border border-[#123C2E]/10 rounded-xl text-center mb-12">
          <p className="text-xs sm:text-sm text-[#171717]/75">
            <span className="font-semibold text-[#0B281F]">Editorial Note:</span> These are selected examples. The complete Blueprint covers all 75 structured business opportunities in depth.
          </p>
        </div>

        {/* Interactive 75 Opportunities Catalog Drawer */}
        {isIndexOpen && (
          <div className="bg-[#FAF8F2] p-6 sm:p-8 rounded-2xl border border-[#123C2E]/25 shadow-xl mb-12 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#123C2E]/15">
              <div>
                <h4 className="text-xl font-serif font-semibold text-[#0B281F]">
                  Complete 75 Business Opportunities Directory
                </h4>
                <p className="text-xs text-[#171717]/70 mt-1">
                  Preview chapters included in the 2027 Blueprint PDF. Click any item for operational metrics.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-3 text-[#171717]/40" />
                <input
                  type="text"
                  placeholder="Search opportunities or models..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-[#F7F3E9] border border-[#123C2E]/20 rounded-lg text-xs text-[#0B281F] focus:outline-none focus:border-[#123C2E]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-xs text-[#171717]/40 hover:text-[#171717]"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-[#123C2E] text-[#FAF8F2]'
                    : 'bg-[#F7F3E9] text-[#171717]/70 hover:bg-[#123C2E]/10'
                }`}
              >
                All 75 Opportunities
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveFilter(c.name)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    activeFilter === c.name
                      ? 'bg-[#123C2E] text-[#FAF8F2]'
                      : 'bg-[#F7F3E9] text-[#171717]/70 hover:bg-[#123C2E]/10'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Opportunities Table / List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[500px] overflow-y-auto pr-1">
              {filteredOpportunities.map((opp) => (
                <div
                  key={opp.id}
                  onClick={() => setSelectedOpportunity(opp)}
                  className="p-3.5 bg-[#F7F3E9] hover:bg-[#EDE7D8] border border-[#123C2E]/10 rounded-xl cursor-pointer transition-colors flex flex-col justify-between text-left group shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-[#8C6D37] font-mono mb-1">
                      <span>NO. {String(opp.number).padStart(2, '0')}</span>
                      <span className="font-bold text-[#123C2E]">{opp.capitalBand}</span>
                    </div>
                    <h5 className="text-xs font-semibold text-[#0B281F] group-hover:text-[#123C2E] transition-colors leading-snug line-clamp-2">
                      {opp.title}
                    </h5>
                    <p className="text-[11px] text-[#171717]/65 mt-1 line-clamp-2">
                      {opp.summary}
                    </p>
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#123C2E]/10 flex items-center justify-between text-[10px] text-[#171717]/60">
                    <span>{opp.capitalRange}</span>
                    <span className="text-[#123C2E] font-medium group-hover:underline">View details →</span>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredOpportunities.length === 0 && (
              <div className="py-12 text-center text-xs text-[#171717]/60">
                No opportunities match "{searchQuery}". Try clearing search filters.
              </div>
            )}
          </div>
        )}

        {/* Opportunity Detail Modal */}
        {selectedOpportunity && (
          <div className="fixed inset-0 z-50 bg-[#0B281F]/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#FAF8F2] max-w-xl w-full p-6 sm:p-8 rounded-2xl border border-[#B89B63]/40 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
              <button
                onClick={() => setSelectedOpportunity(null)}
                className="absolute top-4 right-4 p-1.5 text-[#171717]/50 hover:text-[#0B281F] rounded-lg transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#8C6D37] mb-2 uppercase">
                <span>Chapter {selectedOpportunity.number} of 75</span>
                <span>·</span>
                <span>{selectedOpportunity.category}</span>
              </div>

              <h4 className="text-2xl font-serif font-bold text-[#0B281F] mb-4">
                {selectedOpportunity.title}
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-[#171717]/85">
                <div className="p-3 bg-[#F7F3E9] rounded-xl border border-[#123C2E]/10">
                  <span className="font-semibold text-[#0B281F] block text-xs uppercase tracking-wide mb-1">
                    Operational Summary
                  </span>
                  <p>{selectedOpportunity.summary}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#F7F3E9] rounded-xl border border-[#123C2E]/10">
                    <span className="font-semibold text-[#0B281F] block text-xs uppercase tracking-wide mb-1 flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-[#123C2E]" /> Capital Band
                    </span>
                    <p className="font-bold text-[#123C2E] font-mono">{selectedOpportunity.capitalBand}</p>
                    <p className="text-xs text-[#171717]/60">{selectedOpportunity.capitalRange}</p>
                  </div>

                  <div className="p-3 bg-[#F7F3E9] rounded-xl border border-[#123C2E]/10">
                    <span className="font-semibold text-[#0B281F] block text-xs uppercase tracking-wide mb-1 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-[#123C2E]" /> Revenue Engine
                    </span>
                    <p className="text-xs">{selectedOpportunity.revenueModel}</p>
                  </div>
                </div>

                <div className="p-3 bg-[#F7F3E9] rounded-xl border border-[#123C2E]/10">
                  <span className="font-semibold text-[#0B281F] block text-xs uppercase tracking-wide mb-1">
                    India Market Context
                  </span>
                  <p>{selectedOpportunity.marketPotential}</p>
                </div>

                <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/30">
                  <span className="font-semibold text-amber-900 block text-xs uppercase tracking-wide mb-1 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700" /> Key Risk & Evaluation Factor
                  </span>
                  <p className="text-amber-950 text-xs">{selectedOpportunity.keyRisk}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#123C2E]/10 flex items-center justify-between">
                <span className="text-xs text-[#171717]/60">Full chapter with scorecard in PDF</span>
                <button
                  onClick={() => setSelectedOpportunity(null)}
                  className="px-4 py-2 bg-[#123C2E] text-[#FAF8F2] text-xs font-semibold rounded-lg hover:bg-[#0B281F] transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
