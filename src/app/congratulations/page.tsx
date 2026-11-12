import { Shell } from "@/components/shell";
import { CongratulationsContent } from "@/components/congratulations-content";
import { giftFromSearchParams, type GiftSearchParams } from "@/lib/gift-details";

export const dynamic = "force-dynamic";
export default async function CongratulationsPage({ searchParams }: { searchParams: Promise<GiftSearchParams> }) {
  const details = giftFromSearchParams(await searchParams);
  return <Shell sender={details.sender}><CongratulationsContent details={details} /></Shell>;
}
