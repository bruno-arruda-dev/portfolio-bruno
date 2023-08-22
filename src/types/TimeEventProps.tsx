export interface ITimeEventProps {
    type: 'study' | 'work',
    title: string;
    period: string;
    descriptions?: string[];
}