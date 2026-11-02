import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { PillarsSection } from '@/components/home/PillarsSection';
import { SocialProofSection } from '@/components/home/SocialProofSection';
import { B2BTransferSection } from '@/components/home/B2BTransferSection';
import { B2CServicesSection } from '@/components/home/B2CServicesSection';
import { LatestPostsSection } from '@/components/home/LatestPostsSection';
import { ContactFormSection } from '@/components/home/ContactFormSection';
import { getRecentPosts } from '@/lib/wordpress';

export const revalidate = 60; // Next.js ISR revalidation: 60s

export default async function HomePage() {
  const latestPosts = await getRecentPosts(3);

  return (
    <>
      <HeroSection />
      <PillarsSection />
      <SocialProofSection />
      <B2BTransferSection />
      <B2CServicesSection />
      <LatestPostsSection posts={latestPosts} />
      <ContactFormSection />
    </>
  );
}

