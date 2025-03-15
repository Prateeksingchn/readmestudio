import { Inputs } from 'types';

type GroupField = {
  type: Inputs;
  path: string;
  label: string;
  props: Record<string, unknown>;
};

type Group = {
  id: number;
  label?: string;
  accordion?: boolean;
  columns?: number;
  fields: GroupField[];
  conditions?: {
    path: string;
    be: 'equal';
    value: string;
  };
};

const groups = (path: string): Group[] => [
  {
    id: 1,
    fields: [
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.link`,
        label: 'Full link to your profile',
        props: {
          placeholder: 'https://example.com/my-username',
        },
      },
    ],
  },
  {
    id: 2,
    label: 'Texts',
    accordion: true,
    columns: 2,
    fields: [
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.label`,
        label: 'Left side',
        props: {},
      },
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.message`,
        label: 'Right side',
        props: {},
      },
    ],
    conditions: {
      path: 'props.content.styles.type',
      be: 'equal',
      value: 'badge',
    },
  },
  {
    id: 3,
    label: 'Colors',
    accordion: true,
    columns: 2,
    fields: [
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.logoColor`,
        label: 'Logo',
        props: {
          column: '1 / 3',
          placeholder: 'Hex color',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.labelColor`,
        label: 'Left side',
        props: {
          placeholder: 'Hex color',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.color`,
        label: 'Right side',
        props: {
          placeholder: 'Hex color',
        },
      },
    ],
    conditions: {
      path: 'props.content.styles.type',
      be: 'equal',
      value: 'badge',
    },
  },
];

export { groups };
