import { Step } from './step';

export interface Recipe {
  id: number,
  title: string,
  steps: Step[],
}
