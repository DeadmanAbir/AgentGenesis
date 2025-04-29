// app/marketplace/[productId]/page.tsx
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

  return (
    <div className="container my-10">
      <div className="text-center text-4xl font-bold mb-3">{product.name}</div>
      <div className="animate-fade-in">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/marketplace">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Marketplace
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden mb-6">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={800}
                height={450}
                className="w-full h-auto object-cover aspect-video"
              />
              {product.featured && (
                <Badge className="absolute top-4 right-4 bg-agent-purple hover:bg-agent-purple text-white">
                  Featured
                </Badge>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Overview</h2>
                <p className="text-foreground/80 leading-relaxed">
                  {product.details?.overview}
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {product.details?.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-agent-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
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

                  {/* Client component needed for interactive features */}
                  <ShareButton />
                </div>
              </CardContent>
            </Card>

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
                    <div className="flex flex-wrap gap-2">
                      {product.details?.techStack.map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-medium mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
