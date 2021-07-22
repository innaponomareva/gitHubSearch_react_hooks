import React, {useContext, useState} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';

export const Search = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext)

  //console.log(github)

  const onSubmit = (event) => {
    if(event.key !== 'Enter'){
      return
    }
    github.clearUsers();

    if(value){
      alert.hide();
      github.search(value.trim())
    }else{
      alert.show('Enter user name!')
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter user name"
        onKeyPress={onSubmit}
        value={value}
        onChange={event => setValue(event.target.value)}
        />
    </div>
  )
}


/* 
Метод trim() удаляет пробельные символы с начала и конца строки. 
Пробельными символами в этом контексте считаются все собственно 
пробельные символы (пробел, табуляция, неразрывный пробел и прочие) 
и все символы конца строки (LF, CR и прочие).
 */