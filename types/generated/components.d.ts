import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBenefitCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefit_cards';
  info: {
    description: 'A single benefit card with text';
    displayName: 'Benefit Card';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards';
  info: {
    description: 'A feature card with text and icon';
    displayName: 'Feature Card';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStatEntry extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_entries';
  info: {
    description: 'A stat with value, prefix/suffix, and label';
    displayName: 'Stat Entry';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    prefix: Schema.Attribute.String;
    separator: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    description: 'A how-it-works step';
    displayName: 'Step';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    number: Schema.Attribute.Integer & Schema.Attribute.Required;
    phoneImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.benefit-card': SharedBenefitCard;
      'shared.feature-card': SharedFeatureCard;
      'shared.stat-entry': SharedStatEntry;
      'shared.step': SharedStep;
    }
  }
}
