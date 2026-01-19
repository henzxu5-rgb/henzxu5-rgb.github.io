import React from 'react';

export type ViewState = 'landing' | 'interview';

export interface Skill {
  title: string;
  description: string;
  icon: React.ReactNode;
}