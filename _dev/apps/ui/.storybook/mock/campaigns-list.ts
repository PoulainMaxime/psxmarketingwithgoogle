import { CampaignObject } from "@/store/modules/campaigns/state";
import CampaignStatus, { CampaignTypes } from "@/enums/reporting/CampaignStatus";

export const campaigns: CampaignObject[] = [
  {
    id: 19968248543,
    campaignName: "Tartiflette day",
    startDate: "2021-06-20T00:00:00.000Z",
    endDate: "2021-11-15T00:00:00.000Z",
    targetCountry: "FR",
    dailyBudget: 112,
    status: CampaignStatus.ELIGIBLE,
    currencyCode: "EUR",
    productFilters: [],
    type: CampaignTypes.PERFORMANCE_MAX,
    impressions: 0,
    clicks: 0,
    adSpend: 0,
    conversions: 0,
    sales: 0,
  },
  {
    id: 19968248543,
    campaignName: "Tartiflette day (Pending)",
    startDate: "2021-06-20T00:00:00.000Z",
    endDate: "2021-11-15T00:00:00.000Z",
    targetCountry: "FR",
    dailyBudget: 112,
    status: CampaignStatus.PENDING,
    currencyCode: "EUR",
    productFilters: [],
    type: CampaignTypes.PERFORMANCE_MAX,
    impressions: 10,
    clicks: 0,
    adSpend: 0,
    conversions: 0,
    sales: 0,
  },
  {
    id: 19968248543,
    campaignName: "Tartiflette day (Paused)",
    startDate: "2021-06-20T00:00:00.000Z",
    endDate: "2021-11-15T00:00:00.000Z",
    targetCountry: "FR",
    dailyBudget: 112,
    status: CampaignStatus.PAUSED,
    currencyCode: "EUR",
    productFilters: [],
    type: CampaignTypes.PERFORMANCE_MAX,
    impressions: 29,
    clicks: 0,
    adSpend: 0,
    conversions: 0,
    sales: 0,
  },
  {
    id: 19968248543,
    campaignName: "Tartiflette day (Ended)",
    startDate: "2021-06-20T00:00:00.000Z",
    endDate: "2021-11-15T00:00:00.000Z",
    targetCountry: "FR",
    dailyBudget: 112,
    status: CampaignStatus.ENDED,
    currencyCode: "EUR",
    productFilters: [],
    type: CampaignTypes.PERFORMANCE_MAX,
    impressions: 2,
    clicks: 0,
    adSpend: 0,
    conversions: 0,
    sales: 0,
  },
  {
    id: 19968248543,
    campaignName: "Tartiflette day (Draft)",
    startDate: "2021-06-20T00:00:00.000Z",
    endDate: "2021-11-15T00:00:00.000Z",
    targetCountry: "FR",
    dailyBudget: 112,
    status: CampaignStatus.DRAFT,
    currencyCode: "EUR",
    productFilters: [],
    type: CampaignTypes.PERFORMANCE_MAX,
    impressions: 0,
    clicks: 0,
    adSpend: 0,
    conversions: 0,
    sales: 0,
  },
  {
    id: 19968248543,
    campaignName: "Tartiflette day (Not eligible)",
    startDate: "2021-06-20T00:00:00.000Z",
    endDate: "2021-11-15T00:00:00.000Z",
    targetCountry: "FR",
    dailyBudget: 112,
    status: CampaignStatus.NOTELIGIBLE,
    currencyCode: "EUR",
    productFilters: [],
    type: CampaignTypes.PERFORMANCE_MAX,
    impressions: 0,
    clicks: 0,
    adSpend: 0,
    conversions: 0,
    sales: 0,
  },
];


export const campaignsListResponse = {
  campaigns: campaigns,
  totalCount: 700,
};
