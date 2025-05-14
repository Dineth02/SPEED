export class CreateArticleDto {
    readonly submittername: string;
    readonly submitteremail: string;
    readonly title: string;
    readonly authors: string;
    readonly journal: string;
    readonly year: number;
    readonly volume?: string;
    readonly number?: string;
    readonly pages?: string;
    readonly doi: string;
}