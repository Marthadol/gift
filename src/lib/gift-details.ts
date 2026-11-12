export type GiftDetails = {
  name: string;
  sender: string;
  gifts: string;
  deliveryDate: string;
};

export const defaultGift: GiftDetails = {
  name: "Eduardo Valdez",
  sender: "Evan Kate",
  gifts: "package and truck",
  deliveryDate: "November 12",
};

export type GiftSearchParams = Record<string, string | string[] | undefined>;

export function giftFromSearchParams(params: GiftSearchParams): GiftDetails {
  function field(key: keyof GiftDetails, max: number): string {
    const value = params[key];
    return typeof value === "string" ? value.trim().slice(0, max) || defaultGift[key] : defaultGift[key];
  }
  return { name: field("name", 100), sender: field("sender", 100), gifts: field("gifts", 150), deliveryDate: field("deliveryDate", 60) };
}

export function firstName(name: string): string {
  const first = name.split(/\s+/)[0];
  return first === first.toUpperCase() ? first.charAt(0) + first.slice(1).toLowerCase() : first;
}
