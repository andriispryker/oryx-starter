import {appBuilder, applicationFeature, SapiAuthComponentsFeature, SapiAuthFeature} from '@spryker-oryx/application';
import { storefrontTheme } from '@spryker-oryx/themes';
import {uiFeature} from "@spryker-oryx/ui";
import {coreFeature} from "@spryker-oryx/core";
import {RouterFeature} from "@spryker-oryx/router";
import {I18nFeature} from "@spryker-oryx/i18n";
import {cartFeature} from "@spryker-oryx/cart";
import {checkoutFeature} from "@spryker-oryx/checkout";
import {orderFeature} from "@spryker-oryx/order";
import {contentFeature} from "@spryker-oryx/content";
import {formFeature} from "@spryker-oryx/form";

export const storefrontFeatures = [
    uiFeature,
    coreFeature,
    new SapiAuthFeature(),
    new SapiAuthComponentsFeature(),
    new RouterFeature(),
    new I18nFeature(),
    cartFeature,
    checkoutFeature,
    orderFeature,
    contentFeature,
    formFeature,
];

export const app = appBuilder()
    .withFeature(storefrontFeatures)
    .withTheme(storefrontTheme)
    .withEnvironment(import.meta.env)
    .create();
