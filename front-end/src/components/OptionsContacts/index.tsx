import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DashboardContext, IContact } from '../../contexts/DashboardContext';
import { registerValidation } from '../../validations/register';

export interface iListProps {
  list: IContact[];
}
interface EditFormData {
  contact: IContact;
  contactId: string;
}

const OptionsContacts = ({ list }: iListProps) => {
  const { newContact, updateContact, removeContact, setContactId } =
    useContext(DashboardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    resolver: yupResolver(registerValidation),
  });

  const {
    register: registerEditField,
    handleSubmit: handleEditFormSubmit,
    reset: resetEditForm,
    formState: { errors: editFormErrors },
  } = useForm<IContact>({
    resolver: yupResolver(registerValidation),
  });

  function handleOpenEditModal({ contact, contactId }: EditFormData) {
    setContactId(contactId);

    resetEditForm(contact);
  }

  return <></>;
};

export default OptionsContacts;
