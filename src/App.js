import React,{useState,useRef} from 'react'
import './App.css'
import {listItems} from './data'
import {Button,SearchBox} from './components'

const App = () => {
  const [list, setList] = useState(listItems);
  const [choosen, setChoosen] = useState([]);
  const [value, setValue] = useState('');
  const [temp, setTemp] = useState(listItems);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false)
  const inputRef=useRef();

  const deleteUser=(name,email,logo)=>{
    setList([...list,{logo,name,email}]);
    const newChoosen=choosen.filter((user,id)=>{
      return name!==user.name;
    })
    setChoosen(newChoosen);
    inputRef.current.focus();
  }

  const handleChange=(e)=>{
    const word=e.target.value;
    setValue(word);
    const newList=temp.filter(({name})=>{
      if(name.length>=word.length)
      {
        return word.charAt(word.length-1)===name.charAt(word.length-1);
      }
    })
    setList(newList);
  }

  const handleSet=(name,logo,email)=>{
    setChoosen([...choosen,{name,logo,email}])
    if(value.length===0)
    {
      const newList=list.filter((person)=>{
          return name!=person.name;
      })
      setList(newList);
      setTemp(newList);
    }
    else{
      const newList=temp.filter((person)=>{
        return name!=person.name;
    })
    setList(newList);
    setTemp(newList);
    }
    setValue('');
    inputRef.current.focus();
    setCount(0);
  }

  const handleKey=(e)=>{
    if(value.length===0 && e.key==='Backspace' && choosen.length>0)
    {
      if(count===1)
      {
        const{name,email,logo}=choosen[choosen.length-1];
        deleteUser(name,email,logo);
        setCount(0);
      }
      else{
        setCount(count+1); 
      }
    }
  }

  return (
    <div className='search'>
      <h2 className='search-heading'>Pick Users</h2>
      <div className='search-container'>
      {choosen.map(({logo,name,email},key)=>(
        <Button logo={logo} email={email} name={name} deleteUser={deleteUser} Key={key} count={count} max={choosen.length-1} />
      )
      )}
      <div className='search-input'>
        <input type='text' value={value} placeholder='Add new user...' ref={inputRef} onChange={(e)=>{handleChange(e)}} onKeyDown={(e)=>{handleKey(e)}} onFocus={()=>{setShow(true)}} />
        {show && <div className='searchbox-container'  >
        {
          list.map(({logo,name,email},key)=>(
            <SearchBox logo={logo} name={name} email={email} Key={key} handleSet={handleSet}/>
          ))
        }
        </div>}
      </div>
      </div>
      {show && <div className='opacity' onClick={()=>{setShow(false)}}></div>}
    </div>
  )
}

export default App