import { useSelector } from 'react-redux';
import { selectFilter, selectLoading, selectAllTasks } from 'redux/tasks/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectLoading);
  const filterContacts = useSelector(selectFilter);
  const contacts = useSelector(selectAllTasks);

  return {
    isLoading,
    filterContacts,
    contacts,
  };
};
