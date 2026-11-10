export type RevenueShareModel = {
  /** e.g. 0.07 for 7% VAT included in the ticket price */
  vatRate: number;
  /** e.g. 0.6 for a 60% artist share of net revenue */
  artistShare: number;
  /** Payouts are always rounded up to this increment, in favour of the artists. */
  roundUpTo: number;
};

/** Artist payout for a revenue-share event, rounded up to the model's increment. */
export function revenueSharePayout(
  ticketPrice: number,
  payingGuests: number,
  model: RevenueShareModel,
): number {
  const net = (ticketPrice * payingGuests) / (1 + model.vatRate);
  // Settle to cents first so float noise (e.g. 1125.0000001) can't push an exact
  // increment up to the next one.
  const share = Math.round(net * model.artistShare * 100) / 100;
  return Math.ceil(share / model.roundUpTo) * model.roundUpTo;
}
