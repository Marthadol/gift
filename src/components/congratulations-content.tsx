import { CheckIcon } from "./icons";
import { defaultGift, firstName, type GiftDetails } from "@/lib/gift-details";

export function CongratulationsContent({ details }: { details: GiftDetails }) {
  const giftSentence = details.gifts === defaultGift.gifts
    ? "Your gift package and truck are ready for delivery."
    : `Your gifts are ready for delivery: ${details.gifts}.`;
  return <div className="congratulations-content">
    <p className="eyebrow"><span /> A SURPRISE WORTH CELEBRATING</p>
    <div className="confirmation-seal"><CheckIcon /></div>
    <p className="confirmation-label">PACKAGE CONFIRMED</p>
    <article className="letter">
      <span className="letter-star" aria-hidden="true">✦</span>
      <h1>Congratulations,<br /><em>{firstName(details.name)}!</em></h1>
      <div className="letter-body"><p>I’m excited to share this surprise with you. {giftSentence} The proposed delivery date is {details.deliveryDate}, and delivery is free.</p><p>I hope you enjoy your gifts!</p><p className="signature">{details.sender}</p></div>
    </article>
    <a className="back-link" href="/">← Back to your gifts</a>
  </div>;
}
