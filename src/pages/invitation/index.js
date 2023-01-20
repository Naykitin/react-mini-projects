import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// List of users: https://reqres.in/api/users

function Invitation() {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [success, setSuccess] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
      setUsers(json.data);
    }).catch(err => {
      console.warning(err);
      alert('Error while getting the user');
    }).finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  }

  const onClickSendInvites = () => {
    setSuccess(true);
  }

  const onClickBack = () => {
    setSuccess(false);
  }

  return (
    <div>
      <div className="invitationApp">
        {
          success ? (
            <Success count={invites.length} onClickBack={onClickBack} />
          ) : (
            <Users 
              onChangeSearchValue={onChangeSearchValue} 
              searchValue={searchValue} 
              items={users} 
              isLoading={isLoading} 
              invites={invites}
              onClickInvite={onClickInvite}
              onClickSendInvites={onClickSendInvites}
            />
          )
        }

      </div>
    </div>
  );
}

export default Invitation;
