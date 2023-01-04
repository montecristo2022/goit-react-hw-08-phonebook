import { useSelector } from 'react-redux';

import { selectLoading, selectFilter, selectAllContacts } from 'redux/contacts/selectors';

export const useContacts = () => {
    const isLoading = useSelector(selectLoading);
    const filterContacts = useSelector(selectFilter);
    const contacts = useSelector(selectAllContacts);
  
    return {
        isLoading,
        filterContacts,
        contacts,
    };
}