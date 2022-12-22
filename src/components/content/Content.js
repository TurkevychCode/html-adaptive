import './content.scss'

export default function Content() {
    return (
        <div className='contentBlock'>
            <h1>Створення заходу</h1>
            <div className='contentBlock-centralBlock'>
                <div className='contentBlock-centralBlock-leftBlock'>
                    <div>
                        <p>Назва заходу</p>
                        <input className='contentBlock-centralBlock-leftBlock-input' type="text"
                               placeholder='Введіть назву'/>
                    </div>
                    <div>
                        <p>Ім'я ведучого</p>
                        <input className='contentBlock-centralBlock-leftBlock-input' type="text"
                               placeholder='Введіть імя'/>
                    </div>
                    <div>
                        <p>Дата та час початку</p>
                        <div className='contentBlock-centralBlock-leftBlock-blockTime'>
                            <input className='contentBlock-centralBlock-leftBlock-date' type="date"/>
                            <input className='contentBlock-centralBlock-leftBlock-date' type="time"/>
                        </div>
                    </div>
                    <div>
                        <p>Посилання на YouTube трансляцію</p>
                        <input className='contentBlock-centralBlock-leftBlock-input' type="text"
                               placeholder='Вставте посилання'/>
                    </div>
                    <div>
                        <p>Посилання на заглушку</p>
                        <input className='contentBlock-centralBlock-leftBlock-input' type="text"
                               placeholder='Вставте посилання'/>
                    </div>
                    <div>
                        <p>Зовнішня кнопка (посилання)</p>
                        <input className='contentBlock-centralBlock-leftBlock-input' type="text"
                               placeholder='Вставте посилання'/>
                    </div>

                </div>

                <div className='contentBlock-centralBlock-rightBlock'>
                    <div>
                        <p>Доступ до заходу:</p>
                        <div className='contentBlock-centralBlock-rightBlock-radio'>
                            <div className='contentBlock-centralBlock-rightBlock-radio-inputRadio'>
                                <input className='contentBlock-centralBlock-rightBlock-radio-inputRadio-input'
                                       type="radio"
                                       id='contact1' name='contact' value='password'/>
                                <label htmlFor="contact1">За паролями</label>
                            </div>
                            <br/>
                            <br/>
                            <div className='contentBlock-centralBlock-rightBlock-radio-inputRadio'>
                                <input className='contentBlock-centralBlock-rightBlock-radio-inputRadio-input'
                                       type="radio" id='contact2' name='contact' value='open'/>
                                <label htmlFor="contact2">Відкритий</label>
                            </div>
                        </div>
                    </div>
                    <div className='contentBlock-centralBlock-rightBlock-chatSwitch'>
                        <p>Чат під час запуску заходу</p>
                        <div className='contentBlock-centralBlock-rightBlock-switch'>
                            <input type="checkbox"/>
                        </div>

                    </div>
                    <div className='contentBlock-centralBlock-rightBlock-line'></div>
                    <div className='contentBlock-centralBlock-rightBlock-chatSwitch'>
                        <div className='contentBlock-centralBlock-rightBlock-checkboxSetting'>
                            <p>Клікабельні посилання від користувачів у чаті</p>
                        </div>
                        <div className='contentBlock-centralBlock-rightBlock-switch'>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className='contentBlock-centralBlock-rightBlock-line'></div>
                    <div className='contentBlock-centralBlock-rightBlock-chatSwitch'>
                        <p>Корзина</p>
                        <div className='contentBlock-centralBlock-rightBlock-switch'>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className='contentBlock-centralBlock-rightBlock-line'></div>
                    <div>
                        <p>Презентація:</p>
                        <button className='contentBlock-centralBlock-rightBlock-button'>
                            Завантажити PDF
                            <div className='contentBlock-centralBlock-rightBlock-button-icon'></div></button>
                    </div>
                    <div>
                        <p>Додаткові обов'язкові поля на вході:</p>
                        <div className='contentBlock-centralBlock-rightBlock-checkboxMarg'>
                            <input className='contentBlock-centralBlock-rightBlock-radio-inputRadio-input'
                                   type="checkbox"
                                   id='ct1' name='surname' value='surname'/>
                            <label htmlFor="ct1">Прізвище</label>
                        </div>
                        <div className='contentBlock-centralBlock-rightBlock-checkboxMarg'>
                            <input className='contentBlock-centralBlock-rightBlock-radio-inputRadio-input'
                                   type="checkbox"
                                   id='ct2' name='city' value='city'/>
                            <label htmlFor="ct2">Місто</label>
                        </div>
                        <div className='contentBlock-centralBlock-rightBlock-checkboxMarg'>
                            <input className='contentBlock-centralBlock-rightBlock-radio-inputRadio-input'
                                   type="checkbox"
                                   id='ct3' name='email' value='email'/>
                            <label htmlFor="ct3">Email</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contentBlock-bottom'>
                <button className='contentBlock-centralBlock-rightBlock-button'>Зберегти</button>
            </div>
        </div>
    );
}
