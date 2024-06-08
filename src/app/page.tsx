"use client";

import Image from "next/image";

import { useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'


export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-3 justify-items-center">
        <Button>Default</Button>

        <Accordion className="w-full lg:w-[unset]" type="single" collapsible>
          <AccordionItem className="lg:w-[500px] max-w-full" value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Calendar mode="single" selected={date} onSelect={setDate} />

        <Carousel className="w-full max-w-[200px]">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-[10px]">
                  <Card className="shadow-none">
                    <CardContent className="flex aspect-square items-center justify-center p-4">
                      <span className="text-3xl font-base">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </main>
  );
}
