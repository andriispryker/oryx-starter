import { appBuilder } from '@spryker-oryx/application';
import { b2cFeatures } from '@spryker-oryx/presets';
import { storefrontTheme } from '@spryker-oryx/themes';

export const app = appBuilder()
    .withFeature(b2cFeatures)
    .withTheme(storefrontTheme)
    .withEnvironment(import.meta.env)
    .create();
