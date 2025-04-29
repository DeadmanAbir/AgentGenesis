import React from 'react';
import ProductCard from '@/components/product-card';
import { mockProducts } from '@/config/maketplaceData';
import * as motion from 'motion/react-client';

const Marketplace = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.7,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.7,
        delay: 0.2,
      },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="container mt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="mb-10 text-center">
        <motion.h1 className="text-4xl font-bold mb-3" variants={titleVariants}>
          AgentGenesis Showcase
        </motion.h1>
        <motion.p
          className="text-xl text-foreground/70 max-w-2xl mx-auto"
          variants={descriptionVariants}
        >
          Discover powerful SaaS and apps built with AgentGenesis
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        variants={cardContainerVariants}
      >
        {mockProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Marketplace;
