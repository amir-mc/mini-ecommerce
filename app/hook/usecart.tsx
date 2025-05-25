'use client';

import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useCart = () => {
  const queryClient = useQueryClient();

  const {
    data: cart,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const res = await fetch('/api/cart/');
      if (!res.ok) throw new Error('Failed to fetch cart');
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
  });

  const addToCartMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ productId }),
        headers: { 'Content-type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed to add to cart');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Item added to cart!');
    },
    onError: () => {
      toast.error('Failed to add item to cart');
    },
  });

  const removeCartItemMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await fetch('/api/cart', {
        method: 'DELETE',
        body: JSON.stringify({ productId }),
        headers: { 'Content-type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed to remove from cart');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Item removed from cart!');
    },
    onError: () => {
      toast.error('Failed to remove item from cart');
    },
  });

  return { cart, isLoading, error, addToCartMutation, removeCartItemMutation };
};
