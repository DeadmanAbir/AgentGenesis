import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Product } from '@/types/products';
import Image from 'next/image';
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden card-hover">
      <Link href={`/showcase/${product.id}`} className="flex-1 flex flex-col">
        <div className="aspect-video w-full overflow-hidden relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
          {product.featured && (
            <Badge className="absolute top-3 right-3 bg-black hover:bg-black text-white">
              Featured
            </Badge>
          )}
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold truncate">{product.name}</h3>
          </div>
          <div className="flex flex-wrap gap-1 mt-1">
            {product.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {product.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{product.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-foreground/70 line-clamp-3">
            {product.description}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="pt-4 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={product.liveUrl} target="_blank" rel="noopener noreferrer">
            <LinkIcon className="h-4 w-4 mr-2" />
            Live Demo
          </a>
        </Button>
        <Button
          variant="default"
          size="sm"
          asChild
          className="bg-black hover:bg-gray-800 text-white"
        >
          <Link href={`/showcase/${product.id}`}>
            Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
