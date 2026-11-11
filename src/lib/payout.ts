import type {
  AttendanceTier,
  PayoutCalculation,
  PayoutScenario,
  PayoutScenarioGroup,
} from "@/content/types";

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

function tierScenarios(tiers: AttendanceTier[], prefix = "tier"): PayoutScenario[] {
  return tiers.map((tier, index) => ({
    id: `${prefix}-${index}`,
    label: tier.guests,
    rows: [tier],
  }));
}

/**
 * Scenario groups for a payout preview. Only seasonal models have more than
 * one group; the others return a single unlabelled group.
 */
export function payoutScenarioGroups(calculation: PayoutCalculation): PayoutScenarioGroup[] {
  switch (calculation.kind) {
    case "seasonalTiers":
      return calculation.seasons.map((season) => ({
        id: season.id,
        label: season.label,
        caption: season.period,
        title: season.title,
        text: season.text,
        scenarios: tierScenarios(season.tiers, season.id),
      }));

    case "tiers":
      return [{ id: "all", label: "", scenarios: tierScenarios(calculation.tiers) }];

    case "perMusician":
      return [
        {
          id: "all",
          label: "",
          unit: `musicians × €${calculation.feePerMusician}`,
          scenarios: calculation.lineUps.map((lineUp) => ({
            id: lineUp.label.toLowerCase(),
            label: lineUp.label,
            rows: [
              {
                guests: String(lineUp.musicians),
                payout: lineUp.musicians * calculation.feePerMusician,
              },
            ],
          })),
        },
      ];

    case "revenueShare":
      return [
        {
          id: "all",
          label: "",
          scenarios: calculation.ticketPrices.map((price) => ({
            id: String(price),
            label: `€${price}`,
            rows: calculation.guestCounts.map((guests) => ({
              guests: String(guests),
              payout: revenueSharePayout(price, guests, calculation),
            })),
          })),
        },
      ];
  }
}
