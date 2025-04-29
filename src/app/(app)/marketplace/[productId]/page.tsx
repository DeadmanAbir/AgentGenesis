import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  Link as LinkIcon,
  Calendar,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { mockProducts } from '@/config/maketplaceData';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ShareButton } from '@/components/link-copy';
import * as motion from 'motion/react-client';
interface ProductDetailPageProps {
  params: {
    productId: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { productId } = params;

  const product = mockProducts.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.8,
      },
    },
  };

  const featuresStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.4,
      },
    },
  };

  const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="container my-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="text-center text-4xl font-bold mb-3"
        variants={itemVariants}
      >
        {product.name}
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/marketplace">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Marketplace
          </Link>
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <motion.div
            className="relative rounded-lg overflow-hidden mb-6"
            variants={imageVariants}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={800}
              height={450}
              className="w-full h-auto object-cover aspect-video"
            />
            {product.featured && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <Badge className="absolute top-4 right-4 bg-agent-purple hover:bg-agent-purple text-white">
                  Featured
                </Badge>
              </motion.div>
            )}
          </motion.div>

          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-2">Overview</h2>
              <p className="text-foreground/80 leading-relaxed">
                {product.details?.overview}
              </p>
            </motion.div>

            <Separator />

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <motion.ul
                className="space-y-2"
                variants={featuresStaggerVariants}
              >
                {product.details?.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={featureItemVariants}
                  >
                    <CheckCircle2 className="h-5 w-5 text-agent-purple mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.div variants={itemVariants} transition={{ duration: 0.3 }}>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button className="w-full" asChild>
                      <Link
                        href={product.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkIcon className="mr-2 h-4 w-4" />
                        View Live Demo
                      </Link>
                    </Button>
                  </motion.div>

                  {/* Client component needed for interactive features */}
                  <ShareButton />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.3 }}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-medium mb-4">Product Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">Created by:</span>
                    <span className="ml-auto font-medium">
                      {product.details?.createdBy}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">Released:</span>
                    <span className="ml-auto font-medium">
                      {product.details?.createdAt}
                    </span>
                  </div>
                  <Separator className="my-3" />
                  <div>
                    <h4 className="font-medium mb-2">Tech Stack</h4>
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={featuresStaggerVariants}
                    >
                      {product.details?.techStack.map((tech, index) => (
                        <motion.div key={index} variants={tagVariants}>
                          <Badge variant="outline">{tech}</Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.3 }}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-medium mb-2">Tags</h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={featuresStaggerVariants}
                >
                  {product.tags.map((tag, index) => (
                    <motion.div
                      key={index}
                      variants={tagVariants}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge variant="secondary">{tag}</Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
