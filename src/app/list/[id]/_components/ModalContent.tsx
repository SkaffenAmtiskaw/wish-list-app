import { GroupForm, ItemForm } from '@/_components';

export type ModalProps = {
  id?: string;
  list: string;
  operation: 'create' | 'edit';
  type: 'item' | 'group';
};

type ComponentProps = Pick<ModalProps, 'operation' | 'list' | 'id'>;

const FORMS: Record<
  ModalProps['type'],
  React.FunctionComponent<ComponentProps>
> = {
  item: ItemForm,
  group: GroupForm,
};

export const ModalContent = ({ type, ...props }: ModalProps) => {
  const Component = FORMS[type];

  return <Component {...props} />;
};
