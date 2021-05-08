import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {Input} from './input';

let routes = [
  "/Step2",
  "/Step3",
  "/Step4",
  "/Step5",
  "/Final",
];

export default function App() {
  const [counter, setCounter] = useState(0);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');// добавить плейсхолдеры 
  const [agreed, setAgreed] = useState(false);
  //step2
  const [plan, setPlan] = useState(false);
  const [plan2, setPlan2] = useState(false);
  const [plan3, setPlan3] = useState(false);
  //step3
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [dof, setDof] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState(false);
  const [sex2, setSex2] = useState(false);
  const [yo, setYo] = useState(false);
  const [yo2, setYo2] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [personalData, setPersonalData] = useState(false);
  const [cookie, setCookie] = useState(false);

  function submit(e) {
    e.preventDefault();

    if (password !== passwordCheck) {
      return;
    }

    if (!login || !password || !agreed) {
      return;
    }

    alert('aaaa')
  }

  return (
    <form onSubmit={submit} className="form" key="form">
      {counter === 0 ? <Step1 /> : null}
      
      <Router className="router">        
        <Switch>
          <Route path={routes[0]}>
            <Step2 />
          </Route>
          <Route path={routes[1]}>
            <Step3 />
          </Route>
          <Route path={routes[2]}>
            <Step4 />
          </Route>
          <Route path={routes[3]}>
            <Step5 />
          </Route>
          <Route path={routes[4]}>
            <Final />
          </Route>
        </Switch>
        {counter !== 5 
          ? <Link to={routes[counter]} onClick={() => setCounter(counter + 1)} className="link">Вперёд</Link> 
          : <button>Submit</button>}
      </Router>
      
    </form>
  );

function Step1() {
  return (
    <div>
      <h2>Этап 1</h2>
      <Input label="имя пользователя" type="text" value={login} onChange={setLogin} key="login" />
      <Input label="парль" type="password" value={password} onChange={setPassword} key="password" />
      <Input label="подтверждение пароля" type="password" value={passwordCheck} onChange={setPasswordCheck} key="checkPassword" />
      <label>
        Вы соглашаетесь с нашими правилами:
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          key="agreed"
        />
      </label></div>
  );      
}

function Step2() {
  return (
    <div>
    <h2>Этап 2</h2>
      <div className="step2">
        <div className="step2-wrapper">
          <h2 className="period">месяц</h2>
          <p classname="period-cost">399,00р</p>
          <input
            type="checkbox"
            checked={plan}
            onChange={(e) => setPlan(e.target.Plan)}
            key="plan"
          />
        </div>
        
        <div className="step2-wrapper"> 
          <h2 className="period">3 месяца</h2>
          <p classname="period-cost">1099,00р</p>
          <input
            type="checkbox"
            checked={plan2}
            onChange={(e) => setPlan2(e.target.Plan2)}
            key="plan2"
          />
        </div>
        <div className="step2-wrapper">
          <h2 className="period">год</h2>
          <p classname="period-cost">3999,00р</p>
          <input
            type="checkbox"
            checked={plan3}
            onChange={(e) => setPlan3(e.target.Plan3)}
            key="plan3"
          />
        </div>
      </div>
  </div>
  );
  
}

function Step3() {
  return (
    <div>
      <h2>Этап 3</h2>
      <Input label="Name" type="text" value={name} onChange={setName} key="name" />
      <Input label="Second name" type="text" value={secondName} onChange={setSecondName} key="secondName" />
      <Input label="Patronymic" type="text" value={patronymic} onChange={setPatronymic} key="patronymic" />
      <Input label="dof" type="date" value={dof} onChange={setDof} key="birthday" />
      <Input label="email" type="email" value={email} onChange={setEmail} key="email" />
      <label>
        Пол мужской
        <input 
          type="radio"
          name="sex"
          onChange={(e) => setSex(e.target.sex)}
          key="sex"
        /> женский
        <input 
          type="radio"
          name="sex"
          onChange={(e) => setSex2(e.target.sex2)}
          key="sex2"
        />
      </label>
      <label>
        Вам больше 18 лет? Да
        <input 
          type="radio"
          name="yo"
          onChange={(e) => setYo(e.target.yo)}
          key="yo"
        /> Нет
        <input 
          type="radio"
          name="yo"
          onChange={(e) => setYo2(e.target.yo2)}
          key="yo2"
        />
      </label>
    </div>
  );
}

function Step4() {
  return (
    <div>
      <h2>Этап 4</h2>
      <Input label="cardNumber" type="number" value={cardNumber} onChange={setCardNumber} key="cardNumber" />
    </div>
  );
}

function Step5() {
  return (
    <div>
      <h3>Этап 5</h3>
      <label>
        Согласие на обработку персональных данных:
        <input
          type="checkbox"
          checked={personalData}
          onChange={(e) => setPersonalData(e.target.personalData)}
          key="personalData"
        />
      </label>
      {login}<br />
      {email}
      <label>
        Печенье:
        <input
          type="checkbox"
          checked={cookie}
          onChange={(e) => setCookie(e.target.cookie)}
          key="cookie"
        />
      </label>
    </div>
  );
}

function Final() {
  return (
    <div>
      <h2>Финал</h2>
      {login}<br />
      {password}<br />
      {email}
    </div>
  );
}
}

