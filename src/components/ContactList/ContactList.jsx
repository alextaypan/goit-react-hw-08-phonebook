import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { List, ListItem, Span } from './ContactList.styled';
import { Button } from 'react-bootstrap';

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getVisibleContacts);
    const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
    
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);
  
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <ListItem key={id}>
                    <Span>{name}: </Span>
                    <Span>{number} </Span>
                    <Button size="sm"
                        variant="outline-danger"
                        type="button"
                        onClick={() => onDeleteContact(id)}
                    >
                        Delete
                    </Button>
                </ListItem>
            ))}
            </List>
    );
};