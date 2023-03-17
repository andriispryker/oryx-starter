import { appBuilder } from '@spryker-oryx/core';
import { b2cFeatures } from '@spryker-oryx/presets';
import { storefrontTheme } from '@spryker-oryx/themes';
import { labsFeature } from '../labs/src/feature';

export const app = appBuilder()
  .withEnvironment(import.meta.env)
  .withFeature(b2cFeatures)
  .withFeature(labsFeature)
  .withTheme(storefrontTheme)
  .create();
