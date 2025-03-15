import { ComponentType } from 'react';
import { CanvasSection } from './canvas';

export interface SectionData {
  component: ComponentType<{ id: string; props: CanvasSection['props'] }>;
  props?: Record<string, unknown>;
}
