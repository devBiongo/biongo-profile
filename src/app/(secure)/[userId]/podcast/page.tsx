'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';
import { z } from 'zod';

import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import Card from '@/components/website/card';
import http from '@/lib/client/http';

type SearchResultList = Array<{ name: string; url: string }>;

export default function Page() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      keyword: 'ManaのWebクリエイターカフェ',
    },
  });
  const [queryKeyword, setQueryKeyword] = useState(form.getValues().keyword);
  const { data, error, isLoading } = useQuery({
    queryKey: ['podList', queryKeyword],
    async queryFn() {
      const data: SearchResultList = await http.get('/podcast/list', {
        params: { keyword: form.getValues().keyword },
      });
      return data;
    },
  });
  return (
    <div>
      <div className="py-[30px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) =>
              setQueryKeyword(data.keyword)
            )}
            className="flex gap-3"
          >
            <FormField
              control={form.control}
              name="keyword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="keyword"
                      {...field}
                      className="w-[300px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              検索
            </Button>
          </form>
        </Form>
      </div>
      <ContentArea
        isLoading={isLoading}
        error={Boolean(error)}
        data={data || []}
      />
    </div>
  );
}

function ContentArea({
  isLoading,
  error,
  data,
}: {
  isLoading: boolean;
  error: boolean;
  data: SearchResultList;
}) {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data.</div>;
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item: { name: string; url: string }, index: number) => (
        <Card title={item.name} key={index} url={item.url} />
      ))}
    </div>
  );
}

const FormSchema = z.object({
  keyword: z.string().min(2, {
    message: 'keyword must be at least 2 characters.',
  }),
});
