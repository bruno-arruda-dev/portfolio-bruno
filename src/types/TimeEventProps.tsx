export interface ITimeEventProps {
    index?: number;
    type: 'study' | 'work';
    title: string;
    period: string;
    descriptions?: string[];
    markdownFile?: string;
    markdownContent?: string;
}