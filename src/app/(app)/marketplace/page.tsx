import ProductCard from '@/components/product-card';
import { mockProducts } from '@/config/maketplaceData';

const Marketplace = () => {
  return (
    <div className="container mt-10 ">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">AgentGenesis Marketplace</h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Discover powerful AI agents and components built with AgentGenesis
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 ">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
