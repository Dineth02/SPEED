export class UpdateArticleDto {
  readonly title?: string;
  readonly authors?: string;
  readonly journal?: string;
  readonly year?: number;
  readonly volume?: string;
  readonly number?: string;
  readonly pages?: string;
  readonly doi?: string;
  readonly reviewedByModerator?: boolean;
  readonly reviewedByAnalyst?: boolean;
  readonly isApproved?: boolean;
  readonly isRejected?: boolean;
}