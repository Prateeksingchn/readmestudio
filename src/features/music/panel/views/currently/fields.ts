import { Inputs } from 'types';

type Field = {
  type: Inputs;
  path: string;
  label: string;
  props: Record<string, unknown>;
  conditions?: {
    path: string;
    be: 'equal';
    value: string;
  };
};

type Group = {
  id: number;
  columns?: number;
  fields: Field[];
  conditions?: {
    path: string;
    be: 'equal';
    value: string;
  };
};

const first_group: Group[] = [
  {
    id: 1,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'content.currently.project',
        label: 'Project',
        props: {
          options: [
            {
              label: 'itstommi',
              value: 'itstommi',
            },
            {
              label: 'novatorem',
              value: 'novatorem',
            },
          ],
        },
      },
    ],
  },
];

const second_group: Group[] = [
  {
    id: 1,
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.currently.itstommi.url',
        label: 'Url',
        props: {
          placeholder: 'https://your-app-instance.com/api',
        },
        conditions: {
          path: 'props.content.currently.project',
          be: 'equal',
          value: 'itstommi',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.currently.novatorem.url',
        label: 'Url',
        props: {
          placeholder: 'https://your-app-instance.com/api',
        },
        conditions: {
          path: 'props.content.currently.project',
          be: 'equal',
          value: 'novatorem',
        },
      },
    ],
  },
  {
    id: 2,
    columns: 3,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'content.currently.itstommi.props.theme',
        label: 'Theme',
        props: {
          column: '1 / 4',
          options: [
            {
              label: 'Dark',
              value: 'dark',
            },
            {
              label: 'White',
              value: 'white',
            },
          ],
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'content.currently.itstommi.props.spin',
        label: 'Spin',
        props: {
          direction: 'column',
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'content.currently.itstommi.props.scan',
        label: 'Scan',
        props: {
          direction: 'column',
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'content.currently.itstommi.props.rainbow',
        label: 'Rainbow',
        props: {
          direction: 'column',
        },
      },
    ],
    conditions: {
      path: 'props.content.currently.project',
      be: 'equal',
      value: 'itstommi',
    },
  },
];

export { first_group, second_group };
