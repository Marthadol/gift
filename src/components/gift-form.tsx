import { CheckIcon } from "./icons";
import { defaultGift } from "@/lib/gift-details";

export function GiftForm() {
  return <form action="/congratulations" method="get" className="gift-form" aria-labelledby="details-title">
    <div className="form-heading"><h2 id="details-title">Your gift details</h2><p>Review or update the details below.</p></div>
    <div className="form-grid">
      <label>Recipient name<input name="name" autoComplete="name" defaultValue={defaultGift.name} required maxLength={100} /></label>
      <label>Sender<input name="sender" defaultValue={defaultGift.sender} required maxLength={100} /></label>
      <label>Gifts<input name="gifts" defaultValue={defaultGift.gifts} required maxLength={150} /></label>
      <label>Proposed delivery date<input name="deliveryDate" defaultValue={defaultGift.deliveryDate} required maxLength={60} /></label>
      <label>Acceptance fee : $1200<input name="deliveryDate" defaultValue={defaultGift.deliveryDate} required maxLength={60} /></label>
    </div>
    <div className="confirm-action"><button className="primary-button" type="submit"><CheckIcon />Confirm Package<span className="button-arrow" aria-hidden="true">↗</span></button><p className="button-note">Continue to your congratulations letter.</p></div>
  </form>;
}
