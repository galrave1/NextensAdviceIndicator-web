import { PropertyGrowth } from "./property-growth";

export interface PropertyGrowthReport {
	clientId: string;
	mostRecentYear: number;
	growth: PropertyGrowth[];
	score: number;
}
